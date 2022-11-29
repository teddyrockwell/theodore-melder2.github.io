/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){ // for loop to search for name 
for (let i = 0; i < animals.length; i++){
    if (animals[i].name === name){ // if iteration of animals equals name 
        return animals[i]; // return animal
    }
} return null; // default edge case
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){ // for loop to search for name to replace
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){ // if iteration of animals equals name
            animals[i] = replacement; // replace
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){ // for loop to search for name to remove
    for (let i = 0; i < animals.length; i++){ 
        if (animals[i].name === name){ // if iteration of animals equals name
            animals.splice(0, 1); // remove 
        }
    };
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){ 
    if(animal.name.length > 0 && animal.species.length > 0 ){ // if animal name greater than zero and animal species length greater than zero
        for (let i = 0; i < animals.length; i++){ // for loop through animals array
            if(animals[i].name !== animal.name){ // if animals iteration name is not equal to the animal name
                animals.push(animal); // push animal name to the animals array
            } else { 
                return false; // return false 
            }
        } 
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
