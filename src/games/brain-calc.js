import playGame from '../gameUtils.js';
import getRandomNumber from '../utils.js';

// Функция для генерации случайного математического оператора
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  return randomOperator;
};

// Функция вычисления результата математической операции
const getResult = (num1, operator, num2) => {
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

// Задаем вопрос
const generateQuestion = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const randomOperator = getRandomOperator();
  const example = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = getResult(randomNumber1, randomOperator, randomNumber2);
  return { question: example, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'What is the result of the expression?';

const generateIncorrectMessageEvenOdd = (userAnswer, correctAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;

// Запускаем игру
const playGameCalc = () => {
  playGame(gameDescription, generateQuestion, generateIncorrectMessageEvenOdd);
};

export default playGameCalc;
