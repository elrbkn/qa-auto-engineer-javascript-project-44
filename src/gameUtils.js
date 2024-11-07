import readlineSync from 'readline-sync';
import greeting from '../index.js';

const playGame = (gameDescription, generateQuestion, generateIncorrectMessage, roundsCount = 3) => {
  // Приветсвие и описание
  const userName = greeting();
  console.log(gameDescription);
  // Начало игры
  for (let round = 0; round < roundsCount; round += 1) {
    // Формируем вопрос
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    // Получаем ответ
    const userAnswer = readlineSync.question('Your answer: ');
    // Сравниваем ответы
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      // Завершение игры при неправильном ответе
      // Ответа имеет 3 варианта, в зависимости от игры, не 1 :(
      const incorrectMessage = generateIncorrectMessage(
        userAnswer,
        String(correctAnswer),
        userName,
      );
      console.log(incorrectMessage);
      break;
    }
    // Если это последний раунд, поздравляем пользователя
    if (round === roundsCount - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
