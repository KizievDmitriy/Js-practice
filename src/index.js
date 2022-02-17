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
// const max = 8;
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
//     // total += i;
// }
// console.log('total: ', total);



// console.log('Module 1.2');

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
console.log('Module 2.1');

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// for (const client of clients) {
//   console.log(client);
// }

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]

// const message2 = 'JavaScript123это123интересно';
// console.log(message2.split(' ')); // ["'JavaScript123это123интересно'"]

// const message3 = 'JavaScript123это123интересно';
// console.log(message3.split('123')); // ["'JavaScript123это123интересно'"]

// const list = '1234156718911111112351895178961825';
// console.log(list.split('1'));

// let message4 = ' JavaScript     это  интересно     ';
// message4 = message4.trim();
// message4 = message4.replace(/  +/gi, ' ');
// console.log(message4.split(' ')); // ["JavaScript", "это", "интересно"]

// const colors = ['red', 'green', 'blue'];
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// ===== exercise 1 =====
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres);

// genres.unshift('Country', 'Reggae');
// console.log(genres);

// ===== exercise 2 =====
// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = '8 11'; // 8 * 11
// const numbers = values.split(' ');
// const a = Number(numbers[0]);
// const b = Number(numbers[1]);
// const s = a * b;

// console.log(numbers);
// console.log(a, b);
// console.log('s:', s);

// ===== exercise 3 =====
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате
// номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// ===== exercise 4 =====
// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(namesArr[i], phonesArr[i]);
// }

// ===== exercise 5 =====
// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки
// кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const strArr = string.split(' ');
// strArr.shift();
// strArr.pop();

// console.log(strArr.join(' '));

// ===== exercise 6 =====
// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';
// const strArr = string.split('');
// const reversedLetters = strArr.reverse();
// const reversedString = reversedLetters.join('');

// console.log(strArr);
// console.log(reversedLetters);
// console.log(reversedString);

// let newString = '';
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   newString = newString.concat(string[i]);
// }
// console.log(newString);

// console.log('Welcome to the future'.split('').reverse().join(''));

// ===== exercise 7 =====
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const numbers = [2, 1, 3, 7, 10, 4, 5];
// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   for (let j = i + 1; j < numbers.length; j += 1) {
//     const a = numbers[i];
//     const b = numbers[j];
//     const temp = a;

//     if (b < a) {
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log(numbers);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);
// // ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby'];
// // ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// // ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     const a = langs[i];
//     const b = langs[j];
//     const temp = a;

//     // first letters
//     if (b[0] < a[0]) {
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }
// console.log(langs);

// ===== exercise 8 =====
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, -100, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min); // 1
// console.log(max); // 94

// ===== guard clause =====
// function userIsAdmin(user) {
//   if (user === 'admin') return true;
//   if (user === 'root') return true;

//   return false;
// }

// console.log(userIsAdmin('admin'));
// console.log(userIsAdmin('root'));
// console.log(userIsAdmin('kjhjkh'));

// ==== spread ====
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1]; // spread

// console.log(arr1 === arr2);

// ==== rest ====
// function getAllExceptFirst(a, ...rest) {
//   return rest;
// }

// console.log(getAllExceptFirst(1, 2, 3, 4, 5, 6)); // 2, 3, 4, 5, 6
// console.log(getAllExceptFirst(1, 2)); // 2

// const fn = (...rest) => {
//   console.log(rest);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6);

// ===== indexOf =====
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// console.log(langs.indexOf('python')); // 0
// console.log(langs.indexOf('javascript')); // 1
// console.log(langs.indexOf('ruby')); // 5
// console.log(langs.indexOf('fdxcgvhbjnkml')); // -1
console.log('Module 2.2');

// const fn2 = function fn2() {
//   console.log('fn2 text');
// };

// function withdraw(amount, balance) {
//   fn2();

//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//     return;
//   }

//   // Если условие первого if не выполнилось, его тело пропускается
//   // и интерпретатор доходит до второго if.
//   // Если условие выполняется, вызывается console.log и выход из функции.
//   // Код идущий после тела if  не выполнится.
//   if (amount > balance) {
//     console.log('Недостаточно средств на счету');
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log('Операция снятия средств проведена');
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"

// ===== example 1 =====
// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//   const weightNum = Number(weight.replace(',', '.'));
//   const heightNum = Number(height.replace(',', '.'));
//   // const index = weightNum / Math.pow(heightNum, 2);
//   const index = weightNum / heightNum ** 2;

//   return index.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// ===== example 2 =====
// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//   // if (a < b) return a;

//   // return b;

//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// ===== exmaple 3 =====
// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const [a, b] = dimensions.split(' ');
//   // const a = values[0];
//   // const b = values[1];

//   return Number(a) * Number(b);
// }

// console.log(getRectArea('8 11')); // 88

// ===== example 4 =====
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ===== example 5 =====
// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < Math.max(namesArr.length, phonesArr.length); i += 1) {
//     console.log(namesArr[i], phonesArr[i]);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// printContactsInfo('Bobby', '89001234567');

// ===== example 6 =====
// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94

// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// ===== example 7 =====
// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage() {
//   let sum = 0;

//   for (const number of arguments) {
//     sum += number;
//   }

//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ===== example 8 ======
// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);

//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//  ====== example 9 =======
// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(courses, name) {
//   if (courses.includes(name)) {
//     console.log('У вас уже есть такой курс');
//     return;
//   }

//   courses.push(name);
// }

// function removeCourse(name) {
//   if (!courses.includes(name)) {
//     console.log('Курс с таким имененем не найден');
//     return;
//   }

//   const index = courses.indexOf(name);
//   courses.splice(index, 1);
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);

//   courses.splice(index, 1, newName);
// }

// addCourse(courses, 'Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse(courses, 'CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// https://github.com/goitacademy/javascript-homework/tree/main/homework-02



console.log('Module 3.1');

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// function getValueByKeyName(keyName) {
//   return book[keyName]; // book["title"], book["author"]
// }

// console.log(getValueByKeyName('title')); // The Last Kingdom
// console.log(getValueByKeyName('author')); // Bernard Cornwell

// book.title = 'New Title';
// console.log(getValueByKeyName('title')); // The Last Kingdom

// book.qwerty = 'lorem ipsum';
// console.log(book);

// book['asdfg'] = 'ipsum lorem';
// console.log(book);

// ===== Вычисляемые свойства =====
// function createObjectDynamically(keyName, value) {
//   return {
//     name: 'Bobby',
//     age: 15,
//     [keyName]: value,
//   };
// }

// console.log(createObjectDynamically('eye', 'blue'));
// console.log(createObjectDynamically('country', 'USA'));
// console.log(createObjectDynamically('sex', 'undefined'));

// ===== example =====
// abcaba
// { a: 3, b: 2, c: 1 }

// const str = 'abcaba';
// const res = {};

// for (const letter of str) {
//   if (res[letter]) {
//     // res["a"], res["b"]
//     res[letter] += 1;
//   } else {
//     res[letter] = 1;
//   }
// }

// console.log(res);

// // ===== inheritance =====
// const Human = {
//   name: '',
//   age: 0,
//   eye: '',

//   sayHello() {},
// };

// const Doctor = {
//   // ... Human (name, age ...)
//   ocupation: 'therapy',
// };

// const Pilot = {
//   // ... Human (name, age ...)
//   flyghtLicense: 'B',
// };

// ===== example =====
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    // rating: 0,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
  {
    title: 'Сон смешного человека',
    author: 'Федор Достоевский',
    rating: 7.75,
  },
];

let totalRating = 0; // +8.38, +8.51, 7.75
let count = 0;

for (const book of books) {
  if (!isNaN(book.rating)) {
    totalRating += book.rating || 0;
    count += 1;
  }
}

const averageRating = (totalRating / count).toFixed(1);
console.log(averageRating); // 8.2

// ===== example ======
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// for (const color of colors) {
//   const keys = Object.keys(color);
//   console.log(keys);
//   console.log(color.hex);
//   console.log(color.rgb);
// }

// ===== example =====
// const OBJ = Object.freeze({
//   name: 'Bobby',
//   age: 15,
//   innerObj: Object.freeze({
//     x: 5,
//   }),
// });

// OBJ.name = 'Peter';
// OBJ.innerObj.x = 10;

// console.log(OBJ);

// ===== example =====
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
//   location: {},
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// // apartment.location = {};
// apartment.location.city = 'Kingston';
// apartment.location.country = 'Jamaica';

// ==== example 1 ====
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mod = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ==== example 2 ====
// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// ==== example 3 ====
// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
//   { name: 'dfghj', price: 100, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'dfghj'));

// ==== example 4 ====
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     const transaction = {
//       id: this.transactions.length,
//       amount,
//       type,
//     };

//     return transaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('снятие такой суммы не возможно');
//       return;
//     }

//     this.balance -= amount;
//     this.transactions.push(
//       this.createTransaction(amount, Transaction.WITHDRAW),
//     );
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     // for (const transaction of this.transactions) {
//     //   if (transaction.id === id) {
//     //     return transaction;
//     //   }
//     // }

//     return this.transactions.find((transaction) => transaction.id === id);
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     // let sum = 0;

//     // for (const transaction of this.transactions) {
//     //   if (transaction.type === type) {
//     //     sum += transaction.amount;
//     //   }
//     // }

//     // return sum;

//     return this.transactions.reduce(
//       (acc, transaction) => (transaction.type === type ? acc + transaction.amount : acc),
//       0,
//     );
//   },
// };

// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// // console.log(account);

// account.withdraw(2000);
// account.withdraw(500);
// console.log(account);

// account.withdraw(1000);

// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// // ==== this ====
// const obj = {
//   name: 'Bobby',

//   sayHello() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// obj.sayHello();