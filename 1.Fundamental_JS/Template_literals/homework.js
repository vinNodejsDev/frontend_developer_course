let string = 'some test string';


// 1. Получить первую и последнюю буквы строки
const firstLetter = string[0];
const lastLetter = string[string.length - 1];

// 2. Сделать первую и последнюю буквы в верхнем регистре
const modifiedString = string[0].toUpperCase() +
                        string.slice(1, string.length - 1) +
                        string[string.length - 1].toUpperCase();

// 3. Найти положение слова ‘string’ в строке
const strIndex = string.indexOf('string');

// 4. Найти положение второго пробела (“вручную” ничего не считать)
const spaceIndex = string.indexOf(' ', 5);

// 5. Получить строку с 5-го символа длиной 4 буквы
const substringRaw = string.substr(5, 4);

// 6. Получить строку с 5-го по 9-й символы
const substrRaw2 = string.slice(5, 9);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
const substrRaw3 = string.slice(0, string.length-6)

// 8. Из двух переменных получить переменную string, в которой будет
// содержаться текст “2016”
const a=20,
      b=16;
string = a + "" + b;


console.log(string.slice(1, -1));