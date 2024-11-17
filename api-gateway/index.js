const express = require('express');
const gateway = require('fast-gateway');
const port = 9001;
const server = gateway({
  routes: [
    {
    prefix: '/order',
    target: 'http://localhost:3002/',
    hooks:{

    }
  }, 
  {
    prefix: '/user',
    target: 'http://localhost:3001/',
    hooks:{
  
    }

  }

  
 ]
})

server.get('/test/',(req,res) => {
    res.send('API Gateway Start Here')
})

server.start(port).then(server =>{
    console.log(`API Gateway running on port ${port}`)
})