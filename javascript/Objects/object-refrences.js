// expense management

let myAccount = {
    name: "ayden",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
   account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
console.log(myAccount)