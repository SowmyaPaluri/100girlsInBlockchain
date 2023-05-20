// // class
// // objects
// // prototypes

// let a = {
//     name : 'sowmya',
//     age: 21,
//     run:()=>{
//         console.log("self taught programme")
//     }
// }
// console.log(a);
// let p ={
// run:()=>{
//     console.log("still learning")
// }
// }

// //its is prototype of prototype 
// p.__proto__={
//     name:'sowmi'
// }

// a.__proto__=p 
// a.run()
// console.log(a.name);

// // Inheritance example

// class Animal{
//     constructor(name,color){
//         this.name = name;
//         this.color = color;
//     }
//     run(){
//         console.log(this.name+" is running");
//     }
//     shout(){
//         console.log(this.name+" is barking");
//     }
// }

// class Monkey extends Animal{
//     eatBanana(){
//         console.log(this.name+" is eating banana");
//     }
//     hide(){
//         console.log(`${this.name} is hiding`);
//     }
// }

// let ani = new Animal("chotu",'cream')
// ani.run();
// ani.shout();

// let m = new Monkey("Chimpu",'Black');
// m.shout();
// m.run();
// m.eatBanana();
// m.hide();


// Super keyword

class Employee{
    constructor(name){
        console.log(`${name} - Employees constructor is here`);
        this.name = name;
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`employee has requested ${leaves} leaves - Auto approved`);
        }
}

class Programmer extends Employee{
    constructor(name){
        super(name)
        console.log(`this is newly written constructor`);
    }
    requestCoffee(x){
        console.log(`EMployee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log(`one extra granted`);
        console.log(`employee has requested ${leaves+1} leaves (one Extra)`);
    }
}
let e = new Employee("Sowmya");
e.login();
e.requestLeaves(3);
let e1 = new Programmer("sowmya");
e1.login();
e1.requestLeaves(3);



class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    walk(){
        alert
    }
    static capitalize(name){

    }
}
j = new Animal('jack')


// a class can have more than one static keywords but it can access the last declared one

// window alert

// document object model -- replaces the html object

// browser object