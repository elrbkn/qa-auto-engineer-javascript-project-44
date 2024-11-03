import readlineSync from 'readline-sync';

// Функция приветствия
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Функция для генерации случайного числа от 1 до 100
export const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

// Функция для проверки четности
export const checkEvenness = (number) => {
    // Возвращаем 'yes', если четное, иначе 'no'
    return number % 2 === 0 ? 'yes' : 'no';
};

// Функция подсчета ответов
const handleAnswer = (userAnswer, correctAnswer, userName, correctAnswersCount) => {
  // Сравниваем ответы
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
    // Проверяем, достигли ли мы 3 правильных ответа
    if (correctAnswersCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      // Завершение игры при достижении 3
      return { correctAnswersCount, finished: true };
    }
  } else {
    console.log(`Answer "${userAnswer}" if the number is even, otherwise answer "${correctAnswer}".`);
    // Завершение игры при неправильном ответе
    return { correctAnswersCount, finished: true };
  }
  // Игра продолжается
  return { correctAnswersCount, finished: false };
};

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
