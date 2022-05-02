// ------------ Inferred Types ------------ //
let intro = "welcome";

// this expects string from inferred type, will not accept number
intro = 20;

const doMath = (num1: number, num2: number) => {
  return num1 + num2;
};

// this will yell
doMath("1", "2");

// ------------ Explicit Types ------------ //
let character: string;

// empty array of strings
let names: string[] = [];

// ------------ Union Types ------------ //
// only need parentheses if declaring array
let values: (string | number)[] = [20, "cool"];

// union type that's not array does not need parentheses
// this example will error, as it does not accept boolean
let thing: string | number = false;

// ------------ Objects ------------ //
// this object can accept any properties
let anything: object;
anything = {
  thing1: "test",
  thing2: 50,
};

// this object explicitly declares properties
let person: {
  name: string;
  age: number;
  active: boolean;
};
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
function sayName(a: string, b: string, c?: string = "name") {
  return `${a} ${b} ${c && c}`;
}

// return type inferred, but can be set after parameters
const minus = (a: number, b: number): number => {
  return a - b;
};
minus(50, 25);

// void type = a complete lack of a value
// when a function does not return a value, it is a void type
function logData(a: string, b: string | number) {
  console.log(`${a} ${b}`);
}

// ------------ Types & Interfaces ------------ //

// Types
// creates a name, or alias for a type
type StringOrNum = string | number;

function logMessage(event: { status: string; msg: StringOrNum }) {
  console.log(msg);
}

// can also create types for objects
type logObject = {
  status: string;
  msg: StringOrNum;
};

// logObject is the type for the event parameter
function logMessage2(event: logObject) {
  console.log(event);
}

// Interfaces
// another way to name an object type
// nearly identical to Types - main difference is you can extend an Interface

// This function expects a user object
function sendData(user: {
  name: string;
  email: string;
  address: {
    city: string;
    state: string;
  };
}) {
  console.log(user);
}

// Can be rewritten using an interface
interface User {
  name: string;
  email: string;
  address?: {
    city: string;
    state: string;
  };
}

// the user parameter has a type of User
function sendData2(user: User) {
  console.log(user.name);
}

// ------------ Type Assertions ------------ //
// Used when you may have better understanding of a type
let code: any = 123;
let employeeCode = <number>code;

// will error - employee object does not have name property
let employee = {};
employee.name = "Steve";

// asserting the object type will help TS understand
// what properties are available for this object
interface Employee {
  name: string;
  code: number;
}
let employee2 = <Employee>{};
employee2.name = "Steve";

// ------------ Literal Types ------------ //
// Used to set specific types
// Great for accepting a set of known values

// Similiar to how let and var work compared to const
let thisString = "a string";
thisString = "another string";
// thisString: string

const setString = "can't change this";
// setString: "can't change this"

// good for using with unions
type Position = "left" | "center" | "right";
function setPos(position: Position) {
  console.log(position);
}
setPos("left"); // works
setPos("outside"); // does not work

// ------------ Generics ------------ //
// Reusable blocks of codes which can be used with different types
const addId = (obj: {}) => {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let item = addId({ name: "fun", age: 55 });

// This wont work, as addId returns obj, but doesn't know properties
console.log("item", item.name);

// Adds <Type> generic to function
// Most often used as <T>
// This captures data passed into function
const addId2 = <Type>(obj: Type) => {
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
const addId3 = <Type extends object>(obj: Type) => {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
// with the generic extended as obj,
// addId can no longer accept a string
// this will throw error
let item3 = addId3("cool");

// generics can be constrained with types & interfaces
interface Person {
  name: string;
}
const addPerson = <T extends Person>(obj: T) => {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
// this will work,as it has name property,
// but can still accept other properties
const newPerson = addPerson({ name: "steve", age: 20 });

// generics can also be used on interfaces themselves
// the data property can be dynamic to the type set for newDoc
interface ResourceDemo<T> {
  name: string;
  age: number;
  data: T;
}
const newDoc: ResourceDemo<object> = {
  name: "steve",
  age: 50,
  data: { isObject: true },
};

const newDoc2: ResourceDemo<string[]> = {
  name: "steve",
  age: 50,
  data: ["yes", "no"],
};

// ------------ Enums ------------ //
// allows to associate data with numeric values
// Book = 0, Person = 3 in below enum
enum ResourceType {
  Book,
  Author,
  Film,
  Person,
}
interface Resource<T> {
  name: string;
  resource: ResourceType;
  data: T;
}
const newResource: Resource<object> = {
  name: "steve",
  resource: ResourceType.Film,
  data: { isObject: true },
};

const newResource2: Resource<string[]> = {
  name: "steve",
  resource: ResourceType.Author,
  data: ["yes", "no"],
};

// ------------ Tuples ------------ //
// Defines type for each item in array
// 'error' will throw error, as it requires boolean
let tuple: [string, number, boolean] = ["wee", 20, "error"];
