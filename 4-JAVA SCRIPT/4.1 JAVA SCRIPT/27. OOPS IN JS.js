// ==============================
// 1. Object Example
// ==============================
const user = {
  name: "Swaraj",
  login() {
    console.log(this.name + " logged in");
  }
};

user.login();


// ==============================
// 2. Class & Constructor
// ==============================
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const p1 = new Person("Rahul", 22);
p1.greet();


// ==============================
// 3. Encapsulation
// ==============================
class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    this.#balance += amount;
    console.log("Deposited:", amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log("Balance:", acc.getBalance());


// ==============================
// 4. Inheritance
// ==============================
class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

const dog1 = new Dog();
dog1.eat();
dog1.bark();


// ==============================
// 5. Polymorphism (IMPORTANT)
// ==============================
class AnimalSound {
  speak() {
    console.log("Animal sound");
  }
}

class DogSound extends AnimalSound {
  speak() {
    console.log("Bark");
  }
}

class CatSound extends AnimalSound {
  speak() {
    console.log("Meow");
  }
}

const a1 = new AnimalSound();
const d1 = new DogSound();
const c1 = new CatSound();

a1.speak(); // Animal sound
d1.speak(); // Bark
c1.speak(); // Meow


// ==============================
// 6. Abstraction
// ==============================
class Car {
  start() {
    this.#engine();
    console.log("Car started");
  }

  #engine() {
    console.log("Engine running internally...");
  }
}

const car1 = new Car();
car1.start();


// ==============================
// 7. Prototype Example
// ==============================
function Student(name) {
  this.name = name;
}

Student.prototype.study = function () {
  console.log(this.name + " is studying");
};

const s1 = new Student("Aman");
s1.study();