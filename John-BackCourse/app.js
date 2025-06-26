const {readFile,writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async ()=>{
    try {
    const first = await readFilePromise( './texts/first.txt', 'utf8')
    const second = await readFilePromise( './texts/first.txt', 'utf8')
    console.log(first, second);
    
    } catch (error) {
        console.log(error);
        
    }
}