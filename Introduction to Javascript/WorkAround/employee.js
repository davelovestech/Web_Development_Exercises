/*
This Codecademy project is called WorkAround. It's an 
instructional lesson on using modules. employee.js exports
all of its functions into workAround.js, where 
the functions are called and the results are printed to the
console. 
*/
//This variable will be used in workAround.js for the 
//getEmployeeInformation function. As the function is
//initially used, "Employee" is just this objects
//initiator as each call for it uses as input. 
let Employee = {
  salary: 100000
};

/*
This is an object of objects. It contains the three different
tiers of employement AND thier taxMultiplier, benefits and the 
range of salary associated with that tier. 
*/
export let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};
//You'll see "//REMNANT" throughout both of these programs.
//I used this as a reminder of what Codecademy step I was on
//throughout the project. 
//REMNANT
//step 5 did getCadre; step 10 done
/*
This function determines the payGrade of the employee based 
on the employee's salary. The employee object's salary instance
is checked to determine the employee's Cadre, which essentially
means employment level. This function uses an if / else if / 
else to determine the level. Within each level, the employee's
salary is checked to be within the constraints of that level.
*/
export function getCadre() {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}
//REMNANT
//did step 5 for calculate Tax; step 10 done
/*
This function determines the amount of tax that the employee
will need to pay. getCadre() is called to determine the 
pay level of the employee. That is then plugged in to the 
payGrades object to determine the level of entry, mid or seniorLevel. The taxMultiplier instance of the determined
payGrades object is used to grab the taxMultiplier that is
then multiplied by the Employee.salary. The result is the
employees total amount of tax needed to pay.
*/
export function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}
//REMNANT
//did step 5 for calculate Tax; step 10 done
/*
This function determines the benefits that the employee gets
as a function of that employee's Cadre. getCadre() is called to determine the pay level of the employee. That is then plugged in to the payGrades object to determine the level of entry, mid or seniorLevel. The benefits instance of the determined
payGrades object is used to grab the benefits array that is
then turned into a string with a .join(', '). The result is the
employees total benefits as a string, split by commas.
*/
export function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}
//REMNANT
//did step 5 for calculate Tax; step 10 done
/*
This function determines the bonus that the employee receives.
.02, an additional 2%, of the employee's salary is the bonus.
*/
export function calculateBonus() {
  return .02 * Employee.salary;
}
/*
This function determines the employee's 
reimbursementEligibility. The reimbursement cost of each
benefit is listed in an object. The getBenefits CODE is used
as it's listed in the getBenefits function, BUT it's repeated
here to get benefits ... I thought Codecademy preached DRY
development? :P A for loop is then used to sum up the total
of all the benefits. 
*/
export function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}
/*
The Employee object from the very start of the program is 
exported, to be used in the workAround.js file. 
*/
export default Employee;
//REMNANT
//export { Employee, getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement };
