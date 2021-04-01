let brain = require('brain.js')
let fs = require('fs')
const net = new brain.NeuralNetwork();
net.fromJSON(require('./network.json'))

module.exports = function(app){
  app.post('/api/inputTest', (req, res) => {
    let bodyReq = req.body;
    if(req.body === undefined){
      res.json({"error":true, "reason":"Missing body params"})
      return
    }
    console.log(req.body)
    let out = net.run(bodyReq)
    setTimeout(() => {
      res.json({"error":false, ...out})
    },500)
  })
  app.get('/api/inputTest', (req, res) => {
    res.json({"error":true, "reason":"Method for this route isn't supported"})
  })
}