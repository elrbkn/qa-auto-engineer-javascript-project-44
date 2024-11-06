import { getRandomNumber, isPrime } from '../../index.js';
import playGame from '../gameUtils.js';

// Задаем вопрос
const generateQuestion = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number);
  return { question: number, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateIncorrectMessageEvenOdd = (userAnswer, correctAnswer, userName) => `Answer "${userAnswer}" if the number is even, otherwise answer "${correctAnswer}".\nLet's try again, ${userName}!`;

// Запускаем игру
const playGamePrime = () => {
  playGame(gameDescription, generateQuestion, generateIncorrectMessageEvenOdd);
};

export default playGamePrime;
