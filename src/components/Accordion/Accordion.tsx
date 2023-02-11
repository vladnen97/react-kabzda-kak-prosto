import React, {useState} from 'react';
import {Rating} from '../Rating/Rating';

type AccordionPropsType = {
    titleName: string,
}
type AccordionTitlePropsType = {
    title: string
    toggle: () => void
}


function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);

    function toggle():void {
        setCollapsed(!collapsed);
    }

        return (
            <div className="accordion">
                <AccordionTitle title={props.titleName} toggle={toggle}/>
                { !collapsed &&  <> <AccordionBody/> <Rating setValue={setValue} value={value}/> </>}
            </div>
        );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={props.toggle}>--- {props.title} --- </h2>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1 item</li>
            <li>2 item</li>
            <li>3 item</li>
            <li>4 item</li>
        </ul>
    );
}

export default Accordion;