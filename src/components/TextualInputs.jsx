import React from "react";
import Input, {SmallerInput, SelectInput, DataList} from "./Input";

function TextualInputs(props){
    return (
        <div  className="form">
        <p className="contentHeader col-md-2">Textual inputs</p>
        <Input t="text" l="text"/>
        <Input t="search" l="search"/>
        <Input t="email" l="email"/>
        <Input t="url" l="url"/>
        <Input t="telephone" l="telephone"/>
        <Input t="password" l="password"/>
        <Input t="number" l="number"/>
        <Input t="datetime-local" l="Date and Time"/>
        <Input t="date" l="date"/>
        <Input t="month" l="month"/>
        <Input t="week" l="week"/>
        <Input t="time" l="time"/>
        {/* <Input className="smallerWidth" t="color" l="color"/> */}
        <SmallerInput t="color" l="color"/>
        <SelectInput l="select"/>
        <DataList l="Datalists" list1="type this" list2="or this" list3="or this" />
        <br/>
    </div>
    );
}

export default TextualInputs;