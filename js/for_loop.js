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
