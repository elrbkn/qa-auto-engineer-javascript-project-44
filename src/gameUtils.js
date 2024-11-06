import readlineSync from 'readline-sync';
import { greeting, handleAnswer } from '../index.js';

const playGame = (gameDescription, generateQuestion, generateIncorrectMessage) => {
  // Приветсвие и описание
  const userName = greeting();
  console.log(gameDescription);
  // Начало игры
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    // Формируем вопрос
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    // Получаем ответ
    const userAnswer = readlineSync.question('Your answer: ');
    // Сверяем результаты
    const incorrectMessage = generateIncorrectMessage(userAnswer, String(correctAnswer), userName);
    const result = handleAnswer(
      userAnswer,
      String(correctAnswer),
      userName,
      correctAnswersCount,
      incorrectMessage,
    );
    // Проверяем, правильный ли ответ
    correctAnswersCount = result.correctAnswersCount;

    // Завершаем игру
    if (result.finished) {
      break;
    }
  }
};

export default playGame;
