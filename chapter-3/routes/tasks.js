const express = require('express')
const router = express.Router()

router.get('/task', (req, res) => {
    res.send('How are you doing')
})

module.exports = router
