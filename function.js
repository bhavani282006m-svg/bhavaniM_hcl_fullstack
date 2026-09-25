function add(a, b) {
  console.log(a + b);
}
add(3, 4);
add(2, 9);

function greet() {
  console.log("Hello");
}
greet();

function add(a, b) {
  return a + b;
}
console.log(add(3, 4));
console.log(add(2, 9));


const numerators = 100,
  deno = 10;
try {
  console.log(numerators/ deno);
} catch (error) {
  console.log("An error caught");
  console.log("Error Message" + error);
} finally {
  console.log("finally will execute every time");
}


const numb = 40;
try {
  if (numb> 50) {
    console.log("Success");
  } else {
    // user-defined throw statement
    throw new Error("The number is low");
  }

  // if throw executes, the below code does not execute
  console.log("hello");
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}

const numerator = 100,
  denominator = "a";

try {
  console.log(numerator / denominator);

  // forgot to define variable a
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}

let sum1= 0;
let number = 1;
do {
  sum1 += number;
} while ((number = 0));
console.log(sum1);

// program to display text 5 times
const nm = 5;
// looping from i = 1 to 5
for (let i = 1; i <= nm; i++) {
  console.log("I love JavaScript.");
}

// program to display the sum of n natural numbers
let sum = 0;
const nb= 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for (let i = nb; i >= 1; i--) {
  // adding i to sum in each iteration
  sum += i;
}
console.log("sum:", sum);

// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;

  case 2:
    a = "two";
    break;

  default:
    a = "not found";
    break;
}
console.log(a);

let i = 1,
  n = 5;
while (i <= n) {
  console.log(i);
  i += 1;
}

const ab = "hello";
console.log(ab[1]);
console.log(ab.charAt(1));

const d = "a";
const e = "A";
console.log(d == e);

let s = "hello";
s[0] = "H";
console.log(s);

var counter = 120;
console.log(typeof counter);
counter = false;
console.log(typeof counter);
counter = "Hi";
console.log(typeof counter);
