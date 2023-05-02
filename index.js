"use strict";
function MyArray() {
  this.length = 0;
}

// const myArrayProto = {
//   push: function (newElem) {
//     // записати елемент
//     this[this.length] = newElem;
//     // оновили довжину масиву
//     this.length++;
//     return this.length;
//   },
// };

function MyArrayProto() {
  this.push = function (newElem) {
    // записати елемент
    this[this.length] = newElem;
    // оновили довжину масиву
    this.length++;
    return this.length;
  };

  this.pop = function () {
    if (this.length > 0) {
      const lastItem = this[this.length - 1];
      delete this[--this.length];
      return lastItem;
    }

    return undefined;
  };

  /**Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива. */

  this.unshift = function (newElem) {
    this[[this.length] / this.length] = newElem;
    this.length++;
    return this.length;
  };
}

/**
 Операция shift должна выполнить 3 действия:
Удалить элемент с индексом 0.
Сдвинуть все элементы влево, заново пронумеровать их, заменив 1 на 0, 2 на 1 и т.д.
Обновить свойство length .
 */

this.shift = function () {
  if (this.length > 0) {
    const firstItem = this[this[1]];
    delete this[--this.length];
    return this.length;
  }
};

// const myArrayProto = new MyArrayProto();
// MyArray.prototype = myArrayProto;

MyArray.prototype = new MyArrayProto();

const myArr1 = new MyArray();

const arr = [1, 2, 3];

/**Створити функції конструктор MyArray та написати для нього наступніметоди, існуючі у реального масиву:

Базовий рівень

Реалізувати методи екземаплярів MyArray shift, unshift, які працюють аналогічно методам реальних масивів
Реалізувати метод конструктору isMyArray, працюючий аналогічно методу isArray. При виконанні ознайомитися з оператором instanceof


Просунутий рівень

Реалізувати методи екземаплярів forEach, map , filter.  які працюють аналогічно методам реальних масивів */

const testString = "word anothere       test 12345. ";

/**
 *
 * @param {string} str
 * @returns {string}
 */

function toRandomCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (Math.random() < 0.5) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

function capitalizeString(str) {
  const words = str.split(" ");
  console.log('Оригинальная строка: "' + str + '"');
  console.log('Разделитель: "' + '"');
}
capitalizeString("name");

/**
 * Створіть функцію, яка приймає необмежену кількість параметрів
  і повертає кількість стрінгів (або інших типів даних за вашим бажанням) у цих параметрах

  (1, 2, 'test', true, 'false', null) => 2
 */
function countNumber(...values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === "string") {
      total++;
    }
  }
  return total;
}

function countNumber1(...values) {
  return values.filter((value) => typeof value === "number").length;
}
///////////////////////////////////////////////////
// function createAdder(number) {
//   let accumulator = number;

//   function adder(num) {
//     return (accumulator += num);
//   }

//   return adder;
// }

// const createAdder = (number) => (num) => (number += num);

// const adder = createAdder(10);
// const res1 = adder(30); // 40
// const res2 = adder(20); // 60
// const res3 = adder(40); // 100
////////////////////////////////////////////////////////////

/**Зробити функцію-калькулятор. Вона приймає необмежену кількість параметрів
  Перший парамет - знак (+, - ...) по типу даних це стрінга. Всі інші параметри - числа з якими ви виконуєте операцію яку робить перший параметр

    
  + 1 , 2 , 3 => 6
  - 1 , 2, 3 => -4
  * 1 , 2 , 3, 4 => 24

  Після цього каррувати функцію щоб вона спочатку приймала тільки знак
  а потім у вкладеній функції - числа

  ('+')(1,2,3,4) => 10
  ('-')(1,2,3,4) => -8 */

function getFactorialNum(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  if (num > 1) {
    return num * getFactorialNum(num - 1);
  }

  if (num < 0) {
    throw new RangeError("Factorial be only positive number");
  }
}

// Зробити функцію-калькулятор. Вона приймає необмежену кількість параметрів
//   Перший парамет - знак (+, - ...) по типу даних це стрінга. Всі інші параметри - числа з якими ви виконуєте операцію яку робить перший параметр

//   + 1 , 2 , 3 => 6
//   - 1 , 2, 3 => -4
//   * 1 , 2 , 3, 4 => 24

//   Після цього каррувати функцію щоб вона спочатку приймала тільки знак
//   а потім у вкладеній функції - числа

//   ('+')(1,2,3,4) => 10
//   ('-')(1,2,3,4) => -8

function calculator(a, b, c) {
  if (c === "+") {
    return a + b;
  }
  if (c === "-") {
    return a - b;
  }
  if ((c = "*")) {
    return a * b;
  }
  if ((c = "/")) {
    return a / b;
  }
}
////////////////////////////////////////////////////
/*зробити функцію, якій ми будемо передавати число
  функція маєповернути стількі відкриваючих та закриваючих дужок
  скільки було вказано

  4 => (((())))
  3 => ((()))
  2 => (())
  1 => () */

function getL(num) {
  if (num < 1) {
    throw new RangeError("!!!!!!");
  }
  if (num === 1) {
    return "()";
  }
  // return "(" + getL(num - 1) + ")";
  return `(${getL(num - 1)})`;
}
/////////////////////////////////////////////

function declaration() {
  console.log(this);
}
const arrowFuc = () => {
  console.log(this);
};

const post = {
  picture: "https://www.youtube.com/watch?v=UeF95w8peVg",
  author: "Test user",
  message: "ddagdjhagakhfho",
  emojis: [
    {
      emojiName: "Thimbs Up",
      amount: 24,
    },
    {
      emojiName: "Thumbs Down",
      amount: 15,
    },
    {
      emojiName: "Thinking",
      amount: 3,
    },
  ],
  showPostEmojis: function () {
    const func = function (emojiObject) {
      console.log(
        `Post with message  ${this.message} has this emoji: ${emojiObject.emojiName} is user ${emojiObject.amount}`
      );
    };
    const callback = func.bind(this);
    this.emojis.forEach(callback);
  },
  showPostEmojiArr: function () {
    this.emojis.forEach((emojiObject) => {
      console.log(
        `Post with message  ${this.message} has this emoji: ${emojiObject.emojiName} is user ${emojiObject.amount}`
      );
    });
  },
};

const arr5 = [1, 8, 4, 10, 55];

function declar() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {}
}
const sum = (a, b, ...t) => {
  console.log(t);
  let result = a + b;
  return result;
};
//////////////////////////////////////////////
