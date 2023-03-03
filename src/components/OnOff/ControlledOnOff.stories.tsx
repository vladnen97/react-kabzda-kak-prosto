import React, {useState} from 'react';
import {ControlledOnOff} from './ControlledOnOff';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Components/On Off',
    component: ControlledOnOff,
    args: {
        setOn: action('clicked')
    }
} as ComponentMeta<typeof ControlledOnOff>;

const Template: ComponentStory<typeof ControlledOnOff> = (args) => <ControlledOnOff {...args}/>


export const OnMode = Template.bind({})
OnMode.args = {
    on: true
}

export const OffMode = Template.bind({})
OffMode.args = {
    on: false
}

export const SwitchableMode = () => {
    const [isOn, setIsOn] = useState<boolean>(true)
    return <ControlledOnOff on={isOn} setOn={setIsOn}/>
}