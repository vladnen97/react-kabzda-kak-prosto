import React from 'react';
import {Rating} from './Rating';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Components/Uncontrolled Rating',
    component: Rating,
    args: {
        onChange: action('rating changed inside component to')
    }
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>


export const ValueByDefault = Template.bind({})
ValueByDefault.args = {
    defaultValue: 3
}

export const EmptyByDefault = Template.bind({})
EmptyByDefault.args = {}

// export const ChangebleRating = () => <Rating defaultValue={1} onChange={action('rating changed inside component')}/>




