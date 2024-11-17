'use strict';


let money, date;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    date = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
        budget: money,
        timeData: date,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let state = prompt("Введите обязательную статью расходов в этом месяце", ""),
            cost = +prompt("Во сколько обойдется?", "");
    
        if ((typeof(state)==='string') && (typeof(state) != null) && (typeof(cost) != null) && (state != '') 
        && (cost != '') && (state.length < 50)) {
            console.log("done");
            appData.expenses[state] = cost;
        } else {
            i--;
        }
    }
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
// detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 200) {
        console.log("Низкий уровень достатка")
    } else if (200 < appData.moneyPerDay < 2000) {
        console.log("Cредний уровень достатка")
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка")
    } else {
        console.log("Произошла ошибка")
    }
}
// detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?")

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
// checkSavings();

let opt;
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
            opt = prompt("Статья необязательных расходов");
            appData.optionalExpenses[i+1] = opt;
    }
}
chooseOptExpenses();