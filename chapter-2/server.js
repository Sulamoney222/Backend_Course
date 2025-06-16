import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5000

//getting the current URL path of our filename
const __filename = fileURLToPath(import.meta.url)

//getting the current directory of our file

const __dirname = dirname(__filename)

//tells express to serve all files from the public folder as static assests
//any requests for the css files will be resolved to the public directory
app.use(express.static(path.join(__dirname, './public')))


app.get('/', (req, res)=>{
    //getting the endpoint of that serving website
    res.sendFile(path.join(__dirname, 'public', 'indx.html'))

})


app.listen(PORT, ()=>{
    console.log(`Servr has started on port: ${PORT}`); 
    console.log(`Servr has starte: ${PORT}`);  
    console.log('Hello World');
    
})
