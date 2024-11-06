import { getRandomNumber, checkEvenness } from '../../index.js';
import playGame from '../gameUtils.js';

// Задаем вопрос
const generateQuestion = () => {
  const number = getRandomNumber();
  const correctAnswer = checkEvenness(number);
  return { question: number, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateIncorrectMessageEvenOdd = (userAnswer, correctAnswer, userName) => `Answer "${userAnswer}" if the number is even, otherwise answer "${correctAnswer}".\nLet's try again, ${userName}!`;

// Запускаем игру
const playGameEven = () => {
  playGame(gameDescription, generateQuestion, generateIncorrectMessageEvenOdd);
};

export default playGameEven;
