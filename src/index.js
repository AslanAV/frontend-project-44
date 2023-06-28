import readlineSync from 'readline-sync';

const COUNT_GAME = 3;

const printGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const printRule = (rule) => {
  console.log(rule);
};

const loopRoundsGame = ([questions, answers], name) => {
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const number = questions[i];
    const correctAnswer = answers[i];
    console.log(`Question: ${number}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (String(answers[i]) !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const endGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const runGame = (data, rule) => {
  const namePlayer = printGreeting();
  printRule(rule);
  const hasLoopEnded = loopRoundsGame(data, namePlayer);
  if (hasLoopEnded) {
    endGame(namePlayer);
  }
};

export default runGame;
export { COUNT_GAME };
