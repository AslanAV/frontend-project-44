import runGame, { COUNT_GAME } from '../index.js';

const RULE = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

const getNodResponse = (number1, number2) => {
  if (number1 % number2 === 0) {
    return number2;
  }

  let result;
  for (let i = 1; i <= number2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const prepareData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < COUNT_GAME; i += 1) {
    let number1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    let number2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

    if (number1 < number2) {
      const rewriteNumber = number2;
      number2 = number1;
      number1 = rewriteNumber;
    }

    const numbers = `${number1} ${number2}`;
    questions.push(numbers);

    const answer = getNodResponse(number1, number2);
    answers.push(answer);
  }
  return [questions, answers];
};

const run = () => {
  const data = prepareData();
  runGame(data, RULE);
};

export default run;
