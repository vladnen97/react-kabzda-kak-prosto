import React, {useState} from 'react';
import {ControlledAccordion} from './ControlledAccordion';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Components/Accordion',
    component: ControlledAccordion,
} as ComponentMeta<typeof ControlledAccordion>;


const Template: ComponentStory<typeof ControlledAccordion> = (args) => <ControlledAccordion {...args}/>

export const Collapsed = Template.bind({});
Collapsed.args = {
    titleName: 'Menu',
    collapsed: true,
    setCollapsed: action('accordion mode change event fired'),
};

export const Uncollapsed = Template.bind({})
Uncollapsed.args = {
    titleName: 'List',
    collapsed: false,
    setCollapsed: action('accordion mode change event fired')
}

export const Changable = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <ControlledAccordion titleName={'List'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}