/*
This program is called Building a Cash Register. It allows for adding new StaffMember objects
with defined names & discountPercent instances. Then, there's a cashRegister variable that 
contains an object with the ability to add new items by scanning, void the last transaction, 
and apply staff discount to drop the bill and, obviously, also the ability the print the 
cost of each item. 
*/
/*
The function StaffMember accepts inputs of name & discountPercent and creates new StaffMember 
objects out of that. There are also two pre-made object variables of sally & bob that already
have these values. 
*/
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
/*

*/
// Here is 'me' with a staff discount of 20%
var me = new StaffMember("David", 20);
/*
This is the main part of this program. It starts the cash register out at a total of 0
and a lastTransaction of 0. The add intance adds the new item price to the total AND
it saves that as the lastTransaction, so that a later voidLastTransaction instance
can run. Additionally, there's the staffDiscount instance of the object that can
drop the price for employees. 
*/
var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(name){
        this.total = this.total - (this.total * 0.2);
    }    
};
//Here, the program adds three different items; the third item, magazines, is added 3 times.
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
//Here's the result of the total instance of the object AFTER adding those previous items.
console.log("The result of calling the cashRegister.scan function on 1 'eggs', 1 'milk' & 3 'magazines' is a bill of: $" + cashRegister.total.toFixed(2))
//This voids the last transaction (of the three magazines).
cashRegister.voidLastTransaction()
console.log("\nThe result of calling the 'voidLastTransaction' command, to get rid of the 3 magazines is a bill of: $" + cashRegister.total.toFixed(2))
//Here, it calls the discount for the me variable & then calls the total again. 
cashRegister.applyStaffDiscount(me);
console.log("\nThe result of calling the 'voidLastTransaction' command, to get rid of the 3 magazines, AND THEN also applying the staff count for myself (the me variable) is a bill of: $" + cashRegister.total.toFixed(2))
//I wonder ... can you add multiple people's discounts together? Here, it adds the discount for bob.
//I don't see why not, BUT that's an issue with the program because it doesn't reflect the usual scenario.
cashRegister.applyStaffDiscount(bob);
console.log("\nThe result of calling the 'voidLastTransaction' command, to get rid of the 3 magazines, AND THEN also applying the staff count for myself (the me variable) AND ALSO the staff discount for bob results in a bill of: $" + cashRegister.total.toFixed(2))
