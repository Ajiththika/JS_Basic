// function volume (r, h){
//     return 22/7*r*r*h;
// }
// let total = volume (3,5);
// console.log(total.toFixed(2)); 
    
// function expression
// function volume (r, h){
//     return Math.PI*r**2*h;
// }
// let total1 = volume (3,5);
// console.log(total1.toFixed(2)); 

// //arrow function
// const volume = (r, h) => Math.PI * r ** 2 * h;
// let total2 = volume(3, 5);
// console.log(total2.toFixed(2));

// //Arrow Function (with braces & return)
// const volume = (r, h) => {
//   let result = Math.PI * r ** 2 * h;
//   return result;
// };
// let total3 = volume(3, 5);
// console.log(total1.toFixed(2));

// //Function as Object Method
// const shapes = {
//   volume: function(r, h) {
//     return Math.PI * r ** 2 * h;
//   }
// };
// let total4 = shape.volume(3, 5);
// console.log(total1.toFixed(2));

// //Arrow Function inside Object (modern)
// const shape = {
//   volume: (r, h) => Math.PI * r ** 2 * h
// };
// let total5 = shape.volume(3, 5);
// console.log(total1.toFixed(2));


// // Class Method (OOP style)
// class Cylinder {
//   volume(r, h) {
//     return Math.PI * r ** 2 * h;
//   }
// }
// const c = new Cylinder();
// let total6 = c.volume(3, 5);
// console.log(total1.toFixed(2));

// // using math.pow
// const volume = (r, h) => Math.PI * Math.pow(r, 2) * h;
// let total7 = volume(3, 5);
// console.log(total1.toFixed(2));

//arrow function
const square = (n) => n*n;
console.log(square(5));

// default parameter
function greet(name = "Guest"){
    console.log("Hello" + name);
}
greet();

// Function Calling Another Function 
function add(a,b) {
    return a + b;
}
function displaySum(){
    let result = add(3,7);
    console.log("Sum is:" + result);
}
displaySum();


// // Function to calculate total & Extra percentage
// function totalIncome(salary1, salary2) {
//   return salary1 + salary2; 
// }
// function incomeWithBonus {
//   let percent = 10; 
//   return totalIncome + (totalIncome * percent) / 100; 
// }
// function displayIncome() {
//   let basicIncome = totalIncome(50000, 100000); 
//   let finalIncome = incomeWithBonus(basicIncome); 
//   console.log("Total Income: " + basicIncome);
//   console.log("Extra Income: " + finalIncome);
// }
// displayIncome();


const salary1 = 50000;
const salary2 = 100000;
function totalIncome(s1, s2) {
  return s1 + s2;
}
function incomeWithBonus() {
  const percent = 10;
  const total = totalIncome(salary1, salary2);        
  return total + (total * percent) / 100;              
}
function displayIncome() {
  const basicIncome = totalIncome(salary1, salary2);
  const finalIncome = incomeWithBonus();               
  console.log("Total Income: " + basicIncome);
  console.log("Extra Income: " + finalIncome);
}
displayIncome();





