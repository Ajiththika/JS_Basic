// Create an object 
const employee = {
  name: "Ajiththika Sivathas",
  age: 20,
  department: "IT Department",
  address: {
    city: "Jaffna",
    zip: "40000"
  },
  skills: ["Html", "CSS", "Bootstrap"]
};

console.log(employee);
console.log(employee.address.city);     //Access city using 
console.log(employee["address"]["zip"]); // Access zip code using beacket notaion

// Destructure object 
const { name, department } = employee;
console.log(name);
console.log(department);

// Add a method add to function
employee.introduce = function() {
     console.log(`Hi. My name is ${this.name}. I am working in ${this.department}.`)
};
employee.introduce();

// Arrow function 
employee.introduce = () => {
  console.log(`Hi. My name is ${employee.name}. I am working in ${employee.department}.`);
};
employee.introduce();

//loop through skills array
employee.skills.forEach(a => console.log(a)); // a is an index 

// Loop through array to get only keys (indexes)
employee.skills.forEach((_, index) => {
  console.log(`Key: ${index}`);
});

// Loop through array to get only values
employee.skills.forEach(skill => {
  console.log(`Value: ${skill}`);
});

// next class loop itteration 


// Arrays
let students = [
    { name: "Ajie", score: 85 },
    { name: "Pooja", score: 92 },
    { name: "Renu", score: 78 },
    { name: "Arul", score: 88 },
];

 // using forEach to create students list  
students.forEach(b => console.log(b.name));

//map create a new array to change elements //using map
const score = students.map(b => b.score);
console.log(score);

// using filter 
const highscore = students.filter(b => b.score > 80);
console.log(highscore);
