/**
 * DATA TYPES:
 * 
 * 0. Data types are the types of values. We call a type of value a data-type
 * 
 * 1. Number => Numeric data 
 * 
 * 2. String => Character data
 * 
 * 3. Boolean => True or False
 * 
 * 4. Array => Indexed list-like objects => []
 * 
 * 5. Object => Store various keyed colle tion => {}
 * 
 * 6. Function => set of statements that performs a task or calculates a value
 * 
 * 7. Undefined => No-value, NOT initialized
 * 
 * 8. null => No-value, intentionally nullified by a programmer
 * 
 * 9. NaN => Not a Number (typeof NaN; // => "number")
 * 
 * 10. Infinity & -Infinity => Infinity is a property of the global object. In other words, it is a variable in global scope.
 * The initial value of Infinity is positive. The value Infinity (positive infinity) is greater than any other number.
 * Negative infinity is the opposite of infinity and functions inversely as such.
 * 
 * 11. Primitive vs. Complex Types => 
 * 
 * Primitive data types consist of:
 * (1) Number
 * (2) String
 * (3) Boolean
 * (4) NaN
 * (5) undefined
 * (6) null
 * 
 * (1)They are called primitive because they are atomic or immutable. This means that they do not hold, collect, or aggregate other
 * values, and operations on simple values return *new* simple values, they do not alter the *original* value.
 * 
 * (2) Primitive values are Copy by Value, so when assigning or passing values, simple data-types are copied from one variable to the next.
 * 
 * Complex data types consist of: 
 * (1) Object
 * (2) Array
 * (3) Function
 * 
 * (1) They are called complex because complex values aggregate other values and therefore are indefinite size.
 * (2) Complex values are Copy by Reference, so wwhen assigning or passing values, complex data-types are passed by reference.
 * 
 * 12. Copy by Reference vs. Copy by Value
 * 
 * (1) COPY BY REFERENCE => Whenever a variable that points to a complex data type is referenced, a copy of the reference that the variable is pointing to, is created.
 * 
 * (2) COPY BY VALUE => Whenever a variable that points to a primitive data type is referenced, a copy of the value that the variable is pointing to, is created.
 * 
 */


// 1. Number //
let bankroll = 50;
console.log(bankroll); // prints => 50

// 2. String //
let bugs = "bunny";
console.log(bugs); // prints => "bunny"

// 3. Boolean //
let isTheEarthFlat = false;
console.log(isTheEarthFlat); // prints => false

// 4. Array //
let berserk = ["Theo's favorite anime/manga", "A very dark story", "Arguably one of the best mangas ever"];
console.log(berserk); // prints => ["Theo's favorite anime/manga", "A very dark story", "Arguably one of the best mangas ever"];

// 5. Object//
let car = {make: "Toyota", year: 2004};
console.log(car); // prints => {make: "Toyota", year: 2004}

// 6. Function//
function punchConsole(){
console.log("👊🏽💥");
}

punchConsole(); // prints => 👊🏽💥


// 7. Undefined//
let noDefining = undefined;
console.log(noDefining); // prints => undefined

// 8. null//
let nully = null;
console.log(nully); // prints => null

// 9. NaN//
let noNum = NaN;
console.log(noNum); // prints => NaN

// 10. Infinity (& -Infinity)//
let toAndBeyond = Infinity;
let negToAndBeyond = -Infinity
console.log(toAndBeyond, negToAndBeyond); // prints => Infinity, -Infinity

// 11. & 12. Primitive/Complex Types (Copy By Value, Copy By Reference)

let chingy = "ching-a-ling";

blingy = chingy; // The value stored in chingy is COPIED into blingy

console.log(blingy); // prints => ching-a-ling

chingy = "no more ching-a-ling"; // Changing the value at chingy doesn't effect what is stored at blingy.

console.log(chingy); // prints => no more ching-a-ling

console.log(blingy); // prints => ching-a-ling





let snoop = {snoop: "dogg"};
/*
Here, the value stored in BIG is a REFERENCE to the value stored in SNOOP - they both point to the same object
*/
let big = snoop;
/*
Changing the value at BIG effects all References because variable BIG points to the reference in memory where object SNOOP is stored
 SNOOP === BIG
*/
big.shot = "caller";
console.log(snoop.shot) // prints => caller