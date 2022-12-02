// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./theodore-melder2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){ // use filter method to sort through gender and make array of males
        // return customers that are male
        return customer.gender === "male";
    })
    return males.length; // for the number of males, return the length of the males array


};

var femaleCount = function(array){
    return _.reduce(array, function(accumulator, current){ // return reduce method count of females
        if (current.gender === "female"){ // if statement for females
            return accumulator + 1; // if female, add to accumulator
        } else { // edge case
            return accumulator; // return accumulator 
        }
    }, 0);
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){  // let oldest equal reduce method, counting the oldest age
        if (accumulator < current.age){ // if the current age is greater than the accumulator, make accumulator equal to that value
            accumulator = current.age // make accumulator equal to that value
        }
        return accumulator; // return accumulator (inside reduce function)
    }, 0);
    for(let i = 0; i < array.length; i++){ // for loop to find the age that is equal to the oldest variable
        if (array[i].age === oldest){ // if age equals the same as the oldest age/accumulator
         return array[i].name; // return that name
        } 
     }
};

var youngestCustomer = function (array){ // same logic as oldest, but flip greater than sign, to get younger ages and start seed higher
    let youngest = _.reduce(array, function (accumulator, current){
        if (accumulator > current.age){ // if accumulator is greater than current.age
            accumulator = current.age; // assign accumulator to current age
        }
        return accumulator; // return accumulator
    }, 100);
    for (let i = 0; i < array.length; i++){ // for loop going through array
        if (array[i].age === youngest){ // if array age matches youngest age/accumulator 
            return array[i].name; // return array name
        }
    }
};

var averageBalance = function(array){
    let balance =  _.reduce(array, (accumulator, current) => // set a variable equal to the reduce method (accumulation) of all balances
    accumulator + parseFloat((current.balance.replace(/[$,]/g, ""))) // accumulator + number value for balance
    , 0);
    return balance / array.length; // return total balance, divided by array lengthn to get average
};

var firstLetterCount = function(array, letter){
let condensed = array.filter(x => x.name[0].toLowerCase() === letter.toLowerCase()); // assign variable to array filtering through names equalling to letter
return condensed.length; // return array length to get count of names that match the letter
};

var friendFirstLetterCount = function(array, customer, letter){
    let results = 0;
// for loop through array to test for customer's name
for (let i = 0; i < array.length; i++){
    if (array[i].name === customer){ // if statement to see if array iteration will match customer's name
        let nestedFriends = array[i].friends; // initialize variable to go through friend's list of main array iteration
        for (let j = 0; j < nestedFriends.length; j++){ // nested for loop going through friends array
            if ((nestedFriends[j].name.charAt(0).toLowerCase() === letter.toLowerCase())){ // if the first letter of a word in the iteration matches the letter lowercased 
                results++; // increment the results variable by one
            }
        }
    }
}
return results; // return the results variable, for count of friends' name beginning with first letter
};

var friendsCount = function(array, name){
let results = []; // create empty array 
for (let i = 0; i < array.length; i++){ // for loop to go through customers array
    let nestedFriends = array[i].friends; // create varaible to go through each customer's friends array
    for (let j = 0; j < nestedFriends.length; j++){ // for loop with friends array
        if (nestedFriends[j].name === name){ // if iteration of friends array matches name
            results.push(array[i].name); // push original customer name into array
        }
    }
}
return results; // return array of original customer names
};

var topThreeTags = function(array){
    // create two arrays, first to push tags to, second to push top tags to
    let results = [];
    let finalResults = [];
    // for loop to go through customers
    for (let i = 0; i < array.length; i++){
        let tagsVariable = array[i].tags; // assign variable equal to array iteration's tags
        // for loop through tags
        for (let t = 0; t < tagsVariable.length; t++){
            results.push(tagsVariable[t]); // push all of the tags into results array
        }
    } // use reduce method to add up count of tags, seed equal to object
    let tagCount = results.reduce((accumulator, count)=> { 
        if (accumulator.hasOwnProperty(count)){ // if accumulator has count/(tag property)
            accumulator[count]++; // increment property value
        } else { // edge case
            accumulator[count] = 1; // set property equal to one
        } return accumulator; // return accumulator
    },{});
    // for in loop to get top tags from count
    for (let key in tagCount){
        // if statement selecting top tags
        if (tagCount[key] >= 3){ // if the tag value is greater than or equal to 3
            finalResults.push(key); // push those values into the final/top tags array
        }
    }
    return finalResults; // return final array
};

var genderCount = function(array){
let genderArray = array.map(x => x.gender); // get an array of genders to make reducing easier
let gender = genderArray.reduce((accumulator, current) => {  // set gender variable to reducing of array
    if (accumulator.hasOwnProperty(current)){ // if accumulator has current property
        accumulator[current]++; // increase property value by 1
    } else { // edge case
        accumulator[current] = 1; // set property value equal to 1
    }
    return accumulator; // return accumulator object
},{});
return gender; // return total gender object;

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
