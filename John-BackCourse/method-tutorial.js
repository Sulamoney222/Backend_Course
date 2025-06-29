const express = require('express')
const app = express()

//middleware
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))


app.get('/',(req,res)=>{
    res.send('Hello World')
    
})

app.post('/login', (req,res)=>{
   const {name} = req.body
   
    
}) 

app.listen(5000, ()=>{
    console.log(`Server is listening....`);
    
})