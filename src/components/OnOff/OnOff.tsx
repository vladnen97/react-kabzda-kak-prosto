import React, {useState} from 'react';


export function OnOff() {

    const [on, setOn] = useState<boolean>(false);

    const switcher = {
        marginTop: '40px',
        borderTop: '1px solid rgb(0 , 0 ,0 , 0.3)',
        paddingTop: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    }
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        padding: '4px 6px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer'
    };
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        padding: '4px 6px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer'
    };
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '2px solid black',
        backgroundColor: on ? 'green' : 'red',
    };

    return (
        <div style={switcher}>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

