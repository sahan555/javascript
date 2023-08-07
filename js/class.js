class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  greet() {
    console.log(
      `Hello,my name is ${this.name} and my age = ${this.age}.I lived in ${this.location}`
    );
  }
}
const person1 = new Person("Ramcha", 50, "ktm");
console.log(person1);
person1.greet();

class Carshow {
  constructor(brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
  }
  greet() {
    console.log(
      `Car brand:${this.brand},Year:${this.year},color:${this.color}`
    );
  }
  mmm(){
    console.log(`${this.brand},${this.year},${this.color}`)
  }
}
const ford = new Carshow("Ford Ghost",1990,"Black");
console.log(ford);
ford.greet();
ford.mmm();

function Carcha(name,age){
    name,age;
    console.log(`This is car name : ${name}.my age is not avaible but in number : ${age}`)
}
Carcha("munnnnaaacha",50);
