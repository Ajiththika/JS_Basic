// //practicing questions

// //question 01
// const price = 92.345;
// const roundedPrice = price.toFixed(2);
// console.log(`${roundedPrice}`)

// //question 02
// const fullName = "ajiththika sivathas";
// const name = fullName.trim().toUpperCase();
// console.log(name); 

// //question 03
// let item = "Keyboard";
// let rupees = 250;
// console.log("Item:".padEnd(10) + item);
// console.log("Price:".padEnd(10) + rupees);

// //question 04
// let value = "123abc";
// let numberValue = Number(value);
// if (Number.isNaN(numberValue)) {
//   console.log("Conversion failed: Not a valid number");
// } else {
//   console.log(`Converted number: ${numberValue}`);
// }

// //question 05
// let prices = [500.25, 1200, 99.99, 234.32];
// let total = prices.reduce((sum, price) => sum + price, 0);
// let formattedTotal = total.toLocaleString('en-IN', {
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// });
// console.log(`Total Price: Rs ${formattedTotal}`);

// //question 06
// let text = "hello@@world@@!";
// let cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, "");
// console.log(`Cleaned text: ${cleanedText}`);


// Objects

var car = {
  brand: "Toyota",
  model: "Camry",
  color: "Blue",
  price: 24000
};
console.log(car.model);

var car = {
  brand: "Toyota",
  model: "Camry",
  color: "Blue",
  price: 24000
};
console.log(car["brand"]);

car['modelYear'] = 2024; // adding new property
console.log(car);

car['color'] = "Red"; // changing extiting property
console.log(car);

car.color = "Red";
console.log(car);

//deleting property
delete car.price;
console.log(car);


//  object with nested 
let student = {
  name: "Ajie",
  age: 20,
  course: "Web Development",
  isGraduated: false,

  // Array (multiple values)
  skills: ["HTML", "CSS", "Bootstrap"],

  // Nested array of objects
  marks: [
    { subject: "HTML", score: 95 },
    { subject: "CSS", score: 90 },
    { subject: "JavaScript", score: 85 }
  ],

  contact: {
    email: "ajiththika17@gmail.com",
    phone: "0758560265"
  }
};

//Array Object
const fruits = ["apple", "banana", "orange"];
console.log("Array:", fruits[1]);

//date object
const Today = new Date();
console.log("Date:", today.toDateString());

//function
yearlySalary() {
  return this.salary*12
}






