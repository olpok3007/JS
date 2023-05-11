"use strict";
// function User(firstName, lastName, email, age, isMale, isSubscribed) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.isMale = isMale;
//   this.isSubscribed = isSubscribed;
// }

// const user1 = new User("Ivan", "Ivanowycz", "ivan@gmail.com", 25, true, false);

// function createusers(amount) {
//   const userArray = [];
//   for (let i = 0; i < amount; i++) {
//     const user = new User(
//       `Name ${i}`,
//       `LastName ${i}`,
//       `email${i}@email.com`,
//       Math.round(Math.random() * 100),
//       Math.random() > 0.5,
//       Math.random() > 0.5
//     );
//     userArray.push(user);
//   }

//   return userArray;
// }

// const userArray1 = createusers(100);
// console.table(userArray1);

// console.table(
//   userArray1.map(function (rrr) {
//     return rrr.email;
//   })
// );
// console.table(
//   userArray1.filter(function (fff) {
//     return fff.age > 95;
//   })
// );

// console.table(
//   userArray1.filter(function (isFilterMan) {
//     return isFilterMan.age >= 50 && isFilterMan;
//   })
// );
// function User(name, age, isMale) {
//   this.name = name;
//   this.age = age;
//   this.isMale = isMale;
// }

// const user0 = {
//   name: "Test",
//   age: 99999999,
//   isMale: true,
// };

// const userPrototype = {
//   speak: function (words) {
//     return `${this.name} says: ${words}`;
//   },
// };

// const userPrototypeProtype = {
//   test: function () {
//     return "userPrototypeProtype";
//   },
// };

// userPrototype.__proto__ = userPrototypeProtype;
// user0.__proto__ = userPrototype;

// User.prototype = userPrototype;

// const user1 = new User("First User", 50, true);
// const user2 = new User("Second User", 34, false);

// user1.__proto__ = userPrototype;

////////////////////////////
const sum = (a, b, ...otherNumber) => {
  console.log(otherNumber);
  let result = a + b;
  return result;
};

const sum1 = (...numbers) => {
  // let result = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   result += numbers[i];
  // }
  // return result;

  const result = numbers.reduce((accu, number, index, arr) => {
    return accu + number;
  });
  console.log(result);
};
