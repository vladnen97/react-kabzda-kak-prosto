import React, {useState} from 'react'

export default {
    title: 'Components/useState demo'
}

function generateData() {
    //dificult counting
    return 134246
}

export const Example1 = () => {
    //pass a func for value
    const [count, setCounter] = useState<number>(generateData);


    return (
        <div>
            <div style={{marginLeft: '34px', marginBottom: '20px'}}>{count}</div>
            <button onClick={() => setCounter(state => state + 1)}> + </button>
            <button onClick={() => setCounter(0)}> reset </button>
        </div>
    )
}



