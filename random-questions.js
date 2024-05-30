// find the index of the first object where the company property is "apple"

const companies = [
  { company: "google", value: 1500 },
  { company: "apple", value: 2000 },
  { company: "jio", value: 100 },
  { company: "apple", value: 12000 },
];
const result = companies?.findIndex((item) => item?.company === "apple");
const result2 = companies?.findLastIndex((item) => item?.company === "apple");
console.log("experimenting", companies[result2]);
const result3 = companies?.find((item) => item?.company === "apple");

console.log("result 1", result);
console.log("result 2", result2);
console.log("result 3", result3);
