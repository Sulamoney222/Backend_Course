import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './src/routes/authRoutes.js'
import todoRoutes from './src/routes/todoRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

//getting the current URL path of our filename
const __filename = fileURLToPath(import.meta.url)

//getting the current directory of our file
const __dirname = dirname(__filename)

//Middleware
app.use(express.json())
//tells express to serve all files from the public folder as static assests
//any requests for the css files will be resolved to the public directory
app.use(express.static(path.join(__dirname, './public')))


app.get('/', (req, res)=>{
    //getting the endpoint of that serving website
    res.sendFile(path.join(__dirname, 'public', 'indx.html'))

})


//using the authentication pages
app.use('/auth',authRoutes)
//getting the todos
app.use('/todos',todoRoutes)


app.listen(PORT, ()=>{
    console.log(`Servr has started on port: ${PORT}`); 
    console.log(`Servr has starte: ${PORT}`);  
    console.log('Hello World');
    
})
