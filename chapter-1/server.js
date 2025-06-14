const express = require('express')
const app = express()
const PORT = 5674

const data = ['James']
// HTTP VERBS && Routes (or paths)
//CRUD...    CREATE-post READ-get UPDATE-put DELETE-del

//Endpoint

//Website Endpoints- These are endpoints are for sending back html and they typically
//come when a user enters a url in a browser
app.get('/', (req,res)=>{
   console.log(`Hello there!`, req.method);
   res.send(`
    <body style='background:blue; color:white;'>
    <h1>${JSON.stringify(data)} </h1>
    </body>
    `)
 g
   res.sendStatus(200)
})

app.get('/location',(req, res)=>{
      res.send('Hello Im around!')
      console.log('Welcome');
      
     
      
})

//API Enpoint

app.get('/api/data', (req, res) =>{
    res.send(data)
})


//MIDDLEWARE
app.use(express.json())

app.post('/api/datayou', (req, res)=>{
    // someone wants to create a user(for example when they click a sign up button)
    // the user clicks the sign up button after entering their credentials, and their broweser is wired up to send out a network request  to the sever to handle that action

    const newEntry = req.body
    res.sendStatus(201)
    data.push(newEntry.name)
   console.log(newEntry); 
   
})

app.delete('apu/data', (req, res)=>{
    data.pop()
})


app.listen(PORT, ()=> console.log(`sed djver has started: ${PORT}`))