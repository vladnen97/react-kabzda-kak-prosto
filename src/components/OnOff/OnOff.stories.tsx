import React from 'react';
import {OnOff} from './OnOff';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Components/Uncontrolled On Off',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}/>


export const DefaultOn = Template.bind({})
DefaultOn.args = {
    defaultOn: true
}

export const DefaultOff = Template.bind({})
DefaultOff.args = {}




