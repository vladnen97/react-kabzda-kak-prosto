import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ControlledSelect} from './ControlledSelect';

export default {
    title: 'Components/Select',
    component: ControlledSelect,
} as ComponentMeta<typeof ControlledSelect>;


// const Template: ComponentStory<typeof ControlledSelect> = (args) => <ControlledSelect {...args}/>

export const Selector = () => {
    const [value, setValue] = useState<any>('None')

    return <ControlledSelect value={value}
                      onChange={setValue}
                      items={[
                          {value: 'JavaScript', title: 'js'},
                          {value: 'CSS', title: 'css'},
                          {value: 'React', title: 'react'},
                          {value: 'Redux', title: 'redux'},
                      ]}/>
}
