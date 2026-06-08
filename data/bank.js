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
