"use strict";
// ------------ Inferred Types ------------ //
let intro = "welcome";
// this expects string from inferred type, will not accept number
intro = 20;
const doMath = (num1, num2) => {
    return num1 + num2;
};
// this will yell
doMath("1", "2");
// ------------ Explicit Types ------------ //
let character;
// empty array of strings
let names = [];
// ------------ Union Types ------------ //
// only need parentheses if declaring array
let values = [20, "cool"];
// union type that's not array does not need parentheses
// this example will error, as it does not accept boolean
let thing = false;
// ------------ Objects ------------ //
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
// ------------ Type Assertions ------------ //
// Used when you may have better understanding of a type
let code = 123;
let employeeCode = code;
// will error - employee object does not have name property
let employee = {};
employee.name = "Steve";
let employee2 = {};
employee2.name = "Steve";
// ------------ Literal Types ------------ //
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
// ------------ Generics ------------ //
// Reusable blocks of codes which can be used with different types
const addId = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};
let item = addId({ name: "fun", age: 55 });
// This wont work, as addId returns obj, but doesn't know properties
console.log("item", item.name);
// Adds <Type> generic to function
// Most often used as <T>
// This captures data passed into function
const addId2 = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};
let item2 = addId2({ name: "fun", age: 55 });
// This will now work, and item2 knows all available properties
console.log("item2", item2.name);
// But addId2 will now accept anything,
// as <Type> doesn't specify it's an object
// so addId2 can accept a string, even though it should receive obj
console.log(addId2("wee"));
// To fix this, generics can be constrained using extend
const addId3 = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};
// with the generic extended as obj,
// addId can no longer accept a string
// this will throw error
let item3 = addId3("cool");
const addPerson = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};
// this will work,as it has name property,
// but can still accept other properties
const newPerson = addPerson({ name: "steve", age: 20 });
const newDoc = {
    name: "steve",
    age: 50,
    data: { isObject: true },
};
const newDoc2 = {
    name: "steve",
    age: 50,
    data: ["yes", "no"],
};
// ------------ Enums ------------ //
// allows to associate data with numeric values
// Book = 0, Person = 3 in below enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Film"] = 2] = "Film";
    ResourceType[ResourceType["Person"] = 3] = "Person";
})(ResourceType || (ResourceType = {}));
const newResource = {
    name: "steve",
    resource: ResourceType.Film,
    data: { isObject: true },
};
const newResource2 = {
    name: "steve",
    resource: ResourceType.Author,
    data: ["yes", "no"],
};
// ------------ Tuples ------------ //
// Defines type for each item in array
// 'error' will throw error, as it requires boolean
let tuple = ["wee", 20, "error"];
