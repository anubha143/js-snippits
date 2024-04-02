const data = [
  { name: "priya", age: 32 },
  { name: "deera", age: 12 },
  { name: "shona", age: 11 },
  { name: "sangeeta", age: 72 },
];

const newData = data?.map((item) => ({
  id: generateUniqueId(),
  ...item,
}));

console.log(newData);

function generateUniqueId() {
  return (
    new Date().getTime().toString(36) +
    "-" +
    Math.random().toString(36).substr(2, 9)
  );
}
