// count the occurence of each element in an array
// this is also a hashmash
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const count = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log("count is: ", count);

// Flatten a Nested Array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log("flattenedArray", flattenedArray);

// Group elements based on a condition

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 45 },
  { name: "Emily", age: 30 },
];
const groupedPeople = people.reduce((acc, curr) => {
  const key = curr.age;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
console.log("groupedPeople", groupedPeople);

// Merge multiple array into an object
const keys = ["name", "age", "gender"];
const values = ["Anubha", 17, "female"];
const person = keys.reduce((acc, curr, index) => {
  acc[curr] = values[index];
  return acc;
}, {});
console.log("person", person);

// Convert a sting to an object
const str = "key1=value1&key2=value2&key3=value3";
const obj = str.split("&").reduce((acc, curr) => {
  const [key, value] = curr.split("=");
  acc[key] = value;
  return acc;
}, {});
console.log("obj", obj);

// Convert an object to a query string
// output ->  "?foo=bar&baz=42"
const params = { foo: "bar", baz: 42 };
const queryString = Object.entries(params)
  ?.reduce((acc, [key, value]) => {
    return `${acc}${key}=${value}&`;
  }, "?")
  .slice(0, -1);
console.log("queryString", queryString);

// check if a string is palidrome

const string = "rakesh";
const isPalindrome = string.split("").reduce((acc, curr, index, array) => {
  return acc && curr === array[array.length - 1 - index];
}, true);

console.log("isPalindrome", isPalindrome);

// Check if Parentheses are Balanced

const paren = "(()()()";
const isParenthesesBalanced =
  paren.split("").reduce((acc, curr) => {
    if (curr === "(") acc++;
    else if (curr === ")") acc--;
    return acc;
  }, 0) === 0;
console.log("isParenthesesBalanced", isParenthesesBalanced);

// Recursively Get Object Properties

const user = {
  info: {
    name: "Jason",
    address: { home: "Shaanxi", company: "Xian" },
  },
};
function get(config, path, defaultVal) {
  console.log("config", config);
  return (
    path.split(".").reduce((config, name) => config[name], config) || defaultVal
  );
}
// console.log(get(user, "info.name")); // Jason
console.log(get(user, "info.address.home")); // Shaanxi
// console.log(get(user, "info.address.company")); // Xian
// console.log(get(user, "info.address.abc", "default")); // default
