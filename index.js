// This is a single-line comment
// Comments are part of the Marking scheme for the leaving certificate
console.log("Hello, World!"); // Single-line comments can go after code

/* 
 * This is a 
 * Multi-line
 * Comment
 *
 */



/* Variables:
 * There are two ways to declare variables in JavaScript
 * Variables in JS are case sensitive
 * var a=10; // defines variable in global scope
 * or
 * let a=10; // defines variable in local scope
 * 
 * Constants:
 * Are variables that cannot be changed, are declared like this:
 * const a = 20;
 */

let a = 10;
console.log(a);

const x = 20;

console.log(x);


/* JavaScript Datatypes
 * Numbers
 * Strings
 * Booleans
 * JS is dynamically typed
 */

let temp = 10;   //type number
console.log(typeof temp);
temp = "10" //type string
console.log(typeof temp);
/*
 * All Numbers in JS are floating point numbers
 * All variable names in javascript mist begin with a
 * letter or an underscore, you cannot name a variable that starts with
 * a number.
 * You cannot use a reserved word as a variable.
 */

// Addition
console.log(1+2);

// Subtraction
console.log(2-1);

// Division
console.log(2/2);

// Exponent
console.log(2**8);

// Increment
let s = 10;
s++;
console.log(s); // 11

console.log(++s) // 12
console.log(s++) // 12

console.log(s); // 13
// Decrement
s--;
console.log(s); // 12

// Comparison operators

// Equals ==

console.log(5==3); // false
console.log(4==4); // true

// Not Equals !=

console.log(5!=3); // true
console.log(4!=4); // false

// Greater than >

console.log(5>3); // true
console.log(3>5); // false

// Less than <

console.log(3<5); // true
console.log(5<3); // false

// Greater than or equal to >=

console.log(3>=5); // false
console.log(5>=5); // true
