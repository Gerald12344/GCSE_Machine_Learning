import Slider from '@material-ui/core/Slider';
import styles from "../styles/form.module.css"

export function Sliders(props) {
  return(
    <>
      <h3>{props.title}</h3>
      <div className={styles.bar}>
        <Slider
            defaultValue={1}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={props.max}
            onChange={props.onChange}
          />
        </div>
    </>
  )
}