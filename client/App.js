import React from "react";
// import axios from 'axios';
import ForecastBlock from './ForecastBlock';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [0, 0, 0, 0, 0, 0, 0],
            currentDay: null
        }
    }

    // On componentDidMount request weather data from API

    // on selection of element, show weather as a drop down list for day specified

    render() {
        return (
            <div>
                <ForecastBlock days={this.state.days}></ForecastBlock>
            </div>
        )
    }
}

export default App;