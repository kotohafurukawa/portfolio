import '@/scss/style.scss';
// import fn from "./index.js";
let greeting = () => {
  console.log('hello world');
}
greeting();
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  fn() {
    console.log(`私の名前は${this.name}で、${this.age}歳です。`);
  }
}

const bob = new Person('bob', 29);
bob.fn();