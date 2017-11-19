/*
This program is called Meal Maker and it is part of the 
Codecademy Introduction to Javascript course in chapter 8 on
Objects. This code was written by me, BUT it was done by 
following a tutorial from Codecademy. 
*/

/* 
The menu object encapsulates most of the program, except for
the function calls. A getter gets the value of a property and a
setter retreives the value of a specific property. First, 
you'll see getters & setters for appetizers, mains & desserts.
The get courses object returns a collection of appetizers, 
mains & desserts. The add dishes to course object allows
pushing new dishes to the courses object. 
getRandomDishFromCourse uses Math.floor(Math.random()) to 
randomly select a random dish. The getRandomMeal function
uses the random dish from course function to create a random
meal & it uses string interpolation to return the selected
meal courses as well as the final price. 
*/
const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
  get appetizers() {
    return this._appetizers;
  },
  set appetizers(appetizer) {
    this._appetizers.push(appetizer);
  },
  get mains () {
    return this._mains;
  },
  set mains(entree) {
    this._mains.push(entree);
  },
  get desserts() {
    return this._desserts;
  },
  set desserts(dessert) {
    this._desserts.push(dessert);
  },
},
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice}.`;
  }
};
//The following 5 lines add items to the appetizers, mains
//& desserts objects. 
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.15);
menu.addDishToCourse('mains', 'Roast Duck', 9.99);
menu.addDishToCourse('desserts', 'Tapoioca Pudding', 3.50);
menu.addDishToCourse('appetizers', 'Fresh Rolls', 7.99);
menu.addDishToCourse('mains', 'Yellow Curry', 12.12);
menu.addDishToCourse('desserts', 'Jello', 5.99);
//This calls the generateRandomMeal function, stores it as a 
//variable, and then prints that out. Note that the 
//console.log(meal) call prints out the interpolated string
//that was generated in the generateRandomMeal function. 
let meal1 = menu.generateRandomMeal();
console.log("Meal 1 is: ")
console.log(meal1);

let meal2 = menu.generateRandomMeal();
console.log("\nMeal 2 is: ")
console.log(meal2)

let meal3 = menu.generateRandomMeal();
console.log("\nmeal 3 is: ")
console.log(meal3)



