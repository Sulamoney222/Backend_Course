const http = require('http')
const {readFileSync} = require('fs')

const server = http.createServer((req,res)=>{
   
    const homepage = readFileSync('./public/index.html')
    const stylepage = readFileSync('./public/style.css')

    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()       
    }
    else if(req.url==='/'){
        res.writeHead
    }
    
})

server.listen(5000,()=>{
    console.log(`server is just starting...`);

})