// count always points to the space which is empty. if count is zero, then its means stack is empty

let Stack = function () {
  let count = 0;
  let storage = {};

  //   adding values to the stack
  function push(value) {
    storage[count] = value;
    count++;
  }
  // remove and return the value at the end of the stack

  function pop() {
    if (count === 0) return undefined;
    count--;
    let result = storage[count];
    delete storage[count];
    return result;
  }

  function size() {
    return count;
  }

  //   returns the value at the end of the stack
  function peek() {
    return storage[count - 1];
  }

  return {
    push,
    pop,
    size,
    peek,
  };
};

let mystack = Stack();

mystack.push(1);
mystack.push(5);
mystack.push(10);
console.log(mystack.peek());
console.log(mystack.size());
mystack.pop();
console.log(mystack.size());
console.log(mystack.peek());
