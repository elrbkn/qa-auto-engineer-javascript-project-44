import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, checkEvenness, handleAnswer,
} from '../index.js';

// brain-even
export const playGameEven = () => {
  // Приветствуем
  const userName = greeting();
  // Поясняем смысл
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // Цикл игры
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    // Получаем число
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    // Получаем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');
    // Проверяем четность
    const correctAnswer = String(checkEvenness(number));
    // Сверяем результаты
    const incorrectMessage = `Answer "${userAnswer}" if the number is even, otherwise answer "${correctAnswer}".\nLet's try again, ${userName}!`;
    const result = handleAnswer(userAnswer, correctAnswer, userName, correctAnswersCount, incorrectMessage);
    correctAnswersCount = result.correctAnswersCount;
    // Закрываем цикл
    if (result.finished) {
      break;
    }
  }
};
