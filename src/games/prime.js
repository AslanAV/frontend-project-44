import runGame, { COUNT_GAME } from '../index.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN = 1;
const MAX = 30;

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

const getAnswer = (number) => {
  let count = 1;

  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }

  return count <= 2 ? 'yes' : 'no';
};

const prepareData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < COUNT_GAME; i += 1) {
    const number = getRandomNumber(MIN, MAX);
    const answer = getAnswer(number);

    questions.push(number);
    answers.push(answer);
  }
  return [questions, answers];
};

const run = () => {
  const data = prepareData();
  runGame(data, RULE);
};

export default run;
