import readlineSync from 'readline-sync';

const COUNT_GAME = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

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

const rule = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

const loop = ([questions, answers]) => {
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const number = questions[i];
    const correctAnswer = answers[i];
    console.log(`Question: ${number}`);

    const playerAnswer = readlineSync.question("Your answer: ");

    if (answers[i] !== playerAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const endGame = (name) => {
  console.log(`Congratulations, ${name}!`);
}

const game = () => {
  const namePlayer = greeting();
  rule();
  const data = prepareData();
  const hasLoopEnded = loop(data);
  if (hasLoopEnded) {
    endGame(namePlayer);
  }
};

export default game;