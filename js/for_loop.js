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

let numArray =[1,2,3,4,5,6,7,8,9,10];
console.log(numArray.length);
let odd =[];
for (let i =0;i < numArray.length;i++){
  if(numArray[i]%2 ==0){
    console.log(numArray[i]);
  }
  else{
   odd.push(numArray[i]);
  }
}
console.log(odd);