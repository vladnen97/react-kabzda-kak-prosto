import React, {useState} from 'react';
import {ControlledAccordion} from './ControlledAccordion';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Components/Accordion',
    component: ControlledAccordion,
    args: {
        items: [],
        setCollapsed: action('accordion mode change event fired'),
        onClick: action('click event fired on this element')
    }
} as ComponentMeta<typeof ControlledAccordion>;


const Template: ComponentStory<typeof ControlledAccordion> = (args) => <ControlledAccordion {...args}/>

export const Collapsed = Template.bind({});
Collapsed.args = {
    titleName: 'Collapsed',
    collapsed: true,
};

export const Uncollapsed = Template.bind({})
Uncollapsed.args = {
    titleName: 'Uncollapsed',
    collapsed: false,
    items: [
        {id: 1, text: 'first item'},
        {id: 2, text: 'second item'},
        {id: 3, text: 'third item'},
        {id: 4, text: 'fourth item'},
        {id: 5, text: 'fifth item'},
    ]
}

export const Empty = Template.bind({})
Empty.args = {
    titleName: 'Empty',
    collapsed: false,
}

export const Changable = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const shoppingList = [
        {id: 1, text: 'sugar'},
        {id: 2, text: 'meat'},
        {id: 3, text: 'bread'},
        {id: 4, text: 'water'},
        {id: 5, text: 'butter'},
    ]

    return <ControlledAccordion titleName={'What to buy'}
                                collapsed={collapsed}
                                setCollapsed={setCollapsed}
                                items={shoppingList}
                                onClick={action('click event fired on this element')}/>
}