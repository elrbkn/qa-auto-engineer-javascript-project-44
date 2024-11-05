import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, getRandomOperator, getResult, handleAnswer,
} from '../index.js';

// brain-calc
const playGameCalc = () => {
  // Приветствуем
  const userName = greeting();
  // Поясняем смысл
  console.log('What is the result of the expression?');
  // Цикл игры
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    // Получаем пример
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomOperator = getRandomOperator();
    const example = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    console.log(`Question: ${example}`);
    // Получаем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');
    // Вычисляем ответ
    const correctAnswer = String(getResult(randomNumber1, randomOperator, randomNumber2));
    // Сверяем результаты
    const incorrectMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    const result = handleAnswer(
      userAnswer,
      correctAnswer,
      userName,
      correctAnswersCount,
      incorrectMessage,
    );
    correctAnswersCount = result.correctAnswersCount;
    // Закрываем цикл
    if (result.finished) {
      break;
    }
  }
};

export default playGameCalc;
