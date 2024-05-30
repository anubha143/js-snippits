// // reverse each word in a string

// const reverseWord2 = (str) => {
//   const result = str.split(" ").reduce((acc, curr) => {
//     let data = curr.split("").reverse().join("");
//     return [...acc, data];
//   }, []);
//   return result.join(" ");
// };
// console.log(reverseWord2("Anubha is a good gal"));

// const reverseWord = (str) => {
//   const result = str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""));
//   console.log("here is the result", result);
//   return result.join(" ");
// };
// console.log(reverseWord("Anubha is a good gal"));

// // duplicate [1,2,3,4,] output -> [1,2,3,4,1,2,3,4]
// const duplicate = (arr) => {
//   let newArr = [];
//   arr.map((item) => newArr.push(item));
//   return [...arr, ...newArr];
// };
// console.log(duplicate([1, 2, 3, 4, 5]));

// // second method

// const duplicate2 = (arr) => {
//   return arr.concat(arr);
// };
// console.log(duplicate2([1, 2, 3]));

// // return string in alphabetical order

// const stringAlphabeticalOrder = (str) => {
//   return str.split("").sort().join("");
// };
// console.log(stringAlphabeticalOrder("apple"));

// // convert first letter to uppercase

// const upperCase = (str) => {
//   return str.substring(0, 1).toUpperCase() + str.slice(1, str.length);
// };
// console.log(upperCase("anubha"));

// // convert first letter of a sentence in uppercase

// const letterUppercase = (sentence) => {
//   const result = sentence
//     .split(" ")
//     .map(
//       (item) => item.substring(0, 1).toUpperCase() + item.slice(1, item.length)
//     );
//   return result.join(" ");
// };
// console.log(letterUppercase("how is the life going"));

// // other way to it

// const letterUppercaseSecond = (word) => {
//   return word
//     .split(" ")
//     .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
//     .join(" ");
// };
// console.log(letterUppercaseSecond("hey this is javascript"));

// // program to count number of occurence of a word in an string

// const countOccurence = (str) => {
//   let count = str.split("").reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});
//   return count;
// };
// console.log(countOccurence("anubha"));

// async code -> working

// async function getData() {
//   console.log("Anubha");
//   setTimeout(() => console.log("ANUBHAAAA"), 5000);
//   setTimeout(() => console.log("PANT"), 0);
//   return 1;
// }
// console.log("A");
// console.log("B");
// setTimeout(() => console.log("C"), 6000);
// getData().then((res) => console.log("I got this", res));
// console.log("D");
// A, B, Anubha, D, I got this 1, PANT, ANUBHA, C

// async code -> working2
// async function getData() {
//   console.log("Anubha");
//   setTimeout(() => console.log("ANUBHAAAA"), 5000);
//   setTimeout(() => console.log("PANT"), 0);
//   return 1;
// }
// console.log("A");
// console.log("B");
// setTimeout(() => console.log("C"), 0);
// getData().then((res) => console.log("I got this", res));
// console.log("D");

// A, B, Anubha, D, I got this 1, C, PANT, ANUBHAA

// ask him, iss type ka kaam hum kaha pe kar sakte h?
async function test() {
  const arr = [1, 2, 3, 4, 5];
  let val = [];
  await Promise.all(
    arr.map(async (item) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, item * 1000);
      });
      val.push(item);
    })
  );
  console.log(val);
}
test();
