import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './ControlledSelect.module.css'

type ItemType = {
    title: string
    value: any
}
type PropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function ControlledSelect({value, items, onChange}: PropsType) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    useEffect(() => {
        setHoveredElementValue(value);
    }, [value])

    const selected = items.find((el) => el.value === value)
    const hoveredItem = items.find((el) => el.value === hoveredElementValue)

    const onItemClick = (value: any) => {
        onChange(value)
        setActive(false)
    }
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]

                    if (pretendentElement) {
                        onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selected) onChange(items[0].value);
        }

        if (e.key === "Enter") {
            setActive(!active)
            return;
        }

        if (e.key === "Escape") {
            setActive(false)
            return;
        }
    }

    return (
        <div onKeyDown={onKeyPress} tabIndex={0}>
            <span className={s.selected}
                  onClick={() => setActive((collapsed) => !collapsed)}>
                -- {selected?.title || 'None'} -- <i className={s.arrow + ' ' + (active ? s.up : s.down)}></i>
            </span>

            {active && <div className={s.items}>
                {items.map((el, i) => <div
                    key={i}
                    onClick={() => onItemClick(el.value)}
                    onMouseEnter={() => setHoveredElementValue(el.value)}
                    className={s.item + (el === hoveredItem ? ' ' + s.current : '')}>
                    {el.title}
                </div>)}
            </div>
            }
        </div>
    )
}

export const ControlledSelectContainer = React.memo(ControlledSelect)

