"use strict";
// inferred type
let intro = "welcome";
// this expects string from inferred type, will not accept number
intro = 20;
const doMath = (num1, num2) => {
    return num1 + num2;
};
// this will yell
doMath("1", "2");
// explicit types
let character;
// empty array of strings
let names = [];
// union types
// only need parentheses if declaring array
let values = [20, "cool"];
// union type that's not array does not need parentheses
// this example will error, as it does not accept boolean
let thing = false;
// objects
// this object can accept any properties
let anything;
anything = {
    thing1: "test",
    thing2: 50,
};
// this object explicitly declares properties
let person;
// city property will throw error, as not specified in person object type
person = {
    name: "jason",
    age: 31,
    active: true,
    city: "home",
};
// optional function parameters are set with '?'
// if default value set, example - c: string = 'name'
// optional q mark can't be used - this will error vvv
function sayName(a, b, c = "name") {
    return `${a} ${b} ${c && c}`;
}
// return type inferred, but can be set after parameters
const minus = (a, b) => {
    return a - b;
};
minus(50, 25);
// void type = a complete lack of a value
// when a function does not return a value, it is a void type
function logData(a, b) {
    console.log(`${a} ${b}`);
}
function logMessage(event) {
    console.log(msg);
}
// logObject is the type for the event parameter
function logMessage2(event) {
    console.log(event);
}
// Interfaces
// another way to name an object type
// nearly identical to Types - main difference is you can extend an Interface
// This function expects a user object
function sendData(user) {
    console.log(user);
}
// the user parameter has a type of User
function sendData2(user) {
    console.log(user.name);
}
// Type Assertions
// Used when you may have better understanding of a type
let code = 123;
let employeeCode = code;
// will error - employee object does not have name property
let employee = {};
employee.name = "Steve";
let employee2 = {};
employee2.name = "Steve";
// Literal Types
// Used to set specific types
// Great for accepting a set of known values
// Similiar to how let and var work compared to const
let thisString = "a string";
thisString = "another string";
// thisString: string
const setString = "can't change this";
function setPos(position) {
    console.log(position);
}
setPos("left"); // works
setPos("outside"); // does not work
// Generics
// Reusable blocks of codes which can be used with different types
const addId = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let item = addId({ name: "fun", age: 55 });
console.log("item", item);
