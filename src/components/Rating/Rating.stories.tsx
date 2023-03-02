import React from 'react';
import {Rating} from './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Uncontrolled Rating',
    component: Rating,
}

export const ChangebleRating = () => <Rating defaultValue={1} onChange={action('rating changed inside component')}/>




