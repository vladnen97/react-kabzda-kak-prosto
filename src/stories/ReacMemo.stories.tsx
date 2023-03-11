import React, {useState} from 'react'

export default {
    title: 'Components/React.memo demo'
}

const NewMessagesCounterSecret = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}


const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)


export const Example1 = () => {
    const [count, setCounter] = useState<number>(0);
    const [users, setUsers] = useState(['vlad', 'misha', 'dima', 'sasha']);


    return (
        <div style={{display: 'flex', gap: '30px', alignItems: 'flex-start'}}>

            <button onClick={() => setCounter(count + 1)}> +</button>
            <button onClick={() => setUsers([...users, 'sveta']) }> add sveta </button>
            <NewMessagesCounter count={count}/>
            <Users users={users}/>

        </div>
    )
}