const { log } = require('console')
const {readFile,writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


console.log('What is my name? ');


const start = async ()=>{
    try {
    const first = await readFilePromise( './texts/first.txt', 'utf8')
    const second = await readFilePromise( './texts/third.txt', 'utf8')
    console.log(first, second,
        writeFilePromise('./texts/fourth.txt', 'What is happening in the fourth page')
    )
    
    } catch (error) {
        console.log(error);
        
    }
}
start()
console.log('World');