// count the number of vowels present in a sentence

const countVowel = (str) => {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowel.includes(char)) count++;
  }
  return count;
};
console.log(countVowel("Hello there"));
console.log(countVowel("anubha"));
