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
