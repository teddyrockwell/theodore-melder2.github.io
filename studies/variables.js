/**
 * VARIABLES:
 * 
 * 0. Variables are named containers for data in Javascript.
 * 
 * To hold things in memory during the life-cycle of a program, we can use variables. 
 * 
 * Variables are named identifiers that can point to values of a particular type, 
 * like a Number, String, Boolean, Array, Object or another data-type. 
 * 
 * Variables are called so because once created, we can CHANGE the value (and type of value) to which they point.
 * 
 * 1. To create a variable we use the keyword, var followed by a name (id or alias) for our variable.
 * 
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 * 
 *  HOISTING: Refers to the process whereby the interpreter appears to move the VAR declaration of functions, variables,
 * or classes to the top of their scope, prior to execution of the code.
 */

// 1. Declaration //
// At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything
var myName;
console.log(myName); // prints => undefined

// 2. Initialization or assignment //
// When you assign a value to an undeclared variable
myName = "Theo";
console.log(myName); // prints => Theo

// 3. Re-assignment
// Changing or updating the value of a previously assigned variable 
myName = "Teddy";
console.log(myName); // prints => Teddy


/**
 * 1. VAR: The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
 * 
 * 
 * 2. LET: The let declaration declares a block-scoped local variable, optionally initializing it to a value.
 * 
 * 3. CONST: Constants are block-scoped, much like variables declared using the let keyword. 
 * The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration).
 * However, if a constant is an object or array its properties or items can be updated or removed.
 * 
 * 
 * 
 */

// 1. Var //

/*

Reassignable? => Yes

Hoisted? => Yes

Scoped to functions? => Yes

Scoped to if blocks? => NO

Scoped to loop blocks? => NO

*/

var age = 23;
age = 24; // This is allowed

// 2. Let // 

/*

Reassignable? => Yes

Hoisted? => NO

Scoped to functions? => Yes

Scoped to if blocks? => Yes

Scoped to loop blocks? => Yes

*/

let canSalsa = true;
canSalsa = false; // This is allowed

// 3. Const // 

/*

Reassignable? => NO

Hoisted? => NO

Scoped to functions? => Yes

Scoped to if blocks? => Yes

Scoped to loop blocks? => Yes

*/

const cool = true;
cool = false; // This is NOT allowed and will liekly produce a read only error. 

// Var and Let can be reassigned, however Const cannot.

/**
 * 1. HOISTING: Refers to the process whereby the interpreter appears to move the VAR declaration of functions, variables, 
 * or classes to the top of their scope, prior to execution of the code.
 * 
 * Because of this, VAR values will not throw ReferenceErrors if you try to reference them before they are declared. 
 * Instead, they will return the value of undefined. Only the declaration, not the initialization, is brought to the top.
 * 
 * 2. Let and Const values are NOT hoisted and therefore if you try referencing them before they are declared, you will get a Reference Error.
 * 
 * 
 */

// 1. HOISTING //

// during the lexing phase x is loaded into memory 

console.log(x); // This will print undefined

var x = 99;

console.log(x) // This will print 99

// 2. Let & Const //

console.log(y); // This will throw a Reference Error

console.log(teddy); // This will also throw a Reference Error


let y = 50;

const teddy = "Teddy2Gloves";


// 3. Let & Const - Block Scoped //

let globalScope = 1;

if (1 === 1){
    let globalScope = 2;
}

console.log(globalScope); // => Prints 1 to the console becuase let is block-scoped



let otherGlobalScope = 2;

if (2 === 2){
    const otherGlobalScope = 3;
}

console.log(otherGlobalScope); // => Prints 2 to the console because const is block-scoped also.