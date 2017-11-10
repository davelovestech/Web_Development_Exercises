/*
This freeform exercise is part of the Codecademy
Java track. Everything exists within the Calculator 
class. There are methods for addition, subtraction, 
multiplication and also modulo. The modulo & division
methods need to have IF logic to make sure that
we don't divide by 0. This is the most 
complicated Java program I've made yet :D 
*/
class Calculator {
  public Calculator() {
    
  }
  public int add(int a, int b) {
    return a + b;
  }
  public int subtract(int a, int b) {
    return a - b;
  }
  public int multiply(int a, int b) {
    return a * b;
  }
  public int divide(int a, int b) {
    if(b == 0) {
      System.out.println("Error! Dividing by zero is not allowed.");
      return 0;
    } else {
      return a / b;
    }
  };
  public int modulo (int a, int b) {
    if (b == 0) {
      System.out.println("Error! Dividing by zero is not allowed.");
      return 0;
    } else {
      return a % b;
    }
  }
  
  public static void main(String[] args) {
    Calculator myCalculator = new Calculator();
    System.out.println(myCalculator.add(5, 7));
    System.out.println(myCalculator.subtract(45, 11));

	}
}
