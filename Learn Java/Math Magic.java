/*
This is the first freeform exercise for the Java
track from Codecademy. This program accepts an 
initial number, myNumber, and does a variety of
mathematical transformations to that number.
The final number, after the math transforms,
will always be equal to 3. It's a math trick. 
*/
public class Magic {
	public static void main(String[] args) {
	int myNumber = 4;
	int stepOne = myNumber * myNumber;
	int stepTwo = stepOne + myNumber;
  int stepThree = stepTwo/myNumber;
  int stepFour = stepThree + 17;
  int stepFive = stepFour - myNumber;
  int stepSix = stepFive / 6;
  System.out.println(stepSix);
	}
}
