// call -> Calls a method of an object, substituting another object for the current object.
// apply -> Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

const person = {
  name: "Anubha",
  greet(message, wish) {
    console.log(`${message}, ${this.name}, ${wish}`);
  },
};
const anotherPerson = {
  name: "Alice",
};
person.greet.call(anotherPerson, "Hello", "Good Luck");
person.greet.apply(anotherPerson, ["Hello", "All the best"]);

const bindFunc = person.greet.bind(anotherPerson);
bindFunc("Whats up", "Keep it Up...");
bindFunc("Studying????", "Keep it Up...");

// -------------------------------------------------------------------------------------------------

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Mammal" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// ----------------------------------------------------------------

const array = [1, 2, 3];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log("array", array);

//---------------------------------------------------------------------------------------------------

const numbers = [1, 2, 34, 56];
console.log(Math.max(...numbers));
console.log(Math.min.apply(null, numbers));
