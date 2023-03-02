import React, {useState} from 'react';
import {ControlledOnOff} from './ControlledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'On Off',
    component: ControlledOnOff,
}

export const OnMode = () => <ControlledOnOff on={true} setOn={action('clicked')}/>
export const OffMode = () => <ControlledOnOff on={false} setOn={action('clicked')}/>
export const SwitchableMode = () => {
    const [isOn, setIsOn] = useState<boolean>(true)
    return <ControlledOnOff on={isOn} setOn={setIsOn}/>
}