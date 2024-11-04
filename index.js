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
export const handleAnswer = (userAnswer, correctAnswer, userName, correctAnswersCount, incorrectMessage) => {
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
    console.log(incorrectMessage);
    // Завершение игры при неправильном ответе
    return { correctAnswersCount, finished: true };
  }
  // Игра продолжается
  return { correctAnswersCount, finished: false };
};


// Функция для генерации случайного математического оператора
export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  return randomOperator;
};

// Функция вычисления результата
export const getResult = (num1, operator, num2) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
    }
};


