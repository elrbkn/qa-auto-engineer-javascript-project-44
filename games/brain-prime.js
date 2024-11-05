import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, isPrime, handleAnswer,
} from '../index.js';

// brain-even
export const playGamePrime = () => {
  // Приветствуем
  const userName = greeting();
  // Поясняем смысл
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  // Цикл игры
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    // Получаем число
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    // Получаем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');
    // Проверяем простое ли число
    const correctAnswer = isPrime(number);
    // Сверяем результаты
    const incorrectMessage = `Answer "${userAnswer}" if given number is prime, otherwise answer "${correctAnswer}".\nLet's try again, ${userName}!`;
    const result = handleAnswer(userAnswer, correctAnswer, userName, correctAnswersCount, incorrectMessage);
    correctAnswersCount = result.correctAnswersCount;
    // Закрываем цикл
    if (result.finished) {
      break;
    }
  }
};
