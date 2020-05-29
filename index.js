const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Hi, I'm a calculator, let's do some math. Enter your equation below:
`, (answer) => {

  calc(answer)

  rl.close()
});

const calc = (answer) => {
  // this.answer = answer.split(' ')
  // let n1 = Number(this.answer[0])
  // let n2 = Number(this.answer[2])
  // let operator = this.answer[1]
  result = eval(answer)

  console.log(`Beep Boop, here is the result: ${result}`);
}