'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
        budget: money,
        timeData: date,
        expenses: {},
        optionalExpenses: {},
        income: []
    };


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


appData.moneyPerDay = appData.budget/30
alert("Ежедневный бюджет:" + appData.moneyPerDay)

if (appData.moneyPerDay < 200) {
    console.log("Низкий уровень достатка")
} else if (200 < appData.moneyPerDay < 2000) {
    console.log("Cредний уровень достатка")
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка")
}