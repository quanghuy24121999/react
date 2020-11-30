import React, {Component} from 'react';
import classNames from 'classnames';
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
        return (
            <div className="traffic-light">
                <div className={classNames('light', 'red', {
                    'active': this.state.currentColor === RED
                })}/>
                <div className={classNames('light', 'yellow', {
                    'active': this.state.currentColor === YELLOW
                })}/>
                <div className={classNames('light', 'green', {
                    'active': this.state.currentColor === GEREEN
                })}/>   
            </div>
        );
    }
}

export default TrafficLight;