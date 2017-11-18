/*
This program is called Building a Cash Register. It allows for adding new StaffMember objects
with defined names & discountPercent instances. 

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

// Here is 'me' with a staff discount of 20%
var me = new StaffMember("David", 20);
//This is the cashRegister object with starting 0 values for total & lastTransaction amount.
//It has the ability to add a new item with the add instance. This only accepts itemCost & it
//also keeps track of the last item cost for the voidLastTransaction object instance. The scan
//function uses a swith case to screen for 1 of 4 choices. The voidLastTransaction function subtracts
//the last transcation amount from the total. The applyStaffDiscount function drops the total by
//employee's discountPercent. 
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

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
