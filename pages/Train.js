// (c) Harvey Randall - 2020-2021 
// GCSE exam algorithm for EPQ

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

  //Return Hook
  let [result, setResult] = useState(undefined)
  let [update, forceUpdate] = useState(0)

  useEffect(() => {
    setOne(Math.floor(Math.random() * 9))
    setTwo(Math.floor(Math.random() * 9))
    setThree(Math.floor(Math.random() * 9))
    setFour(Math.floor(Math.random() * 9))
  },[update])


  useEffect(() => {
    (async () => {
       try{
        let data = await axios.get(window.origin + '/api/test')
        setTestHook(data.data)
      }catch(e){
        setTestHook(e)
      }
    })();
  },[])

  let sendToServer = async (e) => {
    e.preventDefault();
    forceUpdate(update + 1)
    let data = axios.post(window.origin + '/api/addtoDataTraining', {LastMockresult:one, TargetGrade:two, PredictedGrade:three, AttitudeToLearing:four, PredictedGrade})
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
      <p> You have entererd {update} data entries</p>
    </div>
  )
}

export default HomePage