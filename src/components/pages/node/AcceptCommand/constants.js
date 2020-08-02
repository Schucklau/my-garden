const code1 = `const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(\`What's your name?\`, name => {
  console.log(\`Hi \${name}!\`)
  readline.close()
})`

const code2 = `const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(\`Hi \${answers['name']}!\`)
})`

export {
  code1,
  code2
}