import React, {useState} from 'react';


export function Rating() {

    const [value, setValue] = useState<number>(0)



    return (
        <div className="rating">
            <button onClick={() => setValue(0)}> 0</button>
            <Star selected={value > 0}/> <button onClick={() => setValue(1)}> 1</button>
            <Star selected={value > 1}/> <button onClick={() => setValue(2)}> 2</button>
            <Star selected={value > 2}/> <button onClick={() => setValue(3)}> 3</button>
            <Star selected={value > 3}/> <button onClick={() => setValue(4)}>  4</button>
            <Star selected={value > 4}/> <button onClick={() => setValue(5)}> 5</button>
        </div>
    );
}

function Star(props: {selected: boolean}) {
    return props.selected ? <b>star </b> : <span>star </span>;
}