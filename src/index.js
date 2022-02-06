// console.log('Module 1.1');
// console.log('start');

// let y = 7;

// for (let i = 0; i < 5 && y === 7; i += 1) {
//   console.log(i);
// }

// console.log('end');

// ===== replace vs replacAll =====
// const str = 'lorem ipsum dolor';
// const newStr = str.replace(' ', '_');
// const newStr = str.replace(/ /gi, '_');
// const newStr = str.replaceAll(' ', '_');

// console.log(newStr);

// ====== область видимости ======
// var y;
// const x = 5;

// {
//   y = 6;
//   console.log('x:', x);

//   {
//     console.log('x:', x);
//   }
// }

// console.log('y:', y);

// ====== exercise 1 ========
// Example 1 - Базовые математические операторы
// Выведи на экран общее количество яблок и винограда.
// Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total);

// const diff = apples - grapes;
// console.log(diff);

// ====== exercise 2 ========
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50; // students = students + 50
// console.log(students);

// ====== exercise 3 ========
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 50 + 50 - 2 * 5;
// console.log(result);

// ====== exercise 4 ========
// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;
// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(value)); // 28

// ====== exercise 5 ========
// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const bots = repairBots + defenceBots;
// const message = `${companyName} has ${bots} bots in stock`;

// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ====== exercise 6 ========
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах
// на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// const weightNum = Number(weight.replace(',', '.'));
// const heightNum = Number(height);

// console.log(weightNum);
// console.log(heightNum);

// const bmi = (weightNum / Math.pow(heightNum, 2)).toFixed(1);
// console.log(bmi); // 28.8

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);

// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так,
// чтобы в переменную value присваивалось значение переменной incomingValue,
// если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 34;
// const defaultValue = 100;
// const value = incomingValue || defaultValue;

// console.log(value);

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 1441; // 01:10

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// =============Цыклы================= 
// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);

// for (let i = 0; i <= 10; i = 1){
//     console.log(i);
// }
// console.log('summa');



//Скрипт который подсчитывает сумму всех четных чисел
//которые входят в диапазон от мин до мах.Например если мин=0 макс=5,то диапазон 0-5 и в нем 2 четных числа 2 и 4,а их сумма = 6
// const min = 1;
// const max = 20;
// let total = 0;
// // //фор от мин до мах с шагом 1
// for (let i = min; i <= max; i += 1){
// //проверяем остаток от деления
//     if (i % 2 !== 0) {
//         // console.log('не четное: ', i);
//         continue;
//     }
// //пишем в сумму
//     console.log('четное: ', i);
//     total += i;
// }

// console.log('total: ', total);
console.log('Module 1.2');

// ====== isNaN vs Number.isNaN ======
// === isNaN ===
// console.log(isNaN('a')); // true
// console.log(isNaN('b')); // true
// console.log(isNaN('bsdkfjgh')); // true
// console.log(isNaN(undefined)); // true
// console.log(isNaN(NaN)); // true

// console.log(isNaN(false)); // 0 - false
// console.log(isNaN(true)); // 1 - false
// console.log(isNaN('123')); // 123 - false
// console.log(isNaN(123)); // 123 - false

// === Number.isNaN ===
// console.log(Number.isNaN(NaN));

// console.log(Number.isNaN('a')); // false
// console.log(Number.isNaN('b')); // false
// console.log(Number.isNaN('bsdkfjgh')); // false
// console.log(Number.isNaN(undefined)); // false
// console.log(Number.isNaN(false)); // 0 - false
// console.log(Number.isNaN(true)); // 1 - false
// console.log(Number.isNaN('123')); // 123 - false
// console.log(Number.isNaN(123)); // 123 - false

// ======= break ========
// for (let i = 1; i <= 10; i += 1) {
//   if (i >= 6) {
//     break;
//   }

//   console.log(i);
// }

// === real life case ===
// const numbers = [2, 5, 12, 8, 9, 34, 56, 3];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] === 8) {
//     console.log('hurray!');
//     break;
//   }
// }

// ======= continue ========
// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }

// === question
// const friends = ['a', 'b'];

// for (let friend of friends) {
//   friend += '100';

//   console.log(friend);
// }

// console.log(friends);

// ===== loop ======
// for (let i = 10; i < 20; i += 2) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i < 6; i += 1) {
//   sum += i;
// }

// console.log(sum);
//                0    1    2
// const friends = ['a', 'b', 'c'];
// for (let i = 0; i < 3; i += 1) {
//   console.log(friends[i]);
// }

// ===== question ======
// function findLongestWord(string) {
//   let message = string.split(' ');
//   let biggest = [];

//   for (let i = 0; i < message.length; i += 1) {
//     if (biggest.length < message[i].length) {
//       biggest = message[i];
//     }
//   }

//   return biggest;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// ==== question =====
// function checkForSpam(message) {
//   let result = message.toLowerCase();

//   return result.includes('spam') || result.includes('sale');
// }

// console.log(checkForSpam('[spam] skjfghsfjh'));
// console.log(checkForSpam(' skjfghsfjh sale mnbhjkjk'));
// console.log(checkForSpam(' skjfghsfjh dfgSaLedgfd mnbhjkjk'));

// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-02.md
// ===================================
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код,
// который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит c,
// то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"

// const userInput = prompt('Како  е официальное название JavaScript?');
// let answer =
//   userInput?.toLowerCase() === 'ecmascript'
//     ? 'Верно!'
//     : 'Не знаете? ECMAScript!';

// if (userInput !== null && userInput.toLowerCase() === 'ecmascript') {
//   answer = 'Верно!';
// } else {
//   answer = 'Не знаете? ECMAScript!';
// }

// if (userInput?.toLowerCase() === 'ecmascript') {
//   answer = 'Верно!';
// } else {
//   answer = 'Не знаете? ECMAScript!';
// }

// console.log(answer);

// ===================================
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера
// в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 0;
// let timestring = minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`;

// // if (minutes > 0) {
// //   timestring = `${hours} ч. ${minutes} мин.`;
// // } else {
// //   timestring = `${hours} ч.`;
// // }
// console.log(timestring);

// ===================================
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку
// "Это положительное число",
// если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число,
// в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');
// const userInputNumber = Number(userInput);

// if (Number.isNaN(userInputNumber) || !userInput) {
//   console.log('это не число!');
// } else if (userInput > 0) {
//   console.log('Это положительное число');
// } else if (userInput < 0) {
//   console.log('Это отрицательное число');
// } else {
//   console.log('Это ноль');
// }

// ===================================
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.

// Если оба значения больше 100,
// то выведи в консоль максимальное из них.

// В противном случае в консоли должна быть
// сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   // if (a > b) {
//   //   console.log(a);
//   // } else {
//   //   console.log(b);
//   // }
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// ===================================
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет
// заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// // if (link[link.length - 1] !== '/') {
// if (!link.endsWith('/')) {
//   link += '/';
// }

// // Пиши код выше этой строки
// console.log(link);

// ===================== arguments ======
// function max() {
//   const numbers = Array.from(arguments);
//   let res = numbers[0];

//   for (let number of numbers) {
//     if (number > res) {
//       res = number;
//     }
//   }

//   return res;
// }

// console.log(max(2, 1, 5, 3, 8, 5, 4)); // 8
// console.log(max(-2, -1, -5, -3, -8, -5, -4)); // -1

// ======== home work question =======
// function findLongestWord(string) {
//   let words = string.split(' '); // ['jdfghds', 'iuy', 'sdfsfdafafasfa']
//   let biggest = '';

//   // for (let i = 0; i < words.length; i += 1) {
//   //   if (biggest.length < words[i].length) {
//   //     biggest = words[i];
//   //   }
//   // }

//   for (let word of words) {
//     if (word.length > biggest.length) {
//       biggest = word;
//     }
//   }

//   return biggest;
// }

// console.log(findLongestWord('jdfghds iuy sdfsfdafafasfa rtr'));
//Скрипт который 
console.log('Module 1.3');

// ==== ?? ====
// console.log(1 || 2); // 1
// console.log(1 ?? 2); // 1

// console.log(undefined || 2); // 2
// console.log(null || 2); // 2
// console.log(undefined ?? 4); // 4
// console.log(null ?? 4); // 4

// console.log(0 || 3); // 3
// console.log(0 ?? 3); // 0

// ==== slice ====
// const text =
//   'Метод slice() возвращает новый массив, содержащий копию части исходного массива ';

// const title = document.querySelector('h3');

// for (let i = 0; i < text.length; i += 1) {
//   const str = text.slice(i);

//   setTimeout(() => {
//     title.textContent = str;
//   }, i * 100);
// }

// ==== includes ====
// const logins = ['admin', 'vasya', 'qwerty'];
// const userInput = prompt('enter login');

// if (logins.includes(userInput)) {
//   console.log('welcome!');
// } else {
//   console.log('try again');
// }

// console.log('admin vasya qwerty'.includes('admin'));
// console.log('admin vasya qwerty'.includes('kjhgj'));

// === Number, String ====
// Напиши скрипт который переведёт значение totalMinutes (количество минут)
// в строку в формате часов и минут HH:MM.

// Скажите пожалуйста, как читается это выражение
// const doubleDigitHours = String(hours).padStart(2, 0);  именно  String()

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// console.log(Number('1234'));
// console.log(String(1234).padStart(8, '*'));

// ==== Array.from ====
// const obj = { 0: 1, 1: 2, 2: 3 };

// console.log([1, 2, 3]);
// console.log(obj);

// console.log(Array.from(obj));
// console.log(Object.values(obj));

// ==== debugging ====
// const logins = ['admin', 'vasya', 'qwerty'];
// const userInput = prompt('enter login');

// if (logins.includes(userInput.toLowerCase())) {
//   console.log('welcome!');
// } else {
//   console.log('try again');
// }

// =======
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }

// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';
// console.log(link);

// ======
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 200;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// =====
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 0;
// // Пиши код ниже этой строки

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня ночью спать не придётся');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// ====
// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня ночью спать не придётся');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Послезавтра');
//     break;
//   default:
//     console.log('Дата в будущем');
// }

// ======
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max,
// но только если число кратное 5.

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// =====
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('enter login');

// if (login === 'Админ') {
//   const password = prompt('enter password');

//   if (password === 'Я админ') {
//     console.log('Здравствуйте');
//   } else {
//     console.log('Неверный пароль');
//   }
// } else {
//   if (login === null || login === '') {
//     console.log('Отменено');
//   } else {
//     console.log('Я вас не знаю');
//   }
// }

// ===== regular expressions =====
// https://devdocs.io/javascript/global_objects/regexp/exec
// const reg = /[aeiou]+/gi;
// const str = 'jdooohfg 097 sdfadseq 34 sduufs 345';

// console.log(reg.exec(str));

// ===== game ======
// 1 --> 100

// let count = 0;
// let userInput;
// const x = ~~(Math.random() * 100) + 1;
// // console.log(x);

// do {
//   count++;
//   userInput = Number(prompt('enter your number'));
//   console.log(userInput);

//   if (x > userInput) {
//     console.log('x >', userInput);
//   } else if (x < userInput) {
//     console.log('x <', userInput);
//   } else {
//     console.log('Hurray!!!');
//   }
// } while (x !== userInput);

// console.log('count:', count);
