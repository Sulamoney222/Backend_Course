const express = require('express')
const tasks = require('./routes/tasks')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/auth', tasks)

app.listen(PORT, () => {
    console.log('Server has started on port ' + PORT)
})
