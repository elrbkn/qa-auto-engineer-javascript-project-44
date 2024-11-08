import playGame from '../gameUtils.js';
import getRandomNumber from '../utils.js';

// Функция вычисления НОД
const gcd = (a, b) => {
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

// Запускаем игру
const playGameGcd = () => {
  playGame(gameDescription, generateQuestion);
};

export default playGameGcd;
