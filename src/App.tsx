import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff';

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is CRA"}/>
            <Accordion titleName={"Main"}/>
            <Accordion titleName={"Last"}/>

            <OnOff />
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
