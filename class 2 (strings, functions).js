let name = "Sowmya";
for(let i =0;i<name.length;i++){
    console.log(name[i]);
}
console.log(name[0]);

// string interpolation
const msg = `hii ${name} we are glad that you are here ${name}`;
console.log(msg);

// escape sequence character
let name1 = 'Sowmya'
let name2 = 'Sowmya\'s';
console.log(name1,name1.length,name2,name2.length)

// toLowerCase

// slice
var s1 = 'Sowmya Paluri'
var s2 = s1.slice(0,4);
var s3 = s1.slice(5); // from index 5 to till length of string
console.log(s2,s3);

// replace
console.log(s1.replace("Sow","Mya"))

let x = 100;
let y = 200;
   
let z1 = x+y;
let z2 = x.toString() + y;
   
console.log(z1); // Output: 300 
console.log(z2); // Output: 100200

let x1 = "some ";
let y1 = "string";
   
console.log(x1.concat(y1)); // Output: some string

let word = "Stair";

console.log(word.toUpperCase()) // STAIR
console.log(word.toLocaleUpperCase('de-DE')) // STAIR

let x2 = "abc123";
   
console.log(x2.charAt(2)); // Output: c

function cube(a){
    return a*a*a;
}
console.log(cube(6));
var res = cube.call(this,5);
console.log(res);

// arrow functions
console.log(5*5*5);
for(let i=0;i<cube.length;i++){
    console.log(i);
}

let sum = (a,b) =>{
    return a + b;
};
console.log(sum(5,6));