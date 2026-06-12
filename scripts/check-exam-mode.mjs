import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const topics = ['Раздел A', 'Раздел B', 'Раздел C'];
const tests = topics.flatMap(topic => Array.from({ length: 10 }, (_, index) => ({
  id: `${topic}-${index}`,
  topic,
  difficulty: index % 2 === 0 ? 'medium' : 'hard',
  question: `Вопрос ${index}`,
  options: ['а', 'б', 'в', 'г'],
  answer: 0,
  explanation: 'Пояснение'
})));

const appSource = fs.readFileSync(new URL('../js/app.js', import.meta.url), 'utf8');
const context = {
  window: {
    GEC_DATA: {
      topics,
      tests,
      oral: [],
      practice: []
    }
  },
  document: {
    addEventListener() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
    getElementById() { return null; }
  },
  Math
};

vm.runInNewContext(`${appSource}
globalThis.__check = {
  allSections: buildExamTestSections('all', 'all').map(section => ({
    topic: section.topic,
    count: section.items.length
  })),
  selectedSections: buildExamTestSections('Раздел B', 'all').map(section => ({
    topic: section.topic,
    count: section.items.length
  })),
  oralCount: EXAM_ORAL_COUNT,
  practiceCount: EXAM_PRACTICE_COUNT
};`, context);

assert.equal(JSON.stringify(context.__check.allSections), JSON.stringify([
  { topic: 'Раздел A', count: 8 },
  { topic: 'Раздел B', count: 8 },
  { topic: 'Раздел C', count: 8 }
]));
assert.equal(JSON.stringify(context.__check.selectedSections), JSON.stringify([
  { topic: 'Раздел B', count: 8 }
]));
assert.equal(context.__check.oralCount, 3);
assert.equal(context.__check.practiceCount, 1);

console.log('Exam mode OK');
