import React from "react";
import FormHeader from "./formHeader";
import TextualInputs from "./TextualInputs";
import Sizing from "./Sizing";
import RangeInputs from "./RangeInputs";

function Form(){
    return (
    <div className="col-sm-6 col-md-10 mx-auto">
    <div><br/><br/><FormHeader/></div>
    <TextualInputs/>
    <Sizing/>
    <RangeInputs/>
    </div>
    );
}

export default Form;