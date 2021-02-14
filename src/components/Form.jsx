import React from "react";
import FormHeader from "./formHeader";
import TextualInputs from "./TextualInputs";
import Sizing from "./Sizing";
import RangeInputs from "./RangeInputs";
import Checkboxes from "./Checkboxes";
import Radios from "./Radios";

function Form(){
    return (
    <div className="col-md-10 mx-auto">
    <div><br/><br/><FormHeader/></div>
    <TextualInputs/>
    <Sizing/>
    <RangeInputs/>
    <Checkboxes/>
    <Radios/>
    </div>
    );
}

export default Form;