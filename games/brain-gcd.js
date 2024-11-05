import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, gcd, handleAnswer,
} from '../index.js';

// brain-even
const playGameGcd = () => {
  // Приветствуем
  const userName = greeting();
  // Поясняем смысл
  console.log('Find the greatest common divisor of given numbers.');
  // Цикл игры
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    // Получаем число
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    // Получаем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');
    // Проверяем четность
    const correctAnswer = String(gcd(randomNumber1, randomNumber2));
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

export default playGameGcd;
