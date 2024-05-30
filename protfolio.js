const p1 = [
  {
    company: "google",
    value: 1500,
  },
  {
    company: "apple",
    value: 2000,
  },
  {
    company: "jio",
    value: 10,
  },
];

const p2 = [
  {
    company: "google",
    value: 500,
  },
  {
    company: "zomato",
    value: 2000,
  },
  {
    company: "jio",
    value: 100,
  },
];

// USING BRUTE FORCE

const getCommonPort = () => {
  let result = [];
  p1.forEach((item1) => {
    const item2 = p2.find((item) => item1.company === item.company);
    if (item2) {
      result.push({
        company: item1?.company,
        value: Math.abs(item1?.value - item2?.value),
      });
    }
  });
  return result;
};
console.log(getCommonPort());

// function getCommonPortfolio(p1, p2) {
//   const commonPortfolio = [];

//   p1.forEach((item1) => {
//     const item2 = p2.find((item) => item.company === item1.company);
//     console.log("item2", item2);
//     if (item2) {
//       commonPortfolio.push({
//         company: item1.company,
//         value: Math.abs(item1.value - item2.value),
//       });
//     }
//   });

//   return commonPortfolio;
// }

// console.log(getCommonPortfolio(p1, p2));

// USING HASHMAP

const getCommonPortfolio = () => {
  let hashmap = {};
  result = [];
  for (let item of p1) {
    hashmap[item?.company] = item?.value;
  }
  p2.forEach((item) => {
    if (hashmap[item?.company]) {
      result.push({
        company: item?.company,
        value: Math.abs(hashmap[item?.company] - item?.value),
      });
    }
  });
  return result;
};
console.log("companießssss", getCommonPortfolio());
