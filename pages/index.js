// (c) Harvey Randall - 2020-2021 
// GCSE exam algorithm for EPQ

import React, { useState, useEffect, } from 'react';
import axios from 'axios'
import Slider from '@material-ui/core/Slider';
import styles from "../styles/form.module.css"
import { Sliders } from '../components/slider'
import Alert from '@material-ui/lab/Alert';

function HomePage() {
  let [testHook, setTestHook] = useState(undefined)

  //Hooks 
  let [LastMockresult, setLastMockresult] = useState(1)
  let [TargetGrade, setTargetGrade] = useState(1)
  let [PredictedGrade, setPredictedGrade] = useState(1)
  let [AttitudeToLearing, setAttitudeToLearing] = useState(1)

  //Return Hook
  let [result, setResult] = useState(undefined)

  useEffect(() => {
    (async () => {
       try{
        let data = await axios.get(window.origin + '/api/test')
        setTestHook(data.data)
      }catch(e){
        setTestHook(e)
      }
    })();
  }, [])

  let sendToServer = async (e) => {
    e.preventDefault();
    setResult("LOADING...")
    let data = await axios.post(window.origin + '/api/inputTest', {LastMockresult, TargetGrade, PredictedGrade, AttitudeToLearing})
    console.log({LastMockresult, TargetGrade, PredictedGrade, AttitudeToLearing})
    console.log(data.data.AchievedGrade)
    setResult(data.data.AchievedGrade)
  }
  return(
    <div className={styles.main}>
      <div>Welcome to the front end!!</div>
      <h3 className={styles.ResultBox}>{ testHook ? "Server is fully loaded and functional!" : "Loading..." }</h3>
      <h1 className={styles.ResultBox}>{ result ? `I would award this student a grade ${Math.floor(result*9)} with a confidence of ${((result - (Math.floor(result*9)/9))*2000)}%` : "" } </h1>
      <Alert className={styles.Form + ' '+ styles.center} severity="warning">This students grade is 2 above there last mock result, you need to verify this grade</Alert>
      <div className={styles.Form}>
        <Sliders max={9} title="Last Mock result" onChange={(e, val) => setLastMockresult(val/9)} />
        <Sliders max={9} title="Target Grade" onChange={(e, val) => setTargetGrade(val/9)} />
        <Sliders max={9} title="Predicted Grade" onChange={(e, val) => setPredictedGrade(val/9)} />
        <Sliders max={4} title="Attidue to Learning" onChange={(e, val) => setAttitudeToLearing(val/4)} />
        <button onClick={sendToServer} className={styles.button}>Send to Server</button>
      </div>
    </div>
  )
}

export default HomePage