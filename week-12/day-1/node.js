const express = require('express')
const app = express()
 
app.get('/',  (req, res) => {
    res.sendFile(__dirname + "/index.hu.html");
})



app.use('/assets', express.static('assets'));


 
app.listen(3000)