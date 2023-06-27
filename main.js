function clicks(){

let TotalSalary = document.querySelector('#Salary').value
let Electricity = document.querySelector('#Electricity').value
let WaterAmount = document.querySelector('#Water').value
let InternetAmount = document.querySelector('#Internet').value
let LoansAmount = document.querySelector('#Loans').value




//Computations

const AddedAll = ((parseFloat(Electricity)  + parseFloat(WaterAmount) ) 
                + (parseFloat(InternetAmount) + parseFloat(LoansAmount)));
const Total = parseFloat(TotalSalary) - parseFloat(AddedAll);

const Food = Total - 15000; // 500 per day for foods

//Expenses : Daily && Monthly
const Expenses = (Food * 0.60) //30% for Expenses alloted for a month
const ExpensesDaily = (Food * 0.60) / 30;

//Savings : Daily && Monthly
const Tosave = (Food * 0.40) //20% For Savings per month
const TosaveDaily = (Food * 0.40) / 30 

//Electrticity
console.log("Salary: " , TotalSalary)
                
//Electrticity
console.log("Electricity: " , Electricity)

//Water Total Amount
console.log("Water: ", WaterAmount)

//Internet
console.log("Internet: ", InternetAmount)

//Loans
console.log("Loans", LoansAmount)

//Overall total
console.log("Total -->",Total)
console.log("Foods -->", Food)
console.log("----------------")

//Expenses
console.log("Expenses (Daily): ", ExpensesDaily)
console.log("Expenses Free (Month): ", Expenses)

//Savings
console.log("Savings(Month) : ", TosaveDaily)
console.log("Savings(Month) : ", Tosave)


//Togle Modal
const Modalshow = new bootstrap.Modal('#exampleModal');
Modalshow.show();

document.querySelector('#ExpDay').value = ExpensesDaily;
document.querySelector('#ExpMonth').value = Expenses;

document.querySelector('#SaveDay').value = TosaveDaily;
document.querySelector('#Savings').value = Tosave;

// document.querySelector('#message').innerHTML = daily;
// document.querySelector('#Save').innerHTML = Savings;




}