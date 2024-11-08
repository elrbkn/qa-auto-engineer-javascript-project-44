import playGame from '../gameUtils.js';
import getRandomNumber from '../utils.js';

// Функция проверки простого числа
const isPrime = (num) => {
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

// Задаем вопрос
const generateQuestion = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number);
  return { question: number, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Запускаем игру
const playGamePrime = () => {
  playGame(gameDescription, generateQuestion);
};

export default playGamePrime;
