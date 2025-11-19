// null and undefined
//null
let users= null;
console.log(users)
console.log(typeof users)

//undefined
let data;
console.log(data)
console.log(typeof data)
console.log(typeof mydata)
console.log(undefined == null);
console.log(undefined === null);

//nullish colaescing
let a  = 0 ;
let b = 100;
console.log( a ?? b);

// Using nullish coalescing operator
let profile = {
  name:"alice",
  age:0
};
console.log( profile.name ?? profile.age ?? "profile " );

// optional chaining operator
let c={
name:{
  firstname:"abc",
  lastname:"xyz"
}
};
console.log(c?.name?.firstname);

//Date
let now = new Date();
console.log(now); // Current date & time
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()); // month (0-11, so +1)
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
let d = new Date();

// TAKE GET → Values
console.log("Year:", d.getFullYear());
console.log("Month:", d.getMonth() + 1);
console.log("Date:", d.getDate());

// CHANGE SET → Values
d.setFullYear(2030);
d.setMonth(0); // January
d.setDate(1);
console.log("Updated Year:", d.getFullYear());
console.log("Updated Month:", d.getMonth() + 1);
console.log("Updated Date:", d.getDate());

//questions
//Display current date and time in readable format (YYYY-MM-DD HH:MM:SS).
let dat = new Date();

// parts get pannrom
let year = d.getFullYear();
let month = String(d.getMonth() + 1).padStart(2, '0'); // +1 month fix & 2 digit
let DATE = String(d.getDate()).padStart(2, '0');
let hours = String(d.getHours()).padStart(2, '0');
let minutes = String(d.getMinutes()).padStart(2, '0');
let seconds = String(d.getSeconds()).padStart(2, '0');