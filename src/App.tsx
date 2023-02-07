import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is CRA"}/>
            <Accordion titleName={"Main"} collapsed={true}/>
            <Rating value={2}/>
            <Accordion titleName={"Last"} collapsed={false}/>
            <Rating value={5}/>
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
