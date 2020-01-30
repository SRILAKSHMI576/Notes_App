const validator = require("validator")
const chalk = require("chalk")

var notes = require("./notes.js")

var para = notes()

console.log(para)


//it return true if string is only email other wise its false
console.log(validator.isEmail("srilakshmigulla576@gmail.com"))
console.log(validator.isEmail("hello.com"))

//it return true if string is only url other wise its false
console.log(validator.isURL("hello"))
console.log(validator.isURL("hello.com"))

//use chalk
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.black("sri"))
