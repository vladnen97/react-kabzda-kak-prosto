import React, {useState} from 'react';
import {ControlledRating} from './ControlledRating';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Components/Rating',
    component: ControlledRating,
    args: {
        setValue: action('rating mode change event fired')
    }
} as ComponentMeta<typeof ControlledRating>;

const Template: ComponentStory<typeof ControlledRating> = (args) => <ControlledRating {...args}/>


export const EmptyRating = Template.bind({})
EmptyRating.args = {
    value: 0
}

export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1
}

export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2
}

export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3
}

export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4
}

export const ChangeableRating = () => {
    const [rating, setRating] = useState(5);
    return <ControlledRating value={rating} setValue={setRating}/>;
}
