// Функция для вывода текста
function displayText(text: string, taskClass?: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {  // Проверяем, что элемент найден
        const taskDiv = document.createElement('div');
        taskDiv.className = 'output ' + (taskClass || '');
        taskDiv.innerHTML = text + "<br>"; // Используем <br> для переноса строки
        outputDiv.appendChild(taskDiv);
    }
}

// Функция для вывода массива
function displayArray(array: Array<number | string>): void {
    array.forEach((item) => {
        displayText(item.toString());
    });
}

// Первое задание
displayText("1. Дан массив с элементами ['Привет, ', 'мир', '!']. Необходимо вывести 'Привет, мир!'.");
let array1: string[] = ['Привет, ', 'мир', '!'];
let result1: string = array1.join('');
displayText(result1);
displayText("\n");

// Второе задание
displayText("2. Заменить первый элемент на 'Пока,'.");
let array2: string[] = ['Привет, ', 'мир', '!'];
array2[0] = 'Пока,';
array2.forEach((item) => {
    displayText(item);
});
displayText("\n");

// Третье задание
displayText("3. Получить массив позиций всех нулей в строке '023m0df0dfg0'.");
let string: string = '023m0df0dfg0';
let zeroPositions: number[] = [];
for(let i = 0; i < string.length; ++i) {
    if (string[i] === '0') {
        zeroPositions.push(i);
    }
}
zeroPositions.forEach((item) => {
    displayText(item.toString());
});
displayText("\n");

// Четвёртое задание
displayText("4. Создать массив из 10 элементов с случайными числами от 0 до 100 и найти числа с цифрой '5'.");
let randomArray: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let arrayWithFive: number[] = randomArray.filter(num => num.toString().includes('5'));
displayText("Массив с рандомными значениями: ");
displayArray(randomArray);
displayText("Массив с числами, в которых есть цифра 5");
displayArray(arrayWithFive);
displayText("\n");

// Пятое задание
displayText("5. Слить два массива.");
function mergeArrays(arr1: any[], arr2: any[]): any[] {
    const mergedArray: any[] = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            mergedArray.push(arr1[i]);
        }
        if (i < arr2.length) {
            mergedArray.push(arr2[i]);
        }
    }
    return mergedArray;
}
let numArray: number[] = [1, 2, 3];
let charArray: string[] = ['a', 'b', 'c'];
let resultArray: any[] = mergeArrays(numArray, charArray);
displayArray(resultArray);
displayText("\n");

// Шестое задание
displayText("6. Создать массив из 10 элементов и отсортировать по убыванию.");
let randomArrayNew: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let sortDescArray: number[] = [...randomArrayNew].sort((a, b) => b - a);
displayText("Исходный массив: ");
displayArray(randomArrayNew);
displayText("Отсортированный массив по убыванию: ");
displayArray(sortDescArray);
displayText("\n");

// Седьмое задание
displayText("7. Отсортировать два массива по алфавиту.");
let russianDays: string[] = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let englishDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let sortedRussianDays: string[] = russianDays.sort();
let sortedEnglishDays: string[] = englishDays.sort();
displayText("Отсортированный массив на русском: ");
displayArray(sortedRussianDays);
displayText("Отсортированный массив на английском:");
displayArray(sortedEnglishDays);
displayText("\n");

// Восьмое задание
displayText("8. Отсортировать массив цветовых строк по длине.");
let colors: string[] = ['orange', 'red', 'green', 'blue'];
let sortedColors: string[] = colors.sort((a, b) => a.length - b.length);
displayText("Отсортированный массив по длине строки: ");
displayArray(sortedColors);
displayText("\n");

// Девятое задание
displayText("9. Создать массив из 8 элементов с случайными числами от 0 до 50 и найти частное сумм первых и вторых половин.");
let randomArrayNewEight: number[] = Array.from({ length: 8 }, () => Math.floor(Math.random() * 50));
let firstPart: number[] = randomArrayNewEight.slice(0, 4);
let secondPart: number[] = randomArrayNewEight.slice(4, 8);
let sumFirstPart: number = firstPart.reduce((accumulator, nums) => accumulator + nums, 0);
let sumSecondPart: number = secondPart.reduce((accumulator, nums) => accumulator + nums, 0);
let quotient: number | null = sumSecondPart !== 0 ? (sumFirstPart / sumSecondPart) : null;

displayText('Исходный массив:');
displayArray(randomArrayNewEight);
displayText('Сумма первой половины: ' + sumFirstPart);
displayText('Сумма второй половины: ' + sumSecondPart);
displayText('Частное суммы первой и второй половин: ' + quotient);

displayText("\n");

// Десятое задание
displayText("10. Создать массив из 10 элементов. Заполнить случайными числами от -100 до 100. Подсчитайте количество отрицательных чисел в этом массиве. Вывести на консоль массив и результат проверки.");

let randomArrayNewRandom: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100);
let negativeCount: number = randomArrayNewRandom.filter(num => num < 0).length;

displayText('Сгенерированный массив: ' + randomArrayNewRandom.join(', '));
displayText('Количество отрицательных чисел: ' + negativeCount);

displayText("\n");

// Одиннадцатое задание
displayText("11. Создать массив из 10 элементов. Заполнить случайными числами от -50 до 50. Оставьте в нем только положительные и четные числа. Вывести на консоль оба массива.");

let randomArray50: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101) - 50);
let filteredArray: number[] = randomArray50.filter(num => num > 0 && num % 2 === 0);

displayText('Исходный массив: ' + randomArray50.join(', '));
displayText('Массив положительных четных чисел: ' + filteredArray.join(', '));

displayText("\n");

// Двенадцатое задание
displayText("12. Придумать некоторую строку с буквами и цифрами. Получить позицию первой и последный цифры в этой строке (начиная с 1). Вывести на консоль строку и результаты .");

let inputString: string = "abc123def456gh789"; // Замените на вашу строку по необходимости

// Находим первую цифру
let firstDigitIndex: number = inputString.search(/\d+/);
let firstDigitPosition: number = firstDigitIndex !== -1 ? firstDigitIndex + 1 : -1; // Добавляем 1 для позиции от 1

// Находим последнюю цифру
let lastDigitIndex: number = inputString.search(/\d(?=[^\d]*$)/); // Ищем последнюю цифру
let lastDigitPosition: number = lastDigitIndex !== -1 ? lastDigitIndex + 1 : -1; // Добавляем 1 для позиции от 1

displayText('Исходная строка: ' + inputString);
displayText('Позиция первой цифры: ' + (firstDigitPosition !== -1 ? firstDigitPosition : "Нет цифр"));
displayText('Позиция последней цифры: ' + (lastDigitPosition !== -1 ? lastDigitPosition : "Нет цифр"));
