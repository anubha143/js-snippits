// Implement a function similar to promise.all

const promise1 = Promise.resolve(27);
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 1996);
});

Promise.myAll = function (promises = []) {
  return new Promise((resolve, reject) => {
    const result = [];
    let completed = 0;
    if (promises.length === 0) {
      resolve(result);
    }
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => {
          result.push(res);
          completed++;
          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
};
const newPromise = Promise.myAll([promise1, promise2, promise3]).then(
  (values) => {
    console.log(values);
  }
);
