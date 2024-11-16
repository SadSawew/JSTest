'use strict';

var money = +prompt("Ваш бюджет на месяц?", ""),
    date = prompt("Введите дату в формате YYYY-MM-DD", ""),
    state1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost1 = +prompt("Во сколько обойдется?", ""),
    state2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost2 = +prompt("Во сколько обойдется?", ""),
    appData = {
        budget: money,
        timeData: date,
        expenses: {
            state1: cost1,
            state2: cost2
        },
        optionalExpenses: {},
        income: []
    };


alert(money/30)