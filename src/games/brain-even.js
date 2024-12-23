import playGame from '../gameUtils.js';
import getRandomNumber from '../utils.js';

// Функция для проверки четности, 'yes' если четное, иначе 'no'
const isEvenness = (number) => (number % 2 === 0 ? 'yes' : 'no');

// Задаем вопрос
const generateQuestion = () => {
  const number = getRandomNumber();
  const correctAnswer = isEvenness(number);
  return { question: number, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Запускаем игру
const playGameEven = () => {
  playGame(gameDescription, generateQuestion);
};

export default playGameEven;
