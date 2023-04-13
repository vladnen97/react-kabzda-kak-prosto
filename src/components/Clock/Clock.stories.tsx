import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Clock} from './Clock';

export default {
    title: 'Components/Clock',
    component: Clock,

} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock/>


export const ClockDefault = Template.bind({})
// ClockDefault.args = {
//
// }

