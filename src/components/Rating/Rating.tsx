import React, {useState} from 'react';


type StarProps = {
    selected: boolean
    setValue: () => void
}

type PropsType = {
    /**
     * number of stars in the rating by default
     */
    defaultValue?: 1 | 2 | 3 | 4 | 5
    /**
     * Callback. called when the star click event fires
     * @param value number of starts
     */
    onChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void

}

export function Rating({defaultValue, onChange}:PropsType) {
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(defaultValue ? defaultValue : 0);


    return (
        <div>
            <Star selected={value > 0} setValue={() => {
                setValue(1); onChange(1)
            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2); onChange(2)
            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3); onChange(3)
            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4); onChange(4)
            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5); onChange(5)
            }}/>
        </div>
    );
}

function Star(props: StarProps) {
    return <span onClick={props.setValue}>
        {props.selected ? <b> star </b> : ' star '}
    </span>
}