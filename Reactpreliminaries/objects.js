//Objects
const name = "Carl";
const age = 25;

const Student = {
  name,
  age,
  isPassed: false,
};

//const { name, age, isPassed } = Student;

const Student2 = { ...Student, name: "Matt" };

const names = ["Natasha", "Tony", "Barton"];
const names2 = [...names, "Fiery"];
