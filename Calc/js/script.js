let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudget = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavings = document.querySelector('.monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings-value'),

    expensesItem = document.querySelectorAll('.expenses-item'),
    approveBtn = document.getElementsByTagName('button')[0],
    approveOptBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.getElementById('savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, date;
startBtn.addEventListener('click', () => {
    date = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = date;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(date)).getFullYear();
    monthValue.value = new Date(Date.parse(date)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(date)).getDate();
});


approveBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let state = expensesItem[i].value,
                cost = expensesItem[++i].value;
        
            if ((typeof(state)==='string') && (typeof(state) != null) && (typeof(cost) != null) && (state != '') 
            && (cost != '') && (state.length < 50)) {
                console.log("done");
                appData.expenses[state] = cost;
                sum = sum + +cost;
            } else {
                i--;
            }
            expensesValue.textContent = +sum;
        }
    } else {
        alert("Программа не запущена. Для запуска нажмите кнопку \"Начать расчет\".");
    }
});


countBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        let ctn = 0;
        for (let i in appData.expenses) {
            ctn += appData.expenses[i];
        }
        console.log(ctn)

        appData.moneyPerDay = +((appData.budget-ctn)/30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 200) {
            levelValue.textContent = "Низкий уровень достатка";
        } else if (200 < appData.moneyPerDay < 2000) {
            levelValue.textContent = "Cредний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        alert("Программа не запущена. Для запуска нажмите кнопку \"Начать расчет\".");
    }
});


approveOptBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        let opt;
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpValue.textContent += appData.optionalExpenses[i] + ', ';
        }
    } else {
        alert("Программа не запущена. Для запуска нажмите кнопку \"Начать расчет\".");
    }
});


chooseIncome.addEventListener('input', () => {
    if (appData.budget != undefined) {
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    } else {
        alert("Программа не запущена. Для запуска нажмите кнопку \"Начать расчет\".");
    }
});


checkSavings.addEventListener('click', () => {
    if (appData.budget != undefined) {
        if (appData.savings) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    } else {
        alert("Программа не запущена. Для запуска нажмите кнопку \"Начать расчет\".");
    }
});


chooseSum.addEventListener('input', () => {
    if (appData.budget != undefined) {
        if (appData.savings) {
            let sum = +chooseSum.value;
                percent = choosePercent.value;
    
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
    
            monthSavings.textContent = appData.monthIncome.toFixed();
            yearSavings.textContent = appData.yearIncome.toFixed();
        }
    } else {
        alert("Программа не запущена. Для запуска нажмите кнопку \"Начать расчет\".");
    }
});


choosePercent.addEventListener('input', () => {
    if (appData.budget != undefined) {
        if (appData.savings) {
            let sum = +chooseSum.value;
                percent = choosePercent.value;
    
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
    
            monthSavings.textContent = appData.monthIncome.toFixed();
            yearSavings.textContent = appData.yearIncome.toFixed();
        }
    } else {
        alert("Программа не запущена. Для запуска нажмите кнопку \"Начать расчет\".");
    }
});


let appData = {
        budget: money,
        timeData: date,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
