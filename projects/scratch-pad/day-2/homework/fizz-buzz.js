// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // prints numbers from 1 to 100, for loop

    for(let i = 1; i <= 100; i++){ /// remember to start at 1
        let result = ""; // empty variable for printing adding values
        if (i % 3 == 0 ){ // if multiple of three 
            result += "Fizz"; // print Fizz instead of number
        }
        if (i % 5 == 0){ // if multiple of five
            result += "Buzz"; // print Buzz instead of number
        }
        console.log(result || i); // print the result or the iteration
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}