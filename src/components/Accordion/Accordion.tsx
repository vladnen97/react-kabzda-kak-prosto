import React from "react";

type AccordionPropsType = {
    titleName: string,
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}


function Accordion(props: AccordionPropsType) {
    if (!props.collapsed) {
        return (
            <div className="accordion">
                <AccordionTitle title={props.titleName}/>
                <AccordionBody/>
            </div>
        );
    } else {
        return (
            <div className="accordion">
                <AccordionTitle title={props.titleName}/>
            </div>
        );
    }
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