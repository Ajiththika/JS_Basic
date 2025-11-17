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
employee.skills.forEach(skill => console.log(skill));