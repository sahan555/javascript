console.log(c);
var c = 5221312;

console.log(2 + 1);
const d = 5;
console.log(d);

let a = 1;
console.log(a);

const add = null;
console.log(add);
console.log(typeof add);

let details = { name: "ram", age: 5, isActive: true };
console.log(details);

console.log(a / d);

a += d;
console.log(a);
let b = 1;
let e = 1;
console.log(b == e);
console.log(b == 1);
console.log(b === e);

let f = 8;
let g = 7;

console.log(f >= 0);
if (b == 1 && e == 1) {
  console.log(true);
} else {
  console.log(false);
}

console.log(a == 6 ? "true" : "false");

console.log(6 + "aasdsd");
console.log(fw);
var fw;
fw = 7777;
console.log(fw);

const mm = 50;
const randomNum = Math.floor(Math.random() * 60) + 50;
if (mm >= randomNum) {
  console.log("greater than");
  console.log(randomNum);
} else if (mm == randomNum) {
  console.log("equal");
  console.log(randomNum);
} else {
  console.log("smaller");
  console.log(randomNum);
}

// let numm = Number(window.prompt("enter a number"));
let numm = 1;
switch (numm) {
  case 1:
    console.log("yo 1 ho");
    break;
  case 2:
    console.log("yo 2 ho");
    break;
  default:
    console.log("yo default ho");
    break;
}
let name = ["jeniss", "Sahansss", "Munassss", "Shyamss"];
// const randomName = Math.floor(Math.random() * 5)+1;
// const resultName = prompt("Enter a Number");
// const result = name.filter((names) => names.length > resultName);
// console.log(resultName);

// if (name) {
// } else {
//   console.log(name);
// }

// let numChecker = Number(prompt("enter a number"));
// if (numChecker > 0){
//     console.log('positive');
// }
// else if (numChecker == 0){
//     console.log("equal");
// }
// else{
//     console.log('negative');
// }

// let users = [
//   {
//     name: prompt("enter a name"),
//     age: prompt("Enter age"),
//   },
// ];
// users.map((user) => {
//   if (user.age >= 18) {
//     console.log(user);
//     console.log("eligible to vote");
//   } else {
//     console.log(user);
//     console.log("not eligible");
//   }
// });

// let year = Number(prompt("enter a year"));
// if(year % 4 === 0 && year %100 !== 0 || year %400 === 0) {
//     console.log(`${year} is leap year`);
// }
// else{
//     console.log(`${year} is not a leap year`)
// }

// let mark = Number(prompt("enter your marks"));
// if (mark >= 90 && mark <= 100) {
//   console.log("Your Grade is A with your mark-" + mark);
// } else if (mark >= 80 && mark < 90) {
//   console.log("Your Grade is B with your mark-" + mark);
// } else if (mark >= 70 && mark < 80) {
//   console.log("Your Grade is C with your mark-" + mark);
// } else if (mark >= 60 && mark < 70) {
//   console.log("Your Grade is D with your mark-" + mark);
// }
// if (mark >= 0 && mark < 60) {
//   console.log("Your Grade is E with your mark-" + mark);
// }

let jg = ["naasde", "side"];
if (Array.isArray(jg)) {
  console.log("is array");
} else {
  console.log("isnot array");
}
if (typeof jg === "object") {
  console.log("is array");
} else {
  console.log("isnot array");
}

// discount in if else
let purchase = 5020;
let disount;
if (purchase > 100) {
  disount = purchase * (10 / 100);
  console.log(purchase - disount);
} else {
  disount = purchase * (5 / 100);
  console.log(purchase - disount);
}

// next way in switch case
let purhaseAmt = 22;
switch (true) {
  case (purhaseAmt < 100):
    disountAmt = purhaseAmt * 0.05;
    console.log(`discount is ${disountAmt}`);
    console.log(purhaseAmt - disountAmt);
    break;
  case (purhaseAmt > 100):
    disountAmt = purhaseAmt * 0.1;
    console.log(`discount is ${disountAmt}`);
    console.log(purhaseAmt - disountAmt);
    break;
  default:
   console.log("NOt value found");
   break;
}
