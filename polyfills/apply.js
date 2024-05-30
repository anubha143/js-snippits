const obj2 = { name: "Himesh" };

function sayHello(age, profession) {
  return "Hello " + this.name + " " + age + " " + profession;
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("error");
  }
  if (!Array.isArray(args)) throw new Error("pass an array");

  context.fn = this;
  return context.fn(...args);
};

console.log(sayHello.myApply(obj2, [33, "dancer"]));
