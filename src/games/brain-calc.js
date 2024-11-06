import { getRandomNumber, getRandomOperator, getResult } from '../../index.js';
import playGame from '../gameUtils.js';

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
