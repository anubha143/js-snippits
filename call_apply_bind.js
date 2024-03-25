const person = {
  name: "Anubha",
  greet(message) {
    console.log(`${message}, ${this.name}`);
  },
};
const anotherPerson = {
  name: "alice",
};
person.greet.call(anotherPerson, "Hello");
person.greet.apply(anotherPerson, ["Hello"]);
