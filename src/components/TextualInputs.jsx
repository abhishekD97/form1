import React from "react";
import Input, {SmallerInput, SelectInput, DataList} from "./Input";

function TextualInputs(props){
    return (
        <div  className="form">
        <p className="contentHeader col-md-2">Textual inputs</p>
        {/* width for elements depends on parent col/row combination or width parameter takes percentage values like 25,50,75,100 */}
        <Input t="text" l="text" bgColor="white" borderRadius="0" width="25"/> 
        <Input t="search" l="search" bgColor="white" borderRadius="0"/>
        <Input t="email" l="email" bgColor="white" borderRadius="0"/>
        <Input t="url" l="url" bgColor="white" borderRadius="0"/>
        <Input t="telephone" l="telephone" bgColor="white" borderRadius="0"/>
        <Input t="password" l="password" bgColor="white" borderRadius="0"/>
        <Input t="number" l="number" bgColor="white" borderRadius="0"/>
        <Input t="datetime-local" l="Date and Time" bgColor="white" borderRadius="0"/>
        <Input t="date" l="date" bgColor="white" borderRadius="0"/>
        <Input t="month" l="month" bgColor="white" borderRadius="0"/>
        <Input t="week" l="week" bgColor="white" borderRadius="0"/>
        <Input t="time" l="time" bgColor="white" borderRadius="0"/>
        {/* <Input className="smallerWidth" t="color" l="color"/> */}
        <SmallerInput t="color" l="color"/>
        <SelectInput l="select" bgColor="white" borderRadius="0"/>
        <DataList l="Datalists" list1="type this" list2="or this" list3="or this" bgColor="white" borderRadius="0"/>
        <br/>
    </div>
    );
}

export default TextualInputs;