import readlineSync from 'readline-sync';
import greeting from '../index.js';

const playGame = (gameDescription, generateQuestion, roundsCount = 3) => {
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
    if (userAnswer !== String(correctAnswer)) {
      const incorrectMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(incorrectMessage);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;


