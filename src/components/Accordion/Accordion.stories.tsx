import React from 'react';
import {Accordion} from './Accordion';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Components/Uncontrolled Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion>  = (args) => <Accordion {...args}/>

export const ChangeableAccordion = Template.bind({})
ChangeableAccordion.args = {
    titleName: 'List'
}