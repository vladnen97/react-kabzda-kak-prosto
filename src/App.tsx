import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is CRA"}/>
            <Accordion titleName={"Main"} stars={2}/>
            <Accordion titleName={"Last"} collapsed={true} stars={5}/>
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
