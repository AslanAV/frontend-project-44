import runGame, { COUNT_GAME } from '../index.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';
const prepareData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < COUNT_GAME; i += 1) {
    const number = Math.floor(Math.random() * 100);
    questions.push(number);

    const answer = number % 2 === 0 ? 'yes' : 'no';
    answers.push(answer);
  }
  return [questions, answers];
};

const run = () => {
  const data = prepareData();
  runGame(data, RULE);
};

export default run;
