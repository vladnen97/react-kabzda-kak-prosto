import React, {useEffect, useState} from 'react'

export default {
    title: 'Components/useEffect demo'
}


export const Example1 = () => {
    const [fake, setFake] = useState<number>(0);
    const [count, setCounter] = useState<number>(1);

    console.log('example 1')

    useEffect(() => {
        console.log('useEffect every render')
    })

    useEffect(() => {
        console.log('useEffect only first render')
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every time when count changes')
    }, [count])


    return (
        <div>
            <div style={{marginLeft: '34px', marginBottom: '20px'}}>Hello, {count}, {fake}</div>
            <button onClick={() => setCounter(state => state + 1)}> count +</button>
            <button onClick={() => setFake(state => state + 1)}> fake +</button>
        </div>
    )
}

export const SetTimeoutExample = () => {
    const [count, setCounter] = useState<number>(0);


    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return (
        <div>
            <div style={{marginLeft: '34px', marginBottom: '20px'}}>counter - {count};</div>

        </div>
    )
}

export const ResetEffectExample = () => {
    const [text, setText] = useState<string>('');


    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return (
        <div>
            typed text: {text}
        </div>
    )
}

