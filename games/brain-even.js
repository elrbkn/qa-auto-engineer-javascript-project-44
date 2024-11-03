import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, checkEvenness, handleAnswer } from '../index.js';
// brain-even
export const playGameEven = () => {
    const userName = greeting();
    let correctAnswersCount = 0;
    // Поясняем смысл
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    // Цикл игры
    while (correctAnswersCount < 3) {
      // Получаем число
      const number = getRandomNumber();
      console.log(`Question: ${number}`);
      // Получаем ответ пользователя
      const userAnswer = readlineSync.question('Your answer: ');
      // Проверяем четность
      const correctAnswer = checkEvenness(number);
      // Сверяем результаты
      const result = handleAnswer(userAnswer, correctAnswer, userName, correctAnswersCount);
      correctAnswersCount = result.correctAnswersCount;
      // Закрываем цикл
      if (result.finished) {
        break;
      }
    }
  };