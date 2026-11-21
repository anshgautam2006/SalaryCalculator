let employeeName : string = "Rahul"
let employeeAge : number = 30

const monthlySalary : number = 40000
const annualSalary : number = monthlySalary * 12
const eligibleForBonus : boolean = monthlySalary >= 30000

console.log(`Employee Name: ${employeeName}`)
console.log(`Employee Age: ${employeeAge}`)
console.log(`Monthly Salary: ${monthlySalary}`)
console.log(`Annual Salary: ${annualSalary}`)
console.log(`Eligible for Bonus: ${eligibleForBonus}`)
console.log(`Final Salary (including bonus if eligible): ${eligibleForBonus ? annualSalary + 5000 : annualSalary}`)