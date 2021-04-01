// THIS FILE IS FOR TRAINING ONLY DO NOT CONNECT IT TO THE EXPRESS SERVER, MAJOR SECURITY BUG!

// (c) Harvey Randall - 2020-2021 
// GCSE exam algorithm for EPQ



let brain = require('brain.js')
let fs = require('fs')

const net = new brain.NeuralNetwork({ log: true, errorThresh: 0.0005, iterations: Infinity, hiddenLayers: [3], });
let input = []

for(let i=0;i<10;i++){
  let min = 1
  let max = 9
  let LastMockresult = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  let TargetGrade = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  let PredictedGrade = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  let AttitudeToLearing = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  console.table({LastMockresult:LastMockresult*10,TargetGrade:TargetGrade*10,PredictedGrade:PredictedGrade*10,AttitudeToLearing:AttitudeToLearing*10})
  let grade = prompt('What grade should ths get ')
 // let grade = Math.random()*10
  input.push(
  { input: { LastMockresult, TargetGrade, PredictedGrade, AttitudeToLearing}, output: { AchievedGrade:grade/10 }} )
}
//console.log(input)
net.train(input, { keepNetworkIntact: true });
4
saveFile()
function saveFile(){
    fs.writeFile("network.json", JSON.stringify(net.toJSON()), function(err) {
        if(err)
            return console.log(err);

        console.log("The file was saved!");
    });
}
//net.fromJSON(require('./network.json'))

let omittedData = { LastMockresult: 3/10, TargetGrade: 8/10, PredictedGrade: 7/10,AttitudeToLearing:4/4}
console.log(omittedData)
fs.writeFileSync('./outputdata.txt', JSON.stringify({input:input}))
const output = net.run(omittedData); // { white: 0.99, black: 0.002 }
console.log('I would award them a grade '+Math.floor(output.AchievedGrade*10))

let strOut = ``
let arrayOut = []
for(let i=0;i<10000;i++){
  let min = 1
  let max = 9
  let LastMockresult = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  let TargetGrade = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  let PredictedGrade = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  let AttitudeToLearing = (Math.floor(Math.random() * (max - min + 1)) + min)/10;
  let out = net.run({ LastMockresult, TargetGrade, PredictedGrade, AttitudeToLearing})
  strOut = strOut + `${((LastMockresult+TargetGrade+PredictedGrade+AttitudeToLearing)/4)*9}\t${out.AchievedGrade*9}\n`
  arrayOut.push([((LastMockresult+TargetGrade+PredictedGrade+AttitudeToLearing)/4)*9, out.AchievedGrade*9])
}

fs.writeFileSync("bufferOut.txt", strOut)

//plot.set({term:"png size 800,600", output:"./plot.png"})