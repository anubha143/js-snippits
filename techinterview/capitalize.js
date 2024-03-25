// capitalize the first word of the the sentence -> anubha is a pro coder

const capitalize = (str) => {
  const words = str.split(" ");
  let result = [];
  for (let word of words) {
    let w = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(w);
  }
  return result.join(" ");
};
console.log(capitalize("anubha is a pro coder"));

// Way 2
const capitalize2 = (str) => {
  const words = str.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};
console.log(capitalize2("evening walk"));
