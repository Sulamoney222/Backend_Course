const {writeFileSync} = require('fs')
const http = require('http')
const fs = require('fs')
const { error } = require('console')

for (let index = 0; index < 10000; index++) {
    writeFileSync(
        './texts/s.txt', `New file ${index}`, {flag:'a'}
    )
    
    
}

const server = http.createServer()

server.on('request', (req,res)=>{
   const file = fs.createReadStream('./texts/s.txt')
   
  
   file.on ('open', ()=>{
    file.pipe(res)
   })

   file.on('error', (err)=>{
    res.end('ERROR')
   })
   
})

server.listen(5000, ()=>{
    console.log('server is starteing');
    
})
