// write a program that console logs the number from 1 to n. But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz". For number which are multiples of both three and five print "fizzbuzz"

const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else console.log(i);
  }
};

fizzbuzz(15);
