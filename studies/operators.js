/*

1. - Assignment Operators - Assignment operators assign values to JavaScript variables.

https://www.w3schools.com/js/js_assignment.asp 

Operator:           Example:           Same As:

  =                  x = y             x = y

  +=                 x += y            x = x + y

  -=                 x -= y            x = x - y

  *=                 x *= y            x = x * y

  /=                 x /= y            x = x / y

  %=                 x %= y            x = x % y

  **=                x **= y           x = x ** y
  
////////////////////////////////////////////////////////////////////////////////////////////

2. - Arithmetic Operators - Arithmetic operators perform arithmetic on numbers (literals or variables).

https://www.w3schools.com/js/js_arithmetic.asp

Operator:            Description:                      Example:

  +                  Addition                          let j = "Ja" + " " + "Rule";
          The addition operator (+) adds numbers.


  -                  Subtraction                       let z = 70 - 1; 
      The subtraction operator (-) subtracts numbers.


  *                  Multiplication                    let g = 21 * 20;
  The multiplication operator (*) multiplies numbers.

  
  **                 Exponentation (ES2016)            let _2Pac = 2 ** 2;
The exponentiation operator (**) raises the first operand to the power of the second operand.


  /                  Division                          let _50Cent = 100 / 2;
          The division operator (/) divides numbers


  %                  Modulus (Remainder)               let _21Savage =  21 % 7;
    The modulus operator (%) returns the division remainder.

  
  ++                 Increment                         let paycheck = 0; paycheck++;
      The increment operator (++) increments numbers.


  --                 Decrement                         let taxes = 100; taxes --; 
      The decrement operator (--) decrements numbers.


////////////////////////////////////////////////////////////////////////////////////////////

3. - Comparison Operators - Comparison operators are used in logical statements to determine equality or difference between variables or values.

https://www.w3schools.com/js/js_comparisons.asp

Given that x = 7, the table below explains the comparison operators:

Operator:            Description:                   Comparing:            Returns:

==               equal to (loosely)                 x == 8                false

                                                    x == 7                true

                                                    x == "7"              true


===              equal value & type (strictly)      x === 7               true

                                                    x === "7"             false

!=              not equal                           x != 8                true

!==          not equal value or equal type          x !== 7               false

                                                    x !== "7"             true

                                                    x !== 8               true
                                                    
>                  greater than                     x > 8                 false

<                  less than                        x < 7                 true

>=            greater than or equal to              x >= 8                false

<=            less than or equal to                 x <= 8                true

////////////////////////////////////////////////////////////////////////////////////////////

4. - Logical Operators - Logical operators are used to determine the logic between variables or values.

https://www.w3schools.com/js/js_comparisons.asp

Given that x = 8 and y = 24, the table below explains the logical operators:

Operator:                  Description:                     Example:                Returns:

&&                         and                              (x < 10 && y > 1)       true

||                         or                               (x == 5 || y == 5)      false

!                          not                              !(x == y)               true

////////////////////////////////////////////////////////////////////////////////////////////

5. - Unary Operators (!, typeof, -) - "Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator can be used both as a binary operator and as a unary operator."

Eloquent JavaScript & Greenlight (Operators)

Examples:

  -
let positive = 100;
console.log(-positive); => (RETURNS -100)
console.log(1 - 1); => (RETURNS 0)

  typeof
console.log(typeof 1) => (RETURNS NUMBER)
console.log(typeof "Pimp C") => (RETURNS STRING)
console.log(typeof (1 < 2)) = (RETURNS BOOLEAN)

! - negation, the bang operator: flips the truthiness of a value
console.log(!true); => (RETURNS FALSE)
console.log(!false); => (RETURNS TRUE)
console.log(!null); => (RETURNS TRUE)

//////////////////////////////////////////////////////////////////////////////////////////////

6. - Ternary Operators (a ? b : c) - Assigns a value to a variable based on some condition

https://www.w3schools.com/js/js_comparisons.asp

Syntax:

variablename = (condition) ? value1:value2 

                    a      ?   b   :  c


Example:
let age = 18;
let pourUpThemDranks = (age < 21) ? "Not yet, buddy." : "Pour it up, playa."; 


Explanation:

If the variable age is a value below 21, the value of the variable pourUpThemDranks will be "Not yet, buddy.", otherwise the value of pourUpThemDranks will be "Pour it up, playa."

//////////////////////////////////////////////////////////////////////////////////////////////
*/

