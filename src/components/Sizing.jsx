import React from "react";
import Input, {SmallerInput, SelectInput, DataList, SmallerTextArea} from "./Input";

function Sizing(){
    return (
        <div>
        <p className="contentHeader col-md-2">Sizing</p>
        {/* <label className="capitalize col-md-2 label">sm</label>
        <input type="text" className="col-md-4 form-control form-control-sm input"/> */}
        <SmallerTextArea l="small" size="sm" placeHolder="Small" bgColor="white" borderRadius="0"/>
        <Input l="default" t="text" placeHolder="Default" bgColor="white" borderRadius="0"/>
        <SmallerTextArea l="large" size="lg" placeHolder="Large" bgColor="white" borderRadius="0"/>
        <br/>
        </div>
    );
}

export default Sizing;