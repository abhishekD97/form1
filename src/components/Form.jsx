import React from "react";
import FormHeader from "./formHeader";
import TextualInputs from "./TextualInputs";
import Sizing from "./Sizing";
import RangeInputs from "./RangeInputs";
import Checkboxes from "./Checkboxes";
import Radios from "./Radios";
import Switches from "./Switches";
import FileBrowser from "./FileBrowser";

function Form(){
    return (
    <div className="col-md-10 mx-auto">
    <div><br/><br/><FormHeader/></div>
    <TextualInputs/>
    <hr className="hr-text"></hr>
    <Sizing/>
    <hr className="hr-text"></hr>
    <RangeInputs/>
    <hr className="hr-text"></hr>
    <Checkboxes/>
    <hr className="hr-text"></hr>
    <Radios/>
    <hr className="hr-text"></hr>
    <Switches/>
    <hr className="hr-text"></hr>
    <FileBrowser/>
    </div>
    );
}

export default Form;