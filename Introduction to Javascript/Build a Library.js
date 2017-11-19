/*
This Codecademy exercise is called Build a Library. It is part
of the Classes chapter for the Introduction to Javascript
course. All of the following code was written by me from 
nothing, BUT it was by following the Codecademy tutorial. 
This program replicates media inventory system for a library.
There's a main class called Media that has instances that
any type of library media would have and then three 
extension classes with unique sub-types: Book, CD & Movie. 
*/

/*
The main class is media. it's constructor accepts an input
of title and makes an empty array for ratings and gives it a
false boolean for being checked out. It has methods for 
getting the title, whether or not it's checked out, ratings, 
toggling it's checked out status, getting the average rating (
which uses the get rating method) and also adding ratings. The
add rating method pushes a new rating to the rating array. The
get average rating method sums together the ratings and divides
them by the number of ratings. 
*/
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
	get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum / lengthOfArray;
  }
  addRating(newRating) {
    this.ratings.push(newRating);
  }
}
/*
The Book class extends Media, so it has access to all of the
Media methods AND it has new methods as well. Its constructor
accepts parameters for author, title & pages. The super keyword
is used to access the title functions of the parent Media 
class. The constructor creates the author and pages instances 
of the Book object and the get methods return those. 
*/
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    //this._title = title;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
/*
The movie class is conceptually similar to the Book class with
the difference of having director, title & runTime instead of
the book stuff. 
*/
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    //this._title = title;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
/*
The CD class is conceptually the same as the previous classes.
*/
class CD extends Media {
  constructor(artist, title, songs) {
   super(title); 
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._director;
  }
  get songs() {
    return this._songs;
  }
}
/*

*/
console.log("_______________________________________________")
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log("'A Short History of Nearly Everything' was defined right before this console.log as a Book. Here's the call to its checkout status. It will be false because that's how new media objects are created.")
console.log(historyOfEverything.isCheckedOut);
console.log("-----------------------------------------------")
historyOfEverything.toggleCheckOutStatus();
console.log("The toggleCheckoutStatus was just called on the previously mentioned history book, so it should now print 'True.'")
console.log(historyOfEverything.isCheckedOut);
console.log("-----------------------------------------------")
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log("Three ratings were just added to the History book and now the getAverageRating is being called, so it should print the average of those ratings here.")
console.log(historyOfEverything.getAverageRating());
console.log("_______________________________________________")
const speed = new Movie('Jan de Bont', 'Speed', 116);
console.log("The movie speed was just created above this print call, so the isCheckedOut function should return false: ")
console.log(speed.isCheckedOut);
console.log("-----------------------------------------------")
speed.toggleCheckOutStatus();
console.log("The checkOutStatus was just called on the Speed movie object, so the isCheckedOut function should now return 'True.'")
console.log(speed.isCheckedOut);
console.log("-----------------------------------------------")
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log("Three ratings were just added to the Speed movie, so the getAverageRating function should now display the average rating: ")
console.log(speed.getAverageRating());
console.log("_______________________________________________")
