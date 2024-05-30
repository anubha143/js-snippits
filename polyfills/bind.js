const obj3 = { name: "sona" };

function sayHello(age, profession) {
  return "Hello " + this.name + " " + age + " " + profession;
}

Function.prototype.myBind = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error("error");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = sayHello.bind(obj3, 99, "piano");
const newFunc2 = sayHello.bind(obj3);

console.log(newFunc());
console.log(newFunc2(99, "guitar"));
