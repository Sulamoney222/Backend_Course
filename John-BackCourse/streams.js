const {writeFile} = require('fs')
const fs = require('fs')
const {createReadStream} = require('fs')
const https = require('http')

// for (let index = 0; index < 1000; index++) {
//     writeFile(
//         './texts/big.txt', `Hello WORLD ${index}/n`,
//         {flag:'a'}
//     )
    
// }

const stream = createReadStream('./texts/big.txt')

stream.on('data', (result)=>{
    console.log(result);
    
})
stream.on('error',(err)=>{
    console.log(err);
    
})



const server = https.createServer()

server.on('request', (req,res)=>{
  
    const file = fs.createReadStream('./texts/big.txt')
    file.on('open', ()=>{
        file.pipe()
    })
    file.on('error', (err)=>{
        res.end(err)
    })
    
})


server.listen(5000)