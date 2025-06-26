const os = require('os')
const {readFileSync,writeFileSync} = require('fs')

const current = readFileSync('./texts/first.txt','utf8')
console.log(current);
writeFileSync(
    './texts/third.txt',
    'This is the third page'
)



