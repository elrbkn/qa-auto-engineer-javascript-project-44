import { generateRandomArray, replaceValueInArray } from '../../index.js';
import playGame from '../gameUtils.js';

// Задаем вопрос
const generateQuestion = () => {
  const array = generateRandomArray();
  const randomIndex = Math.floor(Math.random() * array.length);
  const correctAnswer = array[randomIndex];
  const arrayHidden = replaceValueInArray(array, correctAnswer, '..').join(' ');
  return { question: arrayHidden, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'What number is missing in the progression?';

const generateIncorrectMessageEvenOdd = (userAnswer, correctAnswer, userName) => `Answer "${userAnswer}" if the number is even, otherwise answer "${correctAnswer}".\nLet's try again, ${userName}!`;

// Запускаем игру
const playGameProgression = () => {
  playGame(gameDescription, generateQuestion, generateIncorrectMessageEvenOdd);
};

export default playGameProgression;
