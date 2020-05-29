// TO DO
// Use the stored variable

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
  let varParse;

  if (answer.includes('let')) {
    varParse = answer.split(' ')

    if (varParse.length > 3) {
      let varName = varParse[1]
      let varVal = varParse[3]

      console.log("longer than 3 " + varParse)

      confirmVariable(varName, varVal);

    } else {
        varParse = varParse[1].split('=')

        let varName = varParse[0]
        let varVal = varParse[1]

        console.log("less than 3 " + varParse)
        confirmVariable(varName, varVal);
    }

  } else {
  console.log(`Beep Boop, here is the result: ${result}`)
  }

}

initialPrompt();

const confirmVariable = (varName, varVal) => { 

console.log(`I have your variable. It is: ${varName} = ${varVal}`)

}

