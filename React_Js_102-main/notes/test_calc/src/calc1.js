const operations = require('./operations')
const readline = require('readline') //built in node module of in and out

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    }
)

console.log(
    `calc.js

    welcome to my calc application
    give numbers and choose operation to see magic!
    `
)

rl.close()