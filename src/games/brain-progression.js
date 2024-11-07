import playGame from '../gameUtils.js';

// Функция генерации массива арифметической прогрессии
const generateRandomArray = () => {
  // Определяем начало и шаг
  const start = Math.floor(Math.random() * 100) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  // Создаем массив
  const array = [];
  // Заполняем массив 10 числами
  for (let i = 0; i < 10; i += 1) {
    array.push(start + (i * step));
  }
  return array;
};

// Функция для изменнения значения в массиве
const replaceValueInArray = (arr, old, nw) => arr.map((item) => (item === old ? nw : item));

// Задаем вопрос
const generateQuestion = () => {
  const array = generateRandomArray();
  const randomIndex = Math.floor(Math.random() * array.length);
  const correctAnswer = array[randomIndex];
  const arrayHidden = replaceValueInArray(array, correctAnswer, '..').join(' ');
  return { question: arrayHidden, correctAnswer };
};

// Задаем сообшения
const gameDescription = 'What number is missing in the progression?';

const generateIncorrectMessageEvenOdd = (userAnswer, correctAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;

// Запускаем игру
const playGameProgression = () => {
  playGame(gameDescription, generateQuestion, generateIncorrectMessageEvenOdd);
};

export default playGameProgression;
