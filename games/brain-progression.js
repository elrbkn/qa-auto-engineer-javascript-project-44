import readlineSync from 'readline-sync';
import { greeting, generateRandomArray, replaceValueInArray, handleAnswer } from '../index.js';
// brain-even
export const playGameProgression = () => {
    //Приветствуем
    const userName = greeting();
    // Поясняем смысл
    console.log('Find the greatest common divisor of given numbers.');
    // Цикл игры
    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
      // Получаем массив
      const array = generateRandomArray();
      // Определяем скрываемое число
      const randomIndex = Math.floor(Math.random() * array.length);
      const correctAnswer = array[randomIndex];
      const arrayHidden = replaceValueInArray(array, correctAnswer, "..")
      console.log(`Question: ${arrayHidden}`);
      // Получаем ответ пользователя
      const userAnswer = readlineSync.question('Your answer: ');
      // Проверяем четность
      const correctAnswerString = String(correctAnswer);
      // Сверяем результаты
      const incorrectMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      const result = handleAnswer(userAnswer, correctAnswerString, userName, correctAnswersCount, incorrectMessage);
      correctAnswersCount = result.correctAnswersCount;
      // Закрываем цикл
      if (result.finished) {
        break;
      }
    }
  };