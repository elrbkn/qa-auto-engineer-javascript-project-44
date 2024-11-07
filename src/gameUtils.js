import readlineSync from 'readline-sync';
import { greeting } from '../index.js';

const playGame = (gameDescription, generateQuestion, generateIncorrectMessage) => {
  // Приветсвие и описание
  const userName = greeting();
  console.log(gameDescription);
  // Начало игры
  for (let correctAnswersCount = 0; correctAnswersCount < 3; ) {
    // Формируем вопрос
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    // Получаем ответ
    const userAnswer = readlineSync.question('Your answer: ');
    // Сверяем результаты
    const incorrectMessage = generateIncorrectMessage(userAnswer, String(correctAnswer), userName);
    // Функция подсчета ответов
    let updatedCorrectAnswersCount = correctAnswersCount;
    // Сравниваем ответы
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      updatedCorrectAnswersCount += 1;
      if (updatedCorrectAnswersCount === 3) {
        // Завершение игры при достижении 3
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      // Завершение игры при неправильном ответе
      console.log(incorrectMessage);
      break;
    }
    // Обновляем счетчик правильных ответов
    correctAnswersCount = updatedCorrectAnswersCount;
  }
};

export default playGame;