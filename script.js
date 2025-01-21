const front = {
  1: "Что такое сайты и как они работают? - Узнал как работают веб-сайты в интернете и каким образом они отображаются в браузере",
  2: "Разберем простой сайт - Разобрал как устроены сайты на реальном примере",
  3: 'Создание первого сайта, базовая структура скелета - Изучил базовую структуру сайта, разобрал новый термин "теги", благодаря которым можно встраивать различные элементы на сайт',
  4: "Работа со стилями - Научился добавлять базовые стили на сайт, например менять им фоновый цвет, размеры",
  5: "Структура HTML - Более подробно изучил структуру HTML - файлов",
  6: "Основные теги в HTML #1 - Изучил новые теги, благодаря которым вставляются картинки и различного вида текст (зачеркнутый, подчеркнутый и другие)",
  7: "Основные теги в HTML #2 - Научился добавлять тегам атрибуты, которые позволяют редактировать свойства элементов",
  8: "Основные теги в HTML #3 - Изучил все необходимые теги для создания таблиц на сайтах. Закрепил изученное на практике",
  9: "Начало работы со стилями - Начал изучать работу с CSS, который отвечает за оформление сайта. Узнал что такое классы и айди, для чего они используются и как правильно применять стили для элементов",
  10: "Отступы и размеры элементов сайта - Узнал, как задавать внутренние и внешние отступы для элементов, ознакомился с особенностями и различиями данных свойств",
  11: "Работа с цветами - Ознакомился со всеми возможными способами обозначения цвета в коде.Научился правильно работать с цветами, сочетать их и создавать градиенты",
  12: "Работа со шрифтами - Узнал, какие существуют шрифты и как они влияют на наш сайт. Научился подключать сторонние шрифты на сайт двумя основными способами",
  13: "Работа с фоном - Узнал как ставить на фон изображение или сплошной цвет. Научился контролировать размеры, отображение и расположение фона",
  14: "Работа с блоками - Узнал, для чего нужны блоки на сайте, как их создавать и правильно позиционировать",
  15: "Работа с FlexBox - Изучил инструмент FlexBox, который предоставляет способ позиционирования элементов. Научился контролировать порядок элементов, выравнивание по нескольким осям, размеры, а также распределение свободного места между ними",
  16: "Создание второго сайта - Создал свой второй сайт с дизайном, закрепив все изученные темы ранее",
  17: "Как правильно писать сайты (семантика) - Узнал, что такое правильный код. Познакомился с понятием семантика, знает как проверять сайт на ошибки и исправлять их.",
  18: "Практика #1 - Практическое занятие. Создал структуру кода для сайта",
  19: "Практика #2 - Практическое занятие. Научился создавать шапочку сайта с навигацией в виде ссылок",
  20: "Практика #3 - Практическое занятие. Познакомился с понятием секции, создал приветственную секцию - Welcome",
  21: "Практика #4 - Практическое занятие. Создал новые контейнеры на сайте в виде карточек предоставляемых услуг",
  22: "Input как работать с формами - Научился создавать форму с различными полями ввода на сайте, ознакомился с особенностями ее стилизации",
  23: "Практика #5 - Практическое занятие. Добавил работающую форму на свой сайт",
  24: "Практика #6 - Практическое занятие. Узнал, что такое подвал сайта и добавил его к себе на сайт",
  25: 'Адаптация сайта - Познакомился с понятием "адаптация сайта", узнал об ее особенностях и синтаксисе',
  26: "Проверяем наш сайт и улучшаем его (адаптация) - Практическое занятие. Адаптировал свой сайт под мобильные устройства и планшеты",
  27: "Медиа запросы. Адаптация сайта №1 - Узнал, что такое медиа-запросы. Добавил медиа-запросы к себе на сайт, адаптировал несколько секций под различные устройства",
  28: "Адаптация сайта №2 - Практическое занятие. Продолжил адаптацию сайта, адаптировал карточки и оставшиеся секции под различные устройства",
  29: "Адаптация сайта №3 - Практическое занятие. Закончил адаптацию сайта, изменил шапочку сайта под мобильную версию",
  30: "Псевдокласс hover - Познакомился с псевдоклассами, научился использовать псевдокласс hover, который срабатывает при наведении на элемент, на практике",
  31: "Переходы CSS - Научился добавлять плавные переходы в CSS, знает как контролировать их скорость и продолжительность",
  32: "Как работать с Figma - Введение в дизайн. Знакомство с графическим редактором Figma",
  33: "Переносим сайт на Figma #1 - Научился работать с Figma. Узнал, как смотреть на свойства элемента, скачивать необходимые изображения, декоративные элементы и переносить его к себе на сайт",
  34: "Переносим сайт на Figma #2 - Практическое занятие. Работа с Figma, перенос сайта с макета в код",
  35: "Переносим сайт на Figma #3 - Практическое занятие. Работа с Figma, перенос сайта с макета в код",
  36: "Переносим сайт на Figma #4 - Практическое занятие. Работа с Figma, перенос сайта с макета в код",
  37: "Защитный проект - Доработал свой защитный проект по модулю Figma",
  38: "Что такое Tilda? - Познакомился с конструктором сайтов Tilda, который позволяет создавать сайты, интернет-магазины, посадочные страницы, блоги, используя готовые блоки",
  39: "Как Tilda изменила мир программирования - Узнал о преимуществах использования Tilda, научился создавать простые сайты",
  40: "Шаблоны и мобильная адаптация - Научился использовать шаблоны, менять их под себя и делать мобильную адаптацию",
  41: "Создаем сайт для музыкального телеграм канала - Практическое занятие",
  42: "ZERO BLOCK - начальный уровень - Познакомился с ZERO BLOCK в Tilda, сконструировал свой собственный блок с нуля",
  43: "ZERO BLOCK - продвинутый уровень - Изучил продвинутые возможности в создании блока для сайта, используя ZERO BLOCK",
  44: "Основы дизайна - Познакомился с правилами дизайна в Tilda",
  45: "Создание сайта - каталог для обувного магазина - Практическое занятие",
  46: 'Типографика и продающий текст - Узнал, как правильно писать текст на сайте, ознакомился со всеми терминами типографики. Изучил понятие "продающий текст"',
  47: "Создаем стильный сайт для магазина мужской одежды - Практическое занятие",
  48: "TILDA - защитный проект - Закрепил знания по TILDA в разработке защитного проекта",
  49: "Что такое JavaScript? - Познакомился с языком программирования JavaScript, который отвечает за логику и функционал сайта",
  50: "Библиотека JQuery - Изучил библиотеку JQuery для управления стилями элементов, узнал об ее синтаксисе, правильном подключении и использовании",
  51: "Обработка событий JavaScript - Научился обрабатывать события, совершенные пользователем на сайте, используя JavaScript",
  52: "Работа с DOM - Узнал, что такое DOM-дерево, как им управлять и как получить доступ к элементам HTML в JavaScript",
  53: "Отображение и скрытие элементов - Научился скрывать и отображать элементы на сайте при нажатии на кнопку",
  54: "Модальное окно - Научился создавать рабочее модальное окно при помощи JavaScript",
  55: "JavaScript Переменные - Узнал, что такое переменные в программировании, научился ими пользоваться при помощи JavaScript",
  56: "JavaScript Типы данных - Изучил различные типы данных в JavaScript",
  57: "JS операторы и условные операторы IF/ELSE - Познакомился с операторами IF/ELSE в JavaScript, которые позволяют создавать гибкие и выразительные условия для различных ситуаций",
  58: "JavaScript циклы - Узнал, что такое циклы, как их создавать в JavaScript и как правильно использовать на сайте для итерации элементов",
  59: "JavaScript массивы - Узнал, что такое массивы, о возможностях работы с наборами данных одного типа. Научился создавать их в JavaScript",
  60: "JavaScript функции - Научился создавать различные функции, пользовательские методы с возможностью переиспользования кода в JavaScript",
  61: "JavaScript функции №2 - Более углубленно изучил функции",
  62: "JavaScript DOM - Научился работать с DOM-деревом. Изучил существующие взаимодействия с DOM для манипуляции содержимым страницы",
};

const scratch = {
  1: "Основы Scratch. Часть 1 - Детально ознакомился со scratch, разобрал из каких частей состоит рабочая область и какие виды блоков команд существуют. Создал свой первый проект и научился запускать код",
  2: "Основы Scratch. Часть 2 - Подробнее ознакомился с блоками управления, звука, сенсоров, научился использовать их на практике. Узнал как создать свой собственный блок с определенными действиями и повторно использовать его в проекте",
  3: "Спрайты и фоны - Узнал, что такое спрайты(персонажи), разобрал способы добавления спрайтов в проект. Научился добавлять различные фоны и редактировать их",
  4: 'Графический редактор - Научился работать с разделом "костюмы", а именно менять внешний вид и одежду для персонажей. Узнал как устроен графический редактор в scratch и как создавать свои собственные элементы для проекта',
  5: "Школа магии - Ознакомился с такими основами программирования, как переменные, операторы  и блоки управления данными. В результате научился создавать переменные для хранения данных, использовать операторы для их обработки и управлять основными концепциями программирования.",
  6: "Сенсоры - Изучил возможности взаимодействия программ с внешним миром, используя сенсоры. Научился использовать сенсоры касания, звука и другие в своих проектах",
  7: "Условия - Разобрал как использовать условия в проекте, что позволяет программе принимать решения в зависимости от определенных критериев.",
  8: "Циклы - Узнал что такое циклы и как их можно использовать для повторяющихся задач в программе",
  9: "Проектная работа на закрепление первого модуля",
  10: "Координаты - Познакомился с системой координат в scratch, тем самым научился контролировать положение объектов на экране",
  11: "Блок движения - Освоил как управлять движением объектов, изменять их направление, скорость и создавать интересные визуальные эффекты, используя блоки движения",
  12: "Блок события - Научился создавать интерактивные программы, которые могут реагировать на внешние события пользователя, например нажатие клавиши или старт проекта.",
  13: "Анимации - Узнал как создавать простые анимации, делая свои проекты более динамичными и живыми",
  15: "Музыкальный фестиваль - Разобрал как можно интегрировать звуковые эффекты и музыку в свои проекты",
  16: "Проектная работа на закрепление второго модуля",
  17: "Другие блоки - Изучил более сложные дополнительные блоки, расширяя свои навыки и возможности в создании проектов.",
  18: 'Волшебные скачки - Освоил создание многопользовательской игры с использованием "других блоков", сенсоров и блоков управления. Теперь два человека могут одновременно управлять своими спрайтами',
  19: "Создаем мультфильм #1 - Начал создавать свой первый полноценный мультфильм, используя все изученные ранее темы",
  20: "Создаем мультфильм #2 - Успешно завершил свой первый мультфильм, в результате которого изменить фоны, добавил два новых спрайта,изменил их костюмы и написать для них код, делая свой проект более реалистичным и динамичным.",
  21: "Переменные - Узнал что такое “переменные”, рассмотрел типы переменных и научился определять их. Знает как присваивать значения переменным и использовать их в блоках программы",
  22: "Flappy Bird - Создал свою версию игры Flappy Bird, использовав блоки управления и циклы для движения персонажа и создания препятствий. Добавил звуковые эффекты для создания атмосферы в игре, а также вел счет при каждом прохождении препятствия, использовав переменные, изученные на прошлом уроке.",
  23: "Проектная работа на закрепление третьего модуля",
  24: "Взаимодействие спрайтов и фонов - Освоил взаимодействие между спрайтами и фонами, создав диалог между двумя персонажами на двух сценах – в доме и на улице. В результате создал анимированный диалог с плавными переходами между сценами, придавая проекту новый уровень интерактивности.",
  25: 'Кошки Мышки - Научился навыку создания системы подсчета очков, установку условий для повышения уровня и обновление очков при начале нового уровня в игре "Кошки-мышки"',
  26: "Танцевальный батл - Обрел понимание анимационных методов для создания движения персонажей и создание своих танцевальных движений",
  27: "Планирование игр #1 - Узнал о важности взаимодействия между игроком и игрой, создал интересные и вовлекающие механики для взаимодействий",
  28: "Планирование игр #2 - Научился организовать логику игры, чтобы правильно отслеживать действия игрока и обновлять очки в соответствии с заранее заданными условиями.",
  29: "Дебаггинг - Повысил навыки самостоятельного решения проблем и выявления ошибок без посторонней помощи",
  30: "Проектная работа на закрепление четвертого модуля",
  31: "Дополнение и расширения #1 - Освоил использование инструментов для создания мультимедийного контента",
  32: "Дополнение и расширения #2 - Изучил инструмент перо (кисти) для создания разнообразных и креативных элементов рисунка или интерфейса игры",
  33: "Учимся распознавать видео - Овладел пониманием работы всех блоков из расширений в Scratch и может объяснить функциональность каждого блока, а также его важность в создании игры или проекта",
  34: "Виды игр в Scratch - Познакомился с различными жанрами игр, такие как аркады, головоломки, приключения, стратегии, симуляторы, знает ключевые особенности каждого жанра",
  35: "Игра Шутер - Научился создавать различные уровни сложности игры (например, увеличение скорости врагов или уменьшение жизней у персонажа) для обеспечения динамики игрового процесса",
};

const python = {
  1: "Знакомство с Python - Более подробно познакомился с языком программирования Python. Узнал, для чего и где он используется",
  2: "Первая программа и переменные - Создал свою первую программу. Узнал, что такое переменные и как ими пользоваться",
  3: "Арифметические операторы - Изучил доступные в Python арифметические операции, попробовал использовать их на практике",
  4: "Условие IF/ELSE и операторы сравнения - Узнал, как создавать гибкие условия для различных ситуаций, ознакомился с операторами используемые для сравнения",
  5: "Логические операторы - Узнал, что такое логические операторы и зачем они нужны",
  6: "Создание игры 'Акинатор' - Создал начальную версию игры 'Акинатор'",
  7: "Операторы и операнды - Узнал, что такое операторы и операнды",
  8: "Как работать со строками - Научился работать со строками",
  9: "Срез строк и их методы - Изучил дополнительные методы для работы со строками",
  10: "Акинатор и модули - Узнал, как работать с модулями и добавил модули в игру 'Акинатор'",
  11: "Что такое список? - Узнал, что такое списки и как с ними работать",
  12: "Операция и методы списка - Изучил дополнительные методы для работы со списками",
  13: "Цикл FOR и RANGE - Узнал, что такое циклы, как правильно использовать их для итерации элементов. Научился работать с циклом FOR, используя функцию RANGE",
  14: "Списки и строки - Узнал новые методы работы со списками и строк, разобрал их отличия",
  15: "Функции DEF - Узнал, что такое функции и для чего они используются. Познакомился с созданием функций внутри Python",
  16: "Декораторы @FUNC - Узнал, что такое декораторы в Python",
  17: "Как создать своего телеграм-бота? - Научился создавать своего Telegram-бота",
  18: "Усовершенствуем телеграм бота - Доработал своего Telegram-бота",
  19: "Ускоряем акинатора - Научился правильно ускорять игры. Ускорил игру 'Акинатор'",
  20: "Акинатор и двоичный код - Узнал, как работает двоичный код",
  21: "Акинатор теперь прощает ошибки - Доработал игру, исправили ошибки",
  22: "Как работают серьезные программы, GLOBAL и LOCAL - Узнал новые, доступные в Python сущности переменных",
  23: "Акинатор телеграм-бот часть 1 - Перенес ранее созданную игру 'Акинатор' в Telegram-бот",
  24: "Акинатор телеграм-бот часть 2 - Добавил новую команду в своего Telegram-бота",
  25: "Цикл WHILE и BREAK - Узнал, как работать с циклом WHILE, а также, как работать с операторами",
  26: "Простые матрицы - Узнал, что такое простые матрицы и где они применяются в программировании",
  27: "Рекурсия и Факториалы - Узнал, что такое рекурсия. Научился находить факториал числа используя рекурсию",
  28: "Золотое сечение и числа Фибоначчи - Научился при помощи рекурсии выводить числа Фибоначчи",
  29: "Кэш. Ускоряем программы в сотни раз - Научился работать с кэшем, чтобы ускорять программы",
  30: "Ловим ошибки TRY-EXCEPT - Узнал, что такое исключения в программировании. Научился использовать исключения try-except",
  31: "Словари - Узнал, что такое словари в Python, чем они отличаются от списков",
  32: "Множества - Узнал, что такое множества и изучил базовые методы множеств",
  33: "Низкоуровневое программирование - Узнал, что такое низкоуровневое программирование",
  34: "Аргументы *ARGS, **KWARGS - Изучил новые аргументы для функций *ARGS и **KWARGS",
  35: "Пишем свой BENCHMARK - Создание инструмента для измерения производительности",
  36: "Акинатор теперь знает все цвета - Практическое задание. Доработал игру 'Акинатор', расширив базу данных цветов",
  37: "Акинатор и имитация интеллекта - Практическое задание. Добавил в игру 'Акинатор' имитацию интеллекта",
  38: "Акинатор настоящий гений - Практическое задание. Добавил в игру 'Акинатор' еще больше функций",
  39: "MAP, FILTER и LAMBDA - Изучил встроенные методы списков MAP, FILTER и LAMBDA",
  40: "Работа с файлами - Научился работать с файлами",
  41: "Концепция ООП - Узнал, что такое объектно-ориентированное программирование и почему оно важно в программировании",
  42: "Классы. Создание и использование класса - Узнал, что такое классы и научился их создавать",
  43: "Работа с классами и экземплярами - Понимание различий между классами и экземплярами классов",
  44: "Наследование - Научился создавать иерархии классов",
  45: "Импортирование классов - Понимание механизма импортирования в Python",
  46: "Стандартная библиотека Python - Узнал, базовые модули, компоненты и готовые инструменты для веб-разработки",
  47: "Полиморфизм - Познакомился с концепцией ООП, позволяющая повторно использовать код",
  48: "Библиотека Pygame - Освоил базовые принципы работы с библиотекой Pygame, используемой для создания компьютерных игр на языке программирования Python",
  49: "Установка Pygame. Базовые моменты - Научился устанавливать и настраивать библиотеку Pygame на своем компьютере",
  50: "Добавление объектов на экран - Приобрел навыки добавления объектов, таких как спрайты и изображения, на игровой экран",
  51: "Анимации и звук - Изучил основы создания анимаций в игровых приложениях с использованием Pygame",
  52: "Передвижение персонажа и механика прыжка - Научился создавать процессы передвижения, чтобы персонаж двигался в разные направления, умел поворачиваться и т.д.",
  53: "Добавление врагов - Приобрел навыки создания врагов и взаимодействия персонажей друг с другом",
  54: "Меню проигрыша и перезапуск игры - Научился создавать систему проигрыша и перезапуск Игры",
  55: "Механика стрельбы - На примере рассмотрел, как можно улучшить игру. Научился добавлять возможность стрельбы между врагами",
  56: "Адаптивный экран и полноэкранный режим - Научился адаптировать экран игры под разные размеры устройства",
  57: "EXE - Научился запускать свою игру на других компьютерах",
};

const frontpro = {
  1: "Введение в JS - Узнал, что такое переменные и типы данных в программировании, научился ими пользоваться при помощи JavaScript.",
  2: "Операторы и выражения в JavaScript - Познакомился с операторами, научился использовать операторы для выполнения разных задач. Научился создавать и вычислять сложные выражения.",
  3: "Условные операторы - Познакомился с операторами IF/ELSE в JavaScript, которые позволяют создавать гибкие и выразительные условия для различных ситуаций.",
  4: "Switch - Познакомился с конструктором Switch, узнал основные элементы оператора Switch.",
  5: "Циклы (for) - Узнал, что такое циклы и их типы. Познакомился с циклом for и его частями, увидел на примерах как правильно его использовать на сайте.",
  6: "Циклы (while, do-while) - Познакомился с циклами while, do-while. На практике рассмотрел как их использовать, и их отличия.",
  7: "Операторы прерывания циклов(break, continue) - Познакомился с операторами прерывания циклов break, continue для эффективного выполнения циклов.",
  8: "Функции и их основы - Научился создавать различные функции, пользовательские методы с возможностью переиспользования кода в JavaScript.",
  9: "Массивы в JavaScript - Узнал, что такое массивы, о возможностях работы с наборами данных одного типа. Научился создавать их в JavaScript.",
  10: "Объекты в JavaScript - Научился создавать объекты с любыми свойствами и методами.",
  11: "Работа с DOM #1 - Научился работать с DOM-деревом. Изучил существующие взаимодействия с DOM для манипуляции содержимым страницы.",
  12: "Работа с DOM #2 - Более углубленно изучил работу с DOM.",
  13: "События в JS - Научился обрабатывать события, совершенные пользователем на сайте, используя JavaScript.",
  14: "Применение стилей в веб-разработке - Научился оформлять внешний вид страницы, используя различные библиотеки стилей.",
  15: "Проект - Калькулятор на JS - Научился создавать калькулятор используя Java Script.",
  16: "Методы строк - Научился методам работы со строками для выполнения различных операции над текстом.",
  17: "Асинхронное программирование в JavaScript (callbacks, Promises) - Узнал, что такое асинхронное программирование и научился использовать CallBack функции и Promise.",
  18: "ES6+ возможности - Научился упрощать свой код с помощью стрелочных функции, деструктуризации и шаблонных строк.",
  19: "Spread оператор и rest параметры - Познакомился с Spread оператором и rest параметрами и научился использовать эти операторы для удобной работы с массивами и параметрами функций.",
  20: "Генератор цитат#1 - Создал свой генератор цитат, используя Java Script.",
  21: "Генератор цитат#2 - Улучшил свой генератор цитат и добавил к нему стили.",
  22: "Чистые функции и функциональное программирование - На примерах узнал разницу между чистыми функциями и функциями высшего порядка.",
  23: "ООП в JavaScript - Познакомился с ООП и научился создавать классы и объекты, используя JavaScript.",
  24: "Модули и системы модулей - Узнал, что такое модули в ООП и как их эффективно применять.",
  25: "Работа с файлами и хранилищем браузера - Научился взаимодействовать с файлами с помощью Session Storage и Local Storage.",
  26: "Отладка и инструменты разработчика - Научился использовать инструменты разработчика, чтобы проверять код на ошибки и улучшать производительность веб-приложений.",
  27: "Тестирование JavaScript-кода - Познакомился с важностью тестирования JavaScript-кода и узнал, как писать тесты для обеспечения корректности и надежности программ.",
  28: "Регулярные выражения в JavaScript - Изучил основы работы с регулярными выражениями в JavaScript.",
  29: "Работа с API сторонних сервисов - Изучил, как работать с API сторонних сервисов и как их применять.",
  30: "Свой сервер на Node.js - Научился создавать свой собственный сервер с помощью Node.js.",
  31: "Введение в асинхронное программирование с использованием async/await - Более глубже познакомился с Асинхронным программированием, а именно с Async и await.",
  32: "Прогноз погоды#1 - Создание прогноза погоды с помощью HTML, CSS.",
  33: "Прогноз погоды#2 - Интегрирование в проект открытый API OpenWeatherMap и добавление пару фишек, используя JS.",
  34: "Оптимизация кода: советы и лучшие практики - Узнал про оптимизацию кода и понятие чистый код.",
  35: "Создание своего проекта - Делаем конвертер валют, используя все полученные знания.",
  36: "Введение в React.js - Узнал, что такое React, как он работает и почему он так важен в мире веб-разработки.",
  37: "Первые шаги с React - Научился устанавливать и настраивать рабочее окружение, создавать новый проект и познакомился с его структурой и основными файлами.",
  38: "JSX синтаксис и его особенности - Узнал, что такое JSX и как он помогает нам комбинировать HTML и JavaScript в одном файле.",
  39: "Элементы и компоненты в React - Разобрался, что такое компоненты, как их создавать, и как они могут взаимодействовать друг с другом.",
  40: "Работа со стилями в React - Узнал основные способы работы CSS в React.",
  41: "Работа с Props - Узнал, что такое React Props, почему они важны и как Props помогают создавать гибкие компоненты.",
  42: "Классовые и функциональные компоненты - Узнал разницу между классовыми и функциональными компонентами.",
  43: "Event в React - Более глубже погрузился в Java Script и узнал про два самых популярных обработчика событий.",
  44: "Условный рендеринг в React - Разобрал основные подходы к условному рендерингу в React.",
  45: "Работа с коллекциями и списками - Разобрался как гибко можно работать с коллекциями и списками в React.",
  46: "Создание и работа с формами в React - Научился создавать и обрабатывать формы в React.",
  47: "Мини-проект Часть-1: Список задач (To-Do List) - Научился создавать свое первое приложение To do List, используя все предыдущие знания.",
  48: "Мини-проект Часть-2: Список задач (To-Do List) - Научился удалять и добавлять пункты из списка и выносить их в отдельные компоненты, что сделало приложение более понятным и структурированным.",
  49: "Хук useEffect - Научился использовать hook useEffect.",
  50: "Virtual DOM и useRef хук - Узнал о двух новых инструментах Virtual DOM и хук useRef.",
  51: "React хук useContext - Разобрался с новым инструментом hook use context, который позволяет делиться данными между компонентами.",
  52: "React хук useReducer - Познакомился с новым инструментом hom use reducer для управления состоянием приложения.",
  53: "Работа с HTTP запросами и API в React - Узнал как наши приложения могут общаться с интернетом и получать всякие интересные данные.",
  54: "Работа со сложными формами в React - Подробнее разобрал тему работы с формами в React и научился работать со сложными формами.",
  55: "Custom hooks - Узнал как кастомные хуки позволяют повторно использовать логику приложения.",
  56: "Проект Часть-1: Поиск фильмов - Создал свое веб-приложение которое ищет информацию о фильмах через интернет.",
  57: "Проект Часть-2: Поиск фильмов - Научился делать запросы к серверу обрабатывать ответы.",
  58: "React хук useTransition - Узнал как ускорить работу приложения не жертвуя удобством для пользователей с use transition.",
  59: "хуки useCallback и useMemo - Узнал как правильно организовать и оптимизировать большие react приложения.",
  60: "React.lazy и React.memo - Познакомился с инструментами React.lazy и React.memo для более эффективной работы приложения.",
  61: "React Router и навигация в приложении - Узнал как работать с навигацией в приложении используя React Router.",
  62: "Оптимизация производительности компонентов и инструменты разработчика - Узнал, как отследить насколько оптимизировано приложение.",
  63: "Мини-проект Часть 1 — Простой блог - Узнал, как создать простой блог на React, отображающего список статей и их содержимое.",
  64: "Мини-проект Часть 2 — Простой блог - Завершение блога, добавление функции добавления и удаления, а также улучшение навигации.",
  65: "Интеграция с внешними библиотеками и сервисами - Познакомился с интеграцией сторонних библиотек и сервисов, таких как Firebase для расширения функциональности приложений.",
  66: "Интеграция нашего блога с Firebase - Научился реализовывать блог Firebase, обеспечивая безопасный доступ к защищенным постам.",
  67: "Часть 1 - Аутентификация и авторизация пользователей - Научился реализовывать аутентификацию и авторизацию с использованием Firebase Auth.",
  68: "Часть 2 - Аутентификация и авторизация пользователей - Завершение проекта, научился добавлять ограниченный доступ к постам.",
  69: "Часть 1 - Создание реального проекта от начала до конца — Социальная сеть/Интернет-магазин - Узнал, как планировать архитектуру социальной сети и интернет-магазина.",
  70: "Часть 2 - Создание реального проекта от начала до конца — Социальная сеть/Интернет-магазин - Реализовал функционал добавления товаров в корзину и публикации постов.",
  71: "Часть 3 - Создание реального проекта от начала до конца — Социальная сеть/Интернет-магазин - Научился добавлению отзывов пользователей и отзывчивой анимации для улучшения пользовательского опыта.",
  72: "Часть 4 - Создание реального проекта от начала до конца — Социальная сеть/Интернет-магазин - Освоил публикацию сайта на Netlify и создание ссылки для общего доступа.",
};

function attendanceInfo(lessons, attendance) {
  const context = {
    good: "Хотим поделиться хорошей новостью: ваш ребенок имеет отличную посещаемость наших уроков программирования. Это замечательно, и ваша поддержка играет важную роль в успехе.",
    mid: "Хотим обратить ваше внимание на то, что посещаемость наших уроков программирования является хорошей, но не отличной. С нашей стороны мы предоставим вам бесплатные дополнительные занятия, вам необходимо будет указать время и дни для комфортного прохождения данных уроков.",
    low: "Хотели бы обратить ваше внимание на посещаемость уроков вашего ребенка. К сожалению, она несколько ниже желаемой. Важно помнить, что регулярное участие на уроках играет ключевую роль в успехе обучения. С нашей стороны мы предоставим вам бесплатные дополнительные занятия, вам необходимо будет указать время и дни для комфортного прохождения данных уроков.",
  };

  let percentage = 0;
  if (attendance !== 0 && lessons !== 0) {
    percentage = (attendance / lessons) * 100;
  }

  if (percentage > 79) {
    return context.good;
  } else if (percentage >= 50) {
    return context.mid;
  } else {
    return context.low;
  }
}

function homeworksInfo(homeworksOverall, homeworksTurned) {
  const context = {
    good: "Ребенок продемонстрировал отличную успеваемость.Это великолепное достижение! Пожалуйста, продолжайте вдохновлять и поддерживать его в его образовательном путешествии.",
    mid: "Успеваемость вашего ребенка находится на среднем уровне. Это означает, что есть потенциал для улучшения. Мы верим в потенциал каждого ученика и готовы предложить дополнительную поддержку, чтобы помочь вашему ребенку достичь лучших результатов. Если у вас есть какие-либо вопросы или замечания, пожалуйста, свяжитесь с нами. Мы готовы обсудить индивидуальный план для вашего ребенка, который поможет ему улучшить свою успеваемость.",
    low: "На данный момент успеваемость оставляет желать лучшего. Мы понимаем, что учебные трудности могут возникать у каждого ребенка, и мы готовы предложить поддержку. Если у вашего ребенка возникли трудности в учебе, давайте обсудим, какие шаги мы можем предпринять, чтобы помочь ему улучшить успеваемость. Мы также призываем вас включиться в процесс обучения вашего ребенка и поддержать его в учебе. Совместными усилиями мы сможем помочь ему добиться лучших результатов.",
  };

  let percentage = 0;

  if (homeworksOverall !== 0) {
    try {
      percentage = (homeworksTurned / homeworksOverall) * 100;
    } catch {
      percentage = 0;
    }

    if (percentage > 79) {
      return context.good;
    } else if (percentage >= 50) {
      return context.mid;
    } else {
      return context.low;
    }
  }

  return context.low;
}

function problems(problems) {
  const context = {
    "Плохой интернет":
      "В последнее время мы столкнулись с некоторыми трудностями, связанными с качеством интернета в нашем учебном процессе. В течение урока наблюдается существенное замедление интернет-скорости, что создает неудобства для учащегося в процессе усвоения материала либо подключения к уроку.Для того, чтобы максимально эффективно решить этот вопрос, мы рекомендуем провести небольшую проверку оборудования и настроек устройств в доме.",
    "Частые опоздания":
      "В последнее время мы наблюдаем, что у учащегося возникают трудности с соблюдением установленного графика занятий, что может отрицательно сказываться на его академической эффективности.Для улучшения ситуации мы готовы обсудить график вашего ребенка и, при необходимости, адаптировать его, чтобы обеспечить удобство и точность во времени.",
    "Слабое владение компьютером":
      "Ученик проявляет старания и интерес к учебному материалу, однако мы заметили, что у него могут возникать трудности из-за ограниченных навыков работы с компьютером.Для того, чтобы максимально эффективно решить этот вопрос, мы рекомендуем в свободное время просмотреть курс 'Компьютерная грамотность', который предоставляет основы компьютерных навыков. Данный шаг положительно повлияет на дальнейшее успешное выполнение заданий.",
    "Отвлечение на посторонние дела":
      "Мы заметили, что время от времени учащийся может отвлекаться на посторонние дела. Это может негативно сказаться на его способности полностью усваивать учебный материал и эффективно участвовать в классных активностях. Мы осознаем, что каждый ученик имеет свои особенности и ритм обучения. Однако, для того, чтобы добиться желаемых результатов, постарайтесь обеспечить тихое и лишенное отвлекающих элементов место для выполнения учебных заданий.",
    "Проблем нет": " ",
  };

  // Default to a single empty element if problems is null or undefined
  const problemsList = problems
    ? problems.split(", ").map((p) => p.trim())
    : [""];
  const detailedProblems = problemsList.map(
    (problem) => context[problem] || ""
  );
  return detailedProblems;
}

function activityInfo(activity) {
  const context = {
    good: "Хотелось бы выразить наше восхищение активностью ребенка на уроках. Энтузиазм и участие в учебном процессе не остаются незамеченными. Активное участие на уроках является ключевым фактором успешного обучения, продолжайте в том же духе!",
    mid: "На данный момент его уровень активности можно охарактеризовать как средний. Мы всегда стремимся максимально вовлекать всех учеников в учебный процесс и вдохновлять их на участие. Если у вашего ребенка есть особые интересы или пожелания по урокам, пожалуйста, дайте нам знать. Мы готовы работать с вами и вашим ребенком, чтобы создать условия для его активного участия и максимального развития.",
  };

  if (activity == 5 || activity == 4) {
    return context.good;
  }
  if (activity == 3) {
    return context.mid;
  }
  return "";
}

//experimantal
const fullUrl = window.location.href; // Full URL including query parameters
console.log(fullUrl);
const paramsObject = {};
// Extract the query string from the full URL
const queryString = fullUrl.split("?")[1]; // Everything after the '?'

// Check if query string exists
if (queryString) {
  // Split query string into key-value pairs
  const paramsArray = queryString.split("&");

  // Initialize an empty object to hold parsed parameters

  // Loop through each key-value pair and split them into the object
  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    paramsObject[decodeURIComponent(key)] = decodeURIComponent(value);
  });

  console.log(paramsObject); // Logs the parsed parameters as an object
} else {
  console.log("No query parameters found.");
}
//experimantal
// Initialize report data with defaults
const reportData = {
  full_name: paramsObject["3"],
  attendance: paramsObject["5"],
  lessons: paramsObject["4"],
  homeworks_turned: paramsObject["7"],
  homeworks_overall: paramsObject["6"],
  activity: paramsObject["10"],
  month: paramsObject["month"],
};

reportData["attendance_info"] = attendanceInfo(
  paramsObject["4"],
  paramsObject["5"]
);

reportData["homeworks_info"] = homeworksInfo(
  paramsObject["6"],
  paramsObject["7"]
);

const problem_list = problems(paramsObject["9"]);
const problem_container = document.querySelector(".problem_container");
let was = 0;
problem_list.map((element) => {
  if (element != " ") {
    was = 1;
    const prob = document.createElement("div");
    prob.classList.add("problem");
    prob.innerText = element;
    problem_container.appendChild(prob);
  }
});
if (was == 0) {
  const prob = document.createElement("p");
  prob.innerText = "Проблем по ученику не было отмечено.";
  problem_container.appendChild(prob);
}

const lessons_list = paramsObject["8"]?.split(".,");

const lessons_cont = document.querySelector(".what_learned");
const mapLessonList = {
  фронт: front,
  скретч: scratch,
  питон: python,
  фронтпро: frontpro,
};

// Determine the source object based on the first element
const source = mapLessonList[lessons_list[0]];

lessons_list.slice(1).map((element) => {
  if (element != " ") {
    const prob = document.createElement("div");
    prob.classList.add("lesson");
    prob.innerText = source[parseInt(element)]
      ? element + " урок. " + source[parseInt(element)]
      : element;
    lessons_cont.appendChild(prob);
  }
});

const skills_list = (paramsObject["11"] || "").split(";,");
const skills_cont = document.querySelector(".skills");

skills_list.map((element) => {
  if (element.trim() !== "") {
    const prob = document.createElement("div");
    prob.classList.add("lesson");
    prob.innerText = element;
    skills_cont.appendChild(prob);
  }
});

reportData["activity_info"] = activityInfo(paramsObject["10"]);

const attend_percent =
  // Populate template with data
  (document.body.innerHTML = document.body.innerHTML.replace(
    /\{\{\s*(\w+)\s*\}\}/g,
    (_, key) => reportData[key] || ""
  ));

// Function to download the report as PDF
document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.querySelector(".report");

  // Use html2pdf to convert the element to a PDF
  html2pdf()
    .from(element)
    .set({
      pagebreak: { mode: ["css"] }, // Avoid cutting elements
      margin: [4, 0, 4, 0],
    })
    .save(paramsObject["3"].trim() + ".pdf");
});
