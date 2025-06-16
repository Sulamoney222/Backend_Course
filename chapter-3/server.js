const express = require('express')

const app = express()

//The env returns an object containing the user environment
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('Server has started' + PORT);
    
})
