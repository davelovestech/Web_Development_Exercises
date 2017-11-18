/*
This Javascript program creates an object called friends that contains two instances: bill & steve.
Each instance has a firstName, lastName, number & address. This program has two functions: list & 
search. list displays the firstName of each instance of the friends object. search prints each
property of the object instance parameter.
*/
var friends = {};
friends.bill = {
    firstName: 'Bill',     
    lastName: 'Billerson',
    number: '555-555-5555',
    address: ['42 Hatchet Lane', 'Parktown', 'NJ', '129101']
    };
friends.steve = {
    firstName: 'Steve',
    lastName: 'Nicks',
    number: '8675309',
    address: ['22 Street', 'Duckville', 'CN', '1243123']
    };
    
var list = function (obj) {
    for (var prop in obj) {
      console.log(prop);
    }
};

var search = function (name) {
    for (var prop in friends) {
       if (friends[prop].firstName === name) {
        console.log(friends[prop]);
        return friends[prop];
       }
    }
};
console.log("The result of calling the search function on 'Bill' is: \n")
search('Bill')
console.log("\nThe result of calling the search function on 'Steve' is: \n")
search('Steve')
console.log("\nThe result of calling the list function on the friends object is: \n")
list(friends)
