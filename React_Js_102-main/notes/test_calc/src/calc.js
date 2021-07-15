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

rl.question('Enter your first number: ', (x) =>
    {
        rl.question('Enter your second number: ', (y) => {


            rl.question(

                `Please select your operation:
                
                [1] Addition (+)
                [2] Subtraction (-)
                [3] Multiplication (*)
                [4] Division (/)
                
                Enter your choice: `,
                (choice) => {
                    rl.close()
                }

            )
        }    
        
        
        )
    }

)