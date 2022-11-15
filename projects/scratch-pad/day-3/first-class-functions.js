// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    // return function that tests whether a value is greater than the base
    return function(value){ // return function with value parameter
        return value > base; // return value greater than base
    }
    
    // test usually means evaluate true or false
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return function that tests whether a value is less than the base
    return function(value){ // return function with value parameter
        return value < base; // return value less than base
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // return a function that tests whether a given string starts with the starswith char
    return function(string){ // return function eval string
        return (string[0].toUpperCase() === startsWith || string[0].toLowerCase() === startsWith); // if the first index of a string, case insensitive, equals startsWith
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // return a function that tests whether a given string ends with the endsWith char
    return function(string){ // return function eval string
        return (string[string.length-1].toUpperCase() === endsWith || string[string.length -1].toLowerCase() === endsWith); // if the last index of a string, case insensitive, equals startsWith
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // example similar to filterNums example
    
    // return the array of strings modified

    // for loop 
    // empty array
    let results = [];
    for (let i = 0; i < strings.length; i++){
        // push to array, modified strings
        results.push(modify(strings[i]));
    }
    return results; // return results
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // return true if all tests pass
    // for loop
    // empty array
    let results = [];
    for (let i = 0; i < strings.length; i++){
        test(strings[i]); // while looping, test each iteration of strings
        if(test(strings[0]) == true && test(strings[1]) == true && test(strings[2]) == true){ // if all three tests of strings are true
            return true; // return true if all true
        } else{ // edge case
            return false; //  return false
        }
    }
    // example similar to filterNumber example
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
