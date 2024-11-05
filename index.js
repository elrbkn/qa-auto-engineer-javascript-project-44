import readlineSync from 'readline-sync';

// Функция приветствия
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Функция для генерации случайного числа от 1 до 100
export const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Функция для проверки четности, 'yes' если четное, иначе 'no'
export const checkEvenness = (number) => (number % 2 === 0 ? 'yes' : 'no');

// Функция подсчета ответов
export const handleAnswer = (
  userAnswer,
  correctAnswer,
  userName,
  correctAnswersCount,
  incorrectMessage,
) => {
  let updatedCorrectAnswersCount = correctAnswersCount;
  // Сравниваем ответы
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    updatedCorrectAnswersCount += 1;
    if (updatedCorrectAnswersCount === 3) {
      // Завершение игры при достижении 3
      console.log(`Congratulations, ${userName}!`);
      return { correctAnswersCount: updatedCorrectAnswersCount, finished: true };
    }
  } else {
    // Завершение игры при неправильном ответе
    console.log(incorrectMessage);
    return { correctAnswersCount: updatedCorrectAnswersCount, finished: true };
  }
  // Игра продолжается
  return { correctAnswersCount: updatedCorrectAnswersCount, finished: false };
};

// Функция для генерации случайного математического оператора
export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  return randomOperator;
};

// Функция вычисления результата математической операции
export const getResult = (num1, operator, num2) => {
  const firstNumber = num1;
  const secondNumber = num2;
  // Определяем значение оператора
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null; // Возвращаем null для нераспознанного оператора
  }
};

// Функция вычисления НОД
export const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  // Алгоритм Евклида
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

// Функция генерации массива арифметической прогрессии
export const generateRandomArray = () => {
  // Определяем начало и шаг
  const start = Math.floor(Math.random() * 100) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  // Создаем массив
  const array = [];
  // Заполняем массив 10 числами
  for (let i = 0; i < 10; i += 1) {
    array.push(start + (i * step));
  }
  return array;
};

// Функция для изменнения значения в массиве
export const replaceValueInArray = (arr, old, nw) => arr.map((item) => (item === old ? nw : item));

// Функция проверки простого числа
export const isPrime = (num) => {
  // Проверка на числа меньше 2
  if (num <= 1) {
    return 'no';
  }
  // Проверка делителей от 2 до квадратного корня из n
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
