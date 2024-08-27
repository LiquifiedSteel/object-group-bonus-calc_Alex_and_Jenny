// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let employeeBonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }
  if (employee.reviewRating <= 2) {
    return employeeBonus;
  }
  if (employee.reviewRating === 3) {
    employeeBonus.bonusPercentage += 4;
  }
  if (employee.reviewRating === 4) {
    employeeBonus.bonusPercentage += 6;
  }
  if (employee.reviewRating === 5) {
    employeeBonus.bonusPercentage += 10;
  }
  if (employee.employeeNumber > 999 && employee.employeeNumber < 10000) {
    employeeBonus.bonusPercentage += 5;
  }
  if (employee.annualSalary >= 65000) {
    employeeBonus.bonusPercentage -= 1;
  }
  if (employeeBonus.bonusPercentage > 13) {
    employeeBonus.bonusPercentage = 13;
  }
  if (employeeBonus.bonusPercentage < 0){
    employeeBonus.bonusPercentage = 0;
  }

  const bP = employeeBonus.bonusPercentage / 100;
  employeeBonus.totalBonus = employee.annualSalary * bP;
  let salaryInt = Number(employee.annualSalary);
  employeeBonus.totalCompensation = salaryInt + employeeBonus.totalBonus;
  // return new object with bonus results
  return employeeBonus;
}


for (let i of employees) {
  console.log(calculateIndividualEmployeeBonus (i));
}




