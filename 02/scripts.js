function compareNumbers() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let resultText = '';

    if (isNaN(number1) || isNaN(number2)) {
        resultText = 'Будь ласка, введіть обидва числа';
    } else if (number1 === number2) {
        resultText = 'Числа рівні';
    } else {
        resultText = 'Числа не рівні';
    }

    document.getElementById('compareResult').textContent = resultText;
}

function calculateArea() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let resultText = '';

    if (isNaN(length) || isNaN(width)) {
        resultText = 'Будь ласка, введіть дійсні значення для довжини та ширини';
    } else {
        let area = length * width;
        resultText = 'Площа прямокутника: ' + area;
    }

    document.getElementById('areaResult').textContent = resultText;
}

function calculatePerimeter() {
    let length = parseFloat(document.getElementById('lengthPerimeter').value);
    let width = parseFloat(document.getElementById('widthPerimeter').value);
    let resultText = '';

    if (isNaN(length) || isNaN(width)) {
        resultText = 'Будь ласка, введіть дійсні значення для довжини та ширини';
    } else {
        let perimeter = 2 * (length + width);
        resultText = 'Периметр прямокутника: ' + perimeter;
    }

    document.getElementById('perimeterResult').textContent = resultText;
}

function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    let resultText = '';

    if (isNaN(celsius)) {
        resultText = 'Будь ласка, введіть температуру в Цельсія';
    } else {
        let fahrenheit = (celsius * 9/5) + 32;
        resultText = 'Температура у Фаренгейтах: ' + fahrenheit;
    }

    document.getElementById('fahrenheitResult').textContent = resultText;
}

function calculateCylinderVolume() {
    let radius = parseFloat(document.getElementById('radius').value);
    let height = parseFloat(document.getElementById('height').value);
    let resultText = '';

    if (isNaN(radius) || isNaN(height)) {
        resultText = 'Будь ласка, введіть дійсні значення для радіусу та висоти';
    } else {
        let volume = Math.PI * Math.pow(radius, 2) * height;
        resultText = 'Об\'єм циліндра: ' + volume.toFixed(2);
    }

    document.getElementById('volumeResult').textContent = resultText;
}
