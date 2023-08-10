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

function reverseStr(str){
  let reverse  = "";
  for(i = str.length-1;i >= 0;i--){
    // reverse+= str[i];
    reverse= reverse+ str[i];
  console.log(reverse);
  }
  console.log(reverse);
}
reverseStr("nEosp");

// function maxValue()