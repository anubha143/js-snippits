const obj2 = { name: "Himesh" };

function sayHello(age, profession) {
  return "Hello " + this.name + " " + age + " " + profession;
}

Function.prototype.myCall = function (context = {}, ...agrs) {
  if (typeof this !== "function") {
    throw new Error("error");
  }
  context.fn = this;
  return context.fn(...agrs);
};

console.log(sayHello.myCall(obj2, 33, "singer"));
