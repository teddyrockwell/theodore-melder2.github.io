/**
 * CONTROL FLOW:
 *  Statements: Code that performs an action
 * 
 * Conditional Statements allow us to control the flow of our application, boiling down comparisons and or values based on their
 * truthy-ness or falsey-ness.
 * 
 * Values will be coerced to or changed into a Boolean; meaning the value is evaluated in a Boolean context.
 * 
 * Again, we can make decisions in our code by asking true or false questions. 
 * 
 * Based on the answer, we decide what code runs if the question is true, and what code runs if the question is false.
 *
 * 
 * To do this, we use conditional statements. These are if-statements and their chains, if, elseif, & else. 
 * 
 * The anatomy of conditional statements consist of:
 * 
 * (a) Test-conditions in parenthesis ()
 * (b) BODY {} that is executed if condition is true.
 * 
 * 
 * (1) IF: 
 *  The if statement executes a statement if a specified condition is truthy. 
 *  If the condition is falsy, another statement in the optional else clause will be executed.
 *  To start a conditional block of code, you first use an IF statment.
 * 
 * (2) ELSE IF:
 *  You can then chain together any number of ELSE-IF statements to your first IF.
 * 
 * (3) ELSE:
 * Following the IF and the ELSE-IF chains, or only the IF statement, you can append a deafult ELSE, to the end of the chain.
 * If the previous conditions were not met, then the follow statement will execute.
 * 
 * (4) SWITCH: 
 *  We can also use switch-statements similarly to control flow.
 *  The switch statement is used to perform different actions based on different conditions.
 *  Sometimes a cleaner alternative over IF-ELSE IF-ELSE chains, but still serves same function in terms of Control Flow.
 * 
 *  The switch statement evaluates an input expression, matching the expression's value to a case clause, and executes statements associated with that case.
 * 
 *  A break statement should end the case. Failing to do so will cause the next block to execute, most probably unintentionally.
 * 
 */

// 1. IF //

let iceCream = "cold";

if (iceCream === "cold"){ // if (condition)  => evaluates to true
    console.log("🥶"); // statement => action to follow IF condition is evaluated as true
}// prints => 🥶 


// 2. ELSE IF //

let gelato = "cool";

if(gelato === "cold"){ // if (condition) => evaluates to false
    console.log("The Gelato is COLD!"); // 1st statement => ignored since previous condition was false
} else if (gelato === "cool"){ // else if (condition) => another condition that is evaluated and determined to be true
    console.log("The Gelato is COOL, just like me! 😎"); // 2nd statement => action to follow up 2nd condition, since it was evaluated to be true
} // prints => The Gelato is COOL, just like me! 😎


// 3. ELSE // 

let sorbet = "chill";

if (sorbet === "cold"){ // if (condition) => evaluates to false
    console.log("That sorbet is pretty cold"); // 1st statement => ignored since previous condition was false
} else if (sorbet === "cool"){ // else if (condition) => evalutes to false
    console.log("That sorbet is so cool"); // 2nd statement => also ignored since previous coondition was false
} else { // a default for previous conditions failing
    console.log("That sorbet must be chill"); // default statement to execute
} // prints => That sorbet must be chill

// 4. SWITCH //
let softServe = "soft"
switch(softServe) { // equivalent of first if statement and condition
    case "soft": // condition => evaluates to true 
      console.log("We serving up that soft serve!"); // code block => will execute 
      break; // break
    case "hard": // else if condition equivalent
      console.log("We serving up that hard serve. Tell Tiger Woods"); // code block
      break; // break
    default: // else equivalent
      console.log("I have no idea what we're serving."); // code block 
  } // prints => We serving up that soft serve!