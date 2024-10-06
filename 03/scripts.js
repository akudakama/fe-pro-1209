function checkEvenOdd() {
    const number = parseInt(prompt("Введіть число:"));
    if (!isNaN(number)) {
        const result = (number % 2 === 0) ? "Парне" : "Непарне";
        console.log(`Число ${number} є ${result}.`);
        alert(`Число ${number} є ${result}.`);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function checkAge() {
    const age = parseInt(prompt("Введіть ваш вік:"));
    if (!isNaN(age)) {
        const message = (age < 18) ? "Вам заборонено використовувати цей ресурс." : "Ви можете використовувати цей ресурс.";
        console.log(message);
        alert(message);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function calculateTotalCost() {
    const price = parseFloat(prompt("Введіть ціну товару:"));
    const quantity = parseInt(prompt("Введіть кількість товару:"));
    if (!isNaN(price) && !isNaN(quantity)) {
        const totalCost = price * quantity;
        console.log(`Повна вартість товарів: ${totalCost} грн.`);
        alert(`Повна вартість товарів: ${totalCost} грн.`);
    } else {
        alert("Будь ласка, введіть дійсні значення для ціни та кількості.");
    }
}

function calculateDiscount() {
    const cost = parseFloat(prompt("Введіть вартість товару:"));
    if (!isNaN(cost)) {
        const discount = cost * 0.5;
        alert(`Ваша знижка: ${discount} грн.`);
    } else {
        alert("Будь ласка, введіть дійсну вартість товару.");
    }
}

function findMaxNumber() {
    const number1 = parseFloat(prompt("Введіть перше число:"));
    const number2 = parseFloat(prompt("Введіть друге число:"));
    const number3 = parseFloat(prompt("Введіть третє число:"));
    if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
        const max = Math.max(number1, number2, number3);
        console.log(`Найбільше число: ${max}`);
        alert(`Найбільше число: ${max}`);
    } else {
        alert("Будь ласка, введіть дійсні значення.");
    }
}

function determineSeason() {
    const month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));
    let season;
    if (!isNaN(month) && month >= 1 && month <= 12) {
        if (month >= 3 && month <= 5) {
            season = "Весна";
        } else if (month >= 6 && month <= 8) {
            season = "Літо";
        } else if (month >= 9 && month <= 11) {
            season = "Осінь";
        } else {
            season = "Зима";
        }
        console.log(`Місяць ${month} належить до сезону: ${season}.`);
        alert(`Місяць ${month} належить до сезону: ${season}.`);
    } else {
        alert("Будь ласка, введіть дійсний номер місяця.");
    }
}

function determineNumberSize() {
    const number = parseFloat(prompt("Введіть число:"));
    if (!isNaN(number)) {
        const size = (number > 0) ? "Додатне" : (number < 0) ? "Від'ємне" : "Нуль";
        console.log(`Число ${number} є ${size}.`);
        alert(`Число ${number} є ${size}.`);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function determineFigureType() {
    const sides = parseInt(prompt("Введіть кількість сторін фігури:"));
    let type;
    if (!isNaN(sides)) {
        switch (sides) {
            case 0:
                type = "Коло";
                break;
            case 3:
                type = "Трикутник";
                break;
            case 4:
                type = "Квадрат";
                break;
            default:
                type = "Інша фігура";
        }
        console.log(`Ця фігура є: ${type}.`);
        alert(`Ця фігура є: ${type}.`);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function sumEvenNumbers() {
    const limit = parseInt(prompt("Введіть верхню межу:"));
    let sum = 0;
    if (!isNaN(limit) && limit > 0) {
        for (let i = 0; i <= limit; i += 2) {
            sum += i;
        }
        console.log(`Сума парних чисел до ${limit} дорівнює: ${sum}.`);
        alert(`Сума парних чисел до ${limit} дорівнює: ${sum}.`);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function reverseCounter() {
    const start = parseInt(prompt("Введіть початкове число:"));
    if (!isNaN(start)) {
        let countdown = "";
        for (let i = start; i >= 0; i--) {
            countdown += i + " ";
        }
        console.log(`Зворотний лічильник: ${countdown}`);
        alert(`Зворотний лічильник: ${countdown}`);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function checkAngle() {
    const angle = parseInt(prompt("Введіть величину кута:"));
    let result;
    if (!isNaN(angle)) {
        result = (angle < 90) ? "Гострий кут" : (angle === 90) ? "Прямий кут" : (angle < 180) ? "Тупий кут" : (angle === 180) ? "Рівний кут" : "Перетворений кут";
        console.log(`Цей кут є: ${result}.`);
        alert(`Цей кут є: ${result}.`);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function findFirstEven() {
    const limit = parseInt(prompt("Введіть верхню межу:"));
    let firstEven = 0;
    if (!isNaN(limit) && limit > 0) {
        for (let i = 2; i <= limit; i++) {
            if (i % 2 === 0) {
                firstEven = i;
                break;
            }
        }
        console.log(`Перше парне число до ${limit} є: ${firstEven}.`);
        alert(`Перше парне число до ${limit} є: ${firstEven}.`);
    } else {
        alert("Будь ласка, введіть дійсне число.");
    }
}

function checkPlanet() {
    const planet = prompt("Введіть назву планети:");
    const planets = ["Меркурій", "Венера", "Земля", "Марс", "Юпітер", "Сатурн", "Уран", "Нептун", "меркурій", "венера", "земля", "марс", "юпітер", "сатурн", "уран", "нептун"];
    if (planets.includes(planet)) {
        console.log(`${planet} ця планета в сонячній системі`);
        alert(`${planet} ця планета в сонячній системі`);
    } else {
        console.log(`${planet} такої планети нема в сонячній системі`);
        alert(`${planet} такої планети нема в сонячній системі`);
    }
}
