import React from "react";
import {Rating} from '../Rating/Rating';

type AccordionPropsType = {
    titleName: string,
    collapsed?: boolean
    stars: 0 | 1 | 2 | 3 | 4 | 5
}
type AccordionTitlePropsType = {
    title: string
}


function Accordion(props: AccordionPropsType) {
        return (
            <div className="accordion">
                <AccordionTitle title={props.titleName}/>
                { !props.collapsed &&  <> <AccordionBody/><Rating value={props.stars}/> </>}
            </div>
        );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2>--- {props.title} --- </h2>
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