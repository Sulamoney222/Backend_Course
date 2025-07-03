const express = require('express')
const { people } = require('./data')
const app = express()

//middleware
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hello World')
    
})

app.post('/login', (req,res)=>{
   const {name} = req.body
   if(name){
   return res.status(200).send(`Welcome to our page ${name}`)
   }else{
     return res.status(400).send(`Pls input name, blank page!`)
   }
    
})

app.get('/api/people', (req,res)=>{
     res.status(200).json({success:true, data:people})
})
app.post('/api/people', (req,res)=>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({success:false, msg: 'Pls provide credentials'})
  }
  res.status(200).json({success:true,person:name})

})

app.listen(5000, ()=>{
    console.log(`Server is listening....`);
    
})