// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { // Must Solve First - FACTORY FUNCTION => 
let contact = {};
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;

    return contact;
} 


function makeContactList() { // FACTORY FUNCTION 
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // set equal to empty array
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact); // adding contact to contacts list (contacts array, array holding all contacts)
        },
        findContact: function(fullName){ // "Max Gaudin", see if it exists => how to take a fullName and see if it interacts with the data we have, etc.
            // returns the contact object if found in the contacts-list
                // if statement

                // for loop through contacts to check match
            for (let i = 0; i < contacts.length; i++){
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){ // check if fullName will equal strings concatenated
                    return contacts[i]; // return contact
                } else {
                    return undefined; // or return undefined
                }
            } 
            // or undefined if tbe fullName does not matchy any contact
        },
        removeContact: function(contact){
            contacts.pop(contact); // remove last contact from array
        },
        printAllContactNames: function(){
            // should return string will full names and line breaks = \n

            // create an empty array, push all names to array, then join them with line break (avoiding extra line break)
            let results = [];
            // for loop
            for(let i = 0; i < contacts.length; i++){
                results.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            }
            // join time
            let allContacts = results.join("\n");
            return allContacts; // return full list
        },
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
