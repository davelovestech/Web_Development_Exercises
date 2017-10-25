const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    }
  },
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
  get courses() {
    return{
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
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return `dishes[${randomIndex}]`;
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.15);
menu.addDishToCourse('mains', 'Roast Duck', 9.99);
menu.addDishToCourse('desserts', 'Tapoioca Pudding', 3.50);
