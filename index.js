const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const initialPrompt = () => { 
  rl.question(`Hi, I'm a calculator, let's do some math. Enter your equation below:
`, (answer) => {

    calc(answer)
    continuePrompt();
  });
}

const continuePrompt = () => { 
  rl.question(`Do you want to do another calculation? 
`, (answer) => {
    this.answer = answer.toLowerCase();

    if (answer === 'yes' || answer === 'y') {
      nextCalcPrompt();
    } else {
      console.log(`Goodbye!`);
      rl.close();
    }

  });
}

const nextCalcPrompt = () => { 

  rl.question(`Nice! Enter your next equation below:
`, (answer) => {

    calc(answer)

    continuePrompt();

  });
}

const calc = (answer) => {
  result = eval(answer)

  console.log(`Beep Boop, here is the result: ${result}`);
}

initialPrompt();