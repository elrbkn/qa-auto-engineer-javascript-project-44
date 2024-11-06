import { getRandomNumber, gcd } from '../../index.js';
import playGame from '../gameUtils.js';

// Задаем вопрос
const generateQuestion = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const example = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  return { question: example, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateIncorrectMessageEvenOdd = (userAnswer, correctAnswer, userName) => `Answer "${userAnswer}" if the number is even, otherwise answer "${correctAnswer}".\nLet's try again, ${userName}!`;

// Запускаем игру
const playGameGcd = () => {
  playGame(gameDescription, generateQuestion, generateIncorrectMessageEvenOdd);
};

export default playGameGcd;
