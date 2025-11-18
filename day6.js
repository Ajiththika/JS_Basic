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

// using reduce 
const totalscore = students.reduce((sum, student)=> sum + student.score, 0);
const avgScore = totalscore / students.length;
console.log(avgScore);

// using every and sum 
console.log(students.some(student => student.score));
console.log(students.every(student => student.score));

// using flat 
const nested = [[1,2], [3,4], [5,6]];
console.log(nested.flat());

//using flatmap
const flatmapped = nested.flatMap(arr => arr.map(n => n*2));
console.log(flatmapped);

