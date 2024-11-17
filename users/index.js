const express = require('express');
const app = express();
const port = 3001;

app.get('/user',(req,res) => {
    const data = [{
        name: "Atul",
        email: "atul@gmail.com"
    }]
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })