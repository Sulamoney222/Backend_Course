import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Servr has started on port: ${PORT}`); 
    console.log(`Servr has starte: ${PORT}`);  
    console.log('Hello World');
    
})
