// write a function that accepts positive number N. The function should console log a step shape

// step(2)
// #
// ##

const steps = (n) => {
  for (i = 0; i < n; i++) {
    let step = "";
    for (j = 0; j <= i; j++) {
      step += "#";
    }
    console.log(step);
  }
};
steps(2);
steps(5);
