//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// return object values in array 
let valley = Object.values(object); // set object values equal to a variable 
return valley; // return varible 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// Should take an object and return all its keys in a string each separated with a space
let objKeys = Object.keys(object); // set object keys to a variable
let keyTime = objKeys.join(" "); // join together array key values, as a string, represented by a variable
return keyTime; // return variable
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
let objValues = Object.values(object); // set object keys to a variable
// new empty array
let convert = [];
// for loop on array values, to get rid of empty obj
for (let i = 0; i < objValues.length; i++){
    if(typeof objValues[i] === "string"){ //only push string index values
        convert.push(objValues[i]); // push that good stuff to the new array
     }
} 
let keyTime = convert.join(" "); // join together array key values, as a string, represented by a variable
return keyTime; // return variable
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // tell if array or obj
    if (Array.isArray(collection)){
        return "array";
    }
    return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // capitalize first letter of string
    // capitalize first letter, add rest of string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let results = string.split(" "); // create array of string words
    let copy = []; // create empty array
    // for loop, iterate and capitalize first letter of every word
    for (let i = 0; i < results.length; i++){
        copy.push(results[i][0].toUpperCase() + results[i].slice(1)); // push words into new array
    }
    let finalResult = copy.join(" "); // join back into a string
    return finalResult; // return string
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// return welcome name
let message = `Welcome ${object.name}!`;
// must capitalize full message, so initialize and then capitalize all words
let results = message.split(" "); // split string into array pieces
let copy = []; // new array
for (let i = 0; i < results.length; i++){ // for loop to push modified values
    copy.push(results[i][0].toUpperCase() + results[i].slice(1));
}
let finalResult = copy.join(" "); // join back together then return
return finalResult;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let results = []; // create empty array
    let profile = `${object.name} is a ${object.species}`; // concatenate object name and object species string
      results = profile.split(" "); // split string up into array pieces
      for(let i = 0; i < results.length; i ++){ // iterate through the array
      results[i] = results[i][0].toUpperCase() + results[i].substr(1); // capitalize every word
      }
      return results[0] + " is a " + results[results.length - 1]; // return a contatenatation using the array indexes and a "is a" string
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// if noises, return as string separated by spaces
// if no noises, return => there are no noises

let results = []; // empty array 
// if statement checking if noises property is present and noises length greater than zero
if (object.hasOwnProperty("noises") && object.noises.length > 0){
    for (let i = 0; i < object.noises.length; i++){
        results = object.noises.join(" "); // join together the values if true
    }
    return results; // return this tring
} else { // edge case
    return "there are no noises"; // return no noises string
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // return true if string has word, false otherwise
    let checker = string.split(" ");
    // split string then do for loop
    for (let i = 0; i < checker.length; i++){
        // if statement checking iterations
        if (checker[i] === word){ // if iteration equals word
            return true; // return true
        }
    } 
    return false; // default edge case
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // add name to friends object
    object.friends.push(name); // push name into object.friends
    return object; // return entire object 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
var results = []; // create an empty array
// check if friends exists
if(object.hasOwnProperty("friends") === false){ 
  return false; // return false 
}
if(object.hasOwnProperty("friends") && object.friends.length > 0){ // check friends greater than 0
  for (var i = 0; i < object.friends.length; i++){ // for loop to iterate and check through friends
    if(object.friends[i] == name){ // if the iteration of the object matches the name 
      results.push(object.friends[i]); // push friend name
    }
  }
  if(results[0] === name){ // if results equals name
    return true; // return true; 
  } else { // edge case
    return false; // return false
  }
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// empty array 
let results = [];
for (let i = 0; i < array.length; i++){ //for loop to iterate through array
    // if statement checking if name is a friend
  if (array[i].name !== name && array[i].friends.indexOf(name)){ 
    results.push(array[i].name); // push name values
  }
} 
  return results; // return array
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value; // update object key to value
    return object; // return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // for loop to iterate through strings
    for (let i = 0; i < array.length; i++){ 
        delete object[array[i]]; // delete object values being iterated
      }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let results = [...new Set(array)]; // use Set to get rid of duplicates 
    return results; // return results
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}