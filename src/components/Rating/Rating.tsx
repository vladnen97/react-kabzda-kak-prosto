import React, {useState} from 'react';


type StarProps = {
    selected: boolean
}

export function Rating() {
    const [value, setValue] = useState<number>(0);


    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    );
}

function Star(props: StarProps) {
    return props.selected ? <b> star </b> : <span> star </span>
}