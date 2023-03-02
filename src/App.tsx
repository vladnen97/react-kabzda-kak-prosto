import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {ControlledRating} from './components/Rating/ControlledRating';

function App() {
    const [value, setValue] = useState<number>(0);


    return (
        <div className="App">
            <PageTitle title={'This is CRA'}/>
            <Accordion titleName={'Main'}/>
            <Accordion titleName={'Last'}/>

            <OnOff/>

            <ControlledRating value={value} setValue={setValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1> {props.title} </h1>
    );
}

export default App;
