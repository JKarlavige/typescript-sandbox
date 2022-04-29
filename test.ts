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
