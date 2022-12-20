/**
 * LOOPS:
 *  Iterating over data or repeating yourself
 * 
 *  Loops are built-in constructs, or features of Javascript, that allow us to execute a block of code as many times as needed.
 *  They are particularly handy for iterating over collections of data. In doing so, we ce can pull out the values of a 
 *  collection to with them, one by one.
 * 
 *  Loops can be used to loop forwards or backwards over arrays.
 * 
 *  3 Parts of a LOOP:
 *  (1) Where it should start => Initialization / Start
 *  (2) How long should it looop => Condition   / Stop
 *  (3) What changes each iteration of a loop => Update / Increment, Decrement, etc.
 * 
 *  1. FOR LOOP:
 *  The for statement creates a loop that consists of three optional expressions,
 *  enclosed in parentheses and separated by semicolons, followed by a statement
 *  (usually a block statement) to be executed in the loop.
 * 
 *  FOR     START     STOP     UPDATE
 *  for (let i = 0; let i < 10; i++){
 *     console.log(i); // executable line of code for loop
 *  };
 * 
 *  2. FOR IN LOOP:
 *  Similar to for loop but iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), 
 *  including inherited enumerable properties. This allows you to use the key to get the value in the object
 * 
 *  Keys are essentially strings.
 *  
 *  2 Parts of a For In Loop:
 *  (1) How to refer to keys => 
 *  (2) Which object to loop over => 
 * 
 *       Key ref    object
 *  for (var key in object)
 * 
 *  3. WHILE LOOP:
 *  Uses the keyword, while, the in parenthesis, states a condition that, while true, will continue to execute the block of code
 *  in the body of the while-loop. The condition is evaluated before executing the statement.
 *  It is important to break out of the loop by including an update that updates the variable in the while-condition.
 *  Failing to do so will cause an infinite loop, and the program will crash.
 * 
 * 
 */

// 1. For Loop //

let count = 10;
for (let i = 0; i <= count; i ++){
    console.log(i); // prints => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

let array = ["Guts", "Griffith", "Casca", "Judeau", "Pippin", "Corkus", "Rickert", "Erica", "Skeleton Knight", "Noseferatu Zodd"];
for (let i = 0; i < array.length; i++){
    console.log(i); // prints => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

    console.log(array[i]); // prints => Guts, Griffith, Casca, Judeau, Pippin, Corkus, Rickert, Erica, Skeleton Knight, Noseferatu Zodd
}

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]); // prints => 1, 2, 3, 4, 5         => showcases looping through an array fronts
}

for (let i = numbers.length -1; i >= 0; i--){
    console.log(numbers[i]); // prints => 5, 4, 3, 2, 1         => showscases looping through an array backwards
}


// 2. For In Loop //

let lakers = {team: "Lakers", goodNow: false, championships: 17};

for(var key in lakers){
    console.log(key); // prints => team, goodNow, championships
}

for(var key in lakers){
    console.log(lakers[key]); // prints => Lakers, false, 17
}

// 3. While Loop //

let money = 5

while (money >= 0){ // condition 
    console.log(`You have ${money} dollars.`); // statement
    money--; // update
} // prints =>
/*
You have 5 dollars.
You have 4 dollars.
You have 3 dollars.
You have 2 dollars.
You have 1 dollars.
You have 0 dollars.
*/

// prints the statment multiple times, while, the money variable is >= 0.  Once it decrements beyond 0, it stops.
