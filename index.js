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
export const checkEvenness = (number) => number % 2 === 0 ? 'yes' : 'no';

// Функция подсчета ответов
export const handleAnswer = (userAnswer, correctAnswer, userName, correctAnswersCount, incorrectMessage) => {
  // Сравниваем ответы
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
    if (correctAnswersCount === 3) {
      // Завершение игры при достижении 3      
      console.log(`Congratulations, ${userName}!`);
      return { correctAnswersCount, finished: true };
    }
  } else {
      // Завершение игры при неправильном ответе
      console.log(incorrectMessage);
      return { correctAnswersCount, finished: true };
  }
  // Игра продолжается
  return { correctAnswersCount, finished: false };
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
  //Определяем значение оператора
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

// Функция вычисления НОД
export const gcd = (num1, num2) => {
  //Алгоритм Евклида
  while (num2 !== 0) {
      let temp = num2;
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
  for (let i = 0; i < 10; i++) {
      array.push(start + (i * step));
  }
  return array;
};

// Функция для изменнения значения в массиве
export const replaceValueInArray = (array, oldValue, newValue) => {
  return array.map(item => item === oldValue ? newValue : item)
};