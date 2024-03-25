const reverse = (str) => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

console.log(reverse("anubha"));

const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
};
console.log(reverseInt(-51));
