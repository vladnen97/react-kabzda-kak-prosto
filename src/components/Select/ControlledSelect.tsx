import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function ControlledSelect({value, items, onChange}: PropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onClickHandler = (value: any) => {
        onChange(value);
        setCollapsed(true)
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', width: '150px', border: '1px solid black', margin: '0'}}
                onClick={() => setCollapsed((collapsed) => !collapsed)}>-- {value} --</h1>

            {!collapsed && <div style={{textAlign: 'center', width: '150px', border: '1px solid black'}}>
                {
                    items.map((el, i) => <div key={i} onClick={() => onClickHandler(el.value)}>{el.title}</div>)
                }
            </div>}
        </div>
    );
}

