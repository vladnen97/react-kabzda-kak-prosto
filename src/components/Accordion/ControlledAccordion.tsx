import React from 'react';
import {Rating} from '../Rating/Rating';

type AccordionTitlePropsType = {
    title: string
    toggle: () => void
}
type AccordionBodyPropsType = {
    items: Array<{id: number, text: string}>
    onClick: (value: string) => void
}
type AccordionPropsType = {
    /**
     *title of the accordion
     */
    titleName: string,
    /**
     *is accrodion collapsed or not
     */
    collapsed: boolean
    /**
     *  function that change will be accordion collapsed or  not
     * @param collapsed value to be set
     */
    setCollapsed: (collapsed: boolean) => void
    /**
     * list items inside an accordion
     */
    items: Array<{id: number, text: string}>

    onClick: (value: string) => void
}


export function ControlledAccordion({titleName, collapsed, setCollapsed, items, onClick}: AccordionPropsType) {

    function toggle():void {
        setCollapsed(!collapsed);
    }

        return (
            <div className="accordion">
                <AccordionTitle title={titleName} toggle={toggle}/>
                { !collapsed &&  <> <AccordionBody items={items} onClick={onClick}/> <Rating onChange={x=>x}/> </>}
            </div>
        );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={props.toggle}>--- {props.title} --- </h2>
    );
}
function AccordionBody({items, onClick}: AccordionBodyPropsType) {
    return (
        <ul>
            {
                items.length > 0 ?  items.map(el => <li onClick={() => onClick(el.text)} key={el.id}>- {el.text} -</li>) : <span>empty</span>
            }
        </ul>
    );
}
