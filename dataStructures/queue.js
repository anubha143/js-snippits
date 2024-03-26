// I am using the constructor function here, its name usually starts with capital letter

function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (value) {
    collection.push(value);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    if (collection.length < 0) return undefined;
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.empty = function () {
    return collection.length === 0;
  };
}

const q = new Queue();
q.print();
console.log(q.enqueue(5));
console.log(q.enqueue(10));
console.log(q.enqueue(15));
q.print();
console.log(q.dequeue());
console.log(q.front());
console.log(q.size());
console.log(q.empty());
