// Numbers properties
console.log(Number.MAX_VALUE*2);
console.log(Number.MIN_VALUE*2);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(0.1+0.2==0.3);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY)

// methods
let num = 255;
console.log(num.toString(16));
let z = 345;
console.log(z.toString(2));

console.log(Number.isNaN("hello"));

//string 

//Length
let Name="Ajie";
console.log(Name.length);

//methods
let name="ajiththika";
let l_name="Ajiththika";

// x=name.toUpperCase();
// console.log(x);

// //Or
// console.log(l_name.toUpperCase());

// console.log(l_name.toLowerCase());

// Welcome to UKI "Ajiththika"
// let NAME="Welcome to UKI";
// console.log(`hello, $(name) welcome to uki`);

// //charat
// console.log(name.charAt(2));
// console.log(name.indexOf("i"));

//includes
// console.log(name.includes("ij"));
// console.log(name.includes("a"));

// slice
// console.log(l_name.slice(0,4)); //shoe the letters -1

// //substring
// console.log(l_name.substring(0,8)); //show the full letters 

//replace. eplaceAll()
// console.log(name.replace("i","e"));//replace the one word
// console.log(name.replaceAll("i","e")); //replace all letters in the sentences

//trim - remove the starting space 
//trimend -romove the last space 
let a_name="    Ajie    "
console.log(a_name.trim());
console.log(a_name.trimEnd());

//split
let bulk="a,b,c,d"
let tem=bulk.split(" ");
console.log(typeof(tem));

let text="Ajie Renu Pooja Arul";
const myArray = text.split(" ");
console.log(myArray[1]);

//boolean
let x;
console.log(Boolean(x));

let y=20;
console.log(Boolean(y));

let c=5;
console.log(Boolean(c==8));

let d=5;
console.log(Boolean(d !=8));

let e=5;
let f=10;
console.log(Boolean(e<f));
console.log(Boolean(e>f));

var fruit=true
if(fruit){
    console.log("I am Ajie")
}
else{
    console.log("invalid Name")
}

var fruit=false
if(fruit){
    console.log("I am Ajie")
}
else{
    console.log("invalid Name")
}

let num1=15;
let num2=20;
if (num1>num2){
    console.log("correct")
}
else{
    console.log("wrong")
}

let x1=false;
let y1=new Boolean(false);
console.log(x1==y1);
console.log(x1===y1);

//quesions in number propety and methods
let customerName = prompt("Enter Your Name");
let price = Number(prompt("Enter the price"));

let discountPercent = 17.33;
let discountAmount = (price * discountPercent) / 100;
let total = price - discountAmount;

console.log("Receipt");
console.log("Customer: " + customerName.toUpperCase());
console.log("Original Price: LKR " + price.toFixed(2));
console.log("Discount (17.33%): LKR " + discountAmount.toFixed(2));
console.log("Total after discount: LKR " + total.toFixed(2));

alert(
  "Hello " + customerName.toUpperCase() + ",\n" +
  "Your total after " + discountPercent + "% amount is LKR " + total.toFixed(2)
);


