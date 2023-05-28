names = ["Ann", "Adam", "Eve", "Madking", "Madison", "Ann"];
names.map((name) => {
  return name + "1";
});

/*names.map((name) => {
  return <div>{names}</div>;
});*/

let x = names.filter((name) => {
  return name != "Ann";
});
console.log(x);
