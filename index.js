// let num=1
// console.log(num);
// num=10
// console.log(num);

// let num1='2'
// console.log(num1);
// num1=555
// console.log(num1);
// console.log('g'*0);

// let userValue=+prompt("Your amount")
// if(userValue>=500&&userValue<1500){
//   let sold_5=userValue/20
//   console.log("Your amount with 5% discount = "+(userValue-sold_5)+' грн.')
// }else if(userValue>=1500){
//   let sold_10=userValue/10
//   console.log("Your amount with 10% discount = "+(userValue-sold_10)+" грн.")
// }else{
//   console.log("Your amount "+(userValue)+" грн.")
// }
// let num = 0;

// while (num <= 20) {
//   console.log((num = num + 2));
//   num++;
// }

// let pass = 12345;

// let userPass = prompt("Your pass");
// if (userPass === pass) {
//   console.log(444);
// } else {
//   userPass;

/**Виконати наступні завдання

Створити масив [ 1, 2, 3 ]. Додати до нього в кінець наступні значення : 6, 5 , 4. Після цього до нього же додати у початок значення: -3, -2, -1

Створити масив [ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ]. Видалити перші та остані два значення з нього.


 Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на [1, 4, 5].


 Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice записати у новий масив елементи [2, 3, 4].


Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 2, 3, 'a', 'b', 'c', 4, 5].


 Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */

const arr = [1, 2, 3];
arr.push(6, 5, 4);
arr.unshift(-3, -2, -1);
console.log(arr);

const arr1 = [100, -273.15, 0, 1, 2, 3, 4, 5, 6, 9, 10];
console.log(arr1.slice(2, -2));

const arr2 = [1, 2, 3, 4, 5];
arr2.splice(arr2.length - 4, 2);
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];
let new_arr3 = arr3.splice(1, 3);
console.log(new_arr3);

const arr4 = [1, 2, 3, 4, 5];
arr4.splice(3, 0, "a", "b", "c");
console.log(arr4);

const arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 0, "a", "b");
arr5.splice(length - 1, 0, "c");
arr5.splice(8, 0, "e");
console.log(arr5);
