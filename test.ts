// inferred type
let intro = "welcome";

// this expects string from inferred type, will not accept number
intro = 20;

const doMath = (num1: number, num2: number) => {
  return num1 + num2;
};

// this will yell
doMath("1", "2");

// explicit types
let character: string;

// empty array of strings
let names: string[] = [];

// union types
// only need parentheses if declaring array
let values: (string | number)[] = [20, "cool"];

// union type that's not array does not need parentheses
// this example will error, as it does not accept boolean
let thing: string | number = false;

// objects
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

// Type Assertions
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

// Literal Types
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
