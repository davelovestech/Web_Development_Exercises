import java.util.HashMap;
import java.lang.Iterable;

public class Library {
  public Library() {
    
  }
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
