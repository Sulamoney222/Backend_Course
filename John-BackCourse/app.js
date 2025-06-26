const {readFile,writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

console.log('World');


const start = async ()=>{
    try {
    const first = await readFilePromise( './texts/first.txt', 'utf8')
    const second = await readFilePromise( './texts/second.txt', 'utf8')
    console.log(first, second);
    
    } catch (error) {
        console.log(error);
        
    }
}
start()