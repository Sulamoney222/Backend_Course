const app = require('express')()
const {products} = require('./data.js')
const logger = require('./logger.js')

const PORT = 5000 || process.env

   app.use(logger)

   app.get('/', (req,res)=>{
   
    const allProducts = products.map((pro)=>{
    const {id,age,name,skill} = pro
    return {id, age, name, skill}
   })
   res.status(200).json(allProducts)
   })

   app.get('/api/:productID', (req,res)=>{
   
    const {productID} = req.params

   const singleProduct = products.find((product)=> product.id === Number(productID))
   if(!singleProduct){
    return res.status(404).send('Page does not exists')
   }
  })

  app.get('/api/v/query', (req,res)=>{
   // console.log(req.query);
   // res.status(201).send('Hello World how are you')
    
    
  })

app.listen(PORT, ()=>{
    console.log(`Server is listening.... ${PORT}`);    
})