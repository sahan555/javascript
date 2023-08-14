function mysum(a, b) {
  return a + b;
}
console.log(mysum(18, 5));

// let sumArray = 0;
// let arraySum = [1, 0, 5, 4, 7, 8, 9, 10];
// for (i = 0; i < arraySum.length; i++) {
//   sumArray += arraySum[i];
// }
// console.log(sumArray);

function sumArray(arraySum) {
  let assada = 0;
  for (i = 0; i < arraySum.length; i++) {
    assada += arraySum[i];
  }
  console.log(assada);
}
sumArray([1, 5, 4, 8]);

// let arraySum = [1, 0, 5, 4, 7, 8, 9, 10];

// let ranNumber=Math.floor(Math.random() *10);
// console.log(ranNumber);
// if(ranNumber % 2 ==0){
//   console.log("even",ranNumber);
// }
// else{
//   console.log(`odd, ${ranNumber}`);
// }

function ranNumber(number) {
  if (number % 2 == 0) {
    console.log("even", number);
  } else {
    console.log("odd", number);
  }
}
const ranChecker = ranNumber(Math.floor(Math.random() * 10));

// let stringReverse = "Hellooo";
// console.log(stringReverse);
// var str = "";
// for (i = stringReverse.length - 1; i >= 0; i--) {
//   str += stringReverse[i];
//   console.log(str);
// }
// console.log(str);

function reverseStr(str) {
  let reverse = "";
  for (i = str.length - 1; i >= 0; i--) {
    // reverse+= str[i];
    reverse = reverse + str[i];
    console.log(reverse);
  }
  console.log(reverse);
}
reverseStr("nEosp");

//hw exam ko
function user_age(age) {
  if (age >= 18) {
    console.log("you a adult");
  } else {
    console.log("you a child");
  }
}
user_age(188);

function positive_checker(num) {
  if (num > 0) {
    console.log("positive");
  } else if (num < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}
positive_checker(0);

function pass_checker(pass) {
  if (pass == "Secret123") {
    console.log("access granted");
  } else {
    console.log("not granted");
  }
}
pass_checker("Secret123");

function day_checker(day) {
  switch (day) {
    case "sunday" || "monday" || "tuesday" || "Wednesday" || "Thursday":
      console.log("weekday");
      break;
    case "Friday" || "Saturday":
      console.log("weekend");
      break;
    default:
      console.log("not found");
  }
}
day_checker("sunday");

function grade_checker(grade) {
  switch (true) {
    case 0 >= grade || grade <= 60:
      console.log("C");
      break;
    case grade <= 80:
      console.log("B");
      break;
    case grade <= 100:
      console.log("A");
      break;
    default:
      console.log("not founde");
  }
}
grade_checker(79);

function month_checker(month) {
  switch (month) {
    case 1:
      console.log("jan");
      break;
    case 2:
      console.log("feb");
      break;
    case 3:
      console.log("mar");
      break;
    case 4:
      return "apr";
      break;
    default:
      console.log("not founde");
  }
}
month_checker(4);
console.log(month_checker(4));

function simple_calc(a, b, c) {
  switch (c) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return undefined;
  }
}
let multi = simple_calc(5, 10, "*");
console.log(multi);

function factorial(num) {
  console.log(num);
  let a = 1;
  for (i = 1; i <= num; i++) {
    a *= i;
  }
  console.log(a);
}
factorial(5);

function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let nextterm;
  console.log(`fibonacci series upto ${num}`);
  console.log(n1);
  console.log(n2);
  nextterm = n1 + n2;

  while (nextterm <= num) {
    console.log(nextterm);

    n1 = n2;
    n2 = nextterm;
    nextterm = n1 + n2;
  }
}
fibonacci(20);

function multitable(num) {
  let i = 1;
  let table = [];
  do {
    multi = num * i;
    table.push(multi);
    i++;
  } while (i <= 10);
  return table;
}
multitable(5);
console.log(multitable(5));

const bmiCalc = (weight, height) => weight / (height * height);
bmiCalc(50, 0.127);
console.log(bmiCalc(50, 1.8));

const calcInterest = (p, t, r) => (p * t * r) / 100;
console.log(calcInterest(25000, 4, 5));

function rervStr(str) {
  let strrr = '';
  for (i = str.length-1; i >= 0; i--) {
    strrr += str[i];
  }
  return strrr;
}
console.log(rervStr("name"));
console.log(rervStr("popillol"));

function powerOf(base,ex){
  let num =1;
  for(let i =1;i <=ex;i++){
    num*=base;
    console.log(num);
  }
  return(num);
}
console.log(powerOf(3,9));