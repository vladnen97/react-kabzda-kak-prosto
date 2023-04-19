import React, {useEffect, useState} from 'react';
import './Clock.css'

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={"clock"}>
            <h3>Moscow</h3>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle} />
                <div className={"dial minutes"} style={minutesStyle} />
                <div className={"dial hours"} style={hoursStyle} />
            </div>
            <div className={"digital-clock"}>
                {date.toLocaleTimeString()}
            </div>
        </div>
    );
};

