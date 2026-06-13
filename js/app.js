const data = window.GEC_DATA;
let currentTestQuestions = [];
let currentExamTests = [];
const EXAM_TESTS_PER_SECTION = 8;
const EXAM_ORAL_COUNT = 3;
const EXAM_PRACTICE_COUNT = 1;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function byId(id) { return document.getElementById(id); }

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function filterItems(items, topic, difficulty = 'all', query = '') {
  const q = query.trim().toLowerCase();
  return items.filter(item => {
    const topicOk = topic === 'all' || item.topic === topic;
    const diffOk = difficulty === 'all' || item.difficulty === difficulty;
    const text = JSON.stringify(item).toLowerCase();
    const queryOk = !q || text.includes(q);
    return topicOk && diffOk && queryOk;
  });
}

function fillTopicSelect(id, includeAll = true) {
  const select = byId(id);
  select.innerHTML = '';
  if (includeAll) {
    const opt = document.createElement('option');
    opt.value = 'all';
    opt.textContent = 'Все темы';
    select.appendChild(opt);
  }
  data.topics.forEach(topic => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic;
    select.appendChild(opt);
  });
}

function difficultyBadge(item) {
  const names = {base: 'База', medium: 'Средняя', hard: 'Сложная'};
  return `<span class="badge ${item.difficulty || 'base'}">${names[item.difficulty] || 'База'}</span>`;
}

function renderTestCard(item, index, prefix = 'test') {
  const fieldName = `${prefix}-${item.id}`;
  const options = item.options.map((option, i) => `
    <label class="option">
      <input type="radio" name="${fieldName}" value="${i}">
      <span class="option-letter">${String.fromCharCode(1072 + i)})</span>
      <span class="option-text">${escapeHtml(option)}</span>
    </label>
  `).join('');

  return `
    <article class="card question-card" data-id="${item.id}" data-answer="${item.answer}" data-prefix="${prefix}">
      <div class="card-head">
        <div>
          <span class="badge">${escapeHtml(item.topic)}</span>
          ${difficultyBadge(item)}
        </div>
        <strong>№${index + 1}</strong>
      </div>
      <h3>${escapeHtml(item.question)}</h3>
      <div class="options">${options}</div>
      <div class="explanation"></div>
    </article>
  `;
}

function renderOptionExplanations(item) {
  if (!Array.isArray(item.optionExplanations) || item.optionExplanations.length !== item.options.length) {
    return '';
  }
  const explanations = item.optionExplanations;
  const rows = explanations.map((text, i) => `
    <li>
      <strong>${String.fromCharCode(1072 + i)}) ${escapeHtml(item.options[i])}</strong>
      <span>${escapeHtml(text)}</span>
    </li>
  `).join('');
  return `<div class="option-explanations"><strong>Разбор вариантов</strong><ul>${rows}</ul></div>`;
}

function checkCards(containerId, resultId) {
  const cards = $$(`#${containerId} .question-card`);
  let correct = 0;
  let answered = 0;

  cards.forEach(card => {
    const answer = Number(card.dataset.answer);
    const selected = card.querySelector('input[type="radio"]:checked');
    const item = data.tests.find(q => q.id === card.dataset.id);
    card.classList.add('checked');
    card.classList.remove('correct', 'wrong');

    const explanation = card.querySelector('.explanation');
    const optionExplanations = renderOptionExplanations(item);
    if (!selected) {
      explanation.innerHTML = `<span class="wrong-answer">Нет ответа.</span> Правильный ответ: <span class="correct-answer">${String.fromCharCode(1072 + answer)}) ${escapeHtml(item.options[answer])}</span><br>${escapeHtml(item.explanation)}${optionExplanations}`;
      card.classList.add('wrong');
      return;
    }

    answered += 1;
    const selectedValue = Number(selected.value);
    if (selectedValue === answer) {
      correct += 1;
      card.classList.add('correct');
      explanation.innerHTML = `<span class="correct-answer">Верно.</span> ${escapeHtml(item.explanation)}${optionExplanations}`;
    } else {
      card.classList.add('wrong');
      explanation.innerHTML = `<span class="wrong-answer">Ошибка.</span> Ты выбрал ${String.fromCharCode(1072 + selectedValue)}), правильный ответ: <span class="correct-answer">${String.fromCharCode(1072 + answer)}) ${escapeHtml(item.options[answer])}</span><br>${escapeHtml(item.explanation)}${optionExplanations}`;
    }
  });

  const result = byId(resultId);
  const percent = cards.length ? Math.round((correct / cards.length) * 100) : 0;
  result.className = `result ${percent >= 70 ? 'ok' : 'bad'}`;
  result.textContent = `Результат: ${correct}/${cards.length} (${percent}%). Отвечено: ${answered}/${cards.length}.`;
}

function renderTests() {
  const topic = byId('testTopic').value;
  const diff = byId('testDifficulty').value;
  const count = Number(byId('testCount').value || 20);
  const pool = filterItems(data.tests, topic, diff);
  currentTestQuestions = shuffle(pool).slice(0, count);
  byId('testResult').textContent = '';
  byId('testQuestions').innerHTML = currentTestQuestions.length
    ? currentTestQuestions.map((item, i) => renderTestCard(item, i, 'test')).join('')
    : '<div class="empty">По фильтрам ничего не найдено.</div>';
}

function renderOral() {
  const topic = byId('oralTopic').value;
  const count = Number(byId('oralCount').value || 5);
  const items = shuffle(filterItems(data.oral, topic)).slice(0, count);
  byId('oralQuestions').innerHTML = items.length ? items.map((item, i) => `
    <article class="card">
      <div class="card-head">
        <span class="badge">${escapeHtml(item.topic)}</span>
        <strong>№${i + 1}</strong>
      </div>
      <h3>${escapeHtml(item.question)}</h3>
      <details>
        <summary>Эталонный ответ</summary>
        <p>${escapeHtml(item.answer)}</p>
        ${item.keywords?.length ? `<p><strong>Ключевые слова:</strong> ${item.keywords.map(escapeHtml).join(', ')}</p>` : ''}
      </details>
    </article>
  `).join('') : '<div class="empty">По фильтрам ничего не найдено.</div>';
}

function renderPractice() {
  const topic = byId('practiceTopic').value;
  const query = byId('practiceSearch').value;
  const items = filterItems(data.practice, topic, 'all', query);
  byId('practiceList').innerHTML = items.length ? items.map((item, i) => `
    <article class="card practice-card">
      <div class="card-head">
        <div>
          <span class="badge">${escapeHtml(item.topic)}</span>
          ${difficultyBadge(item)}
        </div>
        <button class="copy" data-copy-id="${item.id}">Скопировать промпт</button>
      </div>
      <h3>${i + 1}. ${escapeHtml(item.title)}</h3>
      <div class="practice-task">${escapeHtml(item.task)}</div>
      <details>
        <summary>Что будет проверять комиссия</summary>
        <div class="expected">${escapeHtml(item.expected)}</div>
      </details>
      <details>
        <summary>Пример ответа</summary>
        <div class="sample-answer">${escapeHtml(item.sampleAnswer)}</div>
      </details>
    </article>
  `).join('') : '<div class="empty">Практические задания не найдены.</div>';
}

function buildExamTestSections(topic, difficulty) {
  const topics = topic === 'all' ? data.topics : [topic];
  return topics.map(sectionTopic => {
    const items = shuffle(filterItems(data.tests, sectionTopic, difficulty)).slice(0, EXAM_TESTS_PER_SECTION);
    return {topic: sectionTopic, items};
  }).filter(section => section.items.length > 0);
}

function renderExam() {
  const topic = byId('examTopic').value;
  const diff = byId('examDifficulty').value;
  const testSections = buildExamTestSections(topic, diff);
  const tests = testSections.flatMap(section => section.items);
  const oralItems = shuffle(filterItems(data.oral, topic)).slice(0, EXAM_ORAL_COUNT);
  const practiceItems = shuffle(filterItems(data.practice, topic, diff)).slice(0, EXAM_PRACTICE_COUNT);
  currentExamTests = tests;
  byId('examResult').textContent = '';

  const testHtml = testSections.length ? testSections.map((section, sectionIndex) => `
    <section class="exam-section">
      <div class="exam-section-head">
        <h2>Раздел ${sectionIndex + 1}. ${escapeHtml(section.topic)}</h2>
        <span>${section.items.length}/${EXAM_TESTS_PER_SECTION} тестов</span>
      </div>
      ${section.items.map((item, i) => renderTestCard(item, i, 'exam')).join('')}
    </section>
  `).join('') : '<div class="empty">Нет тестов по фильтру.</div>';
  const oralHtml = oralItems.length ? oralItems.map((item, i) => `
    <article class="card">
      <div class="card-head"><span class="badge">${escapeHtml(item.topic)}</span><strong>Устный ${i + 1}</strong></div>
      <h3>${escapeHtml(item.question)}</h3>
      <details><summary>Эталон для самопроверки</summary><p>${escapeHtml(item.answer)}</p></details>
    </article>
  `).join('') : '<div class="empty">Нет устных вопросов по фильтру.</div>';
  const practiceHtml = practiceItems.length ? practiceItems.map(item => `
    <article class="card practice-card">
      <div class="card-head"><span class="badge">${escapeHtml(item.topic)}</span>${difficultyBadge(item)}</div>
      <h3>Практика: ${escapeHtml(item.title)}</h3>
      <div class="practice-task">${escapeHtml(item.task)}</div>
      <details><summary>Критерии проверки</summary><div class="expected">${escapeHtml(item.expected)}</div></details>
      <details><summary>Пример ответа</summary><div class="sample-answer">${escapeHtml(item.sampleAnswer)}</div></details>
    </article>
  `).join('') : '<div class="empty">Нет практики по фильтру.</div>';

  byId('examContent').innerHTML = `
    <h2>Тестовая часть</h2>${testHtml}
    <h2>Устная часть: ${oralItems.length}/${EXAM_ORAL_COUNT}</h2>${oralHtml}
    <h2>Практическая часть: ${practiceItems.length}/${EXAM_PRACTICE_COUNT}</h2>${practiceHtml}
  `;
}

function renderBank() {
  const q = byId('bankSearch').value.trim().toLowerCase();
  const stats = data.topics.map(topic => {
    const tests = data.tests.filter(x => x.topic === topic).length;
    const oral = data.oral.filter(x => x.topic === topic).length;
    const practice = data.practice.filter(x => x.topic === topic).length;
    return {topic, tests, oral, practice};
  });

  byId('topicStats').innerHTML = stats.map(s => `
    <div class="topic-card">
      <strong>${escapeHtml(s.topic)}</strong>
      <span>${s.tests} тестов · ${s.oral} устных · ${s.practice} практик</span>
    </div>
  `).join('');

  if (!q) {
    byId('bankResults').innerHTML = '';
    return;
  }

  const foundTests = data.tests.filter(item => JSON.stringify(item).toLowerCase().includes(q)).slice(0, 30);
  const foundOral = data.oral.filter(item => JSON.stringify(item).toLowerCase().includes(q)).slice(0, 20);
  const foundPractice = data.practice.filter(item => JSON.stringify(item).toLowerCase().includes(q)).slice(0, 20);

  const parts = [];
  if (foundTests.length) {
    parts.push('<h2>Тесты</h2>' + foundTests.map((item, i) => renderTestCard(item, i, 'bank')).join(''));
  }
  if (foundOral.length) {
    parts.push('<h2>Устные</h2>' + foundOral.map(item => `<article class="card"><span class="badge">${escapeHtml(item.topic)}</span><h3>${escapeHtml(item.question)}</h3><details><summary>Ответ</summary><p>${escapeHtml(item.answer)}</p></details></article>`).join(''));
  }
  if (foundPractice.length) {
    parts.push('<h2>Практика</h2>' + foundPractice.map(item => `<article class="card"><span class="badge">${escapeHtml(item.topic)}</span><h3>${escapeHtml(item.title)}</h3><div class="practice-task">${escapeHtml(item.task)}</div></article>`).join(''));
  }
  byId('bankResults').innerHTML = parts.length ? parts.join('') : '<div class="empty">Ничего не найдено.</div>';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function copyPracticePrompt(id) {
  const item = data.practice.find(x => x.id === id);
  if (!item) return;
  const text = `Проверь моё практическое задание ГЭК как комиссия.\n\nТема: ${item.topic}\nЗадание: ${item.title}\n\n${item.task}\n\nМоё решение:\n`;
  navigator.clipboard?.writeText(text).then(() => {
    alert('Промпт скопирован. Вставь его в чат и добавь своё решение.');
  }).catch(() => {
    prompt('Скопируй текст:', text);
  });
}

function init() {
  byId('statTests').textContent = data.tests.length;
  byId('statOral').textContent = data.oral.length;
  byId('statPractice').textContent = data.practice.length;

  ['examTopic', 'testTopic', 'oralTopic', 'practiceTopic'].forEach(id => fillTopicSelect(id));

  $$('.tab').forEach(button => {
    button.addEventListener('click', () => {
      $$('.tab').forEach(b => b.classList.remove('active'));
      $$('.panel').forEach(p => p.classList.remove('active'));
      button.classList.add('active');
      byId(button.dataset.tab).classList.add('active');
      if (button.dataset.tab === 'practice') renderPractice();
      if (button.dataset.tab === 'bank') renderBank();
    });
  });

  byId('generateTest').addEventListener('click', renderTests);
  byId('checkTest').addEventListener('click', () => checkCards('testQuestions', 'testResult'));
  byId('generateOral').addEventListener('click', renderOral);
  byId('generateExam').addEventListener('click', renderExam);
  byId('checkExam').addEventListener('click', () => checkCards('examContent', 'examResult'));
  byId('practiceTopic').addEventListener('change', renderPractice);
  byId('practiceSearch').addEventListener('input', renderPractice);
  byId('bankSearch').addEventListener('input', renderBank);

  document.addEventListener('click', (e) => {
    const copyButton = e.target.closest('[data-copy-id]');
    if (copyButton) copyPracticePrompt(copyButton.dataset.copyId);
  });

  renderExam();
  renderTests();
  renderOral();
  renderPractice();
  renderBank();
}

document.addEventListener('DOMContentLoaded', init);
