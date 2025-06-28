const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'})

})

server.listen(5000,()=>{
    console.log(`server is just starting...`);
    
})