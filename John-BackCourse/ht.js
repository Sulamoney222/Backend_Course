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
    else if(req.url==='/style.css'){
        res.writeHead(201, {'content-type': 'text/css'})
        res.write(stylepage)
        res.end()
    }
     res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>Page not found!</h1>`)
        res.end()  
    
    
    
})

server.listen(5000,()=>{
    console.log(`server is just starting...`);

})