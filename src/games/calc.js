import runGame, { COUNT_GAME } from '../index.js';

const RULE = 'What is the result of the expression?';
const MIN_NUMBER = 1;
const MAX_NUMBER = 25;
const OPERATORS = ['+', '-', '*', '/'];

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

const getRandomOperator = () => {
  const firstIndex = 0;
  const lastIndex = OPERATORS.length - 1;
  const randomIndex = firstIndex + Math.random() * (lastIndex - firstIndex);
  return OPERATORS[Math.floor(randomIndex)];
};
const getExpressionResponse = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = number1 / number2;
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
    const operator = getRandomOperator();

    const expression = `${number1} ${operator} ${number2}`;
    questions.push(expression);

    const answer = getExpressionResponse(number1, number2, operator);
    answers.push(answer);
  }
  return [questions, answers];
};

const run = () => {
  const data = prepareData();
  runGame(data, RULE);
};

export default run;
