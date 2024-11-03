#!/usr/bin/env node
import readlineSync from 'readline-sync';

// приветствие
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// поясняем смысл
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// цикл подсчета
let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  // получаем число от 1 до 100
  const getRandomNumber = Math.floor(Math.random() * 100) + 1;
  // выводим число
  console.log(`Question: ${getRandomNumber}`);
  // получаем ответ пользователя
  const getAnswer = readlineSync.question('Your answer: ');

  // проверяем четность
  const checkEvenness = (number) => (number % 2 === 0 ? 'yes' : 'no') // Возвращаем 'yes', если четное, иначе 'no'
    ;

  // Получаем правильный ответ
  const correctAnswer = checkEvenness(getRandomNumber);
  // сравниваем ответы
  if (getAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount++;
    // Проверяем, достигли ли мы 3 правильных ответа
    if (correctAnswersCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      // закрываем цикл
      break;
    }
  } else {
    console.log(`Answer "${getAnswer}" if the number is even, otherwise answer "${correctAnswer}".`);
    // закрываем цикл
    break;
  }
}
