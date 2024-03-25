a = "anubha";
console.log(this.a);
console.log(a);

// call
var obj = { name: "piyush" };
function sayHello(age, profession) {
  return `hello ${this.name}, your age is ${age} and profession is ${profession}`;
}
console.log(sayHello());
console.log(sayHello.call(obj, 24));

// apply
console.log(sayHello.apply(obj, [24, "software developer"]));

// bind
const bindFunction = sayHello.bind(obj);
console.log(bindFunction(34, "Youtuber"));

// append two arrays using apply
const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements);
console.log(array);

// find max and minimum from an array
const numbers = [2, 6, 3, 9, 2, 0];
console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

// bind chaining doesn't exist

function f() {
  console.log(this.name);
}

f = f.bind({ name: "Anubha Pant" }).bind({ name: "Ann" });
f();
