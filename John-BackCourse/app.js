const {readFile,writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async ()=>{
    const first = await readFilePromise( './texts/first.txt', 'utf8')
    const second = await readFilePromise( './texts/first.txt', 'utf8')
}