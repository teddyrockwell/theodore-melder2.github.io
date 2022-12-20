// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
greeting = "Hello everyone, welcome!";
location = "We are on planet KaleLin";
time = "the show will start soon.";
console.log(`${greeting} ${location} ${time}`);
};



// 2. return numnber of contestants in dogs array
var contestants = function(){
    return dogs.length;
};



// 3. use filter to get rid of non-dogs
var filterSpecies = dogs.filter(x => x.species === "dog");



// 4. use spread operator to make copy of filterSpecies
var dogContestants = [...filterSpecies];



// 5. ! add class property to each dog object/ add a key of class with value of "green, yellow, or red"
var dogsWithClasses = dogContestants.map((x) =>{
    //x.class
    let copy = Object.assign({}, x)
    if (x.weight >= 0 && x.weight<= 10){
        copy.class = "red";
    } else if (x.weight >= 11 && x.weight<= 20){
        copy.class = "yellow";
    } else if (x.weight >= 21){
        copy.class = "green";
    };
    return copy;
});
    


// 6. !
var firstInClass = function(array, output={}){
    // bc
    if (array.length === 0){ // if array length is zero
        return output;
    }

    let obj = array[0]; // assign object to each iteration of array
    for (let key in obj){ // for in loop 
        output[key] = obj[key]; // output key is equal to object key 
    }
    // rc 
    return firstInClass(array.slice(1), output);


};




// 7. !
var votes = dogs.reduce((acc, curr)=>{
return acc += curr.votes;
}, 0);