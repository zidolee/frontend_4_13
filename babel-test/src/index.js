//ES6
import {funcB} from './second'
funcB();
// let const
// var name = 'ingyu';

// let age = 21;

const level = 20;       // 수정 불가


//arrow function
    // function funcA() {

    // }

    // const funcA = () => {}

    // setTimeout(function(){

    // }, 2000);

    // setTimeout(() => {
        
    // }, 2000);

//class
// function Person(name) {
//     this.name = name;
// }

class Person{
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(this.name);
    }
}
var jack = new Person('jack');
console.log(jack);

//spread

// var obj = {name : 'jack', age:20};

// var name = obj.name;
// var age = obj.age;
        // ||
// let {name, age } = obj;