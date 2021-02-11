import React from "react";
import Input, {SmallerInput, SelectInput, DataList, SmallerTextArea} from "./Input";

function Sizing(){
    return (
        <div className="form">
        <p className="formHeader col-md-2">Sizing</p>
        {/* <label className="capitalize col-md-2 label">sm</label>
        <input type="text" className="col-md-4 form-control form-control-sm input"/> */}
        <SmallerTextArea l="small" size="sm" placeHolder="Small"/>
        <Input l="default" t="text" placeHolder="Default"/>
        <SmallerTextArea l="large" size="lg" placeHolder="Large"/>
        <br/>
        </div>
    );
}

export default Sizing;