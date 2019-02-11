class Person {
  constructor(name = 'Anonymous', age) {
    this.name = name;
    this.age = age || 0;
  }
  getGreeting() {
    return `Hi, I'm ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` and I came to visit from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler('Raymi Saldomando', 31, 'Lima');
console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Traveler('Gustavo León', 28);
console.log(other.getGreeting());
const other1 = new Traveler();
console.log(other1.getGreeting());
