// (c) Harvey Randall - 2020-2021 
// GCSE exam algorithm for EPQ

let brain = require('brain.js')
let fs = require('fs')
const net = new brain.NeuralNetwork();
net.fromJSON(require('./network.json'))

// TODO: Add ASYNC logger

module.exports = function(app){
  //Setup readable datastream
  const trainStream = new brain.TrainStream({
    neuralNetwork: net,
    floodCallback: function () {
      flood(trainStream, data);
    },

    //Call back on done
    doneTrainingCallback: function (stats) {
      // TODO: Remove console.log in production!
      console.log("Training event sumbmitted, and retrained")
    },
  });


  //Basic neural network fitting
  app.post('/api/inputTest', (req, res) => {
    //Extract data from body using express JSON middleware
    let bodyReq = req.body;

     //Guard statement to not crash the server in a 401 Maformed error
    if(req.body === undefined){
      res.json({"error":true, "reason":"Missing body params"})
      return
    }

    //Console output for DEBUG
    // TODO: Remove console.log in production!
    console.log(req.body)
    let out = net.run(bodyReq)
    setTimeout(() => {
      res.json({"error":false, ...out})
    },500)
  })
  app.get('/api/inputTest', (req, res) => {
    res.json({"error":true, "reason":"Method for this route isn't supported"})
  })

  //Input to readable datastream
  app.post('/api/addtoDataTraining', (req, res) => {
    //Extract data from body using express JSON middleware
    let bodyReq = req.body;

    //Guard statement to not crash the server in a 401 Maformed error
    if(req.body === undefined){
      res.json({"error":true, "reason":"Missing body params"})
      return
    }
    // TODO: Remove console.log in production!
    console.log(req.body)

    //take data out of body and send to datastream 
    trainStream.write(req.body);
    
    //Status method
    res.json({"error":false, "reason":"Successfully submitted data"})
  })

  //Nice error for people using this as a endpoint API
  app.get('/api/addtoDataTraining', (req, res) => {
    //Status method
    res.json({"error":true, "reason":"Method for this route isn't supported"})
  })
}