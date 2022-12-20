/**
 *   FUNCTIONS:
 *  A type of data encapsulating reusable code.
 *  
 *  Functions allow us to encapsulate a block of code, and execute that block of code whenever we want and how ever many times we want.
 * 
 *  Functions can be thought of as logic data.
 * 
 *  Functions are like recipes, a set or list of instructions.
 *  
 *  1. TWO PHASES OF USING A FUNCTION:
 * 
 *  (1) - Phase 1 - Function Declaration / Definition
 *  Before using a Function, you must first define your Function. 
 *  This is the process of designing the code you want to execute when your Function is invoked / called.
 *  Likewise, before anyone can follow any set of instructions, the instructions must first be written down.
 * 
 *  (2) - Phase 2 - Function Invocation / Calling / Executing 
 *  To use a Function, we have to call it.
 *  Calling a Function will run the code within the body or code block of the Function.
 *  Executing, invoking, applying, running are all synonymous with calling a Function.
 * 
 *  2. DIFFERENCE BETWEEN A FUCTION'S PARAMETERS AND ARGUMENTS PASSED TO A FUNCTION:
 * 
 *  (1) - Parameters
 *  When designing Functions, we can list any number of required inputs.
 *  We call these inputs parameters, and we list them between the parenthesis.
 * 
 *  (2) - Arguments
 *  Arguments (inputs) are what we call the values passed to a Function when we execute the Function.
 *  To call a Function, you must reference its name or the variable name to which its assigned, then pass any values expected.
 *
 * 
 *  3. SYNTAX FOR A NAMED FUNCTION:
 *  Named Functions consist of Function Declations, such as this:
 * 
 *  function add(num1, num2){
 *      return num1 + num2;
 *  } 
 *
 *  The name of this function declaration is "add." Named function definitions are hoisted to the top of their scope, so they
 *  can be used in the program before they appear to be sequentially defined.
 * 
 *  4. HOW TO ASSIGN A FUNCTION TO A VARIABLE
 *  A Function Expression is formed when an anonymous function is assigned to a variable or constant.
 * 
 *  const adding = function(number1, number2){
 *      return number1 + number2;
 *  }
 *  
 *  Trying to call adding() before it's assigned will throw an error because Function Expressions are not hoisted like Function Declarations.
 *  When using the pattern of Function expressions, you can only call the Function after it's been assigned to a variable or constant.
 * 
 *  5. HOW TO SPECIFY FUNCTION INPUTS & OUTPUTS
 *  Inputs are specificed by the parameter values placed inside the parenthesis next to the function name.
 *  Outputs can be specified from within the function body, when using the return keyword.
 * 
 *  6. Scope:
 *  Scope refers to what varaibles or constants are accessible and where.
 *  
 *  There are basically two types of scope:
 *  (1) Global Scope - Anything outside of Functions
 *  let x = 10;
 *  console.log(x); => 10  (global scope variable)
 * 
 *  (2) Local Scope - Local to a Function Body
 *  let x = 10;
 * 
 *  function xInsideFunction(){
 *  x = 5;
 *  console.log(x); => 5 (local scope variable);
 *  }
 * 
 *  Functions usually enclose a scope and protect their variables from Parent Scopes, including the global scope.
 *  
 *  Functions can access the variables in their Parent Scopes but parent scopes CANNOT access varaibles in Child Scopes.
 * 
 *  Functions nested inside of functions can access outer parent scopes again, the parent scopes CANNOT access child scope variables.
 *
 * 
 *  7. Closures:
 *  A CLOSURE is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
 * 
 *  The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets),
 *  it has access to the outer function’s variables, and it has access to the global variables.
 *  
 *  The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. 
 *  Note that the inner function cannot call the outer function’s arguments object, however, 
 *  even though it can call the outer function’s parameters directly.
 * 
 */

    // 1. Phases //  
    function calcRectArea(width, height) { 
        return width * height;
      } // PHASE 1
    
      calcRectArea(5, 4) // PHASE 2
    
      console.log(calcRectArea(5, 4)); // prints => 20
    
    
      // 2. Parameters vs. Arguments //
    
    function calcRectArea(width, height) {  // width & height are PARAMETERS
        return width * height;
      } 
      calcRectArea(5, 4); // 5 & 4 are ARGUMENTS
    
    
        // 3. Function Declaration // 
        calcAreaOfRect(5, 4) // can be called before being created due to hoisting
        function calcRectArea(width, height) {  // This is the syntax for a Named Function
            return width * height;
          }
    
    
        // 4. Function Expression // 
        let calcAreaOfRect = function(width, height){ // This is the syntax for a function assigned to a variable
            return width * height;
          } // This function is the same as the function declaration, however, it is not hoisted and must be called sequentially after being created.
          calcAreaOfRect(5, 4); // must be called AFTER being created
    
    
        // 5. Inputs & Outputs // 
        function calcRectArea(x, y){ // What we place in the parenthesis serves as our parameters. Here we can use random variable names or be explicit in the data types we pass into our functions. 
            return y * x; // The return keyword determines what will be returned from our function, as an output.
          } 
          calcAreaOfRect(5, 4) // prints => 20 => With different parameters, we still get the same output.
    
        // 6. Scope // 
        let j = "k";
        let x = 10;
        console.log(j, x, k) // prints => k & 10 to the console (without k)
        // Throws an error when k is evaluated because it is not defined
        
        function jay(){
          j = "JFK";
          let k = "kool-aid"
          console.log(j, x, k);
        }
        jay(); // prints => JFK & 10 to the console. 
    
        // Within the scope of the function, j is JFK, but globally, it is k.
        // The function has access to the global scope variable of j and x
        // The global scope does not have access to the k variable inside the function 
    
    
        // 7. Closures //
    function showName (first, last) {
        var intro = "My name is ";
            // this inner function has access to the outer function's variables, including the parameter
        function makeFullName () {        
        return intro + first + " " + last + ".";   // nested function having access to parent scope  
        }
        
        return makeFullName ();
        }
        showName ("Teddy", "Rockwell"); // prints => My name is Teddy Rockwell.