const app = require('express')()

const PORT = 5000 || process.env

app.listen(PORT, ()=>{
    console.log(`Server is listening.... ${PORT}`);
    
})