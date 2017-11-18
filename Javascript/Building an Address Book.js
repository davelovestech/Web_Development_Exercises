/*

*/

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) 
	{
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) 
{
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++)
    {
     if (contacts[i].lastName === lastName)  
     {
        printPerson(contacts[i]); 
     }
    }
}

function add(firstName, lastName, phoneNumber, email)
{
    contacts[contacts.length] = {firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email}
}
console.log("-------------------------------------------------------")
console.log("\nThe result of calling the printPerson function on the bob object is: ")
printPerson(bob)
console.log("\nThe result of calling the printPerson function on the mary object is: ")
printPerson(mary)

console.log("\nThe result of calling the list function is: ")
list()

console.log("\nThe result of calling the search function on Jones is: ")
search("Jones");
console.log("\nThe result of calling the search function on Johnson is: ")
search("Johnson");

console.log("-------------------------------------------------------")
console.log("\nThe result of calling the search function on Davis, BEFORE using add to + a new part of the contacts list is nothing because we haven't added it yet: ")
search("Davis");
console.log("\nThe add function adds more objects to the contacts list.")
console.log('Calling the add function with an input of "Spencer", "Davis", "(555) 402 -8788", "spencer@gmail.com" DOES NOT result in any noticeable output. BUT, it does add a new object to the contacts list.')
add("Spencer", "Davis", "(555) 402 -8788", "spencer@gmail.com");
//list();

console.log("\nIt is not possible to call the printPerson object on the newly added contacts[2] object by the name of 'spencer', like the other two objects, becase the add function does not have a way of listing the name of the newly added object, BUT it's still possible to call printPerson on the new object with an input of contacts[2]: ")
printPerson(contacts[2])

console.log("\nThe result of calling the search function on Davis, AFTER using add to + a new part of the contacts list is: ")
search("Davis");
