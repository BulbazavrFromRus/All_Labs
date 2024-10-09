// Функция для вывода текста в элемент с id 'output'
function displayText(text) {
    var outputDiv = document.getElementById('output');
    var taskDiv = document.createElement('div');
    taskDiv.innerHTML = text;
    outputDiv === null || outputDiv === void 0 ? void 0 : outputDiv.appendChild(taskDiv);
}
// 1. Генерация рандомного числа от -100 до 100
var rand = Math.floor(Math.random() * 201) - 100;
displayText("1. \u0420\u0430\u043D\u0434\u043E\u043C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(rand));
// Проверка на отрицательность
if (rand < 0) {
    displayText("".concat(rand, " - \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"));
}
else {
    displayText("".concat(rand, " - \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435"));
}
// Проверка на четность
if (rand % 2 === 0) {
    displayText("".concat(rand, " - \u0447\u0451\u0442\u043D\u043E\u0435"));
}
else {
    displayText("".concat(rand, " - \u043D\u0435\u0447\u0451\u0442\u043D\u043E\u0435"));
}
displayText("<br>");
// 2. Генерация рандомного числа от 1 до 1000
rand = Math.floor(Math.random() * 2001) - 1000;
displayText("2. \u0420\u0430\u043D\u0434\u043E\u043C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(rand));
// Первая цифра
var firstDigit = Math.abs(rand).toString()[0];
displayText("\u041F\u0435\u0440\u0432\u0430\u044F \u0446\u0438\u0444\u0440\u0430 \u0447\u0438\u0441\u043B\u0430: ".concat(firstDigit));
// Последняя цифра
var lastDigit = Math.abs(rand) % 10;
displayText("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0446\u0438\u0444\u0440\u0430 \u0447\u0438\u0441\u043B\u0430: ".concat(lastDigit));
// Сумма первой и последней цифры
var sumFirstAndLast = parseInt(firstDigit) + lastDigit;
displayText("\u0421\u0443\u043C\u043C\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0446\u0438\u0444\u0440\u044B: ".concat(sumFirstAndLast));
// Количество цифр
var countNum = Math.abs(rand).toString().length;
displayText("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u0444\u0440: ".concat(countNum));
displayText("<br>");
// 3. Придумать строку
var str = "Hello World!";
displayText("3. \u0421\u0442\u0440\u043E\u043A\u0430: \"".concat(str, "\""));
displayText("\u0414\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438: ".concat(str.length));
displayText("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0441\u0438\u043C\u0432\u043E\u043B \u0441\u0442\u0440\u043E\u043A\u0438: ".concat(str.charAt(str.length - 1)));
// Перебор символов с конца
displayText("Символы с конца:");
for (var i = str.length - 1; i >= 0; i--) {
    displayText(str.charAt(i));
}
displayText("<br>");
// 4. Придумать 2 строки
var str1 = "Первая строка";
var str2 = "Вторая строка";
displayText("4. \u0421\u0442\u0440\u043E\u043A\u0438: \"".concat(str1, "\" \u0438 \"").concat(str2, "\""));
// Соединение строк
var commonLine = str1 + " & " + str2;
displayText("\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: ".concat(commonLine));
// Сравнение длины строк
if (str1.length > str2.length) {
    displayText("\u0414\u043B\u0438\u043D\u043D\u0435\u0435: \"".concat(str1, "\""));
}
else {
    displayText("\u0414\u043B\u0438\u043D\u043D\u0435\u0435: \"".concat(str2, "\""));
}
displayText("<br>");
// 5. Два рандомных числа от 1 до 100
var firstNum = Math.floor(Math.random() * 100) + 1;
var secondNum = Math.floor(Math.random() * 100) + 1;
displayText("5. \u041F\u0435\u0440\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(firstNum, ", \u0412\u0442\u043E\u0440\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: ").concat(secondNum));
// Проверка первых цифр
if (String(firstNum)[0] === String(secondNum)[0]) {
    displayText("Первые цифры совпадают.");
}
else {
    displayText("Первые цифры различаются.");
}
// Делимость
if (firstNum % secondNum === 0) {
    displayText("Первое число делится на второе без остатка.");
}
else {
    displayText("Первое число делится на второе с остатком.");
}
// Сравнение чисел
if (firstNum > secondNum) {
    displayText("\u0411\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(firstNum));
}
else {
    displayText("\u0411\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(secondNum));
}
displayText("<br>");
// 6. Два рандомных числа от 1 до 100
firstNum = Math.floor(Math.random() * 100) + 1;
secondNum = Math.floor(Math.random() * 100) + 1;
displayText("6. \u041F\u0435\u0440\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(firstNum, ", \u0412\u0442\u043E\u0440\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: ").concat(secondNum));
// Остаток от деления
var remainder = firstNum % secondNum;
displayText("\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F: ".concat(remainder));
// Сумма чисел
var sumNumbers = firstNum + secondNum;
displayText("\u0421\u0443\u043C\u043C\u0430 \u0447\u0438\u0441\u0435\u043B: ".concat(sumNumbers));
// Произведение чисел
var multiplicationOfNumbers = firstNum * secondNum;
displayText("\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u0435\u043B: ".concat(multiplicationOfNumbers));
displayText("<br>");
// 7. Три рандомных числа от 1 до 50
var firstNum3 = Math.floor(Math.random() * 50) + 1;
var secondNum3 = Math.floor(Math.random() * 50) + 1;
var thirdNum3 = Math.floor(Math.random() * 50) + 1;
var forthdNum3 = Math.floor(Math.random() * 50) + 1;
displayText("7. \u0422\u0440\u0438 \u0447\u0438\u0441\u043B\u0430: ".concat(firstNum3, ", ").concat(secondNum3, ", ").concat(thirdNum3, ", ").concat(forthdNum3));
// Среднее арифметическое
var average = (firstNum3 + secondNum3 + thirdNum3 + forthdNum3) / 4;
displayText("\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435: ".concat(average));
// Сумма квадратов
var sumOfSquares = Math.pow(firstNum3, 2) + Math.pow(secondNum3, 2) + Math.pow(thirdNum3, 2) + Math.pow(forthdNum3, 2);
displayText("\u0421\u0443\u043C\u043C\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043E\u0432: ".concat(sumOfSquares));
// Наибольшее
var maxValue = Math.max(firstNum3, secondNum3, thirdNum3, forthdNum3);
displayText("\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ".concat(maxValue));
// Наименьшее
var minValue = Math.min(firstNum3, secondNum3, thirdNum3, forthdNum3);
displayText("\u041D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ".concat(minValue));
