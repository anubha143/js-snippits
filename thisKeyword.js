// // 1
// this.a = 5;
// function getParam() {
//   console.log(this.a);
// }
// getParam();

// // 2
// this.b = 5;
// const getParam2 = () => {
//   console.log(this.b);
// };
// getParam2();

// // 3
// let user = {
//   name: "Anubha",
//   age: 24,
//   getDetails() {
//     console.log(this.name);
//   },
// };

// user.getDetails();

// // 4

// let user2 = {
//   name: "Anubha Pant",
//   age: 24,
//   childObj: {
//     newName: "Anniee",
//     getDetails() {
//       console.log(this.newName, "and", this.name);
//     },
//   },
// };
// user2.childObj.getDetails();

// //5

// let user3 = {
//   name: "Hawana",
//   getDetails: () => {
//     console.log(this.name);
//   },
// };

// user3.getDetails();

// // 6

// let user4 = {
//   name: "Hawai",
//   getDetails() {
//     const nestedArrow = () => console.log(this.name);
//     nestedArrow();
//   },
// };
// user4.getDetails();

// interview questions on this

// function makeUser() {
//   return {
//     name: "john",
//     ref: this,
//   };
// }
// let users = makeUser();
// console.log(users.ref);
// console.log(users.ref.name);

// ------------------------------------------------------------------------------

function makeUser2() {
  return {
    name: "amita",
    ref() {
      return this;
    },
  };
}
let users2 = makeUser2();
console.log(users2.ref().name);
// console.log(users2.ref.name);

//---------------------------------------------------------------------------------

// const user = {
//   name: "Doctor Who",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(user.logMessage, 1000);

// how you can print the name then? from above code snippit?

// const user11 = {
//   name: "Doctor Who",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(function () {
//   user11.logMessage();
// }, 1000);

// -------------------------------------------------------------------------------

// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// object.method(callback);

// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };

// object.method(callback, 1, 2);

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
