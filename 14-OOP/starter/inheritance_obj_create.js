'use strict';

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // {prototype: PersonProto}
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const alex = Object.create(StudentProto);

alex.init('Alex', 2010, 'Computer Science');
alex.introduce();
alex.calcAge();
console.log(alex);

// *** OOP Class Examples ***

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Obj Created!`);
  }

  // This is the Public Interface of an Object below!
  /*   */
  deposit(val) {
    this.movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }
  /**  **/
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved!`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
