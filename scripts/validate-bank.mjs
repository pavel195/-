import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../data/bank.js', import.meta.url), 'utf8');
const sandbox = { window: {} };
runInNewContext(source, sandbox, { filename: 'data/bank.js' });

const data = sandbox.window.GEC_DATA;
const errors = [];
const allowedDifficulties = new Set(['base', 'medium', 'hard']);
const expectedTopics = [
  'ПРОГРАММИРОВАНИЕ НА PYTHON',
  'МАШИННОЕ ОБУЧЕНИЕ И АНАЛИЗ ДАННЫХ',
  'АЛГОРИТМЫ И СТРУКТУРА ДАННЫХ',
  'SQL',
  'WEB',
  'АНАЛИЗ ТЕКСТОВЫХ ДАННЫХ',
  'JAVA'
];
const topics = new Set(data?.topics ?? []);

function fail(message) {
  errors.push(message);
}

function validateId(item, seen, collectionName) {
  if (!item.id) {
    fail(`${collectionName}: missing id`);
    return;
  }
  if (seen.has(item.id)) {
    fail(`${collectionName}: duplicate id ${item.id}`);
  }
  seen.add(item.id);
}

function validateTopicAndDifficulty(item, collectionName) {
  if (!topics.has(item.topic)) {
    fail(`${collectionName} ${item.id}: unknown topic "${item.topic}"`);
  }
  if (!allowedDifficulties.has(item.difficulty)) {
    fail(`${collectionName} ${item.id}: invalid difficulty "${item.difficulty}"`);
  }
}

if (!data || !Array.isArray(data.topics) || !data.topics.length) {
  fail('data.topics must be a non-empty array');
}

if (JSON.stringify(data?.topics ?? []) !== JSON.stringify(expectedTopics)) {
  fail(`data.topics must exactly match expected sections: ${expectedTopics.join(', ')}`);
}

for (const collectionName of ['tests', 'oral', 'practice']) {
  if (!Array.isArray(data?.[collectionName]) || !data[collectionName].length) {
    fail(`data.${collectionName} must be a non-empty array`);
  }
}

const seenIds = new Set();

for (const item of data.tests ?? []) {
  validateId(item, seenIds, 'tests');
  validateTopicAndDifficulty(item, 'tests');
  if (!item.question?.trim()) fail(`tests ${item.id}: missing question`);
  if (!Array.isArray(item.options) || item.options.length !== 4) {
    fail(`tests ${item.id}: expected exactly four options`);
  }
  if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) {
    fail(`tests ${item.id}: answer index is out of options range`);
  }
  if (!item.explanation?.trim()) fail(`tests ${item.id}: missing explanation`);

  const optionLengths = item.options.map(option => String(option).trim().length);
  const normalizedOptions = item.options.map(option => String(option).trim().toLowerCase());
  if (new Set(normalizedOptions).size !== normalizedOptions.length) {
    fail(`tests ${item.id}: duplicate answer options`);
  }
  const maxOptionLength = Math.max(...optionLengths);
  const minOptionLength = Math.min(...optionLengths);
  if (maxOptionLength - minOptionLength > 60) {
    fail(`tests ${item.id}: answer option lengths are too different`);
  }
  const shortestDistractorLength = Math.min(
    ...optionLengths.filter((_, index) => index !== item.answer)
  );
  const correctOptionLength = optionLengths[item.answer];
  if (correctOptionLength === maxOptionLength && correctOptionLength - shortestDistractorLength > 35) {
    fail(`tests ${item.id}: correct option is much longer than distractors`);
  }
}

for (const item of data.oral ?? []) {
  validateId(item, seenIds, 'oral');
  validateTopicAndDifficulty(item, 'oral');
  if (!item.question?.trim()) fail(`oral ${item.id}: missing question`);
  if (!item.answer?.trim()) fail(`oral ${item.id}: missing answer`);
}

for (const item of data.practice ?? []) {
  validateId(item, seenIds, 'practice');
  validateTopicAndDifficulty(item, 'practice');
  if (!item.title?.trim()) fail(`practice ${item.id}: missing title`);
  if (!item.task?.trim()) fail(`practice ${item.id}: missing task`);
  if (!item.expected?.trim()) fail(`practice ${item.id}: missing expected result`);
}

const advancedTests = data.tests.filter(item => item.difficulty === 'medium' || item.difficulty === 'hard');
if (advancedTests.length < 40) {
  fail(`expected at least 40 medium/hard test questions, got ${advancedTests.length}`);
}

const answerPositionCounts = [0, 0, 0, 0];
for (const item of data.tests ?? []) {
  answerPositionCounts[item.answer] += 1;
}
const maxAnswerPositionCount = Math.max(...answerPositionCounts);
const minAnswerPositionCount = Math.min(...answerPositionCounts);
if (maxAnswerPositionCount - minAnswerPositionCount > 2) {
  fail(`answer positions are imbalanced: ${answerPositionCounts.join(', ')}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Bank OK: ${data.tests.length} tests, ${data.oral.length} oral, ${data.practice.length} practice.`);
