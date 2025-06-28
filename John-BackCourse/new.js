const app = require('express')()

const PORT = 5000 || process.env

  app.get('/', (req,res)=>{
    res.status(200).json({id:1, name: 'Nasiru Sulaimon', age:23})
  })

app.listen(PORT, ()=>{
    console.log(`Server is listening.... ${PORT}`);    
})