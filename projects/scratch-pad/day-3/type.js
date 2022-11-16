// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    


    // return true if an array, false otherwise
if (Array.isArray(value) === true){
    return true;
}
    // can use if statement for true and false as default.

    return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

    // test date, test array, make sure typeof equals object, and that the value isn't null
    if((value instanceof Date) === false && Array.isArray(value) === false && typeof value === "object" && value !== null){ 
        return true; // return true
    } else { // edge case
        return false; // return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    // test date, make sure typeof equals object, and that value isn't null
    if(typeof value === "object" && value !== null && (value instanceof Date) === false){ // run various tests together to deteremine if object, then execute next lines
        return true; // return true
    } else { // edge case
        return false; // return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // massive if statement chain 
    // if string => string
    if(typeof value == "string"){ 
        return "string"; // return string
    }  else if (Array.isArray(value) === true){ // if array => array
        return "array"; // return array
        // if object => object
    } else if((value instanceof Date) === false && Array.isArray(value) === false && typeof value === "object" && value !== null){ 
        return "object"; // return object
    }
    // if undefined => undefined
    else if (typeof value == "undefined"){ 
        return "undefined"; // return undefined
    }
    // if number => number
    else if (typeof value == "number"){ 
        return "number"; // return number
    }
    // if boolean => boolean 
    else if (typeof value == "boolean"){
        return "boolean"; // return boolean
    }
    // if null => null
    else if (value == null){ 
        return "null"; // return null
    }
    // if function => function
    else if (typeof value == "function"){ 
        return "function"; // return function
    }
    // if date => date
    else if ((value instanceof Date) === true){ 
        return "date"; // return date
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
