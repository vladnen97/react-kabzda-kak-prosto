import React, {useMemo, useState} from 'react'

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



