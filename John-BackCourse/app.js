const os = require('os')
const {readFileSync,writeFileSync,readFile} = require('fs')

const current = readFileSync('./texts/first.txt','utf8')
console.log(current);
writeFileSync(
    './texts/third.txt',
    'This is the third page'
)
readFile('./tests/third.txt,', 'utf8', (err,result)=>{
    if(err){
        return err
    }
    console.log(result);
    
})


