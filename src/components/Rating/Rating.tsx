import React from "react";


export function Rating(props: {value: 0 | 1 | 2 | 3 | 4 | 5}) {
    return (
        <div className="rating">
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
}

function Star(props: {selected: boolean}) {
    return props.selected ? <b>star </b> : <>star </>;
}