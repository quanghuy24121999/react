import React, {Component} from 'react';
import './TrafficLight.css';

const RED = 0;
const YELLOW = 1;
const GEREEN = 2;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor : RED
        }
        setInterval(() => {
            this.setState ({
                currentColor: this.getNextColor(this.state.currentColor)
            })
        }, 1000);
    }

    getNextColor(color){
        switch(color){
            case RED:
                return YELLOW;
            case YELLOW:
                return GEREEN;
            default:
                return RED;
        }
    }

    render() {
        var lightRed = 'light red';
        var lightYellow = 'light yellow';
        var lightGreen = 'light green';

        if(this.state.currentColor === RED) {
            lightRed += ' active';
        } else if(this.state.currentColor === YELLOW) {
            lightYellow += ' active';
        } else {
            lightGreen += ' active';
        }

        return (
            <div className="traffic-light">
                <div className={lightRed}/>
                <div className={lightYellow}/>
                <div className={lightGreen}/>    
            </div>
        );
    }
}

export default TrafficLight;