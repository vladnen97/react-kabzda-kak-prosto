import React, {useMemo, useState} from 'react'
import {ControlledSelectContainer} from '../components/Select/ControlledSelect';

export default {
    title: 'Components/useMemo demo'
}

export const UseMemo = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(5)

    let resultB = 1;

    const resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 2; i <= a; i++) {
            let fake = 0;
            while (fake < 50000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i;
        }
        return tempResultA;

    }, [a])



    for (let i = 2; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <div style={ {display: 'flex', gap: '20px'} }>

            <div>
                <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
                <hr/>
                result for a: {resultA}
            </div>
            <div>
                <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
                <hr/>
                result for b: {resultB}
            </div>

        </div>
    </>

}


const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}
const Users = React.memo(UsersSecret)


export const HelpsForReactMemo = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState(['vlad', 'misha', 'dimasik', 'sasha']);

    const filteredArray = useMemo(() => {
        return users.filter(el => el.includes('s'))
    }, [users]);

    return (
        <div style={{display: 'flex', gap: '30px', alignItems: 'flex-start'}}>

            <button onClick={() => setCounter(counter + 1)}> +</button>
            <button onClick={() => setUsers([...users, 'sveta']) }> add sveta </button>
            <div>{counter}</div>
            <Users users={filteredArray}/>

        </div>
    )
}

export const MemoSelects = () => {
    const cities = [
        {value: 'abacan', title: 'Abacan'},
        {value: 'armavir', title: 'Armavir'},
        {value: 'anapa', title: 'Anapa'},
        {value: 'belgorod', title: 'Belgorod'},
        {value: 'bryansk', title: 'Bryansk'},
        {value: 'bezhetsk', title: 'Bezhetsk'},
        {value: 'viborg', title: 'Viborg'},
        {value: 'vorkuta', title: 'Vorkuta'},
        {value: 'volgograd', title: 'Volgograd'}
    ]

    const [select1, setSelect1] =useState('abacan')
    const [select2, setSelect2] =useState('belgorod')
    const [select3, setSelect3] =useState('viborg')


    const Acities = useMemo(() => {
        return cities.filter(el => el.title.includes('A'))
    }, [])
    const Bcities = useMemo(() => {
        return cities.filter(el => el.title.includes('B'))
    }, [])
    const Vcities = useMemo(() => {
        return cities.filter(el => el.title.includes('V'))
    }, [])


    return (
        <div style={ {display: 'flex', gap: '20px', flexDirection: 'column'} }>
            <ControlledSelectContainer onChange={setSelect1} items={Acities} value={select1}/>
            <ControlledSelectContainer onChange={setSelect2} items={Bcities} value={select2}/>
            <ControlledSelectContainer onChange={setSelect3} items={Vcities} value={select3}/>
        </div>
    )

}



