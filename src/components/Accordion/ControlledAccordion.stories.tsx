import React, {useState} from 'react';
import {ControlledAccordion} from './ControlledAccordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: ControlledAccordion,
}

export const CollapsedAccordion = () => <ControlledAccordion titleName={'List'} collapsed={true} setCollapsed={action('only collapsed')}/>
export const UncollapsedAccordion = () => <ControlledAccordion titleName={'List'} collapsed={false} setCollapsed={action('only uncollapsed')}/>
export const ChangableAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <ControlledAccordion titleName={'List'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}