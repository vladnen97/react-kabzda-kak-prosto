import React from 'react';


export function Rating(props: any) {
    type starType = {
        id: number
        title: string
    };


    const stars: Array<starType> = [
        {id: 1, title: 'star'},
        {id: 2, title: 'star'},
        {id: 3, title: 'star'},
        {id: 4, title: 'star'},
        {id: 5, title: 'star'},
    ];


    return (
        <div className="rating">
            {stars.map(star => props.value > star.id - 1
                ? <b key={star.id} onClick={() => props.setValue(star.id)}> {star.title} </b>
                : <span key={star.id} onClick={() => props.setValue(star.id)}> {star.title} </span>)}
        </div>
    );
}