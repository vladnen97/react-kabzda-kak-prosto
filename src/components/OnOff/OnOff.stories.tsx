import React from 'react';
import {OnOff} from './OnOff';

export default {
    title: 'Uncontrolled On Off',
    component: OnOff,
}

export  const DefaultOn = () => <OnOff defaultOn={true}/>
export  const DefaultOff = () => <OnOff/>