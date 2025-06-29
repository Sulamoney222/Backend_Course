const express = require('express')
const app = express()

//middleware
app.use(express.static('./methods-public'))


app.get('/',(req,res)=>{
    res.send('Hello World')
    
})

app.post('/login', (req,res)=>{
    res.send('Hello, how are you doing?')
}) 

app.listen(5000, ()=>{
    console.log(`Server is listening....`);
    
})