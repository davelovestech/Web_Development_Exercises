/*
This program is called Personal Library. It is from Chapter 4,
the Data Structures chapter of Codecademy's Learn Java track. 
This program keeps track of the books that a user has read.
*/
import java.util.HashMap;
import java.lang.Iterable;
//This is the library class.
public class Library {
  public Library() {
    
  }
  // getFinishedBooks accepts a HashMap that holds strings 
  //(of books) and Boolean Values (of whether or not those
  //books have been read.) This function cycles through the
  //books in the library keyset and prints out that you've
  //read the book for all books that have been read.
  public void getFinishedBooks(HashMap<String, Boolean> library) {
    if(library.size() < 1) {
      System.out.println("Your HashMap is empty.");
    } else {
      for (String book: library.keySet()) {
        if(library.get(book) == true) {
          System.out.println("You read: " + book);
        }
      }
    }
  }  
  //This creates a new library and populates it with books that
  //have already been read. 
  public static void main(String[] args) {
  	Library myLibrary = new Library();
    HashMap<String, Boolean> myBooks = new HashMap<String, Boolean>();
    myBooks.put("Road Down The Funnel", true);
    myBooks.put("Rat: A Biology", false);
    myBooks.put("TimeIn", true);
    myBooks.put("3D Food Printing", false);
    myLibrary.getFinishedBooks(myBooks);
  }
}
