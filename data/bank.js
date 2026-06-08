window.GEC_DATA = {
  "meta": {
    "title": "ГЭК Тренажёр",
    "description": "Локальный банк вопросов и практических заданий по формату ГЭК",
    "version": "1.0.0"
  },
  "topics": [
    "Машинное обучение и Data Science",
    "Алгоритмы и структуры данных",
    "Python",
    "SQL и базы данных",
    "NLP, LLM и текстовый поиск",
    "Web, HTML/CSS/JS и Django",
    "Java и Spring",
    "ОС и Linux",
    "Сети и HTTP",
    "Архитектура, микросервисы и C4",
    "Docker, Kubernetes и инфраструктура",
    "Git",
    "Cloud и ITSM"
  ],
  "tests": [
    {
      "id": "t001",
      "topic": "Машинное обучение и Data Science",
      "question": "Какие задачи решают деревья решений?",
      "options": [
        "Только классификацию",
        "Только регрессию",
        "Классификацию и регрессию",
        "Только анализ временных рядов"
      ],
      "answer": 2,
      "explanation": "Decision Tree может использоваться и для классификации, и для регрессии.",
      "difficulty": "base"
    },
    {
      "id": "t002",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое дерево решений в ML?",
      "options": [
        "Модель в виде дерева условий, где узлы проверяют признаки, а листья дают результат",
        "Только способ визуализации данных",
        "Только статистический тест",
        "Метод шифрования данных"
      ],
      "answer": 0,
      "explanation": "Дерево решений последовательно делит пространство признаков по условиям.",
      "difficulty": "base"
    },
    {
      "id": "t003",
      "topic": "Машинное обучение и Data Science",
      "question": "Какой график лучше показывает связь между двумя числовыми переменными?",
      "options": [
        "Диаграмма рассеяния",
        "Круговая диаграмма",
        "Boxplot",
        "Гистограмма"
      ],
      "answer": 0,
      "explanation": "Scatter plot показывает пары значений двух переменных.",
      "difficulty": "base"
    },
    {
      "id": "t004",
      "topic": "Машинное обучение и Data Science",
      "question": "Какой график лучше подходит для распределения числового признака?",
      "options": [
        "Столбчатая диаграмма",
        "Гистограмма",
        "Круговая диаграмма",
        "Sankey"
      ],
      "answer": 1,
      "explanation": "Гистограмма показывает распределение числовых значений по интервалам.",
      "difficulty": "base"
    },
    {
      "id": "t005",
      "topic": "Машинное обучение и Data Science",
      "question": "Какой метод разбивает объекты на группы по сходству без заранее известных меток?",
      "options": [
        "Регрессия",
        "Кластеризация",
        "Корреляция",
        "Кросс-валидация"
      ],
      "answer": 1,
      "explanation": "Кластеризация относится к обучению без учителя.",
      "difficulty": "base"
    },
    {
      "id": "t006",
      "topic": "Машинное обучение и Data Science",
      "question": "Как называется задача предсказания непрерывной числовой величины?",
      "options": [
        "Классификация",
        "Кластеризация",
        "Регрессия",
        "Ассоциация"
      ],
      "answer": 2,
      "explanation": "Регрессия предсказывает число, например цену или температуру.",
      "difficulty": "base"
    },
    {
      "id": "t007",
      "topic": "Машинное обучение и Data Science",
      "question": "Какой вид обучения основан на взаимодействии агента со средой?",
      "options": [
        "Обучение с учителем",
        "Обучение без учителя",
        "Обучение с подкреплением",
        "Кластеризация"
      ],
      "answer": 2,
      "explanation": "В reinforcement learning агент получает награды/штрафы за действия.",
      "difficulty": "base"
    },
    {
      "id": "t008",
      "topic": "Машинное обучение и Data Science",
      "question": "На чём основан случайный лес?",
      "options": [
        "На ансамбле деревьев решений",
        "На одной линейной модели",
        "На графе зависимостей",
        "На одной нейросети"
      ],
      "answer": 0,
      "explanation": "Random Forest строит много деревьев и агрегирует их ответы.",
      "difficulty": "base"
    },
    {
      "id": "t009",
      "topic": "Машинное обучение и Data Science",
      "question": "Что обычно выдаёт логистическая регрессия?",
      "options": [
        "Кластер",
        "Вероятность класса",
        "Текстовый ответ",
        "Граф"
      ],
      "answer": 1,
      "explanation": "Модель оценивает вероятность принадлежности к классу.",
      "difficulty": "base"
    },
    {
      "id": "t010",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое переобучение?",
      "options": [
        "Модель плохо учится даже на train",
        "Модель слишком хорошо подстроилась под train и плохо работает на новых данных",
        "Модель обучается без меток",
        "Модель использует только один признак"
      ],
      "answer": 1,
      "explanation": "Overfitting — хорошее качество на обучении и плохое на валидации/тесте.",
      "difficulty": "base"
    },
    {
      "id": "t011",
      "topic": "Машинное обучение и Data Science",
      "question": "Какая метрика часто используется для несбалансированной бинарной классификации?",
      "options": [
        "F1-score",
        "MSE",
        "MAE",
        "R2 только"
      ],
      "answer": 0,
      "explanation": "F1 учитывает precision и recall, поэтому полезна при дисбалансе.",
      "difficulty": "base"
    },
    {
      "id": "t012",
      "topic": "Машинное обучение и Data Science",
      "question": "Что измеряет Recall?",
      "options": [
        "Долю правильных положительных среди предсказанных положительных",
        "Долю найденных положительных среди всех реальных положительных",
        "Среднюю ошибку",
        "Площадь под ROC"
      ],
      "answer": 1,
      "explanation": "Recall = TP / (TP + FN).",
      "difficulty": "base"
    },
    {
      "id": "t013",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое Precision?",
      "options": [
        "TP / (TP + FP)",
        "TP / (TP + FN)",
        "TN / (TN + FP)",
        "MSE / MAE"
      ],
      "answer": 0,
      "explanation": "Precision показывает, насколько часто положительные предсказания действительно положительные.",
      "difficulty": "base"
    },
    {
      "id": "t014",
      "topic": "Машинное обучение и Data Science",
      "question": "Какая метрика подходит для регрессии?",
      "options": [
        "Accuracy",
        "F1-score",
        "RMSE",
        "Recall"
      ],
      "answer": 2,
      "explanation": "RMSE измеряет ошибку предсказаний числовой величины.",
      "difficulty": "base"
    },
    {
      "id": "t015",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое регуляризация?",
      "options": [
        "Метод уменьшения переобучения через штраф за сложность модели",
        "Удаление всех пропусков",
        "Сортировка данных",
        "Только нормализация признаков"
      ],
      "answer": 0,
      "explanation": "L1/L2-регуляризация добавляет штраф к функции потерь.",
      "difficulty": "base"
    },
    {
      "id": "t016",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое функция потерь?",
      "options": [
        "Функция, измеряющая ошибку модели",
        "Функция сортировки",
        "Функция сохранения модели",
        "Функция для удаления выбросов"
      ],
      "answer": 0,
      "explanation": "Оптимизатор минимизирует loss.",
      "difficulty": "base"
    },
    {
      "id": "t017",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое Feature Engineering?",
      "options": [
        "Создание и преобразование признаков для улучшения модели",
        "Удаление модели",
        "Только визуализация",
        "Только выбор метрики"
      ],
      "answer": 0,
      "explanation": "Feature Engineering улучшает информативность данных для модели.",
      "difficulty": "base"
    },
    {
      "id": "t018",
      "topic": "Машинное обучение и Data Science",
      "question": "Для чего нужна кросс-валидация?",
      "options": [
        "Оценить качество модели устойчивее на разных разбиениях данных",
        "Удалить дубликаты",
        "Закодировать категории",
        "Ускорить SQL-запрос"
      ],
      "answer": 0,
      "explanation": "Cross-validation снижает зависимость оценки от одного train/test split.",
      "difficulty": "base"
    },
    {
      "id": "t019",
      "topic": "Машинное обучение и Data Science",
      "question": "Что делает StandardScaler?",
      "options": [
        "Кодирует категории числами",
        "Приводит признаки к среднему 0 и стандартному отклонению 1",
        "Удаляет выбросы",
        "Строит деревья"
      ],
      "answer": 1,
      "explanation": "Стандартизация полезна для линейных моделей, SVM, kNN.",
      "difficulty": "base"
    },
    {
      "id": "t020",
      "topic": "Машинное обучение и Data Science",
      "question": "Какой алгоритм часто требует масштабирования признаков?",
      "options": [
        "kNN",
        "Decision Tree",
        "Random Forest",
        "CatBoost без числовых признаков"
      ],
      "answer": 0,
      "explanation": "kNN зависит от расстояний, поэтому масштаб признаков важен.",
      "difficulty": "base"
    },
    {
      "id": "t021",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое AUC ROC?",
      "options": [
        "Площадь под ROC-кривой",
        "Средняя абсолютная ошибка",
        "Количество кластеров",
        "Глубина дерева"
      ],
      "answer": 0,
      "explanation": "AUC ROC оценивает способность модели разделять классы по порогу.",
      "difficulty": "base"
    },
    {
      "id": "t022",
      "topic": "Машинное обучение и Data Science",
      "question": "Какой метод используют для выбора k в k-means?",
      "options": [
        "Elbow method",
        "HTTP method",
        "CAP theorem",
        "Git rebase"
      ],
      "answer": 0,
      "explanation": "Метод локтя смотрит на снижение внутрикластерной ошибки при росте k.",
      "difficulty": "base"
    },
    {
      "id": "t023",
      "topic": "Машинное обучение и Data Science",
      "question": "Какой алгоритм кластеризации умеет выделять шумовые точки?",
      "options": [
        "DBSCAN",
        "Linear Regression",
        "Naive Bayes",
        "Decision Tree"
      ],
      "answer": 0,
      "explanation": "DBSCAN помечает точки вне плотных областей как шум.",
      "difficulty": "base"
    },
    {
      "id": "t024",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое EDA?",
      "options": [
        "Разведочный анализ данных",
        "Тип JOIN",
        "Java-паттерн",
        "Сетевой протокол"
      ],
      "answer": 0,
      "explanation": "Exploratory Data Analysis — первичное изучение данных, пропусков, распределений, связей.",
      "difficulty": "base"
    },
    {
      "id": "t025",
      "topic": "Машинное обучение и Data Science",
      "question": "Что из перечисленного НЕ является интервальным/числовым признаком?",
      "options": [
        "Рост",
        "Вес",
        "Марка автомобиля",
        "Давление"
      ],
      "answer": 2,
      "explanation": "Марка автомобиля — категориальный признак.",
      "difficulty": "base"
    },
    {
      "id": "t026",
      "topic": "Алгоритмы и структуры данных",
      "question": "Правильное рекуррентное соотношение для Фибоначчи:",
      "options": [
        "F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)",
        "F(0)=1, F(1)=2, F(n)=F(n-1)+F(n-2)",
        "F(n)=n*n",
        "F(n)=F(n-1)-F(n-2)"
      ],
      "answer": 0,
      "explanation": "Классическая последовательность начинается с 0 и 1.",
      "difficulty": "base"
    },
    {
      "id": "t027",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что такое итерация цикла?",
      "options": [
        "Один повтор выполнения тела цикла",
        "Удаление цикла",
        "Создание класса",
        "Компиляция программы"
      ],
      "answer": 0,
      "explanation": "Итерация — один проход цикла.",
      "difficulty": "base"
    },
    {
      "id": "t028",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какая структура работает по принципу FIFO?",
      "options": [
        "Стек",
        "Очередь",
        "Куча",
        "Дерево"
      ],
      "answer": 1,
      "explanation": "FIFO: first in, first out — очередь.",
      "difficulty": "base"
    },
    {
      "id": "t029",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какая структура работает по принципу LIFO?",
      "options": [
        "Стек",
        "Очередь",
        "Граф",
        "Множество"
      ],
      "answer": 0,
      "explanation": "LIFO: last in, first out — стек.",
      "difficulty": "base"
    },
    {
      "id": "t030",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какой обход графа обычно использует очередь?",
      "options": [
        "DFS",
        "BFS",
        "Dijkstra без очереди",
        "Binary search"
      ],
      "answer": 1,
      "explanation": "BFS использует очередь для обхода по слоям.",
      "difficulty": "base"
    },
    {
      "id": "t031",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какой обход графа часто реализуют рекурсией или стеком?",
      "options": [
        "DFS",
        "BFS",
        "Merge sort",
        "K-means"
      ],
      "answer": 0,
      "explanation": "DFS углубляется по ветке, стек естественно хранит путь.",
      "difficulty": "base"
    },
    {
      "id": "t032",
      "topic": "Алгоритмы и структуры данных",
      "question": "Сложность бинарного поиска в отсортированном массиве:",
      "options": [
        "O(n)",
        "O(log n)",
        "O(n log n)",
        "O(1) всегда"
      ],
      "answer": 1,
      "explanation": "На каждом шаге область поиска делится пополам.",
      "difficulty": "base"
    },
    {
      "id": "t033",
      "topic": "Алгоритмы и структуры данных",
      "question": "Сложность линейного поиска:",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      "answer": 2,
      "explanation": "В худшем случае надо просмотреть все элементы.",
      "difficulty": "base"
    },
    {
      "id": "t034",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какое десятичное число соответствует восьмеричному 17?",
      "options": [
        "13",
        "14",
        "15",
        "16"
      ],
      "answer": 2,
      "explanation": "1*8 + 7 = 15.",
      "difficulty": "base"
    },
    {
      "id": "t035",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что такое асимптотическая сложность?",
      "options": [
        "Оценка роста времени/памяти алгоритма при увеличении входа",
        "Тип базы данных",
        "Стиль CSS",
        "Метод HTTP"
      ],
      "answer": 0,
      "explanation": "Big O показывает порядок роста затрат.",
      "difficulty": "base"
    },
    {
      "id": "t036",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какая сложность у вложенного цикла по n и n?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(n²)",
        "O(1)"
      ],
      "answer": 2,
      "explanation": "n итераций внутри n итераций дают n².",
      "difficulty": "base"
    },
    {
      "id": "t037",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какая структура данных подходит для проверки скобочной последовательности?",
      "options": [
        "Стек",
        "Очередь",
        "Куча",
        "Хеш-таблица только"
      ],
      "answer": 0,
      "explanation": "Открывающие скобки кладут в стек, закрывающие сопоставляют с вершиной.",
      "difficulty": "base"
    },
    {
      "id": "t038",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что обычно ищет алгоритм Дейкстры?",
      "options": [
        "Кратчайшие пути от одной вершины в графе с неотрицательными весами",
        "Минимальный остов",
        "Максимальный поток",
        "Сортировку массива"
      ],
      "answer": 0,
      "explanation": "Дейкстра работает для неотрицательных весов.",
      "difficulty": "base"
    },
    {
      "id": "t039",
      "topic": "Алгоритмы и структуры данных",
      "question": "Какой алгоритм сортировки обычно имеет O(n log n) в среднем?",
      "options": [
        "Merge sort",
        "Bubble sort",
        "Linear search",
        "Counting sort всегда для любых данных"
      ],
      "answer": 0,
      "explanation": "Merge sort делит массив и сливает части.",
      "difficulty": "base"
    },
    {
      "id": "t040",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что такое рекурсия?",
      "options": [
        "Вызов функцией самой себя",
        "Цикл for",
        "SQL-запрос",
        "Вызов конструктора Java"
      ],
      "answer": 0,
      "explanation": "Рекурсия требует базового случая.",
      "difficulty": "base"
    },
    {
      "id": "t041",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что такое базовый случай рекурсии?",
      "options": [
        "Условие остановки рекурсивных вызовов",
        "Первый элемент массива",
        "Последний SQL JOIN",
        "Случайная ошибка"
      ],
      "answer": 0,
      "explanation": "Без базового случая рекурсия может стать бесконечной.",
      "difficulty": "base"
    },
    {
      "id": "t042",
      "topic": "Алгоритмы и структуры данных",
      "question": "Для чего используют хеш-таблицу?",
      "options": [
        "Быстрый доступ по ключу",
        "Только сортировка",
        "Только обход графа",
        "Только хранение последовательности"
      ],
      "answer": 0,
      "explanation": "В среднем операции get/put выполняются за O(1).",
      "difficulty": "base"
    },
    {
      "id": "t043",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что такое граф?",
      "options": [
        "Множество вершин и рёбер",
        "Только массив чисел",
        "Только таблица SQL",
        "Только дерево DOM"
      ],
      "answer": 0,
      "explanation": "Граф моделирует связи между объектами.",
      "difficulty": "base"
    },
    {
      "id": "t044",
      "topic": "Python",
      "question": "Какой метод списка удаляет элемент по индексу и возвращает его?",
      "options": [
        "pop()",
        "remove()",
        "clear()",
        "discard()"
      ],
      "answer": 0,
      "explanation": "list.pop(index) удаляет и возвращает элемент.",
      "difficulty": "base"
    },
    {
      "id": "t045",
      "topic": "Python",
      "question": "Какой метод списка удаляет первый элемент с заданным значением?",
      "options": [
        "pop()",
        "remove()",
        "clear()",
        "append()"
      ],
      "answer": 1,
      "explanation": "remove(x) удаляет первый найденный x.",
      "difficulty": "base"
    },
    {
      "id": "t046",
      "topic": "Python",
      "question": "Что делает __init__ в классе Python?",
      "options": [
        "Инициализирует объект после создания",
        "Удаляет объект",
        "Запускает модуль",
        "Создаёт виртуальное окружение"
      ],
      "answer": 0,
      "explanation": "__init__ вызывается при создании экземпляра.",
      "difficulty": "base"
    },
    {
      "id": "t047",
      "topic": "Python",
      "question": "Что будет при делении int на 0?",
      "options": [
        "Вернётся 0",
        "ZeroDivisionError",
        "None",
        "Infinity всегда"
      ],
      "answer": 1,
      "explanation": "В Python деление на ноль вызывает ZeroDivisionError.",
      "difficulty": "base"
    },
    {
      "id": "t048",
      "topic": "Python",
      "question": "Чем список отличается от кортежа?",
      "options": [
        "Список изменяемый, кортеж неизменяемый",
        "Кортеж всегда медленнее",
        "Список нельзя индексировать",
        "Кортеж нельзя хранить в переменной"
      ],
      "answer": 0,
      "explanation": "list mutable, tuple immutable.",
      "difficulty": "base"
    },
    {
      "id": "t049",
      "topic": "Python",
      "question": "Когда кортеж может быть ключом словаря?",
      "options": [
        "Если все элементы кортежа хешируемые",
        "Всегда",
        "Никогда",
        "Только если длина 2"
      ],
      "answer": 0,
      "explanation": "Кортеж с list внутри не будет хешируемым.",
      "difficulty": "base"
    },
    {
      "id": "t050",
      "topic": "Python",
      "question": "Что такое декоратор?",
      "options": [
        "Функция/объект, оборачивающий другую функцию/метод и меняющий/расширяющий поведение",
        "Тип цикла",
        "SQL-оператор",
        "Файл настроек"
      ],
      "answer": 0,
      "explanation": "Декораторы часто применяют для логирования, авторизации, кеширования.",
      "difficulty": "base"
    },
    {
      "id": "t051",
      "topic": "Python",
      "question": "Что такое генератор?",
      "options": [
        "Объект, который лениво выдаёт значения по одному",
        "Обычный список",
        "Тип исключения",
        "Команда Docker"
      ],
      "answer": 0,
      "explanation": "yield создаёт генератор, который экономит память.",
      "difficulty": "base"
    },
    {
      "id": "t052",
      "topic": "Python",
      "question": "Какое ключевое слово используется в генераторе?",
      "options": [
        "yield",
        "return only",
        "await only",
        "class"
      ],
      "answer": 0,
      "explanation": "yield возвращает значение и сохраняет состояние функции.",
      "difficulty": "base"
    },
    {
      "id": "t053",
      "topic": "Python",
      "question": "Что делает with open(...) as f?",
      "options": [
        "Открывает файл и гарантирует закрытие через контекстный менеджер",
        "Создаёт класс",
        "Сортирует файл",
        "Запускает поток"
      ],
      "answer": 0,
      "explanation": "Контекстный менеджер вызывает __enter__/__exit__.",
      "difficulty": "base"
    },
    {
      "id": "t054",
      "topic": "Python",
      "question": "Что вернёт len([1, 2, 3])?",
      "options": [
        "2",
        "3",
        "4",
        "Ошибка"
      ],
      "answer": 1,
      "explanation": "В списке три элемента.",
      "difficulty": "base"
    },
    {
      "id": "t055",
      "topic": "Python",
      "question": "Что делает set?",
      "options": [
        "Хранит уникальные элементы",
        "Хранит пары ключ-значение",
        "Гарантирует сортировку",
        "Является неизменяемым списком"
      ],
      "answer": 0,
      "explanation": "set удаляет дубликаты и быстро проверяет наличие элемента.",
      "difficulty": "base"
    },
    {
      "id": "t056",
      "topic": "Python",
      "question": "Что такое lambda?",
      "options": [
        "Анонимная функция",
        "Класс",
        "Исключение",
        "Декоратор с параметрами"
      ],
      "answer": 0,
      "explanation": "lambda удобно применять для коротких функций.",
      "difficulty": "base"
    },
    {
      "id": "t057",
      "topic": "Python",
      "question": "Что делает enumerate(iterable)?",
      "options": [
        "Возвращает пары индекс-значение",
        "Сортирует",
        "Удаляет дубликаты",
        "Склеивает строки"
      ],
      "answer": 0,
      "explanation": "enumerate полезен, когда нужен индекс и значение.",
      "difficulty": "base"
    },
    {
      "id": "t058",
      "topic": "Python",
      "question": "Что делает zip(a, b)?",
      "options": [
        "Объединяет элементы нескольких последовательностей по позициям",
        "Архивирует файл",
        "Сортирует числа",
        "Удаляет None"
      ],
      "answer": 0,
      "explanation": "zip([1,2], [\"a\",\"b\"]) -> (1,\"a\"), (2,\"b\").",
      "difficulty": "base"
    },
    {
      "id": "t059",
      "topic": "Python",
      "question": "Что такое list comprehension?",
      "options": [
        "Краткая запись создания списка",
        "Тип базы данных",
        "Ошибка интерпретатора",
        "Модуль для тестов"
      ],
      "answer": 0,
      "explanation": "[x + 1 for x in a] создаёт новый список.",
      "difficulty": "base"
    },
    {
      "id": "t060",
      "topic": "Python",
      "question": "Для чего используют try/except?",
      "options": [
        "Для обработки исключений",
        "Для объявления класса",
        "Для импорта пакетов",
        "Для SQL JOIN"
      ],
      "answer": 0,
      "explanation": "Исключения позволяют обработать ошибки выполнения.",
      "difficulty": "base"
    },
    {
      "id": "t061",
      "topic": "Python",
      "question": "Что делает pip?",
      "options": [
        "Устанавливает Python-пакеты",
        "Запускает JVM",
        "Создаёт Docker image",
        "Управляет Git-коммитами"
      ],
      "answer": 0,
      "explanation": "pip — пакетный менеджер Python.",
      "difficulty": "base"
    },
    {
      "id": "t062",
      "topic": "Python",
      "question": "Что такое виртуальное окружение?",
      "options": [
        "Изолированная среда зависимостей проекта",
        "Удалённый сервер",
        "Тип цикла",
        "Модель ML"
      ],
      "answer": 0,
      "explanation": "venv помогает не смешивать зависимости разных проектов.",
      "difficulty": "base"
    },
    {
      "id": "t063",
      "topic": "Python",
      "question": "Что такое GIL в CPython?",
      "options": [
        "Глобальная блокировка интерпретатора, ограничивающая параллельное выполнение байткода Python потоками",
        "База данных",
        "Тип JOIN",
        "Сборщик мусора Java"
      ],
      "answer": 0,
      "explanation": "GIL важен для CPU-bound многопоточности в CPython.",
      "difficulty": "base"
    },
    {
      "id": "t064",
      "topic": "Python",
      "question": "Что лучше для чтения файла >7 ГБ?",
      "options": [
        "Потоковое чтение по строкам/чанкам",
        "Сразу read() весь файл в память",
        "Сначала преобразовать в tuple",
        "Открыть файл как изображение"
      ],
      "answer": 0,
      "explanation": "Большие файлы читают постепенно, чтобы не переполнить память.",
      "difficulty": "base"
    },
    {
      "id": "t065",
      "topic": "Python",
      "question": "Что делает json.loads?",
      "options": [
        "Преобразует JSON-строку в Python-объект",
        "Пишет объект в файл",
        "Сортирует JSON",
        "Удаляет ключи"
      ],
      "answer": 0,
      "explanation": "json.loads парсит строку JSON.",
      "difficulty": "base"
    },
    {
      "id": "t066",
      "topic": "Python",
      "question": "Что делает pandas DataFrame?",
      "options": [
        "Табличная структура данных",
        "HTTP-сервер",
        "Java-класс",
        "Индекс Git"
      ],
      "answer": 0,
      "explanation": "DataFrame хранит данные в строках и столбцах.",
      "difficulty": "base"
    },
    {
      "id": "t067",
      "topic": "SQL и базы данных",
      "question": "Что такое реляционная БД?",
      "options": [
        "БД с данными в связанных таблицах",
        "Только JSON-файл",
        "Любая директория на диске",
        "Только графовая БД"
      ],
      "answer": 0,
      "explanation": "Реляционная модель основана на таблицах и отношениях.",
      "difficulty": "base"
    },
    {
      "id": "t068",
      "topic": "SQL и базы данных",
      "question": "Как вывести все поля из Orders?",
      "options": [
        "SELECT ALL FROM Orders;",
        "SELECT % FROM Orders;",
        "SELECT * FROM Orders;",
        "SELECT *.Orders FROM Orders;"
      ],
      "answer": 2,
      "explanation": "Звёздочка означает все столбцы.",
      "difficulty": "base"
    },
    {
      "id": "t069",
      "topic": "SQL и базы данных",
      "question": "Что делает SELECT?",
      "options": [
        "Создаёт таблицу",
        "Выбирает данные",
        "Удаляет таблицу",
        "Меняет структуру таблицы"
      ],
      "answer": 1,
      "explanation": "SELECT возвращает строки из таблиц/выражений.",
      "difficulty": "base"
    },
    {
      "id": "t070",
      "topic": "SQL и базы данных",
      "question": "Как правильно сравнить customer_name со строкой Mike?",
      "options": [
        "customer_name = Mike",
        "customer_name = 'Mike'",
        "customer_name == Mike",
        "customer_name LIKE Mike без кавычек"
      ],
      "answer": 1,
      "explanation": "Строковые литералы пишутся в кавычках.",
      "difficulty": "base"
    },
    {
      "id": "t071",
      "topic": "SQL и базы данных",
      "question": "Что делает WHERE?",
      "options": [
        "Фильтрует строки",
        "Группирует строки",
        "Сортирует результат",
        "Создаёт индекс"
      ],
      "answer": 0,
      "explanation": "WHERE задаёт условие отбора строк.",
      "difficulty": "base"
    },
    {
      "id": "t072",
      "topic": "SQL и базы данных",
      "question": "Какой оператор группирует строки?",
      "options": [
        "ORDER BY",
        "GROUP BY",
        "WHERE",
        "FROM"
      ],
      "answer": 1,
      "explanation": "GROUP BY используется с агрегатами.",
      "difficulty": "base"
    },
    {
      "id": "t073",
      "topic": "SQL и базы данных",
      "question": "Какой JOIN возвращает совпадения из обеих таблиц?",
      "options": [
        "LEFT JOIN",
        "INNER JOIN",
        "FULL JOIN",
        "RIGHT JOIN"
      ],
      "answer": 1,
      "explanation": "INNER JOIN оставляет только строки с совпадением.",
      "difficulty": "base"
    },
    {
      "id": "t074",
      "topic": "SQL и базы данных",
      "question": "LEFT JOIN возвращает:",
      "options": [
        "Только совпадающие строки",
        "Все строки из левой таблицы и совпадения справа",
        "Все строки из правой таблицы",
        "Только несовпадения"
      ],
      "answer": 1,
      "explanation": "Если справа нет совпадения, поля правой таблицы будут NULL.",
      "difficulty": "base"
    },
    {
      "id": "t075",
      "topic": "SQL и базы данных",
      "question": "Чем UNION отличается от UNION ALL?",
      "options": [
        "UNION удаляет дубликаты, UNION ALL оставляет",
        "UNION ALL удаляет дубликаты",
        "Нет различий",
        "UNION работает только с числами"
      ],
      "answer": 0,
      "explanation": "UNION обычно выполняет distinct по результату.",
      "difficulty": "base"
    },
    {
      "id": "t076",
      "topic": "SQL и базы данных",
      "question": "Какой ключ уникально идентифицирует запись?",
      "options": [
        "Внешний ключ",
        "Первичный ключ",
        "Кластерный индекс",
        "VIEW"
      ],
      "answer": 1,
      "explanation": "Primary key задаёт уникальный идентификатор строки.",
      "difficulty": "base"
    },
    {
      "id": "t077",
      "topic": "SQL и базы данных",
      "question": "Какой ключ связывает таблицы?",
      "options": [
        "Внешний ключ",
        "ORDER BY",
        "HAVING",
        "LIMIT"
      ],
      "answer": 0,
      "explanation": "Foreign key ссылается на ключ другой таблицы.",
      "difficulty": "base"
    },
    {
      "id": "t078",
      "topic": "SQL и базы данных",
      "question": "Что такое транзакция?",
      "options": [
        "Группа операций, выполняемых как единое целое",
        "Один SELECT без ошибок",
        "Тип индекса",
        "Формат JSON"
      ],
      "answer": 0,
      "explanation": "Транзакции обеспечивают ACID-свойства.",
      "difficulty": "base"
    },
    {
      "id": "t079",
      "topic": "SQL и базы данных",
      "question": "Что означает Atomicity в ACID?",
      "options": [
        "Операция выполняется полностью или не выполняется совсем",
        "Данные всегда шифруются",
        "Запросы всегда быстрые",
        "Все таблицы должны быть атомарными"
      ],
      "answer": 0,
      "explanation": "Атомарность исключает частичное применение транзакции.",
      "difficulty": "base"
    },
    {
      "id": "t080",
      "topic": "SQL и базы данных",
      "question": "Что делает COUNT(*)?",
      "options": [
        "Считает строки",
        "Суммирует значения",
        "Удаляет дубликаты",
        "Создаёт таблицу"
      ],
      "answer": 0,
      "explanation": "COUNT(*) возвращает количество строк.",
      "difficulty": "base"
    },
    {
      "id": "t081",
      "topic": "SQL и базы данных",
      "question": "Для фильтрации после GROUP BY используют:",
      "options": [
        "WHERE",
        "HAVING",
        "JOIN",
        "INSERT"
      ],
      "answer": 1,
      "explanation": "HAVING фильтрует агрегированные группы.",
      "difficulty": "base"
    },
    {
      "id": "t082",
      "topic": "SQL и базы данных",
      "question": "Как выбрать имена на букву A?",
      "options": [
        "WHERE name LIKE 'A%'",
        "WHERE name = 'A%'",
        "WHERE name IN 'A'",
        "WHERE name START 'A'"
      ],
      "answer": 0,
      "explanation": "LIKE A% означает строка начинается с A.",
      "difficulty": "base"
    },
    {
      "id": "t083",
      "topic": "SQL и базы данных",
      "question": "Что вернёт сравнение NULL = NULL в SQL?",
      "options": [
        "TRUE",
        "FALSE",
        "UNKNOWN/NULL",
        "Ошибка синтаксиса всегда"
      ],
      "answer": 2,
      "explanation": "NULL означает неизвестное значение, сравнение даёт UNKNOWN.",
      "difficulty": "base"
    },
    {
      "id": "t084",
      "topic": "SQL и базы данных",
      "question": "Как проверить NULL?",
      "options": [
        "field = NULL",
        "field IS NULL",
        "field == NULL",
        "field LIKE NULL"
      ],
      "answer": 1,
      "explanation": "Для NULL используют IS NULL / IS NOT NULL.",
      "difficulty": "base"
    },
    {
      "id": "t085",
      "topic": "SQL и базы данных",
      "question": "Что делает ORDER BY?",
      "options": [
        "Сортирует результат",
        "Группирует",
        "Удаляет таблицу",
        "Создаёт представление"
      ],
      "answer": 0,
      "explanation": "ORDER BY задаёт порядок строк в результате.",
      "difficulty": "base"
    },
    {
      "id": "t086",
      "topic": "SQL и базы данных",
      "question": "Что такое оконная функция?",
      "options": [
        "Функция, считающая значение по окну строк без схлопывания результата как GROUP BY",
        "Функция открытия окна браузера",
        "Тип индекса",
        "Только SUM"
      ],
      "answer": 0,
      "explanation": "Например ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...).",
      "difficulty": "base"
    },
    {
      "id": "t087",
      "topic": "SQL и базы данных",
      "question": "Какой оператор возвращает общие строки двух запросов?",
      "options": [
        "UNION",
        "EXCEPT",
        "INTERSECT",
        "JOIN ONLY"
      ],
      "answer": 2,
      "explanation": "INTERSECT возвращает пересечение результатов.",
      "difficulty": "base"
    },
    {
      "id": "t088",
      "topic": "SQL и базы данных",
      "question": "Какой оператор возвращает строки из первого запроса, которых нет во втором?",
      "options": [
        "EXCEPT",
        "UNION ALL",
        "INTERSECT",
        "GROUP BY"
      ],
      "answer": 0,
      "explanation": "EXCEPT — разность множеств.",
      "difficulty": "base"
    },
    {
      "id": "t089",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое токенизация?",
      "options": [
        "Разбиение текста на токены/единицы",
        "Сортировка таблицы",
        "Компиляция Java",
        "Шифрование пароля"
      ],
      "answer": 0,
      "explanation": "Токены могут быть словами, частями слов или символами.",
      "difficulty": "base"
    },
    {
      "id": "t090",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое embedding?",
      "options": [
        "Векторное представление текста/объекта",
        "HTML-тег",
        "Тип JOIN",
        "Поток Java"
      ],
      "answer": 0,
      "explanation": "Embedding позволяет сравнивать смысл через расстояния/сходство в векторном пространстве.",
      "difficulty": "base"
    },
    {
      "id": "t091",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое RAG?",
      "options": [
        "Подход, где модель дополняется найденным внешним контекстом",
        "Алгоритм сортировки",
        "Тип индекса SQL",
        "Способ деплоя Docker"
      ],
      "answer": 0,
      "explanation": "Retrieval-Augmented Generation: поиск + генерация.",
      "difficulty": "base"
    },
    {
      "id": "t092",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что на вход обычно получает encoder в text2text-модели?",
      "options": [
        "Представление входного текста/вопроса",
        "Только ответ",
        "Только метаданные файла",
        "Индекс SQL"
      ],
      "answer": 0,
      "explanation": "Encoder кодирует входную последовательность.",
      "difficulty": "base"
    },
    {
      "id": "t093",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Какие функции активации типичны для LSTM?",
      "options": [
        "Sigmoid и tanh",
        "Только ReLU",
        "Только softmax",
        "Нет функций активации"
      ],
      "answer": 0,
      "explanation": "В LSTM используются sigmoid-гейты и tanh.",
      "difficulty": "base"
    },
    {
      "id": "t094",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Какая задача относится к обучению без учителя?",
      "options": [
        "Topic Modeling",
        "NER с размеченными сущностями",
        "Классификация тональности с метками",
        "Text2Text supervised"
      ],
      "answer": 0,
      "explanation": "Тематическое моделирование часто ищет скрытые темы без меток.",
      "difficulty": "base"
    },
    {
      "id": "t095",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое NER?",
      "options": [
        "Извлечение именованных сущностей",
        "Сортировка чисел",
        "Метод JOIN",
        "Тип Docker image"
      ],
      "answer": 0,
      "explanation": "NER находит PERSON, ORG, LOC и другие сущности.",
      "difficulty": "base"
    },
    {
      "id": "t096",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое большая языковая модель?",
      "options": [
        "Модель, обученная на больших корпусах текста для обработки и генерации языка",
        "Только SQL-сервер",
        "Только сайт",
        "Модель для сжатия изображений"
      ],
      "answer": 0,
      "explanation": "LLM умеет отвечать, суммаризировать, классифицировать, генерировать текст.",
      "difficulty": "base"
    },
    {
      "id": "t097",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Для чего нужен reranker в RAG?",
      "options": [
        "Переупорядочить найденные документы по релевантности",
        "Удалить базу данных",
        "Сжать CSS",
        "Запустить JVM"
      ],
      "answer": 0,
      "explanation": "Reranker повышает качество контекста перед передачей в LLM.",
      "difficulty": "base"
    },
    {
      "id": "t098",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое системный промпт?",
      "options": [
        "Инструкция модели о роли, ограничениях и формате ответа",
        "Команда Linux",
        "SQL-индекс",
        "HTML-форма"
      ],
      "answer": 0,
      "explanation": "System prompt задаёт правила поведения модели.",
      "difficulty": "base"
    },
    {
      "id": "t099",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое cosine similarity?",
      "options": [
        "Мера сходства векторов по углу между ними",
        "Метод сортировки строк",
        "Протокол сети",
        "Паттерн проектирования"
      ],
      "answer": 0,
      "explanation": "Часто используется для поиска похожих embeddings.",
      "difficulty": "base"
    },
    {
      "id": "t100",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое hallucination у LLM?",
      "options": [
        "Уверенная генерация неверной или неподтверждённой информации",
        "Сжатие модели",
        "Тип слоя LSTM",
        "Обучение с учителем"
      ],
      "answer": 0,
      "explanation": "RAG и проверки источников помогают снижать галлюцинации.",
      "difficulty": "base"
    },
    {
      "id": "t101",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое температура в генерации LLM?",
      "options": [
        "Параметр случайности/разнообразия ответа",
        "Температура CPU",
        "Размер контекста",
        "Тип токена"
      ],
      "answer": 0,
      "explanation": "Чем выше temperature, тем менее детерминированна генерация.",
      "difficulty": "base"
    },
    {
      "id": "t102",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое chunking в RAG?",
      "options": [
        "Разбиение документов на фрагменты для индексации",
        "Удаление CSS",
        "Группировка SQL",
        "Компиляция Java"
      ],
      "answer": 0,
      "explanation": "Размер чанка влияет на полноту и точность поиска.",
      "difficulty": "base"
    },
    {
      "id": "t103",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое stop words?",
      "options": [
        "Частые служебные слова, которые иногда исключают из анализа",
        "Ошибки сервера",
        "Завершающие токены Java",
        "Файлы логов"
      ],
      "answer": 0,
      "explanation": "Например: и, в, на, the, a.",
      "difficulty": "base"
    },
    {
      "id": "t104",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Как расшифровывается HTML?",
      "options": [
        "HyperText Markup Language",
        "HeadText Modulation Language",
        "Hyper Transfer Machine Logic",
        "HighText Main Layout"
      ],
      "answer": 0,
      "explanation": "HTML — язык гипертекстовой разметки.",
      "difficulty": "base"
    },
    {
      "id": "t105",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Где располагается тег title?",
      "options": [
        "В head",
        "В body",
        "В footer",
        "В script"
      ],
      "answer": 0,
      "explanation": "title — метаданные страницы, размещаются в head.",
      "difficulty": "base"
    },
    {
      "id": "t106",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Есть ли у input закрывающий тег в HTML?",
      "options": [
        "Да, обязателен",
        "Нет, это void element",
        "Только в HTML4",
        "Такого тега нет"
      ],
      "answer": 1,
      "explanation": "input — самозакрывающийся/void element.",
      "difficulty": "base"
    },
    {
      "id": "t107",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Какие ключевые слова объявляют переменные в JS?",
      "options": [
        "var, let, const",
        "int, short, long",
        "def, class",
        "SELECT, FROM"
      ],
      "answer": 0,
      "explanation": "В современном JS обычно используют let и const.",
      "difficulty": "base"
    },
    {
      "id": "t108",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что будет после arr.length = 0 для непустого массива JS?",
      "options": [
        "Массив очистится",
        "Ошибка",
        "Ничего",
        "Удалится только последний элемент"
      ],
      "answer": 0,
      "explanation": "Установка length=0 очищает массив.",
      "difficulty": "base"
    },
    {
      "id": "t109",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Верно ли, что в JS всё является объектом?",
      "options": [
        "Да, все значения без исключений",
        "Нет, есть примитивы",
        "Только функции",
        "Только массивы"
      ],
      "answer": 1,
      "explanation": "В JS есть примитивы: string, number, boolean, null, undefined, symbol, bigint.",
      "difficulty": "base"
    },
    {
      "id": "t110",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое CSS?",
      "options": [
        "Язык описания внешнего вида HTML-документа",
        "База данных",
        "Язык запросов",
        "Java-фреймворк"
      ],
      "answer": 0,
      "explanation": "CSS задаёт стили: цвета, размеры, расположение.",
      "difficulty": "base"
    },
    {
      "id": "t111",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое DOM?",
      "options": [
        "Объектная модель HTML-документа",
        "Тип SQL JOIN",
        "Docker image",
        "ML-метрика"
      ],
      "answer": 0,
      "explanation": "JS работает со страницей через DOM.",
      "difficulty": "base"
    },
    {
      "id": "t112",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Какой HTTP-метод обычно используется для получения ресурса?",
      "options": [
        "GET",
        "POST",
        "PATCH",
        "DELETE"
      ],
      "answer": 0,
      "explanation": "GET должен быть безопасным и идемпотентным.",
      "difficulty": "base"
    },
    {
      "id": "t113",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Какой HTTP-метод обычно создаёт ресурс?",
      "options": [
        "GET",
        "POST",
        "HEAD",
        "OPTIONS"
      ],
      "answer": 1,
      "explanation": "POST часто используется для создания или запуска обработки.",
      "difficulty": "base"
    },
    {
      "id": "t114",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое MVC?",
      "options": [
        "Model-View-Controller",
        "Main-Version-Cache",
        "Model-Vector-Cluster",
        "Memory-View-Code"
      ],
      "answer": 0,
      "explanation": "MVC разделяет данные, представление и управляющую логику.",
      "difficulty": "base"
    },
    {
      "id": "t115",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что в Django обычно описывает структуру данных?",
      "options": [
        "models.py",
        "urls.py только",
        "settings.py только",
        "templates"
      ],
      "answer": 0,
      "explanation": "Django models описывают таблицы/сущности.",
      "difficulty": "base"
    },
    {
      "id": "t116",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что делает Django ORM?",
      "options": [
        "Позволяет работать с БД через Python-объекты",
        "Компилирует CSS",
        "Запускает JVM",
        "Рендерит только картинки"
      ],
      "answer": 0,
      "explanation": "ORM переводит операции с моделями в SQL.",
      "difficulty": "base"
    },
    {
      "id": "t117",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое CSRF?",
      "options": [
        "Атака с подделкой межсайтового запроса",
        "Тип JOIN",
        "Метод сортировки",
        "Токенизация текста"
      ],
      "answer": 0,
      "explanation": "CSRF-защита нужна для небезопасных запросов от имени пользователя.",
      "difficulty": "base"
    },
    {
      "id": "t118",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое REST API?",
      "options": [
        "Архитектурный подход к API с ресурсами и HTTP-методами",
        "Только база данных",
        "Только HTML-шаблон",
        "Метод ML"
      ],
      "answer": 0,
      "explanation": "REST использует ресурсы, URL, методы GET/POST/PUT/DELETE и статусы HTTP.",
      "difficulty": "base"
    },
    {
      "id": "t119",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Какой статус HTTP означает “не найдено”?",
      "options": [
        "200",
        "201",
        "404",
        "500"
      ],
      "answer": 2,
      "explanation": "404 Not Found.",
      "difficulty": "base"
    },
    {
      "id": "t120",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Какой статус HTTP означает успешное создание?",
      "options": [
        "200",
        "201",
        "301",
        "403"
      ],
      "answer": 1,
      "explanation": "201 Created.",
      "difficulty": "base"
    },
    {
      "id": "t121",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое middleware в Django?",
      "options": [
        "Промежуточный слой обработки request/response",
        "Тип CSS-селектора",
        "SQL-ключ",
        "Java-аннотация"
      ],
      "answer": 0,
      "explanation": "Middleware может проверять авторизацию, CSRF, логировать запросы.",
      "difficulty": "base"
    },
    {
      "id": "t122",
      "topic": "Java и Spring",
      "question": "Какая Map сохраняет порядок вставки?",
      "options": [
        "HashMap",
        "LinkedHashMap",
        "TreeMap по хешу",
        "ConcurrentHashMap всегда"
      ],
      "answer": 1,
      "explanation": "LinkedHashMap хранит связанный список порядка вставки/доступа.",
      "difficulty": "base"
    },
    {
      "id": "t123",
      "topic": "Java и Spring",
      "question": "Что делает wait() у объекта с монитором без notify/notifyAll?",
      "options": [
        "Поток может ждать бесконечно/до прерывания/таймаута",
        "Сразу продолжит выполнение",
        "Удалит объект",
        "Создаст новый поток"
      ],
      "answer": 0,
      "explanation": "wait освобождает монитор и переводит поток в ожидание.",
      "difficulty": "base"
    },
    {
      "id": "t124",
      "topic": "Java и Spring",
      "question": "Что НЕ входит в типичные области памяти JVM из списка?",
      "options": [
        "Heap",
        "Stack",
        "Code Cache",
        "RAM Cache"
      ],
      "answer": 3,
      "explanation": "RAM Cache не является стандартной областью памяти JVM.",
      "difficulty": "base"
    },
    {
      "id": "t125",
      "topic": "Java и Spring",
      "question": "Что такое volatile?",
      "options": [
        "Гарантирует видимость изменений переменной между потоками",
        "Делает операцию ++ атомарной всегда",
        "Создаёт lock",
        "Запрещает чтение переменной"
      ],
      "answer": 0,
      "explanation": "volatile не делает составные операции атомарными.",
      "difficulty": "base"
    },
    {
      "id": "t126",
      "topic": "Java и Spring",
      "question": "Какой интерфейс является функциональным?",
      "options": [
        "Runnable",
        "Comparable",
        "Iterable",
        "Все перечисленные"
      ],
      "answer": 3,
      "explanation": "У каждого из них один абстрактный метод.",
      "difficulty": "base"
    },
    {
      "id": "t127",
      "topic": "Java и Spring",
      "question": "Что создаёт Executors.newFixedThreadPool(10)?",
      "options": [
        "Пул с фиксированным числом 10 потоков",
        "Один поток",
        "ForkJoinPool commonPool",
        "Новый процесс ОС"
      ],
      "answer": 0,
      "explanation": "FixedThreadPool ограничивает количество рабочих потоков.",
      "difficulty": "base"
    },
    {
      "id": "t128",
      "topic": "Java и Spring",
      "question": "Какая аннотация JUnit 5 запускает метод перед каждым тестом?",
      "options": [
        "@BeforeEach",
        "@BeforeAllTest",
        "@RunBefore",
        "@Init"
      ],
      "answer": 0,
      "explanation": "@BeforeEach выполняется перед каждым @Test.",
      "difficulty": "base"
    },
    {
      "id": "t129",
      "topic": "Java и Spring",
      "question": "Какой паттерн меняет поведение объекта во время выполнения?",
      "options": [
        "Strategy",
        "Singleton",
        "Factory Method только",
        "Builder"
      ],
      "answer": 0,
      "explanation": "Strategy позволяет подменять алгоритм/поведение.",
      "difficulty": "base"
    },
    {
      "id": "t130",
      "topic": "Java и Spring",
      "question": "Какое утверждение о микросервисах неверно?",
      "options": [
        "Сервисы могут деплоиться независимо",
        "Все сервисы обязаны использовать одну БД",
        "Сервисы общаются по сети",
        "Сервис отвечает за свою область"
      ],
      "answer": 1,
      "explanation": "Единая БД для всех сервисов противоречит независимости сервисов.",
      "difficulty": "base"
    },
    {
      "id": "t131",
      "topic": "Java и Spring",
      "question": "Какая аннотация Spring Boot включает автонастройку и запуск приложения?",
      "options": [
        "@SpringBootApplication",
        "@Entity",
        "@Autowired",
        "@BeforeEach"
      ],
      "answer": 0,
      "explanation": "@SpringBootApplication объединяет @Configuration, @EnableAutoConfiguration, @ComponentScan.",
      "difficulty": "base"
    },
    {
      "id": "t132",
      "topic": "Java и Spring",
      "question": "Какая аннотация JPA помечает сущность?",
      "options": [
        "@Entity",
        "@RestController",
        "@Service",
        "@Bean"
      ],
      "answer": 0,
      "explanation": "@Entity связывает класс с таблицей.",
      "difficulty": "base"
    },
    {
      "id": "t133",
      "topic": "Java и Spring",
      "question": "Что делает @RestController?",
      "options": [
        "Объявляет REST-контроллер, методы возвращают тело ответа",
        "Создаёт таблицу",
        "Запускает тест",
        "Делает поле volatile"
      ],
      "answer": 0,
      "explanation": "@RestController = @Controller + @ResponseBody.",
      "difficulty": "base"
    },
    {
      "id": "t134",
      "topic": "Java и Spring",
      "question": "Что такое Stream API?",
      "options": [
        "API для декларативной обработки последовательностей данных",
        "Сетевой протокол",
        "Тип потока ОС только",
        "SQL-движок"
      ],
      "answer": 0,
      "explanation": "Stream позволяет map/filter/reduce/collect.",
      "difficulty": "base"
    },
    {
      "id": "t135",
      "topic": "Java и Spring",
      "question": "Как собрать Stream в List?",
      "options": [
        "collect(Collectors.toList())",
        "toMap() всегда",
        "groupBy()",
        "append()"
      ],
      "answer": 0,
      "explanation": "Collectors.toList() собирает элементы в список.",
      "difficulty": "base"
    },
    {
      "id": "t136",
      "topic": "Java и Spring",
      "question": "Что такое CompletableFuture?",
      "options": [
        "Класс для асинхронных вычислений и композиции результатов",
        "Тип Map",
        "Аннотация Spring",
        "Сборщик мусора"
      ],
      "answer": 0,
      "explanation": "CompletableFuture поддерживает supplyAsync, thenApply, thenCombine и т.д.",
      "difficulty": "base"
    },
    {
      "id": "t137",
      "topic": "Java и Spring",
      "question": "Что такое ConcurrentHashMap?",
      "options": [
        "Потокобезопасная хеш-таблица для конкурентного доступа",
        "Список с порядком",
        "Аннотация JPA",
        "Тип исключения"
      ],
      "answer": 0,
      "explanation": "ConcurrentHashMap снижает блокировки при многопоточном доступе.",
      "difficulty": "base"
    },
    {
      "id": "t138",
      "topic": "Java и Spring",
      "question": "Что такое false sharing?",
      "options": [
        "Потоки изменяют разные переменные в одной cache line, мешая друг другу",
        "Два сервиса имеют одну БД",
        "Ошибка JSON",
        "Плохой SQL JOIN"
      ],
      "answer": 0,
      "explanation": "False sharing снижает производительность из-за инвалидации кэша CPU.",
      "difficulty": "base"
    },
    {
      "id": "t139",
      "topic": "Java и Spring",
      "question": "Что такое garbage collector?",
      "options": [
        "Механизм автоматического освобождения памяти от недостижимых объектов",
        "Сортировщик коллекций",
        "HTTP-клиент",
        "Тип потока"
      ],
      "answer": 0,
      "explanation": "GC управляет памятью heap.",
      "difficulty": "base"
    },
    {
      "id": "t140",
      "topic": "Java и Spring",
      "question": "Что такое equals/hashCode контракт?",
      "options": [
        "Равные объекты должны иметь одинаковый hashCode",
        "hashCode всегда уникален",
        "equals обязан сравнивать ссылки только",
        "hashCode нельзя переопределять"
      ],
      "answer": 0,
      "explanation": "Нарушение контракта ломает HashMap/HashSet.",
      "difficulty": "base"
    },
    {
      "id": "t141",
      "topic": "Java и Spring",
      "question": "Что такое Optional?",
      "options": [
        "Контейнер для значения, которое может отсутствовать",
        "Поток ОС",
        "Тип транзакции",
        "Аннотация Spring"
      ],
      "answer": 0,
      "explanation": "Optional помогает явно работать с отсутствием значения.",
      "difficulty": "base"
    },
    {
      "id": "t142",
      "topic": "ОС и Linux",
      "question": "Как создать пустой файл в Linux?",
      "options": [
        "touch file.txt",
        "rm file.txt",
        "ls file.txt",
        "pwd file.txt"
      ],
      "answer": 0,
      "explanation": "touch создаёт файл или обновляет время изменения.",
      "difficulty": "base"
    },
    {
      "id": "t143",
      "topic": "ОС и Linux",
      "question": "Как удалить файл в Linux?",
      "options": [
        "rm file.txt",
        "touch file.txt",
        "mkdir file.txt",
        "cat > file.txt only"
      ],
      "answer": 0,
      "explanation": "rm удаляет файл.",
      "difficulty": "base"
    },
    {
      "id": "t144",
      "topic": "ОС и Linux",
      "question": "Как посмотреть содержимое текущей директории?",
      "options": [
        "ls",
        "cd",
        "pwd",
        "grep"
      ],
      "answer": 0,
      "explanation": "ls показывает файлы и папки.",
      "difficulty": "base"
    },
    {
      "id": "t145",
      "topic": "ОС и Linux",
      "question": "Что делает pwd?",
      "options": [
        "Показывает текущую директорию",
        "Удаляет директорию",
        "Создаёт пользователя",
        "Показывает процессы"
      ],
      "answer": 0,
      "explanation": "pwd = print working directory.",
      "difficulty": "base"
    },
    {
      "id": "t146",
      "topic": "ОС и Linux",
      "question": "Что делает grep?",
      "options": [
        "Ищет строки по шаблону",
        "Удаляет файлы",
        "Меняет владельца",
        "Архивирует"
      ],
      "answer": 0,
      "explanation": "grep часто используют для поиска в логах.",
      "difficulty": "base"
    },
    {
      "id": "t147",
      "topic": "ОС и Linux",
      "question": "Что делает chmod?",
      "options": [
        "Меняет права доступа",
        "Меняет владельца",
        "Показывает процессы",
        "Копирует файл"
      ],
      "answer": 0,
      "explanation": "chmod управляет rwx-правами.",
      "difficulty": "base"
    },
    {
      "id": "t148",
      "topic": "ОС и Linux",
      "question": "Что делает chown?",
      "options": [
        "Меняет владельца файла",
        "Меняет права",
        "Сортирует строки",
        "Открывает порт"
      ],
      "answer": 0,
      "explanation": "chown user:group file.",
      "difficulty": "base"
    },
    {
      "id": "t149",
      "topic": "ОС и Linux",
      "question": "Как посмотреть процессы?",
      "options": [
        "ps aux",
        "ls -la",
        "mkdir",
        "touch"
      ],
      "answer": 0,
      "explanation": "ps aux показывает список процессов.",
      "difficulty": "base"
    },
    {
      "id": "t150",
      "topic": "ОС и Linux",
      "question": "Что такое процесс?",
      "options": [
        "Экземпляр выполняемой программы",
        "Только файл на диске",
        "Порт сети",
        "Тип SQL"
      ],
      "answer": 0,
      "explanation": "Процесс имеет память, PID, ресурсы.",
      "difficulty": "base"
    },
    {
      "id": "t151",
      "topic": "ОС и Linux",
      "question": "Что такое поток?",
      "options": [
        "Единица выполнения внутри процесса",
        "Папка Linux",
        "HTTP-метод",
        "Тип индекса"
      ],
      "answer": 0,
      "explanation": "Потоки одного процесса разделяют адресное пространство.",
      "difficulty": "base"
    },
    {
      "id": "t152",
      "topic": "ОС и Linux",
      "question": "Что делает top/htop?",
      "options": [
        "Показывает процессы и потребление ресурсов",
        "Создаёт файл",
        "Собирает Docker image",
        "Меняет DNS"
      ],
      "answer": 0,
      "explanation": "top/htop используют для мониторинга.",
      "difficulty": "base"
    },
    {
      "id": "t153",
      "topic": "ОС и Linux",
      "question": "Что такое переменная окружения?",
      "options": [
        "Пара ключ-значение, доступная процессу",
        "Только Python-словарь",
        "Только SQL-таблица",
        "HTML-тег"
      ],
      "answer": 0,
      "explanation": "Env vars часто хранят настройки и секреты.",
      "difficulty": "base"
    },
    {
      "id": "t154",
      "topic": "Сети и HTTP",
      "question": "Какой порт по умолчанию у HTTPS?",
      "options": [
        "80",
        "443",
        "22",
        "53"
      ],
      "answer": 1,
      "explanation": "HTTPS обычно использует порт 443.",
      "difficulty": "base"
    },
    {
      "id": "t155",
      "topic": "Сети и HTTP",
      "question": "Какой порт по умолчанию у HTTP?",
      "options": [
        "80",
        "443",
        "22",
        "25"
      ],
      "answer": 0,
      "explanation": "HTTP обычно использует порт 80.",
      "difficulty": "base"
    },
    {
      "id": "t156",
      "topic": "Сети и HTTP",
      "question": "Какой протокол автоматически выдаёт IP-адреса?",
      "options": [
        "DNS",
        "DHCP",
        "SMTP",
        "FTP"
      ],
      "answer": 1,
      "explanation": "DHCP назначает IP, gateway, DNS и другие параметры.",
      "difficulty": "base"
    },
    {
      "id": "t157",
      "topic": "Сети и HTTP",
      "question": "Сколько уровней в модели OSI?",
      "options": [
        "4",
        "5",
        "7",
        "9"
      ],
      "answer": 2,
      "explanation": "В модели OSI 7 уровней.",
      "difficulty": "base"
    },
    {
      "id": "t158",
      "topic": "Сети и HTTP",
      "question": "Какой протокол используется для безопасной передачи файлов поверх SSH?",
      "options": [
        "SFTP",
        "FTP",
        "HTTP",
        "SMTP"
      ],
      "answer": 0,
      "explanation": "SFTP = SSH File Transfer Protocol.",
      "difficulty": "base"
    },
    {
      "id": "t159",
      "topic": "Сети и HTTP",
      "question": "Какой HTTP-метод идемпотентен?",
      "options": [
        "GET",
        "POST всегда",
        "CONNECT только",
        "Ни один"
      ],
      "answer": 0,
      "explanation": "GET, PUT, DELETE считаются идемпотентными по семантике.",
      "difficulty": "base"
    },
    {
      "id": "t160",
      "topic": "Сети и HTTP",
      "question": "Что делает DNS?",
      "options": [
        "Преобразует доменные имена в IP-адреса",
        "Шифрует трафик",
        "Выдаёт MAC-адрес",
        "Сжимает HTML"
      ],
      "answer": 0,
      "explanation": "DNS отвечает за разрешение имён.",
      "difficulty": "base"
    },
    {
      "id": "t161",
      "topic": "Сети и HTTP",
      "question": "Что такое TCP?",
      "options": [
        "Надёжный транспортный протокол с соединением",
        "Протокол выдачи IP",
        "Язык разметки",
        "Тип БД"
      ],
      "answer": 0,
      "explanation": "TCP обеспечивает порядок и доставку байтового потока.",
      "difficulty": "base"
    },
    {
      "id": "t162",
      "topic": "Сети и HTTP",
      "question": "Что такое UDP?",
      "options": [
        "Транспортный протокол без установления соединения",
        "Язык запросов",
        "Метод шифрования пароля",
        "Файловая система"
      ],
      "answer": 0,
      "explanation": "UDP быстрее, но без гарантий доставки и порядка.",
      "difficulty": "base"
    },
    {
      "id": "t163",
      "topic": "Сети и HTTP",
      "question": "Что такое NAT?",
      "options": [
        "Преобразование сетевых адресов",
        "Сортировка пакетов",
        "Тип HTTP-метода",
        "Шифрование диска"
      ],
      "answer": 0,
      "explanation": "NAT позволяет нескольким устройствам выходить через один внешний IP.",
      "difficulty": "base"
    },
    {
      "id": "t164",
      "topic": "Сети и HTTP",
      "question": "Что такое TLS?",
      "options": [
        "Протокол защиты транспортного соединения",
        "Система контроля версий",
        "SQL-команда",
        "ML-метрика"
      ],
      "answer": 0,
      "explanation": "TLS используется в HTTPS.",
      "difficulty": "base"
    },
    {
      "id": "t165",
      "topic": "Сети и HTTP",
      "question": "Что означает HTTP 403?",
      "options": [
        "Forbidden — доступ запрещён",
        "Not Found",
        "Created",
        "Gateway Timeout"
      ],
      "answer": 0,
      "explanation": "403 значит сервер понял запрос, но отказывает в доступе.",
      "difficulty": "base"
    },
    {
      "id": "t166",
      "topic": "Сети и HTTP",
      "question": "Что означает HTTP 500?",
      "options": [
        "Внутренняя ошибка сервера",
        "Успех",
        "Не найдено",
        "Редирект"
      ],
      "answer": 0,
      "explanation": "500 — ошибка на стороне сервера.",
      "difficulty": "base"
    },
    {
      "id": "t167",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Какая UML-диаграмма моделирует взаимодействие объектов во времени?",
      "options": [
        "Диаграмма последовательности",
        "Диаграмма классов",
        "Диаграмма компонентов только",
        "Use case только"
      ],
      "answer": 0,
      "explanation": "Sequence diagram показывает сообщения между объектами во времени.",
      "difficulty": "base"
    },
    {
      "id": "t168",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Какие свойства входят в CAP?",
      "options": [
        "Consistency, Availability, Partition tolerance",
        "CPU, API, Proxy",
        "Cache, Auth, Port",
        "Class, Attribute, Package"
      ],
      "answer": 0,
      "explanation": "CAP описывает компромисс в распределённых системах.",
      "difficulty": "base"
    },
    {
      "id": "t169",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Какое преимущество микросервисной архитектуры?",
      "options": [
        "Независимое развертывание сервисов",
        "Обязательная единая БД",
        "Отсутствие сетевых вызовов",
        "Нет необходимости в мониторинге"
      ],
      "answer": 0,
      "explanation": "Микросервисы позволяют независимо развивать и деплоить части системы.",
      "difficulty": "base"
    },
    {
      "id": "t170",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое монолит?",
      "options": [
        "Приложение, где большая часть функциональности разворачивается как единое целое",
        "Только один класс",
        "Только одна таблица",
        "Только фронтенд"
      ],
      "answer": 0,
      "explanation": "Монолит проще на старте, но сложнее масштабировать организационно.",
      "difficulty": "base"
    },
    {
      "id": "t171",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое bounded context?",
      "options": [
        "Граница модели предметной области в DDD",
        "Порт приложения",
        "Тип индекса",
        "CSS-блок"
      ],
      "answer": 0,
      "explanation": "Внутри bounded context термины и модель имеют конкретный смысл.",
      "difficulty": "base"
    },
    {
      "id": "t172",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое API Gateway?",
      "options": [
        "Входная точка, маршрутизирующая запросы к сервисам",
        "Только база данных",
        "Только CSS",
        "JVM-память"
      ],
      "answer": 0,
      "explanation": "Gateway может заниматься auth, rate limit, routing.",
      "difficulty": "base"
    },
    {
      "id": "t173",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое синхронное взаимодействие сервисов?",
      "options": [
        "Сервис ждёт ответ другого сервиса",
        "Сервис пишет событие и не ждёт",
        "Только cron",
        "Только batch"
      ],
      "answer": 0,
      "explanation": "Пример — HTTP/gRPC запрос с ожиданием ответа.",
      "difficulty": "base"
    },
    {
      "id": "t174",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое асинхронное взаимодействие сервисов?",
      "options": [
        "Через события/очереди без немедленного ожидания ответа",
        "Только прямой SQL JOIN",
        "Только функция в памяти",
        "Только шаблон MVC"
      ],
      "answer": 0,
      "explanation": "Kafka/RabbitMQ часто применяют для async коммуникации.",
      "difficulty": "base"
    },
    {
      "id": "t175",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое идемпотентность?",
      "options": [
        "Повторный одинаковый запрос даёт тот же эффект",
        "Запрос всегда быстрый",
        "Запрос нельзя повторять",
        "Запрос только POST"
      ],
      "answer": 0,
      "explanation": "Идемпотентность важна для ретраев.",
      "difficulty": "base"
    },
    {
      "id": "t176",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Уровни C4 обычно включают:",
      "options": [
        "Context, Container, Component, Code",
        "Client, Cloud, Cache, CPU",
        "Class, Condition, Cycle, Code",
        "CSS, CDN, Cache, Cookie"
      ],
      "answer": 0,
      "explanation": "C4 помогает описывать архитектуру на разных уровнях детализации.",
      "difficulty": "base"
    },
    {
      "id": "t177",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое SLA?",
      "options": [
        "Соглашение об уровне сервиса",
        "Тип диаграммы",
        "Метод HTTP",
        "Docker-команда"
      ],
      "answer": 0,
      "explanation": "SLA фиксирует ожидаемые показатели сервиса.",
      "difficulty": "base"
    },
    {
      "id": "t178",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое incident в ITIL?",
      "options": [
        "Незапланированное прерывание или снижение качества сервиса",
        "Новая фича",
        "Плановая миграция",
        "Коммит в Git"
      ],
      "answer": 0,
      "explanation": "Инцидент требует восстановления нормальной работы сервиса.",
      "difficulty": "base"
    },
    {
      "id": "t179",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что описывает Dockerfile?",
      "options": [
        "Инструкции для сборки Docker-образа",
        "Историю Git",
        "SQL-схему",
        "HTML-разметку"
      ],
      "answer": 0,
      "explanation": "Dockerfile содержит FROM, RUN, COPY, CMD и др.",
      "difficulty": "base"
    },
    {
      "id": "t180",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что делает docker build?",
      "options": [
        "Собирает Docker image",
        "Запускает контейнер только",
        "Удаляет volume",
        "Показывает логи"
      ],
      "answer": 0,
      "explanation": "docker build читает Dockerfile и создаёт image.",
      "difficulty": "base"
    },
    {
      "id": "t181",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что делает docker run?",
      "options": [
        "Запускает контейнер из образа",
        "Собирает образ",
        "Коммитит Git",
        "Создаёт SQL-таблицу"
      ],
      "answer": 0,
      "explanation": "docker run создаёт и запускает контейнер.",
      "difficulty": "base"
    },
    {
      "id": "t182",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что такое Docker image?",
      "options": [
        "Шаблон/снимок для запуска контейнеров",
        "Живой процесс всегда",
        "Только лог-файл",
        "Git-ветка"
      ],
      "answer": 0,
      "explanation": "Image immutable, контейнер — запущенный экземпляр image.",
      "difficulty": "base"
    },
    {
      "id": "t183",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что такое volume в Docker?",
      "options": [
        "Механизм постоянного хранения данных вне слоя контейнера",
        "Сетевой порт",
        "JVM heap",
        "HTML-тег"
      ],
      "answer": 0,
      "explanation": "Volume переживает пересоздание контейнера.",
      "difficulty": "base"
    },
    {
      "id": "t184",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что такое docker-compose.yml?",
      "options": [
        "Файл описания набора сервисов/сетей/volume для Docker Compose",
        "Файл Git hooks",
        "Схема SQL",
        "CSS reset"
      ],
      "answer": 0,
      "explanation": "Compose удобен для локального запуска нескольких контейнеров.",
      "difficulty": "base"
    },
    {
      "id": "t185",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Какой инструмент используется для оркестрации контейнеров?",
      "options": [
        "Kubernetes",
        "Git",
        "Pandas",
        "Matplotlib"
      ],
      "answer": 0,
      "explanation": "Kubernetes управляет запуском, масштабированием и сетью контейнеров.",
      "difficulty": "base"
    },
    {
      "id": "t186",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что такое Kubernetes Pod?",
      "options": [
        "Минимальная единица запуска, содержащая один или несколько контейнеров",
        "SQL-запрос",
        "Git-коммит",
        "CSS-класс"
      ],
      "answer": 0,
      "explanation": "Контейнеры в Pod разделяют сеть и могут разделять volumes.",
      "difficulty": "base"
    },
    {
      "id": "t187",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что такое Kubernetes Service?",
      "options": [
        "Стабильная точка доступа к набору Pod",
        "Файл образа",
        "Лог приложения",
        "HTML-страница"
      ],
      "answer": 0,
      "explanation": "Service балансирует трафик на Pod по selector.",
      "difficulty": "base"
    },
    {
      "id": "t188",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что такое CI/CD?",
      "options": [
        "Непрерывная интеграция и доставка/развёртывание",
        "Тип JOIN",
        "Протокол DHCP",
        "Стиль CSS"
      ],
      "answer": 0,
      "explanation": "CI/CD автоматизирует тесты, сборку и деплой.",
      "difficulty": "base"
    },
    {
      "id": "t189",
      "topic": "Git",
      "question": "Какая команда показывает историю коммитов?",
      "options": [
        "git log",
        "git init",
        "git add",
        "git stash pop"
      ],
      "answer": 0,
      "explanation": "git log выводит историю коммитов.",
      "difficulty": "base"
    },
    {
      "id": "t190",
      "topic": "Git",
      "question": "Какая команда добавляет изменения в индекс?",
      "options": [
        "git add",
        "git push",
        "git pull",
        "git clone"
      ],
      "answer": 0,
      "explanation": "git add подготавливает файлы к коммиту.",
      "difficulty": "base"
    },
    {
      "id": "t191",
      "topic": "Git",
      "question": "Какая команда создаёт коммит?",
      "options": [
        "git commit",
        "git status",
        "git diff",
        "git remote"
      ],
      "answer": 0,
      "explanation": "git commit сохраняет снимок изменений в истории.",
      "difficulty": "base"
    },
    {
      "id": "t192",
      "topic": "Git",
      "question": "Что делает git status?",
      "options": [
        "Показывает состояние рабочей директории и индекса",
        "Удаляет ветку",
        "Сливает ветки",
        "Создаёт Docker image"
      ],
      "answer": 0,
      "explanation": "status показывает modified/staged/untracked.",
      "difficulty": "base"
    },
    {
      "id": "t193",
      "topic": "Git",
      "question": "Чем merge отличается от rebase?",
      "options": [
        "merge создаёт слияние, rebase переносит коммиты на новое основание",
        "Нет отличий",
        "rebase только удаляет ветку",
        "merge всегда переписывает историю"
      ],
      "answer": 0,
      "explanation": "Rebase переписывает историю локальных коммитов.",
      "difficulty": "base"
    },
    {
      "id": "t194",
      "topic": "Git",
      "question": "Как отменить незакоммиченные изменения в файле?",
      "options": [
        "git restore file",
        "git log file",
        "git push file",
        "git init file"
      ],
      "answer": 0,
      "explanation": "git restore возвращает файл к состоянию из индекса/HEAD.",
      "difficulty": "base"
    },
    {
      "id": "t195",
      "topic": "Cloud и ITSM",
      "question": "Что предоставляет PaaS?",
      "options": [
        "Платформу для разработки и запуска приложений без управления низкоуровневой инфраструктурой",
        "Только готовую программу для пользователя",
        "Только виртуальные машины",
        "Только физический сервер"
      ],
      "answer": 0,
      "explanation": "PaaS скрывает часть инфраструктуры: runtime, scaling, deployment.",
      "difficulty": "base"
    },
    {
      "id": "t196",
      "topic": "Cloud и ITSM",
      "question": "Что такое SaaS?",
      "options": [
        "Готовое приложение как сервис",
        "Платформа для контейнеров",
        "Физический сервер",
        "Тип CPU"
      ],
      "answer": 0,
      "explanation": "Пример SaaS — почта/CRM/документы в браузере.",
      "difficulty": "base"
    },
    {
      "id": "t197",
      "topic": "Cloud и ITSM",
      "question": "Что такое IaaS?",
      "options": [
        "Инфраструктура как сервис: виртуальные машины, сети, диски",
        "Готовое приложение",
        "Только библиотека Python",
        "SQL-команда"
      ],
      "answer": 0,
      "explanation": "IaaS даёт больше контроля, но требует больше администрирования.",
      "difficulty": "base"
    },
    {
      "id": "t198",
      "topic": "Cloud и ITSM",
      "question": "Что такое горизонтальное масштабирование?",
      "options": [
        "Добавление новых экземпляров/серверов",
        "Увеличение CPU/RAM одного сервера",
        "Удаление логов",
        "Смена языка программирования"
      ],
      "answer": 0,
      "explanation": "Scale out — больше узлов.",
      "difficulty": "base"
    },
    {
      "id": "t199",
      "topic": "Cloud и ITSM",
      "question": "Что такое вертикальное масштабирование?",
      "options": [
        "Увеличение ресурсов одного сервера",
        "Добавление новых серверов",
        "Деление монолита на сервисы",
        "Создание индекса Git"
      ],
      "answer": 0,
      "explanation": "Scale up — мощнее машина.",
      "difficulty": "base"
    },
    {
      "id": "t200",
      "topic": "Cloud и ITSM",
      "question": "Что такое Service Mesh?",
      "options": [
        "Инфраструктурный слой для управления межсервисным трафиком, наблюдаемостью и политиками",
        "CSS-фреймворк",
        "Тип JOIN",
        "Формат XML"
      ],
      "answer": 0,
      "explanation": "Service Mesh часто использует sidecar-прокси.",
      "difficulty": "base"
    },
    {
      "id": "t201",
      "topic": "Cloud и ITSM",
      "question": "Что такое топик в брокере сообщений?",
      "options": [
        "Логический канал/категория сообщений",
        "Индекс SQL",
        "Папка Linux",
        "HTML-тег"
      ],
      "answer": 0,
      "explanation": "Producer публикует сообщения в topic, consumer читает их.",
      "difficulty": "base"
    }
  ],
  "oral": [
    {
      "id": "o001",
      "topic": "SQL и базы данных",
      "question": "Чем отличается LEFT JOIN от INNER JOIN?",
      "answer": "INNER JOIN возвращает только совпавшие строки из обеих таблиц. LEFT JOIN возвращает все строки из левой таблицы и совпавшие строки справа; если совпадения нет, поля правой таблицы будут NULL.",
      "keywords": [
        "LEFT JOIN",
        "INNER JOIN",
        "NULL"
      ],
      "difficulty": "base"
    },
    {
      "id": "o002",
      "topic": "SQL и базы данных",
      "question": "Чем UNION отличается от UNION ALL?",
      "answer": "UNION объединяет результаты и удаляет дубликаты. UNION ALL объединяет результаты без удаления дубликатов, поэтому обычно быстрее.",
      "keywords": [
        "UNION",
        "UNION ALL",
        "дубликаты"
      ],
      "difficulty": "base"
    },
    {
      "id": "o003",
      "topic": "SQL и базы данных",
      "question": "Что вернёт сравнение NULL = NULL?",
      "answer": "В SQL NULL означает неизвестное значение. Сравнение NULL = NULL вернёт UNKNOWN/NULL, а не TRUE. Для проверки используют IS NULL.",
      "keywords": [
        "NULL",
        "UNKNOWN",
        "IS NULL"
      ],
      "difficulty": "base"
    },
    {
      "id": "o004",
      "topic": "SQL и базы данных",
      "question": "Что такое первичный и внешний ключ?",
      "answer": "Первичный ключ уникально идентифицирует строку таблицы. Внешний ключ ссылается на ключ другой таблицы и помогает поддерживать ссылочную целостность.",
      "keywords": [
        "primary key",
        "foreign key"
      ],
      "difficulty": "base"
    },
    {
      "id": "o005",
      "topic": "SQL и базы данных",
      "question": "Что такое оконные функции?",
      "answer": "Оконные функции считают значение по набору связанных строк, но не схлопывают строки как GROUP BY. Пример: ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC).",
      "keywords": [
        "OVER",
        "PARTITION BY"
      ],
      "difficulty": "base"
    },
    {
      "id": "o006",
      "topic": "Python",
      "question": "В чём разница между списком и кортежем?",
      "answer": "Список изменяемый, кортеж неизменяемый. Кортеж может быть ключом словаря, если все его элементы хешируемые. Кортежи обычно используют для фиксированных наборов значений.",
      "keywords": [
        "list",
        "tuple",
        "immutable"
      ],
      "difficulty": "base"
    },
    {
      "id": "o007",
      "topic": "Python",
      "question": "Что такое декоратор?",
      "answer": "Декоратор — это функция или объект, который принимает функцию и возвращает новую функцию с расширенным поведением. Применяется для логирования, проверки прав, кеширования, замера времени.",
      "keywords": [
        "wrapper",
        "@decorator"
      ],
      "difficulty": "base"
    },
    {
      "id": "o008",
      "topic": "Python",
      "question": "Что такое генератор и зачем он нужен?",
      "answer": "Генератор лениво выдаёт значения по одному с помощью yield. Он полезен для больших данных, потому что не хранит весь результат в памяти.",
      "keywords": [
        "yield",
        "lazy"
      ],
      "difficulty": "base"
    },
    {
      "id": "o009",
      "topic": "Python",
      "question": "Что такое контекстный менеджер?",
      "answer": "Контекстный менеджер управляет входом и выходом из блока with. Например, open() закрывает файл даже при ошибке. Реализуется через __enter__ и __exit__.",
      "keywords": [
        "with",
        "__enter__",
        "__exit__"
      ],
      "difficulty": "base"
    },
    {
      "id": "o010",
      "topic": "Python",
      "question": "Как читать файл больше 7 ГБ?",
      "answer": "Нужно читать потоково: построчно или чанками, не используя read() всего файла. Для ускорения можно обрабатывать батчами, использовать генераторы, multiprocessing или внешние инструменты.",
      "keywords": [
        "streaming",
        "chunks"
      ],
      "difficulty": "base"
    },
    {
      "id": "o011",
      "topic": "Python",
      "question": "Что такое исключение?",
      "answer": "Исключение — ошибка выполнения, которую можно обработать через try/except. Важно ловить конкретные исключения, а не скрывать все ошибки без причины.",
      "keywords": [
        "try",
        "except"
      ],
      "difficulty": "base"
    },
    {
      "id": "o012",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что такое асимптотическая сложность?",
      "answer": "Это оценка роста времени или памяти алгоритма при увеличении размера входных данных. Например, линейный поиск O(n), бинарный поиск O(log n).",
      "keywords": [
        "O(n)",
        "Big O"
      ],
      "difficulty": "base"
    },
    {
      "id": "o013",
      "topic": "Алгоритмы и структуры данных",
      "question": "Что такое рекурсия?",
      "answer": "Рекурсия — это когда функция вызывает саму себя. У неё должен быть базовый случай, иначе будет бесконечная рекурсия.",
      "keywords": [
        "base case"
      ],
      "difficulty": "base"
    },
    {
      "id": "o014",
      "topic": "Алгоритмы и структуры данных",
      "question": "Чем DFS отличается от BFS?",
      "answer": "DFS идёт в глубину и обычно использует стек/рекурсию. BFS идёт по слоям и использует очередь. BFS на невзвешенном графе находит кратчайшее число рёбер.",
      "keywords": [
        "stack",
        "queue"
      ],
      "difficulty": "base"
    },
    {
      "id": "o015",
      "topic": "Алгоритмы и структуры данных",
      "question": "Как работает алгоритм Дейкстры?",
      "answer": "Он поддерживает минимальные известные расстояния от стартовой вершины и на каждом шаге выбирает непосещённую вершину с минимальным расстоянием. Работает для неотрицательных весов.",
      "keywords": [
        "priority queue",
        "non-negative"
      ],
      "difficulty": "base"
    },
    {
      "id": "o016",
      "topic": "Машинное обучение и Data Science",
      "question": "Какие метрики качества ML-моделей ты знаешь?",
      "answer": "Для классификации: accuracy, precision, recall, F1, ROC-AUC. Для регрессии: MAE, MSE, RMSE, R2. Выбор зависит от задачи и цены ошибок.",
      "keywords": [
        "accuracy",
        "F1",
        "RMSE"
      ],
      "difficulty": "base"
    },
    {
      "id": "o017",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое регуляризация?",
      "answer": "Регуляризация добавляет штраф за сложность модели, чтобы уменьшить переобучение. Примеры: L1 и L2.",
      "keywords": [
        "L1",
        "L2",
        "overfitting"
      ],
      "difficulty": "base"
    },
    {
      "id": "o018",
      "topic": "Машинное обучение и Data Science",
      "question": "Какие этапы разработки ML-модели?",
      "answer": "Понимание задачи, сбор данных, EDA, очистка, feature engineering, train/validation/test split, обучение, подбор метрик, валидация, интерпретация, деплой и мониторинг.",
      "keywords": [
        "EDA",
        "train/test",
        "deployment"
      ],
      "difficulty": "base"
    },
    {
      "id": "o019",
      "topic": "Машинное обучение и Data Science",
      "question": "Чем классификация отличается от регрессии?",
      "answer": "Классификация предсказывает класс/категорию, регрессия предсказывает непрерывное число.",
      "keywords": [
        "class",
        "number"
      ],
      "difficulty": "base"
    },
    {
      "id": "o020",
      "topic": "Машинное обучение и Data Science",
      "question": "Что такое переобучение и как бороться?",
      "answer": "Переобучение — модель запомнила обучающие данные и плохо работает на новых. Борьба: регуляризация, больше данных, кросс-валидация, ограничение сложности, dropout/early stopping.",
      "keywords": [
        "overfitting",
        "regularization"
      ],
      "difficulty": "base"
    },
    {
      "id": "o021",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое большая языковая модель?",
      "answer": "LLM — модель, обученная на больших текстовых данных для понимания и генерации языка. Применяется для ответов на вопросы, суммаризации, классификации, RAG, извлечения данных.",
      "keywords": [
        "LLM",
        "generation"
      ],
      "difficulty": "base"
    },
    {
      "id": "o022",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Каковы компоненты архитектуры LLM?",
      "answer": "Обычно это токенизатор, embeddings, блоки Transformer с attention, feed-forward слои, normalization и выходной слой для предсказания токенов.",
      "keywords": [
        "tokenizer",
        "transformer",
        "attention"
      ],
      "difficulty": "base"
    },
    {
      "id": "o023",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое RAG?",
      "answer": "RAG — подход, где перед генерацией выполняется поиск релевантных документов, а найденный контекст передаётся модели. Это снижает галлюцинации и позволяет отвечать по локальным данным.",
      "keywords": [
        "retrieval",
        "context"
      ],
      "difficulty": "base"
    },
    {
      "id": "o024",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое embedding и векторная база?",
      "answer": "Embedding — числовой вектор смысла текста. Векторная база хранит такие векторы и ищет похожие документы по косинусному сходству или другим метрикам.",
      "keywords": [
        "embedding",
        "vector db"
      ],
      "difficulty": "base"
    },
    {
      "id": "o025",
      "topic": "NLP, LLM и текстовый поиск",
      "question": "Что такое NER и анализ тональности?",
      "answer": "NER извлекает именованные сущности: людей, организации, места. Анализ тональности определяет эмоциональную окраску текста: позитив, негатив, нейтрально.",
      "keywords": [
        "NER",
        "sentiment"
      ],
      "difficulty": "base"
    },
    {
      "id": "o026",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Для чего нужен HTML?",
      "answer": "HTML задаёт структуру веб-страницы: заголовки, абзацы, формы, ссылки, таблицы. Внешний вид задаёт CSS, поведение — JavaScript.",
      "keywords": [
        "HTML",
        "structure"
      ],
      "difficulty": "base"
    },
    {
      "id": "o027",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое MVC?",
      "answer": "MVC разделяет приложение на Model — данные и бизнес-логика, View — представление, Controller — обработка запросов и управление сценарием.",
      "keywords": [
        "Model",
        "View",
        "Controller"
      ],
      "difficulty": "base"
    },
    {
      "id": "o028",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Как Django работает с БД?",
      "answer": "Django использует ORM: модели Python описывают таблицы, миграции изменяют схему, QuerySet формирует SQL-запросы.",
      "keywords": [
        "ORM",
        "migrations"
      ],
      "difficulty": "base"
    },
    {
      "id": "o029",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое REST?",
      "answer": "REST — подход к построению API вокруг ресурсов. Используются URL, HTTP-методы GET/POST/PUT/PATCH/DELETE и статусы ответа.",
      "keywords": [
        "GET",
        "POST",
        "resources"
      ],
      "difficulty": "base"
    },
    {
      "id": "o030",
      "topic": "Web, HTML/CSS/JS и Django",
      "question": "Что такое CSRF и зачем защита?",
      "answer": "CSRF — атака, при которой браузер пользователя отправляет нежелательный запрос на сайт, где он авторизован. CSRF-токен подтверждает, что запрос отправлен с легитимной формы.",
      "keywords": [
        "token",
        "request"
      ],
      "difficulty": "base"
    },
    {
      "id": "o031",
      "topic": "Java и Spring",
      "question": "Что такое JVM/JDK/JRE?",
      "answer": "JVM исполняет байткод, JRE содержит JVM и библиотеки для запуска, JDK содержит JRE и инструменты разработки: javac, jar и др.",
      "keywords": [
        "JVM",
        "JDK",
        "JRE"
      ],
      "difficulty": "base"
    },
    {
      "id": "o032",
      "topic": "Java и Spring",
      "question": "Что такое volatile?",
      "answer": "volatile гарантирует видимость изменений переменной между потоками и ограничивает переупорядочивание, но не делает составные операции атомарными.",
      "keywords": [
        "visibility",
        "atomic"
      ],
      "difficulty": "base"
    },
    {
      "id": "o033",
      "topic": "Java и Spring",
      "question": "Что такое CompletableFuture?",
      "answer": "CompletableFuture нужен для асинхронных вычислений и композиции результатов: thenApply, thenCompose, allOf, exceptionally.",
      "keywords": [
        "async",
        "thenApply"
      ],
      "difficulty": "base"
    },
    {
      "id": "o034",
      "topic": "Java и Spring",
      "question": "Что такое LinkedHashMap и как сделать LRU?",
      "answer": "LinkedHashMap может хранить порядок доступа при accessOrder=true. Для LRU переопределяют removeEldestEntry, чтобы удалять старую запись при превышении capacity.",
      "keywords": [
        "LinkedHashMap",
        "LRU"
      ],
      "difficulty": "base"
    },
    {
      "id": "o035",
      "topic": "Java и Spring",
      "question": "Что такое @ControllerAdvice?",
      "answer": "@ControllerAdvice в Spring позволяет централизованно обрабатывать исключения контроллеров и возвращать единый формат ошибок.",
      "keywords": [
        "Spring",
        "exception"
      ],
      "difficulty": "base"
    },
    {
      "id": "o036",
      "topic": "ОС и Linux",
      "question": "Какие базовые команды Linux нужны на экзамене?",
      "answer": "touch создаёт файл, rm удаляет, ls показывает каталог, cd меняет директорию, pwd показывает текущий путь, grep ищет по тексту.",
      "keywords": [
        "touch",
        "rm",
        "ls"
      ],
      "difficulty": "base"
    },
    {
      "id": "o037",
      "topic": "Сети и HTTP",
      "question": "Что такое DNS, DHCP и HTTPS?",
      "answer": "DNS преобразует имя в IP, DHCP выдаёт сетевые настройки, HTTPS — HTTP поверх TLS для защищённого соединения.",
      "keywords": [
        "DNS",
        "DHCP",
        "TLS"
      ],
      "difficulty": "base"
    },
    {
      "id": "o038",
      "topic": "Архитектура, микросервисы и C4",
      "question": "Что такое CAP-теорема?",
      "answer": "CAP говорит, что в распределённой системе при сетевом разделении приходится выбирать компромисс между consistency и availability, при этом partition tolerance фактически обязательна.",
      "keywords": [
        "consistency",
        "availability"
      ],
      "difficulty": "base"
    },
    {
      "id": "o039",
      "topic": "Docker, Kubernetes и инфраструктура",
      "question": "Что такое Dockerfile и docker build?",
      "answer": "Dockerfile описывает инструкции сборки образа, docker build собирает image, а docker run запускает контейнер из image.",
      "keywords": [
        "Dockerfile",
        "image"
      ],
      "difficulty": "base"
    },
    {
      "id": "o040",
      "topic": "Git",
      "question": "Как отменять изменения в Git?",
      "answer": "Незакоммиченный файл можно вернуть через git restore. Проиндексированный файл убрать из индекса через git restore --staged. Коммит можно отменить revert или reset в зависимости от ситуации.",
      "keywords": [
        "restore",
        "revert",
        "reset"
      ],
      "difficulty": "base"
    },
    {
      "id": "o041",
      "topic": "Cloud и ITSM",
      "question": "Что такое SLA и инцидент в ITSM?",
      "answer": "SLA — соглашение об уровне сервиса. Инцидент — незапланированное прерывание или снижение качества сервиса, цель обработки — восстановить нормальную работу.",
      "keywords": [
        "SLA",
        "incident"
      ],
      "difficulty": "base"
    }
  ],
  "practice": [
    {
      "id": "p001",
      "topic": "Алгоритмы и структуры данных",
      "title": "Алгоритм Дейкстры",
      "task": "Реализуйте алгоритм Дейкстры для графа с неотрицательными весами. На вход: граф в виде словаря смежности и стартовая вершина. На выход: словарь минимальных расстояний.",
      "expected": "Ожидается priority queue/heapq, distances, обработка недостижимых вершин. Сложность примерно O((V+E) log V).",
      "difficulty": "medium"
    },
    {
      "id": "p002",
      "topic": "Алгоритмы и структуры данных",
      "title": "Минимальное число, оканчивающееся на 3",
      "task": "Напишите программу, которая в последовательности натуральных чисел определяет минимальное число, оканчивающееся на 3. Если таких чисел нет — вывести сообщение.",
      "expected": "Проверка n % 10 == 3, поддержка пустого результата.",
      "difficulty": "base"
    },
    {
      "id": "p003",
      "topic": "Алгоритмы и структуры данных",
      "title": "n-е число Фибоначчи",
      "task": "Напишите функцию fibonacci(n: int) -> int. Условия: fibonacci(0)=0, fibonacci(1)=1, fibonacci(6)=8. Объясните сложность.",
      "expected": "Лучше итеративно O(n) по времени и O(1) по памяти.",
      "difficulty": "base"
    },
    {
      "id": "p004",
      "topic": "Алгоритмы и структуры данных",
      "title": "Проверка скобочной последовательности",
      "task": "Напишите функцию is_valid_brackets(s: str) -> bool для скобок (), [], {}. Скобки должны быть правильно вложены.",
      "expected": "Ожидается стек и словарь пар скобок. Сложность O(n).",
      "difficulty": "base"
    },
    {
      "id": "p005",
      "topic": "Алгоритмы и структуры данных",
      "title": "Очередь через два стека",
      "task": "Реализуйте очередь с методами push, pop, peek через два стека. Амортизированная сложность операций должна быть O(1).",
      "expected": "Ожидается in_stack/out_stack, переливание только при пустом out_stack.",
      "difficulty": "medium"
    },
    {
      "id": "p006",
      "topic": "SQL и базы данных",
      "title": "Имена на букву A",
      "task": "Есть таблица users(id, name, email). Напишите SQL-запрос, который выводит имена пользователей, начинающиеся на букву A.",
      "expected": "SELECT name FROM users WHERE name LIKE 'A%'; Можно упомянуть ILIKE для PostgreSQL без учёта регистра.",
      "difficulty": "base"
    },
    {
      "id": "p007",
      "topic": "SQL и базы данных",
      "title": "Последняя пара вопрос-ответ по пользователю",
      "task": "Есть таблица messages(id, user_id, role, text, created_at, pair_id). Нужно вывести user_id и последнюю пару вопрос-ответ по каждому пользователю, где есть текстовый ответ ассистента.",
      "expected": "Ожидается оконная функция ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) или DISTINCT ON в PostgreSQL. Нужно фильтровать assistant text IS NOT NULL.",
      "difficulty": "hard"
    },
    {
      "id": "p008",
      "topic": "SQL и базы данных",
      "title": "Разобрать SQL-скрипт",
      "task": "Дан произвольный SQL-скрипт. Объясните, какие таблицы создаются/изменяются, какие данные выбираются, где фильтрация, группировка, сортировка, JOIN и транзакции.",
      "expected": "Ожидается структурированное объяснение: DDL/DML/DQL, входные таблицы, условия, результат.",
      "difficulty": "base"
    },
    {
      "id": "p009",
      "topic": "SQL и базы данных",
      "title": "Количество строк после JOIN",
      "task": "table1: (1,A), (2,B), (2,B), (3,C). table2: (1,a), (2,b), (3,c). Сколько строк вернёт INNER JOIN по id и почему?",
      "expected": "Ответ: 4 строки, потому что id=2 в table1 встречается дважды и обе строки соединятся с одной строкой table2.",
      "difficulty": "base"
    },
    {
      "id": "p010",
      "topic": "SQL и базы данных",
      "title": "Оконная функция ROW_NUMBER",
      "task": "Напишите запрос, который для каждой категории товаров выводит самый дорогой товар.",
      "expected": "Ожидается ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY price DESC) = 1.",
      "difficulty": "medium"
    },
    {
      "id": "p011",
      "topic": "NLP, LLM и текстовый поиск",
      "title": "RAG API-сервис по XML Wiki",
      "task": "Разработайте API-сервис, который при запуске читает XML-файлы из ./source_data/, векторизует данные, сохраняет в векторную БД и обрабатывает GET /llm?query=... Ответ должен быть JSON {\"answer\": \"...\"}. Ошибки логировать в ./logs/log-дата.txt.",
      "expected": "Ожидается FastAPI/Flask, XML parser, chunking, embeddings, vector DB/faiss/chroma, retriever, prompt, LLM client, обработка ошибок, README.",
      "difficulty": "hard"
    },
    {
      "id": "p012",
      "topic": "NLP, LLM и текстовый поиск",
      "title": "Анализ тональности и NER",
      "task": "Прочитайте текстовый файл, выполните анализ тональности и извлечение именованных сущностей. Сформируйте автоматический отчёт с таблицами и графиками.",
      "expected": "Ожидается чтение файла, NLP pipeline, таблицы сущностей, распределение тональности, графики, сохранение отчёта.",
      "difficulty": "medium"
    },
    {
      "id": "p013",
      "topic": "NLP, LLM и текстовый поиск",
      "title": "Прогноз реакций на публикацию",
      "task": "Прочитайте текстовый файл с публикациями и признаками. Напишите программу, прогнозирующую количество реакций на текст публикации.",
      "expected": "Ожидается регрессионная постановка, признаки текста, train/test split, метрики MAE/RMSE, базовая модель.",
      "difficulty": "medium"
    },
    {
      "id": "p014",
      "topic": "NLP, LLM и текстовый поиск",
      "title": "Векторизация текста разными методами",
      "task": "Прочитайте текстовый файл и выполните векторизацию разными методами: bag-of-words/TF-IDF, word2vec/Skip-Gram, предобученные embeddings. Сравните результаты.",
      "expected": "Ожидается несколько методов, примеры похожести/кластеризации, выводы.",
      "difficulty": "medium"
    },
    {
      "id": "p015",
      "topic": "NLP, LLM и текстовый поиск",
      "title": "Диалоговая система на контексте файла",
      "task": "Используйте текстовый файл как контекст для диалоговой системы. Сравните ответы нескольких LLM на одинаковые вопросы и сделайте вывод об области применения.",
      "expected": "Ожидается список вопросов, ответы моделей, сравнение качества, ограничения.",
      "difficulty": "hard"
    },
    {
      "id": "p016",
      "topic": "Python",
      "title": "Большой файл >7 ГБ",
      "task": "Нужно прочитать текстовый файл размером более 7 ГБ и сформировать единый массив данных. Время работы не должно превышать 3 минуты. Опишите и реализуйте подход.",
      "expected": "Важно не читать весь файл сразу. Ожидается потоковая обработка, генераторы/чанки, возможно mmap/multiprocessing, ограничения памяти.",
      "difficulty": "hard"
    },
    {
      "id": "p017",
      "topic": "Python",
      "title": "Пересечение двух массивов",
      "task": "Напишите функцию, которая вернёт пересечение двух массивов X и Y. Пример: X=[1,5,9,0], Y=[3,0,2,9] -> [9,0] или множество {0,9}. Учитывайте разные типы данных.",
      "expected": "Ожидается решение через set для хешируемых элементов или безопасная обработка нехешируемых.",
      "difficulty": "base"
    },
    {
      "id": "p018",
      "topic": "Python",
      "title": "Удаление текста в скобках",
      "task": "Напишите функцию remove_parentheses(text: str) -> str, которая удаляет всё внутри круглых скобок и сами скобки. Скобки могут быть вложенными.",
      "expected": "Ожидается счётчик depth или стек. Сложность O(n).",
      "difficulty": "base"
    },
    {
      "id": "p019",
      "topic": "Python",
      "title": "Сумма квадратов двузначных чисел, делящихся на 77",
      "task": "Дан список numbers. Используя filter(), map() и sum(), вычислите сумму квадратов двузначных чисел, которые делятся на 77 без остатка. Учитывайте отрицательные двузначные числа.",
      "expected": "Двузначные: abs(n) между 10 и 99. Делимость проверять на исходном числе n % 77 == 0.",
      "difficulty": "base"
    },
    {
      "id": "p020",
      "topic": "Python",
      "title": "Электронные часы",
      "task": "С начала суток прошло n секунд. Выведите время в формате h:mm:ss, где минуты и секунды всегда двузначные.",
      "expected": "Ожидается n % 86400, h = n // 3600, m = ..., s = ..., формат f\"{h}:{m:02d}:{s:02d}\".",
      "difficulty": "base"
    },
    {
      "id": "p021",
      "topic": "Python",
      "title": "Класс Train",
      "task": "Определите класс Train с атрибутами type и speed. Создайте экземпляр и верните speed.",
      "expected": "Ожидается __init__(self, type, speed), объект train = Train(...), print(train.speed).",
      "difficulty": "base"
    },
    {
      "id": "p022",
      "topic": "Python",
      "title": "List comprehension",
      "task": "Преобразуйте цикл в list comprehension: a=[1,2,3,4,5]; a2=[]; for i in a: a2.append(i+1).",
      "expected": "Ответ: a2 = [i + 1 for i in a].",
      "difficulty": "base"
    },
    {
      "id": "p023",
      "topic": "Python",
      "title": "Дата во фрейме данных",
      "task": "Дан DataFrame с Date и event. Пользователь вводит дату 2021-01-18. Нужно проверить наличие даты и вывести событие. Если даты нет — вывести ближайшую дату.",
      "expected": "Ожидается pandas, pd.to_datetime, фильтр, если пусто — поиск min(abs(df.Date - target)).",
      "difficulty": "medium"
    },
    {
      "id": "p024",
      "topic": "Python",
      "title": "JSON пары ключ-значение",
      "task": "Программа принимает на вход JSON-объект из stdin и выводит все пары ключ-значение в исходном порядке. Если значение — список, элементы вывести через запятую.",
      "expected": "Ожидается json.load(sys.stdin), обход items(), обработка list.",
      "difficulty": "base"
    },
    {
      "id": "p025",
      "topic": "Машинное обучение и Data Science",
      "title": "EDA и Feature Engineering",
      "task": "Считайте CSV-файл, проведите EDA. Результаты: DataFrame и текстовое описание, не менее 3 графиков, логичных для данных.",
      "expected": "Ожидается info/describe, пропуски, дубликаты, распределения, корреляции, графики, новые признаки.",
      "difficulty": "medium"
    },
    {
      "id": "p026",
      "topic": "Машинное обучение и Data Science",
      "title": "Кластеризация k-means и DBSCAN",
      "task": "Считайте CSV. Выполните кластеризацию k-means с выбором k методом elbow и DBSCAN. Используйте не менее 5 переменных. Постройте parallel coordinates и 2D/3D визуализации.",
      "expected": "Ожидается масштабирование признаков, elbow, подбор eps/min_samples, визуализации, интерпретация кластеров.",
      "difficulty": "hard"
    },
    {
      "id": "p027",
      "topic": "Машинное обучение и Data Science",
      "title": "Anomaly Detection",
      "task": "Прочитайте файл и проведите анализ аномалий. Обоснуйте инструмент, оцените возможность использовать весь объём данных для ML, при необходимости разделите выборки.",
      "expected": "Ожидается IsolationForest/LOF/statistics, визуализация выбросов, выводы.",
      "difficulty": "medium"
    },
    {
      "id": "p028",
      "topic": "Машинное обучение и Data Science",
      "title": "Классификация AutoML + своя модель",
      "task": "Постройте базовую модель классификации через AutoML, выберите метрику, постройте Confusion Matrix и ROC-Curve. Затем постройте свою модель на дереве/лесе/бустинге/логистической регрессии и сравните.",
      "expected": "Ожидается train/test split, метрика F1/AUC/Accuracy по задаче, графики и вывод.",
      "difficulty": "hard"
    },
    {
      "id": "p029",
      "topic": "Машинное обучение и Data Science",
      "title": "Регрессия AutoML + своя модель",
      "task": "Постройте базовую регрессионную модель через AutoML, выберите MAE/MSE/RMSE, постройте график real vs predicted. Затем построить свою модель и сравнить.",
      "expected": "Ожидается корректная постановка regression, метрики, scatter plot real/pred, вывод.",
      "difficulty": "hard"
    },
    {
      "id": "p030",
      "topic": "Web, HTML/CSS/JS и Django",
      "title": "JS цепочка (2).plus(3).minus(1)",
      "task": "Реализуйте методы, чтобы выражение (2).plus(3).minus(1) возвращало 4.",
      "expected": "Ожидается Number.prototype.plus/minus или безопасная альтернатива. Объяснить риски изменения prototype.",
      "difficulty": "medium"
    },
    {
      "id": "p031",
      "topic": "Web, HTML/CSS/JS и Django",
      "title": "Верстка макета с фиксированным меню",
      "task": "Сверстайте макет: шапка с изображением по центру, контент 1-1000 строк, правое меню 1-10 пунктов с подменю, меню фиксировано при прокрутке до расстояния 50px от футера.",
      "expected": "Ожидается HTML/CSS/JS, position sticky/fixed, адаптивность, обработка высоты меню и футера.",
      "difficulty": "hard"
    },
    {
      "id": "p032",
      "topic": "Web, HTML/CSS/JS и Django",
      "title": "CRUD-таблица с backend",
      "task": "Создайте компонент таблицы с фейковыми JSON-данными. Получить данные с backend, вывести таблицу. Реализовать добавление, удаление, редактирование с кнопкой сохранить.",
      "expected": "Ожидается GET/POST/PUT/DELETE, состояние UI, readonly/edit mode, обработка ошибок.",
      "difficulty": "hard"
    },
    {
      "id": "p033",
      "topic": "Web, HTML/CSS/JS и Django",
      "title": "Мини Django CRUD",
      "task": "Создайте Django-приложение с моделью Book(title, author, year), страницей списка, добавлением и удалением книги.",
      "expected": "Ожидается model, migration, view, url, template, form, csrf.",
      "difficulty": "medium"
    },
    {
      "id": "p034",
      "topic": "Java и Spring",
      "title": "CompletableFuture сумма квадратов",
      "task": "Напишите Java-программу: сгенерировать 1 000 000 случайных int, разбить на 4 части, каждую обработать в отдельном потоке, каждый поток считает сумму квадратов. Использовать CompletableFuture и вывести общую сумму и время.",
      "expected": "Ожидается ExecutorService/ForkJoinPool, CompletableFuture.supplyAsync, allOf/join, обработка ошибок, shutdown.",
      "difficulty": "hard"
    },
    {
      "id": "p035",
      "topic": "Java и Spring",
      "title": "LRU Cache",
      "task": "Реализуйте LRUCache<K,V> с get и put за O(1), удалением наименее используемого элемента при превышении capacity. Сделайте потокобезопасную ConcurrentLRUCache и JUnit 5 тесты.",
      "expected": "Ожидается LinkedHashMap accessOrder=true + removeEldestEntry или структура HashMap + linked list. Для потокобезопасности synchronized/ReentrantLock.",
      "difficulty": "hard"
    },
    {
      "id": "p036",
      "topic": "Java и Spring",
      "title": "REST-сервис библиотеки книг",
      "task": "Создайте Spring REST-сервис для книг: POST /books, GET /books с фильтрами author/genre, GET /books/{id}, PUT /books/{id}, DELETE /books/{id}. Хранение в ConcurrentHashMap, DTO, валидация, ControllerAdvice.",
      "expected": "Ожидается Controller, Service, DTO, validation annotations, exception handler.",
      "difficulty": "hard"
    },
    {
      "id": "p037",
      "topic": "Java и Spring",
      "title": "Парсинг server.log",
      "task": "Дан server.log. Считать Files.lines(), через Stream API и regex извлечь ERROR, сгруппировать по сервису, подсчитать ошибки, найти топ-3 сообщений без параметров. Вывести отсортировано по убыванию.",
      "expected": "Ожидается Pattern/Matcher, groupingBy/counting, сортировка, try-with-resources, IOException handling.",
      "difficulty": "hard"
    },
    {
      "id": "p038",
      "topic": "Java и Spring",
      "title": "equals/hashCode",
      "task": "Создайте класс User(id, email), переопределите equals и hashCode так, чтобы пользователи сравнивались по id. Напишите пример работы с HashSet.",
      "expected": "Ожидается корректный контракт equals/hashCode и демонстрация удаления дубликатов.",
      "difficulty": "medium"
    },
    {
      "id": "p039",
      "topic": "ОС и Linux",
      "title": "Разбор логов Linux",
      "task": "Напишите набор команд Linux, чтобы найти в app.log все строки ERROR за сегодня, посчитать их количество и вывести топ-10 сервисов по числу ошибок.",
      "expected": "Ожидается grep/awk/sort/uniq/head или аналог.",
      "difficulty": "medium"
    },
    {
      "id": "p040",
      "topic": "Сети и HTTP",
      "title": "Диагностика недоступного сайта",
      "task": "Опишите порядок диагностики: домен не открывается в браузере. Какие команды используете и что проверяете?",
      "expected": "Ожидается ping/dig/nslookup/curl/traceroute, DNS, порт, TLS, HTTP status, firewall.",
      "difficulty": "base"
    },
    {
      "id": "p041",
      "topic": "Docker, Kubernetes и инфраструктура",
      "title": "Docker Compose для web + db",
      "task": "Напишите docker-compose.yml для локального web-приложения и PostgreSQL. Добавьте env, volumes, ports и healthcheck.",
      "expected": "Ожидается services web/db, postgres volume, depends_on/healthcheck, .env.",
      "difficulty": "medium"
    },
    {
      "id": "p042",
      "topic": "Git",
      "title": "Исправление ошибочного коммита",
      "task": "Вы случайно закоммитили лишний файл. Покажите варианты исправления, если коммит ещё не отправлен и если уже отправлен в общий репозиторий.",
      "expected": "Ожидается reset/amend для локального, revert или новый коммит для опубликованного.",
      "difficulty": "base"
    },
    {
      "id": "p043",
      "topic": "Архитектура, микросервисы и C4",
      "title": "Спроектировать API для сервиса вопросов",
      "task": "Спроектируйте API для банка вопросов ГЭК: темы, тесты, устные, практические задания, генерация билета. Опишите ресурсы и методы.",
      "expected": "Ожидается REST endpoints, модели данных, фильтры по topic/difficulty, генерация билета.",
      "difficulty": "medium"
    }
  ]
};

window.GEC_DATA.meta.version = "1.1.0";

window.GEC_DATA.tests.push(
  {
    "id": "t202",
    "topic": "Java и Spring",
    "question": "Что произойдёт, если поток вызовет wait() у объекта, монитор которого он захватил, но notify()/notifyAll() никогда не будет вызван?",
    "options": [
      "Поток освободит монитор и останется ждать до interruption/timeout или уведомления",
      "Поток продолжит выполнение сразу после wait()",
      "Монитор останется захваченным на всё время ожидания",
      "JVM автоматически вызовет notifyAll()"
    ],
    "answer": 0,
    "explanation": "wait() освобождает монитор и переводит поток в ожидание. Без notify/notifyAll, timeout или interruption поток может ждать бесконечно.",
    "difficulty": "medium"
  },
  {
    "id": "t203",
    "topic": "Java и Spring",
    "question": "Какая реализация Map сохраняет порядок вставки элементов?",
    "options": [
      "HashMap",
      "LinkedHashMap",
      "TreeMap",
      "WeakHashMap"
    ],
    "answer": 1,
    "explanation": "LinkedHashMap хранит двусвязный список записей и по умолчанию итерируется в порядке вставки.",
    "difficulty": "medium"
  },
  {
    "id": "t204",
    "topic": "Java и Spring",
    "question": "Какой Stream API pipeline корректно собирает ненулевые элементы в List?",
    "options": [
      "stream.filter(Objects::nonNull).collect(Collectors.toList())",
      "stream.collect(Objects::nonNull).toList()",
      "stream.map(Objects::nonNull).collect(Collectors.toList())",
      "stream.reduce(Collectors.toList())"
    ],
    "answer": 0,
    "explanation": "filter оставляет только элементы, для которых предикат true, а collect(Collectors.toList()) собирает результат в список.",
    "difficulty": "medium"
  },
  {
    "id": "t205",
    "topic": "Java и Spring",
    "question": "Какое утверждение о volatile в Java верно?",
    "options": [
      "volatile делает compound-операции вроде count++ атомарными",
      "volatile гарантирует видимость изменений между потоками и запрещает часть переупорядочиваний",
      "volatile заменяет synchronized для любых критических секций",
      "volatile применим только к final-полям"
    ],
    "answer": 1,
    "explanation": "volatile даёт happens-before для чтения/записи переменной, но не делает составные операции атомарными.",
    "difficulty": "hard"
  },
  {
    "id": "t206",
    "topic": "Java и Spring",
    "question": "Что из перечисленного НЕ является областью памяти JVM?",
    "options": [
      "Heap",
      "Thread stack",
      "Code Cache",
      "RAM Cache"
    ],
    "answer": 3,
    "explanation": "RAM Cache не является стандартной runtime-областью памяти JVM, в отличие от heap, stack и code cache.",
    "difficulty": "medium"
  },
  {
    "id": "t207",
    "topic": "Java и Spring",
    "question": "Нужна ли @Autowired на единственном конструкторе Spring-компонента в современных версиях Spring?",
    "options": [
      "Да, без неё бин никогда не создастся",
      "Нет, если конструктор единственный, Spring использует его автоматически",
      "Да, но только в @Controller",
      "Нет, constructor injection в Spring невозможен"
    ],
    "answer": 1,
    "explanation": "При единственном конструкторе Spring может выполнить constructor injection без явной @Autowired.",
    "difficulty": "medium"
  },
  {
    "id": "t208",
    "topic": "Java и Spring",
    "question": "Что из перечисленного является функциональным интерфейсом?",
    "options": [
      "Runnable",
      "Iterable",
      "String",
      "ArrayList"
    ],
    "answer": 0,
    "explanation": "Runnable имеет один абстрактный метод run(), поэтому подходит для lambda-выражений.",
    "difficulty": "medium"
  },
  {
    "id": "t209",
    "topic": "Java и Spring",
    "question": "Что создаёт Executors.newFixedThreadPool(10)?",
    "options": [
      "Пул с максимум 10 рабочими потоками и неограниченной очередью задач",
      "Новый поток на каждую задачу без ограничений",
      "ForkJoinPool с work-stealing",
      "Планировщик задач с cron-выражениями"
    ],
    "answer": 0,
    "explanation": "newFixedThreadPool создаёт ThreadPoolExecutor с фиксированным числом потоков и LinkedBlockingQueue.",
    "difficulty": "medium"
  },
  {
    "id": "t210",
    "topic": "Java и Spring",
    "question": "Что такое false sharing в многопоточных приложениях?",
    "options": [
      "Ситуация, когда потоки меняют разные переменные в одной cache line и мешают кешированию друг друга",
      "Ошибка, при которой два потока используют один и тот же объект без equals()",
      "Случайная потеря данных из-за GC",
      "Дублирование HTTP-запроса в Spring MVC"
    ],
    "answer": 0,
    "explanation": "False sharing вызывает лишнюю invalidation cache line, даже если потоки логически работают с разными полями.",
    "difficulty": "hard"
  },
  {
    "id": "t211",
    "topic": "Java и Spring",
    "question": "Какая аннотация Spring Boot обычно включает auto-configuration, component scan и configuration?",
    "options": [
      "@SpringBootApplication",
      "@EnableWebServer",
      "@RunServer",
      "@AutoInject"
    ],
    "answer": 0,
    "explanation": "@SpringBootApplication объединяет @SpringBootConfiguration, @EnableAutoConfiguration и @ComponentScan.",
    "difficulty": "medium"
  },
  {
    "id": "t212",
    "topic": "Java и Spring",
    "question": "Какой паттерн позволяет менять поведение объекта во время выполнения за счёт замены алгоритма?",
    "options": [
      "Strategy",
      "Singleton",
      "Factory Method",
      "Adapter"
    ],
    "answer": 0,
    "explanation": "Strategy инкапсулирует семейство алгоритмов и позволяет выбирать конкретную стратегию во время выполнения.",
    "difficulty": "medium"
  },
  {
    "id": "t213",
    "topic": "Java и Spring",
    "question": "Какая стратегия генерации идентификаторов JPA хранит следующее значение в отдельной таблице?",
    "options": [
      "GenerationType.IDENTITY",
      "GenerationType.SEQUENCE",
      "GenerationType.TABLE",
      "GenerationType.AUTO_INCREMENT"
    ],
    "answer": 2,
    "explanation": "TABLE использует таблицу генератора, что обычно медленнее sequence/identity.",
    "difficulty": "hard"
  },
  {
    "id": "t214",
    "topic": "Java и Spring",
    "question": "Какая аннотация JUnit 5 выполняет метод перед каждым тестом?",
    "options": [
      "@BeforeEach",
      "@BeforeAll",
      "@BeforeTest",
      "@SetupEach"
    ],
    "answer": 0,
    "explanation": "@BeforeEach запускается перед каждым @Test; @BeforeAll - один раз перед всеми тестами класса.",
    "difficulty": "medium"
  },
  {
    "id": "t215",
    "topic": "Java и Spring",
    "question": "Какое утверждение о микросервисной архитектуре неверно?",
    "options": [
      "Сервисы могут разворачиваться независимо",
      "Сервисы взаимодействуют через сетевые протоколы",
      "Все сервисы обязаны использовать одну общую базу данных",
      "Каждый сервис отвечает за свою бизнес-область"
    ],
    "answer": 2,
    "explanation": "Общая БД для всех сервисов усиливает связность и противоречит идее независимых границ владения данными.",
    "difficulty": "medium"
  },
  {
    "id": "t216",
    "topic": "SQL и базы данных",
    "question": "Почему индекс по колонке может не использоваться при условии WHERE lower(email) = 'a@b.ru'?",
    "options": [
      "Потому что функция над колонкой меняет выражение поиска, если нет функционального индекса",
      "Потому что индексы не работают со строками",
      "Потому что WHERE всегда выполняется после SELECT",
      "Потому что lower() отключает транзакции"
    ],
    "answer": 0,
    "explanation": "Обычный индекс по email не равен индексу по lower(email). Нужен functional index или нормализация значения.",
    "difficulty": "hard"
  },
  {
    "id": "t217",
    "topic": "SQL и базы данных",
    "question": "Какой уровень изоляции PostgreSQL предотвращает dirty read, non-repeatable read и phantom read за счёт сериализуемого порядка транзакций?",
    "options": [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable"
    ],
    "answer": 3,
    "explanation": "Serializable даёт эффект последовательного выполнения транзакций, но может требовать retry при serialization failure.",
    "difficulty": "hard"
  },
  {
    "id": "t218",
    "topic": "SQL и базы данных",
    "question": "Что обычно означает N+1 проблема в ORM?",
    "options": [
      "Один запрос за списком и отдельный запрос за связанными данными для каждой строки",
      "Ошибка индексации массива с нуля",
      "Слишком много колонок в SELECT",
      "Наличие одной лишней миграции"
    ],
    "answer": 0,
    "explanation": "N+1 резко увеличивает число запросов. Лечат join fetch, prefetch/select_related или batch loading.",
    "difficulty": "medium"
  },
  {
    "id": "t219",
    "topic": "Python",
    "question": "Почему изменяемый объект как значение аргумента по умолчанию может быть опасен?",
    "options": [
      "Он создаётся один раз при определении функции и переиспользуется между вызовами",
      "Он пересоздаётся на каждой итерации цикла",
      "Он всегда копируется глубоко",
      "Он запрещает передачу именованных аргументов"
    ],
    "answer": 0,
    "explanation": "Например, def f(x=[]): будет использовать один и тот же список между вызовами функции.",
    "difficulty": "medium"
  },
  {
    "id": "t220",
    "topic": "Python",
    "question": "Что делает descriptor protocol в Python?",
    "options": [
      "Позволяет объекту управлять доступом к атрибуту через __get__, __set__ и __delete__",
      "Автоматически сериализует объект в JSON",
      "Запускает отдельный поток для каждого метода",
      "Запрещает наследование класса"
    ],
    "answer": 0,
    "explanation": "Descriptors лежат в основе property, методов классов и многих ORM-полей.",
    "difficulty": "hard"
  },
  {
    "id": "t221",
    "topic": "Python",
    "question": "Почему GIL не гарантирует потокобезопасность операций над бизнес-состоянием?",
    "options": [
      "GIL защищает выполнение байткода, но составные операции всё равно могут перемежаться между потоками",
      "GIL отключает все блокировки",
      "GIL работает только в PyPy",
      "GIL делает multiprocessing невозможным"
    ],
    "answer": 0,
    "explanation": "Состояние вроде read-modify-write нужно защищать lock-ами или проектировать без shared mutable state.",
    "difficulty": "hard"
  },
  {
    "id": "t222",
    "topic": "Алгоритмы и структуры данных",
    "question": "Какова асимптотика поиска в хеш-таблице при большом числе коллизий в одной корзине без балансировки?",
    "options": [
      "O(1) всегда",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "В худшем случае все ключи попадают в одну цепочку, и поиск становится линейным.",
    "difficulty": "medium"
  },
  {
    "id": "t223",
    "topic": "Алгоритмы и структуры данных",
    "question": "Почему quicksort имеет худший случай O(n^2)?",
    "options": [
      "Если pivot постоянно делит массив крайне неравномерно",
      "Потому что сравнение двух чисел занимает O(n)",
      "Потому что он всегда использует дополнительную память O(n^2)",
      "Потому что массив нельзя сортировать на месте"
    ],
    "answer": 0,
    "explanation": "При разбиениях 0 и n-1 глубина рекурсии становится O(n), а суммарная работа O(n^2).",
    "difficulty": "medium"
  },
  {
    "id": "t224",
    "topic": "NLP, LLM и текстовый поиск",
    "question": "Почему в RAG-системе опасно оценивать качество только по cosine similarity найденных документов?",
    "options": [
      "Similarity не гарантирует фактическую полезность ответа и не проверяет groundedness генерации",
      "Cosine similarity всегда равна нулю для русских текстов",
      "Similarity нельзя считать для dense embeddings",
      "Она автоматически проверяет hallucination"
    ],
    "answer": 0,
    "explanation": "Нужны метрики retrieval и generation: recall@k, MRR, faithfulness, answer correctness и ручная проверка сложных кейсов.",
    "difficulty": "hard"
  },
  {
    "id": "t225",
    "topic": "NLP, LLM и текстовый поиск",
    "question": "Зачем при гибридном поиске объединяют BM25 и vector search?",
    "options": [
      "Чтобы совместить точные лексические совпадения и семантическую близость",
      "Чтобы полностью отказаться от ранжирования",
      "Чтобы заменить индексацию регулярными выражениями",
      "Чтобы векторная модель обучалась внутри SQL-запроса"
    ],
    "answer": 0,
    "explanation": "BM25 хорошо ловит термины и редкие слова, vector search - смысловую близость. Их часто объединяют reranking-ом.",
    "difficulty": "medium"
  },
  {
    "id": "t226",
    "topic": "Машинное обучение и Data Science",
    "question": "Почему leakage через признак, появляющийся после целевого события, делает модель непригодной?",
    "options": [
      "Модель видит информацию из будущего и показывает завышенное качество на валидации",
      "Модель становится слишком маленькой",
      "Признак автоматически удаляет выбросы",
      "Leakage влияет только на скорость обучения"
    ],
    "answer": 0,
    "explanation": "Data leakage нарушает реалистичность train/test и приводит к провалу на настоящих новых данных.",
    "difficulty": "hard"
  },
  {
    "id": "t227",
    "topic": "Машинное обучение и Data Science",
    "question": "Когда stratified split особенно важен?",
    "options": [
      "При классификации с дисбалансом классов",
      "При любой регрессии с MSE",
      "Только при unsupervised learning",
      "Только когда признаков больше миллиона"
    ],
    "answer": 0,
    "explanation": "Stratification сохраняет пропорции классов в train/test и снижает риск нерепрезентативной оценки.",
    "difficulty": "medium"
  },
  {
    "id": "t228",
    "topic": "Web, HTML/CSS/JS и Django",
    "question": "Почему innerHTML с пользовательским вводом опасен?",
    "options": [
      "Он может выполнить внедрённый HTML/скрипт и привести к XSS",
      "Он всегда очищает DOM от событий",
      "Он запрещён во всех браузерах",
      "Он работает только с CSS"
    ],
    "answer": 0,
    "explanation": "Пользовательский HTML нужно экранировать, санитизировать или вставлять как textContent.",
    "difficulty": "medium"
  },
  {
    "id": "t229",
    "topic": "Web, HTML/CSS/JS и Django",
    "question": "Для чего в Django используют select_related?",
    "options": [
      "Чтобы загрузить связанные ForeignKey/OneToOne объекты одним SQL JOIN",
      "Чтобы выбрать CSS-класс элемента",
      "Чтобы создать миграцию",
      "Чтобы включить CSRF"
    ],
    "answer": 0,
    "explanation": "select_related помогает убрать N+1 запросы для одиночных связей.",
    "difficulty": "medium"
  },
  {
    "id": "t230",
    "topic": "ОС и Linux",
    "question": "Что показывает код завершения процесса 0 в Unix/Linux?",
    "options": [
      "Успешное завершение",
      "Сегментационную ошибку",
      "Процесс был остановлен SIGKILL",
      "Команда не найдена"
    ],
    "answer": 0,
    "explanation": "По соглашению exit code 0 означает успех, ненулевые коды - ошибки или особые состояния.",
    "difficulty": "medium"
  },
  {
    "id": "t231",
    "topic": "ОС и Linux",
    "question": "Почему команда chmod 777 для веб-каталога обычно плохая идея?",
    "options": [
      "Она даёт запись всем пользователям и увеличивает риск компрометации",
      "Она делает каталог только для чтения",
      "Она запрещает запуск файлов владельцу",
      "Она отключает сетевой порт"
    ],
    "answer": 0,
    "explanation": "Права нужно выдавать минимально необходимым пользователям и группам.",
    "difficulty": "medium"
  },
  {
    "id": "t232",
    "topic": "Сети и HTTP",
    "question": "Почему PUT считается идемпотентным, а POST обычно нет?",
    "options": [
      "Повтор одного и того же PUT приводит ресурс к тому же состоянию, POST часто создаёт новое действие/ресурс",
      "PUT никогда не изменяет данные",
      "POST всегда кешируется браузером",
      "PUT работает только через HTTPS"
    ],
    "answer": 0,
    "explanation": "Идемпотентность описывает эффект повторного одинакового запроса на состояние системы.",
    "difficulty": "medium"
  },
  {
    "id": "t233",
    "topic": "Сети и HTTP",
    "question": "Что проверяет SNI при TLS-подключении к виртуальному хосту?",
    "options": [
      "Имя хоста, которое клиент передаёт серверу до выбора сертификата",
      "Размер TCP-окна",
      "Версию HTML-документа",
      "Количество DNS NS-записей"
    ],
    "answer": 0,
    "explanation": "SNI позволяет серверу выбрать правильный сертификат для домена на одном IP.",
    "difficulty": "hard"
  },
  {
    "id": "t234",
    "topic": "Архитектура, микросервисы и C4",
    "question": "Какой риск появляется при синхронной цепочке service A -> B -> C -> D?",
    "options": [
      "Рост задержки и каскадные отказы при проблеме в глубине цепочки",
      "Автоматическая транзакционность всех сервисов",
      "Невозможность логирования",
      "Запрет горизонтального масштабирования"
    ],
    "answer": 0,
    "explanation": "Длинные синхронные цепочки требуют timeouts, retries, circuit breaker и осознанных границ ответственности.",
    "difficulty": "hard"
  },
  {
    "id": "t235",
    "topic": "Архитектура, микросервисы и C4",
    "question": "Что показывает уровень Container в модели C4?",
    "options": [
      "Основные приложения/сервисы/хранилища внутри системы и их взаимодействия",
      "Только Docker-контейнеры",
      "Последовательность вызовов методов",
      "Физическое расположение серверов в стойке"
    ],
    "answer": 0,
    "explanation": "В C4 container - это разворачиваемая или исполняемая часть системы, не обязательно Docker.",
    "difficulty": "medium"
  },
  {
    "id": "t236",
    "topic": "Docker, Kubernetes и инфраструктура",
    "question": "Почему контейнер без healthcheck может считаться running, хотя приложение внутри не готово?",
    "options": [
      "Docker видит только состояние процесса, а не прикладную готовность сервиса",
      "Docker никогда не отслеживает процессы",
      "Healthcheck нужен только для баз данных",
      "Running означает успешный HTTP 200"
    ],
    "answer": 0,
    "explanation": "Healthcheck проверяет прикладной сценарий готовности, например HTTP endpoint или команду диагностики.",
    "difficulty": "medium"
  },
  {
    "id": "t237",
    "topic": "Docker, Kubernetes и инфраструктура",
    "question": "Зачем в Kubernetes разделяют readinessProbe и livenessProbe?",
    "options": [
      "Readiness управляет получением трафика, liveness - перезапуском зависшего контейнера",
      "Readiness перезапускает контейнер, liveness масштабирует deployment",
      "Обе проверки полностью одинаковы",
      "Они нужны только StatefulSet"
    ],
    "answer": 0,
    "explanation": "Неправильное смешивание probes может вызвать лишние рестарты или отправку трафика в неготовый pod.",
    "difficulty": "hard"
  },
  {
    "id": "t238",
    "topic": "Git",
    "question": "Почему force push в общую ветку опасен?",
    "options": [
      "Он переписывает удалённую историю и может сломать работу других участников",
      "Он удаляет Git с сервера",
      "Он делает все коммиты read-only",
      "Он запрещает pull request"
    ],
    "answer": 0,
    "explanation": "Если нужен force push, безопаснее использовать --force-with-lease и понимать, чью историю переписываете.",
    "difficulty": "medium"
  },
  {
    "id": "t239",
    "topic": "Git",
    "question": "Когда git revert предпочтительнее git reset для уже опубликованного коммита?",
    "options": [
      "Когда нужно отменить изменения без переписывания общей истории",
      "Когда нужно удалить весь репозиторий",
      "Когда коммит ещё не создан",
      "Когда нужно изменить remote URL"
    ],
    "answer": 0,
    "explanation": "revert создаёт новый коммит с обратным изменением и сохраняет историю для остальных участников.",
    "difficulty": "medium"
  },
  {
    "id": "t240",
    "topic": "Cloud и ITSM",
    "question": "Чем SLO отличается от SLA?",
    "options": [
      "SLO - внутренний целевой показатель качества, SLA - договорённость с пользователем/клиентом с последствиями",
      "SLO всегда юридический договор, SLA только метрика CPU",
      "SLO используется только в Docker",
      "SLA не связан с качеством сервиса"
    ],
    "answer": 0,
    "explanation": "SLO помогает управлять надёжностью, SLA фиксирует обещания и часто ответственность.",
    "difficulty": "medium"
  },
  {
    "id": "t241",
    "topic": "Cloud и ITSM",
    "question": "Что такое error budget в SRE-подходе?",
    "options": [
      "Допустимый объём недоступности/ошибок относительно SLO",
      "Сумма денег на покупку серверов",
      "Количество исключений в коде",
      "Лимит Docker images"
    ],
    "answer": 0,
    "explanation": "Error budget помогает балансировать скорость изменений и надёжность сервиса.",
    "difficulty": "hard"
  },
  {
    "id": "t242",
    "topic": "SQL и базы данных",
    "question": "Почему foreign key без индекса на дочерней таблице может замедлять DELETE из родительской таблицы?",
    "options": [
      "СУБД должна проверять ссылки в дочерней таблице, и без индекса это может стать полным сканированием",
      "Foreign key всегда создаёт hash join",
      "DELETE не работает с foreign key",
      "Индекс нужен только для SELECT"
    ],
    "answer": 0,
    "explanation": "Индекс на дочернем FK помогает быстро найти зависимые строки при проверках и каскадных операциях.",
    "difficulty": "hard"
  },
  {
    "id": "t243",
    "topic": "Машинное обучение и Data Science",
    "question": "Почему accuracy может вводить в заблуждение при сильном дисбалансе классов?",
    "options": [
      "Модель может всегда предсказывать большинство и получить высокий accuracy при плохом recall меньшинства",
      "Accuracy нельзя считать для бинарной классификации",
      "Accuracy равна loss",
      "Accuracy всегда меньше F1"
    ],
    "answer": 0,
    "explanation": "При дисбалансе нужно смотреть precision, recall, F1, PR-AUC и confusion matrix.",
    "difficulty": "medium"
  },
  {
    "id": "t244",
    "topic": "Web, HTML/CSS/JS и Django",
    "question": "Почему CSRF-защита важна для cookie-based аутентификации?",
    "options": [
      "Браузер автоматически прикладывает cookie к запросу на домен, и злоумышленник может инициировать действие со сторонней страницы",
      "CSRF нужен только для GET-запросов",
      "Cookie никогда не отправляются автоматически",
      "CSRF защищает от SQL-инъекций напрямую"
    ],
    "answer": 0,
    "explanation": "CSRF-токен подтверждает, что действие инициировано легитимной страницей приложения.",
    "difficulty": "hard"
  },
  {
    "id": "t245",
    "topic": "Docker, Kubernetes и инфраструктура",
    "question": "Почему secrets не стоит передавать в Docker image через ARG?",
    "options": [
      "ARG может попасть в историю слоёв/metadata образа и утечь при публикации",
      "ARG доступен только после удаления контейнера",
      "ARG шифруется Docker по умолчанию",
      "ARG запрещает build cache"
    ],
    "answer": 0,
    "explanation": "Секреты лучше передавать runtime-механизмами, secret store или безопасными переменными окружения.",
    "difficulty": "hard"
  },
  {
    "id": "t246",
    "topic": "Сети и HTTP",
    "question": "Что может означать успешный ping при недоступности сайта по HTTPS?",
    "options": [
      "ICMP до хоста проходит, но TCP 443, TLS, HTTP-сервис или firewall могут быть проблемой",
      "HTTPS обязан работать, если ping успешен",
      "DNS всегда сломан",
      "Сайт работает только по UDP"
    ],
    "answer": 0,
    "explanation": "Диагностика должна отдельно проверять DNS, TCP-порт, TLS handshake и HTTP-ответ.",
    "difficulty": "medium"
  }
);

window.GEC_DATA.oral.push(
  {
    "id": "o042",
    "topic": "Java и Spring",
    "question": "Объясните разницу между visibility, atomicity и ordering в Java Memory Model на примере volatile и synchronized.",
    "answer": "Visibility означает, что поток видит изменения другого потока. Atomicity означает неделимость операции. Ordering ограничивает переупорядочивание. volatile даёт visibility и ordering для одной переменной, но не атомарность составных операций; synchronized даёт взаимное исключение и happens-before при входе/выходе из монитора.",
    "keywords": ["JMM", "volatile", "synchronized", "happens-before"],
    "difficulty": "hard"
  },
  {
    "id": "o043",
    "topic": "SQL и базы данных",
    "question": "Как диагностировать медленный SQL-запрос и какие выводы можно сделать из EXPLAIN ANALYZE?",
    "answer": "Нужно смотреть план выполнения, фактическое и ожидаемое число строк, типы join, seq/index scan, сортировки, использование временных файлов, время узлов плана. Затем проверить индексы, статистику, селективность условий, N+1 и необходимость переписать запрос.",
    "keywords": ["EXPLAIN ANALYZE", "index scan", "seq scan", "statistics"],
    "difficulty": "hard"
  },
  {
    "id": "o044",
    "topic": "NLP, LLM и текстовый поиск",
    "question": "Какие ошибки бывают в RAG-пайплайне и как отделить проблему retrieval от проблемы генерации?",
    "answer": "Retrieval-проблемы видны, когда нужный документ не попал в top-k или ранжируется низко. Generation-проблемы появляются, когда контекст релевантный, но ответ искажает факты. Проверяют recall@k/MRR, ручные golden-наборы, reranking, цитирование источников и метрики groundedness.",
    "keywords": ["RAG", "retrieval", "reranking", "groundedness"],
    "difficulty": "hard"
  },
  {
    "id": "o045",
    "topic": "Docker, Kubernetes и инфраструктура",
    "question": "Чем отличаются readinessProbe и livenessProbe и почему неверная настройка может ухудшить доступность?",
    "answer": "ReadinessProbe отвечает, можно ли отправлять pod трафик. LivenessProbe отвечает, нужно ли перезапустить контейнер. Если liveness проверяет внешнюю зависимость или слишком агрессивна, сервис может уйти в цикл рестартов; если readiness слаба, трафик попадёт в неготовый pod.",
    "keywords": ["readinessProbe", "livenessProbe", "availability"],
    "difficulty": "medium"
  }
);

window.GEC_DATA.practice.push(
  {
    "id": "p044",
    "topic": "NLP, LLM и текстовый поиск",
    "title": "Оценка RAG на golden-наборе",
    "task": "Спроектируйте мини-пайплайн оценки RAG: есть 50 вопросов, ожидаемые источники и эталонные ответы. Опишите метрики retrieval и генерации, формат отчёта и действия при плохом recall@5.",
    "expected": "Ожидается разделение retrieval/generation, recall@k/MRR, проверка groundedness, анализ ошибок chunking/embedding/rerank и план улучшений.",
    "difficulty": "hard"
  },
  {
    "id": "p045",
    "topic": "SQL и базы данных",
    "title": "Оптимизация отчётного SQL-запроса",
    "task": "Дан медленный отчёт по заказам за месяц с join users/orders/payments. Опишите, как снять EXPLAIN ANALYZE, какие индексы проверить и как убедиться, что оптимизация не меняет результат.",
    "expected": "Ожидается план диагностики, индексы на FK/date/status, сравнение результатов до/после, проверка NULL/дубликатов и регрессионный SQL-кейс.",
    "difficulty": "hard"
  },
  {
    "id": "p046",
    "topic": "Docker, Kubernetes и инфраструктура",
    "title": "Compose-деплой статического сайта",
    "task": "Сделайте Dockerfile и docker-compose.yml для статического сайта на nginx. Добавьте порт из env, restart policy и healthcheck. Опишите команды деплоя и rollback.",
    "expected": "Ожидается nginx image, COPY статических файлов, SITE_PORT, docker compose up -d --build, healthcheck и понятный rollback через предыдущую версию.",
    "difficulty": "medium"
  },
  {
    "id": "p047",
    "topic": "Web, HTML/CSS/JS и Django",
    "title": "Защита формы от XSS и CSRF",
    "task": "Есть форма комментариев с cookie-based логином. Опишите и реализуйте меры против stored XSS и CSRF, включая серверную и клиентскую часть.",
    "expected": "Ожидается экранирование/санитизация вывода, запрет опасного HTML, CSRF token, SameSite cookie, проверки negative cases.",
    "difficulty": "hard"
  }
);

const balancedAnswerOptions = {
  "t002": [
    "Дерево условий, где узлы проверяют признаки, а листья дают результат",
    "Диаграмма для показа связей между признаками и таблицами данных",
    "Статистический тест для проверки одной заранее заданной гипотезы",
    "Метод шифрования данных с разветвлением ключей по условиям"
  ],
  "t010": [
    "Модель плохо учится даже на train и не ловит основные закономерности",
    "Модель подстроилась под train и хуже работает на новых данных",
    "Модель обучается без меток и сама ищет скрытые группы объектов",
    "Модель использует один признак и не делает дополнительных проверок"
  ],
  "t015": [
    "Штраф за сложность модели, который помогает уменьшить переобучение",
    "Удаление всех строк с пропусками перед обучением модели на данных",
    "Сортировка строк датасета перед построением итоговой модели",
    "Нормализация признаков без изменения функции потерь модели"
  ],
  "t017": [
    "Создание и преобразование признаков для повышения качества модели",
    "Удаление обученной модели из памяти после завершения эксперимента",
    "Построение графиков без изменения признакового пространства",
    "Выбор метрики качества без подготовки дополнительных признаков"
  ],
  "t018": [
    "Оценить качество модели устойчивее на разных разбиениях данных",
    "Удалить дубликаты и пропуски перед запуском обучения модели",
    "Закодировать категории числами перед передачей данных модели",
    "Ускорить SQL-запрос к таблице с обучающей выборкой данных"
  ],
  "t019": [
    "Кодирует категориальные признаки целыми числами по алфавиту",
    "Приводит признаки к среднему 0 и стандартному отклонению 1",
    "Удаляет выбросы из выборки по межквартильному размаху",
    "Строит ансамбль деревьев для классификации и регрессии"
  ],
  "t035": [
    "Оценка роста времени или памяти алгоритма при увеличении входа",
    "Способ хранения таблиц в базе данных с заранее заданным ключом",
    "Правило оформления CSS-селекторов в адаптивной вёрстке сайта",
    "Метод HTTP-запроса для изменения состояния ресурса на сервере"
  ],
  "t038": [
    "Кратчайшие пути от одной вершины в графе с неотрицательными весами",
    "Минимальный остов графа по сумме весов всех выбранных рёбер",
    "Максимальный поток между истоком и стоком в ориентированной сети",
    "Отсортированный массив значений без использования графовой модели"
  ],
  "t050": [
    "Объект, который оборачивает функцию и расширяет её поведение",
    "Конструкция цикла, которая повторяет блок кода заданное число раз",
    "Оператор SQL, который объединяет строки из нескольких таблиц",
    "Файл настроек, который хранит параметры запуска приложения"
  ],
  "t053": [
    "Открывает файл и гарантирует закрытие через контекстный менеджер",
    "Создаёт класс с методами и атрибутами для работы с объектами",
    "Сортирует строки файла по алфавиту без чтения содержимого",
    "Запускает отдельный поток для параллельной обработки файла"
  ],
  "t058": [
    "Объединяет элементы последовательностей по позициям в пары",
    "Архивирует файл в zip-формат с сохранением исходного имени",
    "Сортирует числа по возрастанию и возвращает новый список",
    "Удаляет значения None из последовательности без изменения порядка"
  ],
  "t063": [
    "Глобальная блокировка, ограничивающая параллельный байткод потоков",
    "Хранилище данных, которое управляет таблицами и SQL-запросами",
    "Тип JOIN, который соединяет таблицы по совпадающим ключам",
    "Механизм Java, который освобождает память от объектов"
  ],
  "t086": [
    "Функция по окну строк без схлопывания результата как GROUP BY",
    "Функция браузера, которая открывает новое окно с документом",
    "Тип индекса, который ускоряет поиск по одному полю таблицы",
    "Агрегат SUM, который всегда возвращает одну строку на таблицу"
  ],
  "t091": [
    "Подход, где модель дополняется найденным внешним контекстом",
    "Алгоритм сортировки массива с разбиением по опорному элементу",
    "Тип SQL-индекса для ускорения поиска по текстовым колонкам",
    "Способ развёртывания контейнеров через Docker Compose"
  ],
  "t096": [
    "Модель, обученная на больших корпусах для обработки языка",
    "Сервер SQL, который хранит данные и выполняет запросы к таблицам",
    "Веб-сайт, который показывает текстовые страницы пользователю",
    "Модель для сжатия изображений и восстановления пикселей"
  ],
  "t097": [
    "Переупорядочить найденные документы по релевантности запросу",
    "Удалить базу данных после завершения поиска по документам",
    "Сжать CSS-файлы перед публикацией статического сайта",
    "Запустить JVM для выполнения Java-приложения на сервере"
  ],
  "t098": [
    "Инструкция модели о роли, ограничениях и формате ответа",
    "Команда Linux для запуска процесса в интерактивной оболочке",
    "SQL-индекс для ускорения поиска по колонкам таблицы",
    "HTML-форма для ввода данных пользователем на странице"
  ],
  "t100": [
    "Уверенная генерация неверной или неподтверждённой информации",
    "Сжатие модели для уменьшения памяти и ускорения инференса",
    "Тип слоя LSTM для обработки последовательностей токенов",
    "Обучение с учителем на размеченной выборке объектов"
  ],
  "t102": [
    "Разбиение документов на фрагменты перед индексацией и поиском",
    "Удаление CSS-правил из страницы перед сборкой статического сайта",
    "Группировка строк SQL-запроса по одному или нескольким полям",
    "Компиляция Java-классов перед запуском приложения в JVM"
  ],
  "t103": [
    "Частые служебные слова, которые иногда исключают из анализа",
    "Ошибки сервера, которые появляются при недоступности HTTP API",
    "Завершающие токены Java, которые закрывают блок выполнения",
    "Файлы логов, которые хранят события работы приложения"
  ],
  "t118": [
    "Архитектурный подход к API с ресурсами и HTTP-методами",
    "База данных, которая хранит таблицы и связи между ними",
    "HTML-шаблон, который формирует разметку страницы сайта",
    "Метод машинного обучения для предсказания числовых значений"
  ],
  "t121": [
    "Промежуточный слой обработки request и response в Django",
    "CSS-селектор для выбора элементов по классу или атрибуту",
    "SQL-ключ для уникальной идентификации строки в таблице",
    "Java-аннотация для регистрации компонента в контейнере"
  ],
  "t123": [
    "Поток может ждать до прерывания, таймаута или уведомления",
    "Поток сразу продолжит выполнение без ожидания монитора объекта",
    "Метод удалит объект из памяти и завершит работу сборщика мусора",
    "Метод создаст новый поток и передаст ему захваченный монитор"
  ],
  "t125": [
    "Гарантирует видимость изменений переменной между потоками",
    "Делает операцию ++ атомарной при любом количестве потоков",
    "Создаёт отдельный lock для каждой операции чтения переменной",
    "Запрещает чтение переменной после первого изменения значения"
  ],
  "t133": [
    "Объявляет REST-контроллер, методы которого возвращают тело ответа",
    "Создаёт таблицу базы данных по описанию JPA-сущности класса",
    "Запускает JUnit-тест перед каждым методом контроллера Spring",
    "Делает поле volatile для синхронизации значений между потоками"
  ],
  "t134": [
    "API для декларативной обработки последовательностей данных",
    "Сетевой протокол для передачи байтового потока между хостами",
    "Тип потока ОС, который выполняет процессорные инструкции",
    "SQL-движок для оптимизации и выполнения запросов к таблицам"
  ],
  "t136": [
    "Класс для асинхронных вычислений и композиции результатов",
    "Реализация Map, которая хранит пары ключей и значений",
    "Аннотация Spring для внедрения зависимости через конструктор",
    "Сборщик мусора, который освобождает недостижимые объекты"
  ],
  "t137": [
    "Потокобезопасная хеш-таблица для конкурентного доступа",
    "Список с порядком вставки и доступом по числовому индексу",
    "Аннотация JPA для описания связи между двумя сущностями",
    "Тип исключения, который возникает при сетевой ошибке"
  ],
  "t138": [
    "Потоки меняют разные переменные в одной cache line и мешают друг другу",
    "Два сервиса используют одну базу данных и нарушают границы владения",
    "JSON содержит неверный тип поля и не проходит валидацию схемы",
    "SQL JOIN соединяет таблицы без подходящего условия связи"
  ],
  "t139": [
    "Механизм автоматического освобождения памяти от недостижимых объектов",
    "Сортировщик коллекций, который меняет порядок элементов списка",
    "HTTP-клиент для отправки запросов к REST-сервисам приложения",
    "Тип потока, который выполняет задачу в пуле ExecutorService"
  ],
  "t141": [
    "Контейнер для значения, которое может отсутствовать",
    "Поток ОС для параллельного выполнения участка программы",
    "Тип транзакции с отдельным уровнем изоляции в базе данных",
    "Аннотация Spring для регистрации компонента приложения"
  ],
  "t161": [
    "Надёжный транспортный протокол с установлением соединения",
    "Протокол выдачи IP-адресов клиентам в локальной сети",
    "Язык разметки документов для отображения страниц в браузере",
    "Тип базы данных для хранения связанных таблиц и записей"
  ],
  "t162": [
    "Транспортный протокол без установления соединения",
    "Язык запросов для выборки и изменения данных в таблицах",
    "Метод шифрования пароля перед сохранением в базе данных",
    "Файловая система для хранения каталогов и пользовательских файлов"
  ],
  "t170": [
    "Приложение, где функциональность разворачивается как единое целое",
    "Класс, который содержит только один метод и не имеет зависимостей",
    "Таблица, которая хранит все данные приложения в одной структуре",
    "Фронтенд без backend-части и без серверной бизнес-логики"
  ],
  "t172": [
    "Входная точка, маршрутизирующая запросы к сервисам",
    "База данных, которая хранит состояние всех микросервисов",
    "CSS-слой для настройки внешнего вида страниц приложения",
    "Область JVM-памяти для хранения объектов во время работы"
  ],
  "t174": [
    "Обмен через события или очереди без немедленного ожидания ответа",
    "Прямой SQL JOIN между таблицами разных сервисов приложения",
    "Функция в памяти, которая вызывается только внутри одного процесса",
    "Шаблон MVC, где контроллер сразу возвращает HTML-страницу"
  ],
  "t178": [
    "Незапланированное прерывание или снижение качества сервиса",
    "Новая функция продукта, которую команда добавляет по плану",
    "Плановая миграция базы данных в заранее согласованное окно",
    "Коммит в Git, который фиксирует изменение исходного кода"
  ],
  "t183": [
    "Механизм постоянного хранения данных вне слоя контейнера",
    "Сетевой порт, через который контейнер принимает HTTP-запросы",
    "Область JVM heap, где хранятся объекты Java-приложения",
    "HTML-тег, который группирует элементы интерфейса страницы"
  ],
  "t184": [
    "Файл описания сервисов, сетей и volume для Docker Compose",
    "Файл Git hooks, который запускает проверки перед коммитом",
    "Схема SQL, которая описывает таблицы и индексы базы данных",
    "CSS reset, который сбрасывает стили браузера по умолчанию"
  ],
  "t186": [
    "Минимальная единица запуска с одним или несколькими контейнерами",
    "SQL-запрос для выборки строк из одной или нескольких таблиц",
    "Git-коммит, который сохраняет изменения в истории проекта",
    "CSS-класс, который задаёт оформление элемента интерфейса"
  ],
  "t188": [
    "Непрерывная интеграция и доставка или развёртывание",
    "Тип SQL JOIN, который соединяет совпавшие строки таблиц",
    "Протокол DHCP для автоматической выдачи сетевых адресов",
    "Стиль CSS для оформления интерактивных элементов страницы"
  ],
  "t192": [
    "Показывает состояние рабочей директории и индекса",
    "Удаляет локальную ветку после завершения работы над задачей",
    "Сливает изменения из другой ветки в текущую ветку проекта",
    "Создаёт Docker image из Dockerfile в текущем каталоге"
  ],
  "t193": [
    "merge создаёт слияние, rebase переносит коммиты на новое основание",
    "Обе команды одинаково объединяют ветки без изменения истории",
    "rebase только удаляет ветку после успешного слияния изменений",
    "merge всегда переписывает историю удалённой общей ветки"
  ],
  "t195": [
    "Платформа для разработки и запуска без управления низким уровнем",
    "Готовая программа для пользователя без доступа к runtime-среде",
    "Виртуальные машины, сети и диски под управлением пользователя",
    "Физический сервер с ручной установкой ОС и приложений"
  ],
  "t197": [
    "Инфраструктура как сервис: виртуальные машины, сети и диски",
    "Готовое приложение как сервис с доступом через браузер",
    "Библиотека Python для анализа данных и построения моделей",
    "SQL-команда для выборки строк из таблицы базы данных"
  ],
  "t200": [
    "Слой для управления межсервисным трафиком, метриками и политиками",
    "CSS-фреймворк для быстрой сборки адаптивных интерфейсов",
    "Тип JOIN, который соединяет таблицы по совпадающим ключам",
    "Формат XML для описания структуры документа и его узлов"
  ],
  "t202": [
    "Поток освободит монитор и будет ждать уведомления, timeout или interruption",
    "Поток продолжит выполнение сразу после wait() без освобождения монитора",
    "Монитор останется захваченным на всё время ожидания потока",
    "JVM автоматически вызовет notifyAll() для всех ожидающих потоков"
  ],
  "t205": [
    "volatile делает compound-операции вроде count++ атомарными",
    "volatile даёт видимость изменений и ограничивает переупорядочивание",
    "volatile заменяет synchronized для любых критических секций",
    "volatile применим только к final-полям и immutable-объектам"
  ],
  "t207": [
    "Да, без неё бин никогда не создастся через контейнер Spring",
    "Нет, единственный конструктор Spring использует автоматически",
    "Да, но только в @Controller и только для web-компонентов",
    "Нет, constructor injection в Spring невозможен для бинов"
  ],
  "t209": [
    "Пул с 10 рабочими потоками и общей очередью задач",
    "Новый поток на каждую задачу без ограничения размера пула",
    "ForkJoinPool с work-stealing для рекурсивных задач",
    "Планировщик задач с cron-выражениями и задержками"
  ],
  "t210": [
    "Потоки меняют разные поля в одной cache line и мешают кешированию",
    "Потоки используют один объект без корректных equals и hashCode",
    "GC случайно удаляет объект, который ещё доступен из потока",
    "Spring MVC дублирует HTTP-запрос при повторной отправке формы"
  ],
  "t216": [
    "Функция над колонкой требует функциональный индекс или нормализацию",
    "Индексы со строковыми колонками в SQL вообще не используются",
    "WHERE всегда выполняется после SELECT и не влияет на план",
    "lower() отключает транзакции и блокирует чтение таблицы"
  ],
  "t218": [
    "Один запрос за списком и отдельные запросы за связями каждой строки",
    "Ошибка индексации массива из-за перехода от нуля к единице",
    "Слишком много колонок в SELECT без фильтрации результата",
    "Одна лишняя миграция, которая не применена к базе данных"
  ],
  "t219": [
    "Он создаётся один раз при определении функции и переиспользуется",
    "Он пересоздаётся на каждой итерации цикла внутри функции",
    "Он всегда копируется глубоко перед передачей в тело функции",
    "Он запрещает передачу именованных аргументов при вызове"
  ],
  "t220": [
    "Управляет доступом к атрибуту через __get__, __set__ и __delete__",
    "Автоматически сериализует объект в JSON перед сохранением",
    "Запускает отдельный поток для каждого метода экземпляра",
    "Запрещает наследование класса и изменение его атрибутов"
  ],
  "t221": [
    "GIL защищает байткод, но составные операции могут перемежаться",
    "GIL отключает все блокировки и делает lock-и бесполезными",
    "GIL работает только в PyPy и не существует в CPython",
    "GIL делает multiprocessing невозможным для CPU-задач"
  ],
  "t224": [
    "Similarity не проверяет полезность ответа и groundedness генерации",
    "Cosine similarity всегда равна нулю для русских текстов",
    "Similarity нельзя считать для dense embeddings и векторов",
    "Она автоматически проверяет hallucination и факты ответа"
  ],
  "t226": [
    "Модель видит информацию из будущего и завышает качество",
    "Модель становится слишком маленькой для обучения на train",
    "Признак автоматически удаляет выбросы из исходной выборки",
    "Leakage влияет только на скорость обучения, а не на качество"
  ],
  "t229": [
    "Загрузить ForeignKey/OneToOne связи одним SQL JOIN",
    "Выбрать CSS-класс элемента при генерации HTML-страницы",
    "Создать миграцию базы данных для новой модели Django",
    "Включить CSRF-проверку для формы с cookie-аутентификацией"
  ],
  "t231": [
    "Она даёт запись всем пользователям и повышает риск компрометации",
    "Она делает каталог только для чтения даже для владельца файлов",
    "Она запрещает запуск файлов владельцу и группе приложения",
    "Она отключает сетевой порт, через который работает веб-сервер"
  ],
  "t232": [
    "Одинаковый PUT приводит ресурс к тому же состоянию, POST часто создаёт действие",
    "PUT никогда не изменяет данные и используется только для чтения",
    "POST всегда кешируется браузером и не доходит до сервера",
    "PUT работает только через HTTPS и не поддерживает тело запроса"
  ],
  "t233": [
    "Имя хоста, которое клиент передаёт серверу до выбора сертификата",
    "Размер TCP-окна, который определяет скорость передачи данных",
    "Версию HTML-документа, которую браузер получил от сервера",
    "Количество DNS NS-записей, доступных для доменной зоны"
  ],
  "t234": [
    "Рост задержки и каскадные отказы при сбое в глубине цепочки",
    "Автоматическая транзакционность всех сервисов в одном запросе",
    "Невозможность логирования запросов между соседними сервисами",
    "Запрет горизонтального масштабирования каждого сервиса отдельно"
  ],
  "t235": [
    "Основные приложения, сервисы и хранилища внутри системы",
    "Только Docker-контейнеры, запущенные на одном сервере",
    "Последовательность вызовов методов внутри одного класса",
    "Физическое расположение серверов в стойке дата-центра"
  ],
  "t236": [
    "Docker видит состояние процесса, но не прикладную готовность сервиса",
    "Docker никогда не отслеживает процессы внутри контейнера",
    "Healthcheck нужен только базам данных и очередям сообщений",
    "Running всегда означает успешный HTTP 200 на главной странице"
  ],
  "t237": [
    "Readiness управляет трафиком, liveness - перезапуском контейнера",
    "Readiness перезапускает контейнер, liveness масштабирует deployment",
    "Обе проверки полностью одинаковы и отличаются только названием",
    "Они нужны только StatefulSet и не работают в Deployment"
  ],
  "t238": [
    "Он переписывает удалённую историю и может сломать работу команды",
    "Он удаляет Git с сервера и делает репозиторий недоступным",
    "Он делает все коммиты read-only для локальных разработчиков",
    "Он запрещает pull request и отключает проверки ветки"
  ],
  "t239": [
    "Когда нужно отменить изменения без переписывания общей истории",
    "Когда нужно удалить весь репозиторий вместе с ветками",
    "Когда коммит ещё не создан и есть только рабочие изменения",
    "Когда нужно изменить remote URL для текущего репозитория"
  ],
  "t240": [
    "SLO - внутренний целевой показатель, SLA - внешнее обещание",
    "SLO всегда юридический договор, SLA только метрика CPU",
    "SLO используется только в Docker и не относится к сервисам",
    "SLA не связан с качеством сервиса и доступностью продукта"
  ],
  "t242": [
    "СУБД проверяет ссылки в дочерней таблице, без индекса возможен scan",
    "Foreign key всегда создаёт hash join между таблицами",
    "DELETE не работает с foreign key и требует удаления ключа",
    "Индекс нужен только SELECT и не влияет на проверку ссылок"
  ],
  "t243": [
    "Модель может предсказывать большинство и скрывать плохой recall",
    "Accuracy нельзя считать для бинарной классификации с метками",
    "Accuracy равна loss и используется только при обучении модели",
    "Accuracy всегда меньше F1 независимо от распределения классов"
  ],
  "t244": [
    "Браузер прикладывает cookie, и внешняя страница может инициировать действие",
    "CSRF нужен только для GET-запросов и не влияет на формы",
    "Cookie никогда не отправляются автоматически браузером",
    "CSRF напрямую защищает SQL-запросы от инъекций в базе"
  ],
  "t245": [
    "ARG может попасть в слои или metadata образа и утечь при публикации",
    "ARG доступен только после удаления контейнера из Docker daemon",
    "ARG шифруется Docker по умолчанию и не виден при inspect",
    "ARG запрещает build cache и всегда пересобирает все слои"
  ],
  "t246": [
    "ICMP проходит, но TCP 443, TLS, HTTP-сервис или firewall могут падать",
    "HTTPS обязан работать сразу, если ping до хоста успешен",
    "DNS всегда сломан, даже если IP-адрес уже найден клиентом",
    "Сайт работает только по UDP и не использует TCP-соединения"
  ]
};

Object.entries(balancedAnswerOptions).forEach(([id, options]) => {
  const item = window.GEC_DATA.tests.find(test => test.id === id);
  if (item) item.options = options;
});
