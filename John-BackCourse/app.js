
const {readFile,writeFile} = require('fs')
const util = require('util')
//events
const Emmiter = require('events')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const customEmittter



console.log('What is my name? '); 


const start = async ()=>{
    try {
    const first = await readFilePromise( './texts/first.txt', 'utf8')
    const second = await readFilePromise( './texts/third.txt', 'utf8')
    console.log(first,  second,
    await writeFilePromise('./texts/fourth.txt', 'What is happening in the fourth page')
    )
    
    } catch (error) {
        console.log(error);
        
    }
}
start()
console.log('World');