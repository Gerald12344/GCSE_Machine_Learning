// (c) Harvey Randall - 2020-2021 
// GCSE exam algorithm for EPQ

//------------[ BACKEND ]------------\\

// Depencies
const express = require('express')
const next = require('next')

// Import Machine Learning handling file
const ML = require("./server/ml.js")

//Project setings
const port = parseInt(process.env.PORT, 10) || 3000 //Port to server on
const dev = false //process.env.NODE_ENV !== 'production' //Production true/false
const app = next({ dev }) // NextJS start server
const handle = app.getRequestHandler() //get access to the web request


// Start Development / Production server
app.prepare().then(() => {

  //Create Server
  const server = express()

  // ------ Middleware ------ \\
  server.use(express.json());
  ML(server) // call Machine learning middleware
  
  // Test API for debugging
  // TODO: Remove this API
  server.get('/api/test', (req, res) => {
    res.end('Reading you loud and clear!')
    return
  })

  // get all requests and if they include api for the backend, don't send html
  server.get('*', (req, res) => {
    if(req.url.includes('api')){return}
    return handle(req, res) //Send webpage
  })


  //Tell the server which port to listen to
  server.listen(port, (err) => {
    if (err) throw err //Catch errors
    console.log(`> Ready on http://localhost:${port}`) // TODO: Use Async logger
  })
})