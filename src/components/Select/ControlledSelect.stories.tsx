import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ControlledSelect} from './ControlledSelect';

export default {
    title: 'Components/Select',
    component: ControlledSelect,
} as ComponentMeta<typeof ControlledSelect>;


// const Template: ComponentStory<typeof ControlledSelect> = (args) => <ControlledSelect {...args}/>

export const WithValue: ComponentStory<typeof ControlledSelect> = () => {
    const [value, setValue] = useState<any>('keycss')

    return <ControlledSelect value={value}
                             onChange={setValue}
                             items={[
                                 {value: 'keyjs', title: 'JavaScript'},
                                 {value: 'keycss', title: 'CSS'},
                                 {value: 'keyreact', title: 'React'},
                                 {value: 'keyredux', title: 'Redux'},
                             ]}/>
}

export const WithoutValue: ComponentStory<typeof ControlledSelect> = () => {
    const [value, setValue] = useState<any>(null)

    return <ControlledSelect value={value}
                             onChange={setValue}
                             items={[
                                 {value: 'keyjs', title: 'JavaScript'},
                                 {value: 'keycss', title: 'CSS'},
                                 {value: 'keyreact', title: 'React'},
                                 {value: 'keyredux', title: 'Redux'},
                             ]}/>
}

// export const Example = () => <select>
//     <option value="1">123</option>
//     <option value="2">456</option>
//     <option value="3">789</option>
// </select>
