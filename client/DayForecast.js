import React from "react";
import styles from "./DayForecast.css";
import sunny from "../assets/sunny.png";

const DayForecast = props => {
    return (
        <div className={styles.daycontainer}>
            <h1>Today's Weather is...</h1>
            <div className={styles.weathericon}>
                <img src={sunny} alt="sunny"></img>
            </div>
        </div>
    )
}

export default DayForecast;