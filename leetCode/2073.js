// Time Needed to Buy Tickets

// Input: tickets = [2,3,2], k = 2
// Output: 6

// var timeRequiredToBuy = function (tickets, k) {
//   let i = 0;
//   let count = 0;
//   while (tickets[k] > 0) {
//     if (tickets[i] > 0) {
//       tickets[i] = tickets[i] - 1;
//       count++;
//     }
//     i = (i + 1) % tickets.length;
//   }

//   return count;
// };

// console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
// console.log(timeRequiredToBuy([2, 3, 2], 2));

const timeRequiredToBuy = (tickets, k) => {
  let count = 0,
    i = 0;
  while (tickets[k] > 0) {
    if (tickets[i] > 0) {
      tickets[i] -= 1;
      count++;
    }
    ++i;
    if (i === tickets.length) {
      i = 0;
    }
  }
  return count;
};
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
console.log(timeRequiredToBuy([2, 3, 2], 2));
