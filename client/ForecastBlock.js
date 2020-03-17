import React from "react";
import styles from "./ForecastBlock.css";
import DayForecast from "./DayForecast";

const ForecastBlock = props => {
    return (
        <div className={styles.gridcontainer}>
            {props.days.map((day, index) => (
                <DayForecast key={index}></DayForecast>
            ))}
        </div>
    )
}

export default ForecastBlock;