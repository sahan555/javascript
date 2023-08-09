// for (let i =0;i<5;i+=2){
//     console.log(i);
//   }

// let count = 66;
// while(count > 3){
//   console.log(count);
//   count--;
// }
// let countNum = 3;
// while(countNum <= 30){
//   console.log(countNum);
//   countNum+=3;
// }

// let doCount=0;
// do{
//   console.log(doCount);
//   doCount++;
// }
// while(doCount <5);

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArray.length);
let odd = [];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 == 0) {
    console.log(numArray[i]);
  } else {
    odd.push(numArray[i]);
  }
}
console.log(odd);

let num = 0;
let sum = 0;
for (num = 0; num <= 10; num++) {
  sum += num;
  console.log(sum);
}

let sums = 0;
let i = 0;
do {
  sums += i;
  console.log(sums);
  i++;
} while (i <= 10);

let factorial = 1;
i = 1;
while (i <= 5) {
  factorial *= i;
  i++;
}
console.log(factorial);

factorial = 1;
for (i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(factorial);

factorial = 1;
for (i = 5; i >= 1; i--) {
  factorial *= i;
}
console.log(factorial);

square = 1;
for (i = 1; i <= 5; i++) {
  console.log(i);
  square = i;
  console.log(square);
  square *= square;
  // i*=i;
  console.log(square);
}
for (i = 1; i <= 5; i++) {
  console.log(i ** 2);
}

for (i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}
let row = "";
for (let j = 1; j <= 5; j++) {
  row += "*";
  console.log(row);
}

let descending = 1;
let desRecord = [];
i = 10;
while (i >= 1) {
  console.log(i);
  desRecord.push(i);
  i--;
}
console.log(desRecord);
desRecord.sort();
console.log(desRecord);

// factorial= Number(prompt("enter a number"));
factorial = 1;
// let savFactorial= Number(prompt("enter a number"));
let savFactorial = 6;
console.log(savFactorial);
for (i = 1; i <= savFactorial; i++) {
  factorial *= i;
}
console.log(factorial);

console.log(3 + 3);
console.log("3" + "3");
console.log("3" + +3);
console.log(3 + +"3");
console.log(3 + 3 - 3);
console.log("3" + "3" - "3");

for (i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

greet("Ramshree");
function greet(name) {
  console.log("Hello," + name + "!");
}
greet("Ramcha");

function myAdd(a, b) {
  return a + b;
}
// a = Number(prompt("Enter a Number"));
// b =Number(prompt("Enter a Number"));
a = 44;
b = 40;
let addResult = myAdd(a, b);
console.log("The add of a(" + a + ") + b(" + b + ") = " + addResult);

// anonymous function
const squares = function (x) {
  return x ** 3;
};
console.log(squares(5));

let multiply = (a, b) => a * b;
console.log(multiply(12, 45));

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
const generator = numberGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// call back function
function add(a, b) {
  return a + b;
}
function sumTotal(add) {
  return add;
}
function sub(a, b) {
  return a - b;
}
function minus(sub) {
  return sub;
}
function mixResult(add, sub) {
  return [add, sub];
}
const mixResultGiver = mixResult(add(5, 6), sub(66, 4));
console.log(mixResultGiver);
const minusResult = minus(sub(70, 44));
console.log(minusResult);
sub, add;

function calc(sumTotal) {
  return sumTotal;
}
function calc(minus) {
  return minus;
}
let calcResult = calc(sumTotal(add(5, 6)));
console.log(calcResult);
calcResult = calc(minus(sub(5, 6)));
console.log(calcResult);

function calcsa(a, b, callback) {
  return callback(a, b);
}
let calcsaResult = calcsa(55, 45, sub);
console.log(calcsaResult);
calcsaResult = calcsa(55, 45, add);
console.log(calcsaResult);

//Asynochorous with callback

// function fetehData(callback) {
//   setTimeout(function () {
//     let data = "some data";
//     callback(data);
//   }, 0);
// }
// fetehData(function (data) {
//   console.log(data);
// });

// function fetchDatafromServer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "same", age: 50 };
//       resolve(data);
//     }, 0);
//   });
// }

//sync fuction
// fetchDatafromServer()
//   .then((vData) => {
//     console.log("fetchdata:", vData);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//async fuctuon
// async function fetchssdata() {
//   try {
//     const data = await fetchDatafromServer();
//     console.log("fetched data:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// fetchssdata();
// console.log("this data will print first becasue of awit in async function");

let bigNum = [];
for (i = 0; i < 100; i++) {
  bigNum.push(i);
}
console.log(bigNum);
for (i = 0; i < 100; i++) {
  // if (bigNum[i] % 3 == 0) {
  //   console.log("buzz");
  // } else if (bigNum[i] % 5 == 0) {
  //   console.log("kill");
  // }
  if (bigNum[i] % 3 == 0 && bigNum[i] % 5 == 0) {
    console.log("buzzKill", bigNum[i]);
  } else {
    continue;
  }
}
multiThree = bigNum.filter((num) => num % 3 == 0);
console.log(multiThree);

const arrayOfObjects = [
  { name: "Ramcha", age: 44 },
  { name: "asda", age: 42134 },
  { name: "asd", age: 442 },
  { name: "rwqe", age: 424 },
];
const names = arrayOfObjects.map((obj) => obj);
console.log(names);
console.log(names[0]);
console.log(names[0].name);
console.log(names[0].age);
const ages = arrayOfObjects.map((obj) => obj.age);
console.log(ages);

