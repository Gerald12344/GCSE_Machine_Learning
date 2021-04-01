import React, { useState, useEffect, } from 'react';
import axios from 'axios'
import Slider from '@material-ui/core/Slider';
import styles from "../styles/form.module.css"
import { Sliders } from '../components/slider'

function HomePage() {
  let [testHook, setTestHook] = useState(undefined)

  //Hooks 
  let [PredictedGrade, setPredictedGrade] = useState(1)
  let [one, setOne] = useState("loading")
  let [two, setTwo] = useState("loading")
  let [three, setThree] = useState("loading")
  let [four, setFour] = useState("loading")

  useEffect(() => {
    setOne(Math.floor(Math.random() * 9))
    setTwo(Math.floor(Math.random() * 9))
    setThree(Math.floor(Math.random() * 9))
    setFour(Math.floor(Math.random() * 9))
  },[])

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
    setResult(Math.floor(data.data.AchievedGrade*9))
  }
  return(
    <div className={styles.main +' '+ styles.center}>
      <div>Welcome to the front end!!</div>
      <h3 className={styles.ResultBox}>{ testHook ? "Server is fully loaded and functional!" : "Loading..." }</h3>
      <h1>What grade would you award this student </h1>
      <div className={styles.Form}>
        <h3>LastMockresult: {one}</h3>
        <h3>TargetGrade: {two}</h3>
        <h3>PredictedGrade: {three}</h3>
        <h3>AttitudeToLearing: {four}</h3>

        <Sliders max={9} title="Acheived Grade" onChange={(e, val) => setPredictedGrade(val/9)} />
        <button onClick={sendToServer} className={styles.button}>Send to Server</button>
      </div>
    </div>
  )
}

export default HomePage