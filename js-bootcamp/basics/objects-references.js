let myAccount = {
    name: 'Andrew Mead',
    income: 0
}


let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.income = 0
}

let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income} in income.`
}

addIncome(myAccount, 2000)//objects are passed by reference
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
