import {clear} from "@testing-library/user-event/dist/clear";
import React, {Component} from "react";

var timer = 50
class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {time: timer}
        this.updateTime = this.updateTime.bind(this);
        this.start = this.start.bind(this);
    }
    start() {
        clearInterval(clear);
        this.setState({time: timer});                    // Festlegung von welcher Variable aus heruntergezählt werden soll
        clear = setInterval(this.updateTime, 1000);       // Aktualisierung der Zeit jede 500 Milisekunden
    }
    updateTime() {
        if (this.state.time > 1) {
            this.setState({time: this.state.time - 1});
        }
        else {
            this.setState({time:"FERTIG"});
        }
    }
    render() {
        return (<>
        {this.state.time} <br/>
        <button onClick={this.start}>Start!</button>
        </>)
    }
}

export default Timer;