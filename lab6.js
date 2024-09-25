var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Функция для вывода текста
function displayText(text, taskClass) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) { // Проверяем, что элемент найден
        var taskDiv = document.createElement('div');
        taskDiv.className = 'output ' + (taskClass || '');
        taskDiv.innerHTML = text + "<br>"; // Используем <br> для переноса строки
        outputDiv.appendChild(taskDiv);
    }
}
// Функция для вывода массива
function displayArray(array) {
    array.forEach(function (item) {
        displayText(item.toString());
    });
}
// Первое задание
displayText("1. Дан массив с элементами ['Привет, ', 'мир', '!']. Необходимо вывести 'Привет, мир!'.");
var array1 = ['Привет, ', 'мир', '!'];
var result1 = array1.join('');
displayText(result1);
displayText("\n");
// Второе задание
displayText("2. Заменить первый элемент на 'Пока,'.");
var array2 = ['Привет, ', 'мир', '!'];
array2[0] = 'Пока,';
array2.forEach(function (item) {
    displayText(item);
});
displayText("\n");
// Третье задание
displayText("3. Получить массив позиций всех нулей в строке '023m0df0dfg0'.");
var string = '023m0df0dfg0';
var zeroPositions = [];
for (var i = 0; i < string.length; ++i) {
    if (string[i] === '0') {
        zeroPositions.push(i);
    }
}
zeroPositions.forEach(function (item) {
    displayText(item.toString());
});
displayText("\n");
// Четвёртое задание
displayText("4. Создать массив из 10 элементов с случайными числами от 0 до 100 и найти числа с цифрой '5'.");
var randomArray = Array.from({ length: 10 }, function () { return Math.floor(Math.random() * 100); });
var arrayWithFive = randomArray.filter(function (num) { return num.toString().includes('5'); });
displayText("Массив с рандомными значениями: ");
displayArray(randomArray);
displayText("Массив с числами, в которых есть цифра 5");
displayArray(arrayWithFive);
displayText("\n");
// Пятое задание
displayText("5. Слить два массива.");
function mergeArrays(arr1, arr2) {
    var mergedArray = [];
    var maxLength = Math.max(arr1.length, arr2.length);
    for (var i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            mergedArray.push(arr1[i]);
        }
        if (i < arr2.length) {
            mergedArray.push(arr2[i]);
        }
    }
    return mergedArray;
}
var numArray = [1, 2, 3];
var charArray = ['a', 'b', 'c'];
var resultArray = mergeArrays(numArray, charArray);
displayArray(resultArray);
displayText("\n");
// Шестое задание
displayText("6. Создать массив из 10 элементов и отсортировать по убыванию.");
var randomArrayNew = Array.from({ length: 10 }, function () { return Math.floor(Math.random() * 100); });
var sortDescArray = __spreadArray([], randomArrayNew, true).sort(function (a, b) { return b - a; });
displayText("Исходный массив: ");
displayArray(randomArrayNew);
displayText("Отсортированный массив по убыванию: ");
displayArray(sortDescArray);
displayText("\n");
// Седьмое задание
displayText("7. Отсортировать два массива по алфавиту.");
var russianDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
var englishDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var sortedRussianDays = russianDays.sort();
var sortedEnglishDays = englishDays.sort();
displayText("Отсортированный массив на русском: ");
displayArray(sortedRussianDays);
displayText("Отсортированный массив на английском:");
displayArray(sortedEnglishDays);
displayText("\n");
// Восьмое задание
displayText("8. Отсортировать массив цветовых строк по длине.");
var colors = ['orange', 'red', 'green', 'blue'];
var sortedColors = colors.sort(function (a, b) { return a.length - b.length; });
displayText("Отсортированный массив по длине строки: ");
displayArray(sortedColors);
displayText("\n");
// Девятое задание
displayText("9. Создать массив из 8 элементов с случайными числами от 0 до 50 и найти частное сумм первых и вторых половин.");
var randomArrayNewEight = Array.from({ length: 8 }, function () { return Math.floor(Math.random() * 50); });
var firstPart = randomArrayNewEight.slice(0, 4);
var secondPart = randomArrayNewEight.slice(4, 8);
var sumFirstPart = firstPart.reduce(function (accumulator, nums) { return accumulator + nums; }, 0);
var sumSecondPart = secondPart.reduce(function (accumulator, nums) { return accumulator + nums; }, 0);
var quotient = sumSecondPart !== 0 ? (sumFirstPart / sumSecondPart) : null;
displayText('Исходный массив:');
displayArray(randomArrayNewEight);
displayText('Сумма первой половины: ' + sumFirstPart);
displayText('Сумма второй половины: ' + sumSecondPart);
displayText('Частное суммы первой и второй половин: ' + quotient);
displayText("\n");
// Десятое задание
displayText("10. Создать массив из 10 элементов. Заполнить случайными числами от -100 до 100. Подсчитайте количество отрицательных чисел в этом массиве. Вывести на консоль массив и результат проверки.");
var randomArrayNewRandom = Array.from({ length: 10 }, function () { return Math.floor(Math.random() * 201) - 100; });
var negativeCount = randomArrayNewRandom.filter(function (num) { return num < 0; }).length;
displayText('Сгенерированный массив: ' + randomArrayNewRandom.join(', '));
displayText('Количество отрицательных чисел: ' + negativeCount);
displayText("\n");
// Одиннадцатое задание
displayText("11. Создать массив из 10 элементов. Заполнить случайными числами от -50 до 50. Оставьте в нем только положительные и четные числа. Вывести на консоль оба массива.");
var randomArray50 = Array.from({ length: 10 }, function () { return Math.floor(Math.random() * 101) - 50; });
var filteredArray = randomArray50.filter(function (num) { return num > 0 && num % 2 === 0; });
displayText('Исходный массив: ' + randomArray50.join(', '));
displayText('Массив положительных четных чисел: ' + filteredArray.join(', '));
displayText("\n");
// Двенадцатое задание
displayText("12. Придумать некоторую строку с буквами и цифрами. Получить позицию первой и последный цифры в этой строке (начиная с 1). Вывести на консоль строку и результаты .");
var inputString = "abc123def456gh789"; // Замените на вашу строку по необходимости
// Находим первую цифру
var firstDigitIndex = inputString.search(/\d+/);
var firstDigitPosition = firstDigitIndex !== -1 ? firstDigitIndex + 1 : -1; // Добавляем 1 для позиции от 1
// Находим последнюю цифру
var lastDigitIndex = inputString.search(/\d(?=[^\d]*$)/); // Ищем последнюю цифру
var lastDigitPosition = lastDigitIndex !== -1 ? lastDigitIndex + 1 : -1; // Добавляем 1 для позиции от 1
displayText('Исходная строка: ' + inputString);
displayText('Позиция первой цифры: ' + (firstDigitPosition !== -1 ? firstDigitPosition : "Нет цифр"));
displayText('Позиция последней цифры: ' + (lastDigitPosition !== -1 ? lastDigitPosition : "Нет цифр"));
