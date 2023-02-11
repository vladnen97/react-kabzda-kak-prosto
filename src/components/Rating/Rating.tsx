import React, {useState} from 'react';


export function Rating() {

    const [value, setValue] = useState<number>(0)

    const stars = [
        {id: 1, title: 'star'},
        {id: 2, title: 'star'},
        {id: 3, title: 'star'},
        {id: 4, title: 'star'},
        {id: 5, title: 'star'},
    ]

    return (
        <div className="rating">
            {stars.map(star => value > star.id - 1
                ? <b key={star.id} onClick={() => setValue(star.id)}> {star.title} </b>
                : <span key={star.id} onClick={() => setValue(star.id)}> {star.title} </span>)}
        </div>
    );
}