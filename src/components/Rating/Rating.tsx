import React from "react";


export function Rating(props: {value: 0 | 1 | 2 | 3 | 4 | 5}) {
    if (props.value === 1) {
        return (
            <div className="rating">
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div className="rating">
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div className="rating">
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {
        return (
            <div className="rating">
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div className="rating">
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

    return (
        <div className="rating">
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

function Star(props: {selected: boolean}) {
    return props.selected ? <b>star </b> : <>star </>;
}