import React from 'react';
import {Rating} from '../Rating/Rating';

type AccordionPropsType = {
    titleName: string,
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
type AccordionTitlePropsType = {
    title: string
    toggle: () => void
}


export function ControlledAccordion({titleName, collapsed, setCollapsed}: AccordionPropsType) {

    function toggle():void {
        setCollapsed(!collapsed);
    }

        return (
            <div className="accordion">
                <AccordionTitle title={titleName} toggle={toggle}/>
                { !collapsed &&  <> <AccordionBody/> <Rating onChange={x=>x}/> </>}
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
