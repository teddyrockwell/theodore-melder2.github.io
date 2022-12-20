/**
 * STRING MANIPULATION:
 * 
 * 1. With Operators:
 * 
 * (1) When we use the "+" operator with a string, it is called the concatenation operator. 
 * With this, we can merge/concatenate more than one string and build a new string out of those strings. 
 * 
 * (2) We can also use the "+=" operator to concatenate a string onto the end of an existing string variable.
 * This can be very helpful for breaking a long string over several lines.
 * 
 * (3) Template Literals: Allow us to create multi-line strings and to use string interpolation features to create strings.
 * If we want to solve any problem with normal string manipulation, we need to concatenate the value with the string with + operator as we have seen till now. 
 * But template literals make it simpler and remove the complications of using single or *double quotes, backslashes and concatenation operators.
 * 
 * 2. With String Methods:
 * Strings are used to represent and work with a sequence of characters. 
 * A string can represent an object as well as the primitive data type. 
 * JavaScript automatically converts primitive strings to String objects so that it's possible to use String methods and access properties even for primitive strings.
 * 
 * (1) Length property: The length property returns the length of a string
 * 
 * (2) Bracket Notation: Can return any character inside a string by including square brackets and index, on the end of a variable name.
 * 
 * (3) The Slice method extracts a part of a string and returns the extracted part in a new string.
 * 
 * (4) The Concat method joins two strings into a new string.
 * 
 * (5) The Replace method replaces a specified value with another value in a string:
 * 
 * (6) The toUpperCase method allows up to uppercase characters on a string
 * 
 * (7) The toLowerCase method allows us to lowercase characters on a string
 *
 */



// 1. Concatenation with "+" operator //

let rDJ = "Robert " + 'Downey ' + "Jr.";
console.log(rDJ); // prints => Robert Downey Jr.

// 1.1 Concatenation with "+=" operator //
let usher = "It's seven o'clock on the dot";

usher += ", I'm in my drop top, cruisin' the streets."

console.log(usher); // prints => It's seven o'clock on the dot, I'm in my drop top, cruisin' the streets.

// 1.2 Template Literals //

let eazyCar = "my '64.";
let where = "down the street";
let eazyE = `Cruising ${where} in ${eazyCar}`;

console.log(eazyE); // prints => Cruising down the street in my '64.



// 2. String Methods //
 
// 2.1 Length Property //
let veins = "veins";
veins.length;
console.log (veins.length); // prints => 5

for (let i = 0; i < veins.length; i++){ // Usage of length allows us to create a for loop and gives us options in whatever we want to or create
    let v = veins[i]; 
    console.log(v);
}


// 2.2 Bracket Notation //

let air = "breath";
console.log(air[0].toUpperCase()); // prints => B

// 2.3 Slice (start, end)//
let chick = "chicken";
console.log(chick.slice(1)); // prints => hicken
console.log(chick.slice(1,5)) // prints => hick


// 2.4 Concat //
let aint = "Ain't Nothing"
let but = " But A Gangsta Party";
console.log(aint.concat(but)); // prints => Ain't Nothing But A Gangsta Party

// 2.5 Replace (find first of, replace with) //
let goat = "Kareem is the GOAT";
console.log(goat.replace("Kareem", "Michael Jordan")); // prints => Michael Jordan is the GOAT

// 2.6 & 2.7 toUpperCase & toLowerCase Method //
let uppy = "everything is lowercase and boring";
let downy = "ALL THESE CHARACTERS ARE UPPERCASED!"
for (let i = 0; i < uppy.length; i++){
    console.log(uppy[i].toUpperCase()); // prints => EVERYTHING IS LOWERCASE AND BORING!
}

for (let i = 0; i < downy.length; i++){
    console.log(downy[i].toLowerCase()); // prints => all these characters are uppercased!
}

