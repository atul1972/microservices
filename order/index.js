const express = require('express');
const app = express();
const port = 3002;

app.get('/order',(req,res) => {
    res.send('Order Data')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })