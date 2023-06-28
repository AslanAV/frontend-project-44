import runGame, { COUNT_GAME } from '../index.js';

const RULE = 'What number is missing in the progression?';
const MIN = 1;
const MAX_START = 30;
const MAX_STEP = 5;
const LENGTH = 10;

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

const getProgression = () => {
  const progression = [];
  const start = getRandomNumber(MIN, MAX_START);
  const step = getRandomNumber(MIN, MAX_STEP);
  const length = start + LENGTH * step;
  for (let i = start; i < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const getPreparedProgressionAndAnswer = (progression) => {
  const preparedProgression = progression;
  const firstIndex = 0;

  const randomIndexAnswer = getRandomNumber(firstIndex, LENGTH);
  const answer = preparedProgression[randomIndexAnswer];

  preparedProgression[randomIndexAnswer] = '..';
  return [preparedProgression.join(' '), answer];
};

const prepareData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < COUNT_GAME; i += 1) {
    const progression = getProgression();
    const [preparedProgression, answer] = getPreparedProgressionAndAnswer(progression);

    questions.push(preparedProgression);
    answers.push(answer);
  }
  return [questions, answers];
};

const run = () => {
  const data = prepareData();
  runGame(data, RULE);
};

export default run;
