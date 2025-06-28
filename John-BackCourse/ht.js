const http = require('http')
const {readFileSync} = require('fs')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'})
    
  if(req.url === '/'){
  res.write(`<h1 style= 'color:blue'>Hello, how are you doing? </h1>`)
  }else if(req.url === '/about'){
    res.write(`<h1 style= 'color:red'>Hello, this is fum</h1>`)
  } else {
    res.write(`<h1>Page not found!</h1>`)
  }
   res.end()
})

server.listen(5000,()=>{
    console.log(`server is just starting...`);

})