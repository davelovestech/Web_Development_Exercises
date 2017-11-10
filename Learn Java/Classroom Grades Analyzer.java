/*
This grade analyzer is a small project from
the Codecademy Learn Java track. Grades are 
manually entered into the main part of the 
program. Calling average on those added grades
runs the program that does a for each loop
to sum up the grades and then divides them by
the total number of grades. 
*/
import java.util.ArrayList;
public class GradeAnalyzer {
  
  public GradeAnalyzer() {
      
  }  
  public int getAverage(ArrayList<Integer> grades) {
    if (grades.size() < 1) {
      System.out.println("The array is too short.");
      return 0;
    } else {
      int sum = 0;
      for (Integer grade : grades) {
        sum = sum + grade;
      }
      int average = sum / grades.size();
      System.out.println("The average is: " + average);
      return average;
    }
  }
  	
  
  
  
  public static void main(String[] args) {
    ArrayList<Integer> myClassroom = new ArrayList<Integer>();
    myClassroom.add(98);
    myClassroom.add(92);
    myClassroom.add(88);
    myClassroom.add(75);
    myClassroom.add(61);
    myClassroom.add(89);
    myClassroom.add(95);
    
    GradeAnalyzer myAnalyzer = new GradeAnalyzer();
    myAnalyzer.getAverage(myClassroom);
  }
  
}
