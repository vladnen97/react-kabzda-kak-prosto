import React, {Reducer, useReducer} from 'react';
import {ActionType, reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    /**
     * title of accordion
     */
    titleName: string,
}
type AccordionTitlePropsType = {
    title: string
    toggle: () => void
}


export function Accordion(props: AccordionPropsType) {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(reducer, {collapsed: false});

    function toggle():void {
        // setCollapsed(!collapsed);
        dispatch({type: TOGGLE_COLLAPSED})
    }

        return (
            <div className="accordion">
                <AccordionTitle title={props.titleName} toggle={toggle}/>
                { !state.collapsed &&  <> <AccordionBody/></>}
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

