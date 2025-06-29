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
   if(name){
   return res.status(200).send(`Welcome to our page ${name}`)
   }else{
     return res.status(400).send(`Pls input name!`)
   }
    
}) 

app.listen(5000, ()=>{
    console.log(`Server is listening....`);
    
})