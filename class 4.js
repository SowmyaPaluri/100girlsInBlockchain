// objects

//let person = {firstname:"sowmya",lastname:"paluri",age:20}

const person = new Object();
person.firstname = "sowmya";
person.lastname = 'paluri';
person.age = 21;
console.log(person);

const x = person; // will not create a copy of person

x.age = 10;
console.log(person);
console.log(x);

// Access properties

console.log(person.firstname);
console.log(person["lastname"]);

// js for in loop

let txt = "";
for(let i in person){
    txt += person[i];
}
console.log(txt);

// output: sowmyapaluri10

// this keyword in general refers to the global object
