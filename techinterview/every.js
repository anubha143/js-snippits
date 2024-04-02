const dataArr = [];

const isAboveCouponsThreshold = (data) =>
  !!dataArr.length && data.some((item) => item.amount > 1000);
console.log(isAboveCouponsThreshold(dataArr));
