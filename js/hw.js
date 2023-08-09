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
    let assada=0;
    for (i = 0; i < arraySum.length; i++) {
      assada += arraySum[i];
    }
    console.log(assada);
  }
  sumArray([1,5,4,8]);
  
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
  
  