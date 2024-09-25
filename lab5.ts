// Функция для вывода текста в элемент с id 'output'
function displayText(text: string): void {
    const outputDiv = document.getElementById('output');
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = text;
    outputDiv?.appendChild(taskDiv);
}

// 1. Генерация рандомного числа от -100 до 100
let rand: number = Math.floor(Math.random() * 201) - 100;
displayText(`1. Рандомное число: ${rand}`);

// Проверка на отрицательность
if (rand < 0) {
    displayText(`${rand} - отрицательное`);
} else {
    displayText(`${rand} - положительное`);
}

// Проверка на четность
if (rand % 2 === 0) {
    displayText(`${rand} - чётное`);
} else {
    displayText(`${rand} - нечётное`);
}
displayText("<br>");

// 2. Генерация рандомного числа от 1 до 1000
rand = Math.floor(Math.random() * 2001) - 1000;
displayText(`2. Рандомное число: ${rand}`);

// Первая цифра
let firstDigit: string = Math.abs(rand).toString()[0];
displayText(`Первая цифра числа: ${firstDigit}`);

// Последняя цифра
let lastDigit: number = Math.abs(rand) % 10;
displayText(`Последняя цифра числа: ${lastDigit}`);

// Сумма первой и последней цифры
let sumFirstAndLast = parseInt(firstDigit) + lastDigit;
displayText(`Сумма первой и последней цифры: ${sumFirstAndLast}`);

// Количество цифр
let countNum: number = Math.abs(rand).toString().length;
displayText(`Количество цифр: ${countNum}`);
displayText("<br>");

// 3. Придумать строку
let str: string = "Hello World!";
displayText(`3. Строка: "${str}"`);
displayText(`Длина строки: ${str.length}`);
displayText(`Последний символ строки: ${str.charAt(str.length - 1)}`);

// Перебор символов с конца
displayText("Символы с конца:");
for (let i = str.length - 1; i >= 0; i--) {
    displayText(str.charAt(i));
}
displayText("<br>");

// 4. Придумать 2 строки
let str1: string = "Первая строка";
let str2: string = "Вторая строка";
displayText(`4. Строки: "${str1}" и "${str2}"`);

// Соединение строк
let commonLine: string = str1 + " & " + str2;
displayText(`Общая строка: ${commonLine}`);

// Сравнение длины строк
if (str1.length > str2.length) {
    displayText(`Длиннее: "${str1}"`);
} else {
    displayText(`Длиннее: "${str2}"`);
}
displayText("<br>");

// 5. Два рандомных числа от 1 до 100
let firstNum: number = Math.floor(Math.random() * 100) + 1;
let secondNum: number = Math.floor(Math.random() * 100) + 1;
displayText(`5. Первое число: ${firstNum}, Второе число: ${secondNum}`);

// Проверка первых цифр
if (String(firstNum)[0] === String(secondNum)[0]) {
    displayText("Первые цифры совпадают.");
} else {
    displayText("Первые цифры различаются.");
}

// Делимость
if (firstNum % secondNum === 0) {
    displayText("Первое число делится на второе без остатка.");
} else {
    displayText("Первое число делится на второе с остатком.");
}

// Сравнение чисел
if (firstNum > secondNum) {
    displayText(`Большее число: ${firstNum}`);
} else {
    displayText(`Большее число: ${secondNum}`);
}
displayText("<br>");

// 6. Два рандомных числа от 1 до 100
firstNum = Math.floor(Math.random() * 100) + 1;
secondNum = Math.floor(Math.random() * 100) + 1;
displayText(`6. Первое число: ${firstNum}, Второе число: ${secondNum}`);

// Остаток от деления
let remainder: number = firstNum % secondNum;
displayText(`Остаток от деления: ${remainder}`);

// Сумма чисел
let sumNumbers: number = firstNum + secondNum;
displayText(`Сумма чисел: ${sumNumbers}`);

// Произведение чисел
let multiplicationOfNumbers: number = firstNum * secondNum;
displayText(`Произведение чисел: ${multiplicationOfNumbers}`);
displayText("<br>");

// 7. Три рандомных числа от 1 до 50
let firstNum3: number = Math.floor(Math.random() * 50) + 1;
let secondNum3: number = Math.floor(Math.random() * 50) + 1;
let thirdNum3: number = Math.floor(Math.random() * 50) + 1;

displayText(`7. Три числа: ${firstNum3}, ${secondNum3}, ${thirdNum3}`);

// Среднее арифметическое
let average: number = (firstNum3 + secondNum3 + thirdNum3) / 3;
displayText(`Среднее арифметическое: ${average}`);

// Сумма квадратов
let sumOfSquares: number = firstNum3 ** 2 + secondNum3 ** 2 + thirdNum3 ** 2;
displayText(`Сумма квадратов: ${sumOfSquares}`);

// Наибольшее
let maxValue: number = Math.max(firstNum3, secondNum3, thirdNum3);
displayText(`Наибольшее значение: ${maxValue}`);

// Наименьшее
let minValue: number = Math.min(firstNum3, secondNum3, thirdNum3);
displayText(`Наименьшее значение: ${minValue}`);
