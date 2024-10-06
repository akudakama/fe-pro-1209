const users = ["user"];

{
    users.forEach(user => {
        alert(`Вітаю ${user}`); 
    });
}

function defaultParameter(param = "Це значення за замовчуванням") {
    alert(param);
}

const multiplyValues = function(a = 2, b = 3, c = 4) {
    const result = a * b * c;
    alert(`Результат множення: ${result}`);
};

function fillEvenNumbers() {
    const evenNumbers = [];
    for (let i = 0; i <= 8; i += 2) {
        evenNumbers.push(i);
    }
    alert(`Парні числа: ${evenNumbers}`);
}

function printPlans() {
    let days = ["Понеділок", "Середа", "Неділя"];
    let plans = ["Урок 03", "Урок 04", "Вихідні"];
    for (let i = 0; i < days.length; i++) {
        alert(`Сьогодні ${days[i]} у вас такі плани: ${plans[i]}`);
    }
}

function replaceNegativeValues() {
    let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
    checkArr = checkArr.map(value => (value < 0 ? 0 : value));
    alert(`Масив після заміни: ${checkArr}`);
}

function summArray() {
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    alert(`Сума масиву: ${sum}`);
}

function squareArray() {
    const numbers = [1, 2, 3, 4];
    const squared = numbers.map(num => num * num);
    alert(`Квадрати елементів масиву: ${squared}`);
}

function greetAndRun(func) {
    users.forEach(user => {
        alert(`Вітаю ${user}`);
    });
    func();
}
