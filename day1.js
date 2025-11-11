console.log('Welcome to JavaScript');

//Declare and initialize a variable
let x = 10;
console.log(x);

//Declare a variable
let y;
console.log(y);

//Initialize the variable
y = 20;
console.log(y);

//Hoisting

{
    var x=25;
    console.log(x);
}
console.log(x);

{
    let x=25;
    console.log(x);
}
console.log(x);

{
    const x=25;
    console.log(x);
}
console.log(x);

console.log(y);
let y=20;
