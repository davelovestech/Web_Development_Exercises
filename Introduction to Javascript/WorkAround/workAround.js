/*
This Codecademy project is called WorkAround. It's an 
instructional lesson on using modules. employee.js exports
all of its functions into workAround.js, where 
the functions are called and the results are printed to the
console. 
*/

//You'll see "//REMNANT" throughout both of these programs.
//I used this as a reminder of what Codecademy step I was on
//throughout the project. 
//REMNANT
//This code had to be changed because the names of functions
//were changed as part of the Codecademy exercise.
//import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee';

/*
This imports all of the functions that were created in 
employee.js. The line after this import imports the Employee
object from employee.js.
*/
import { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee';

import Employee from './employee';
/*
This function prints out all of the employee.js functions
that were imported earlier. The imported Employee.salary
object is replaced with the inputSalary call for this function.
So, what was the point in imporing the Employee object from
employee.js? It's all for practice, I assume. A console.log
is used to prepend each function call, so that you know
what each output is. 
*/
function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}
console.log("______________________________________________")
console.log("These are the function calls as Codecademy initially had them AND the Employee.salary instance is replaced by each function call. Note that the first call, the one without a supplied parameter IS NOT the 100,000 that was imported BECAUSE that is rewritten each time by the inputSalary. I added the first call, without a supplied number, to demonstrate that.\n")
getEmployeeInformation();
console.log("----------------------------------------------")
getEmployeeInformation(10000);
console.log("----------------------------------------------")
getEmployeeInformation(50000);
console.log("----------------------------------------------")
getEmployeeInformation(100000);
console.log("______________________________________________")


//I thought that I could use two different versions of the
//getEmployeeInformation function to demonstrate what happens
//+/- the Employee.salary replacement on the initally supplied
//Employee.salary instance, BUT both the above and below 
//functions look identical. It seems that Employee.salary stays
//whatever it was initially called to be. 
/*
function getEmployeeInformation(inputSalary) {
  //Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}
console.log("Here are all of the function calls when 'Employee.salary' is NOT replaced by the function call. Note that the first call is empty and the three following calls are for 10000, 50000 and 100000. Since there's no way of rewriting the Employee.salary with inputSalary, every call looks identical.\n")
getEmployeeInformation();
console.log("----------------------------------------------")
getEmployeeInformation(10000);
console.log("----------------------------------------------")
getEmployeeInformation(50000);
console.log("----------------------------------------------")
getEmployeeInformation(100000);
console.log("______________________________________________")
*/
