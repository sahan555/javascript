//array
let numCollection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numCollection[5]);
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log(numCollection[i]);
  }
}
//objects
const person = {
  name: "Ramcha",
  age: 50,
  hobbies: ["dancing", "singing"],
};
console.log(person);
console.log(person.name);
console.log(person.hobbies);
console.log(person.hobbies[0]);

const key = Object.keys(person).find(key => key === 'age');
console.log(key);
console.log(person[key]);




const numbers = [3,5,7,9,1,2];
//remove specify array
const index = numbers.indexOf(2);
const x = numbers.splice(index, 1);
console.log(`myArray values: ${numbers}`);
console.log(`variable x value: ${x}`);

//to push and pop and shift
numbers.push(6);
console.log(numbers);
numbers.pop()
console.log(numbers);

const rectangle ={
    width:5,
    height:15,
    getArea:function(){
        return (this.width*this.height);
    }
};
console.log(rectangle.getArea());
// const numbers = [3,5,7,9,1,2];
numbers.sort();
console.log(numbers);
findNumber = numbers.find(num => num >5);
console.log(findNumber);

mapNumber = numbers.map(num => num >5);
console.log(mapNumber);

filterNumber = numbers.filter(num => num > 5);
console.log(filterNumber);

const names = ["ram","shyam","muna","Nelson"];
findNames = names.map(name => name.length > 4);
console.log(findNames);
for(let i = 0; i<=5;i++){
    if(findNames[i] == true){
        console.log(names[i]);
    }
}