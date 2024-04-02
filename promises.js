//##### without callback
// console.log("start");

// const importantFunction = (username) => {
//   setTimeout(() => {
//     return `Promise ${username}`;
//   }, 1000);
// };

// const message = importantFunction("Anubha");

// console.log(message);

// console.log("stop");

//####### make this to print value of message

// console.log("start");

// const importantFunction2 = (username, cb) => {
//   setTimeout(() => {
//     cb(`Promise ${username}`);
//   }, 1000);
// };

// importantFunction2("Anubha", (message) => console.log(message));

// console.log("stop");

// #### PROMISES IN JAVASCRIPT

// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("Suncribe");
//     else reject("Unscribe");
//   }, 2000);
// });

// sub.then((res) => console.log(res)).catch((err) => console.log(err));

// console.log("Stop");

// ###

// console.log("Run");
// const s = Promise.resolve("Eat");
// console.log(s);
// s.then((res) => console.log(res));
// console.log("Sleep");

// ##### PROMISE COMBINATORS
// promise.all -> if any of the promise fails it gonna failed all the promisea.all
function importantAction(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Hiii ${name}`);
    }, 5000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 3000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 1000);
  });
}

Promise.all([
  importantAction("Anubha"),
  likeTheVideo("Story"),
  shareTheVideo("Play"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//   ### promise.race -> it returns the promise that get rejected or resolve first

// function importantAction(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hiii ${name}`);
//     }, 5000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video}`);
//     }, 3000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Share the ${video}`);
//     }, 1000);
//   });
// }

// Promise.race([
//   importantAction("Anubha"),
//   likeTheVideo("Story"),
//   shareTheVideo("Play"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// ### promise.allSettled -> even if any of the promise failed its gonna return all of the promises that the fulfilled as well

// function importantAction(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hiii ${name}`);
//     }, 5000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video}`);
//     }, 3000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Share the ${video}`);
//     }, 1000);
//   });
// }

// Promise.allSettled([
//   importantAction("Anubha"),
//   likeTheVideo("Story"),
//   shareTheVideo("Play"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// ### promise.any -> Its same like promise.race but it only returns the first fulfilled promise and ignores all the rejected ones

// function importantAction(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hiii ${name}`);
//     }, 5000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video}`);
//     }, 3000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Share the ${video}`);
//     }, 1000);
//   });
// }

// Promise.any([
//   importantAction("Anubha"),
//   likeTheVideo("Story"),
//   shareTheVideo("Play"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

//   ### ASYNC AND AWAIT

// function importantAction(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hiii ${name}`);
//     }, 5000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video}`);
//     }, 3000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video}`);
//     }, 1000);
//   });
// }

// const result = async () => {
//   try {
//     const message1 = await importantAction("Anubha");
//     const message2 = await likeTheVideo("Play");
//     const message3 = await shareTheVideo("Video");
//     return { message1, message2, message3 };
//   } catch (err) {
//     console.log("Promises failed", err);
//   }
// };
// result().then((res) => console.log(res));

// ### OUTPUT BASED QUESTION

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// ### PROMISE QUESTION

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("First");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => console.log(res));
