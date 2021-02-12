import React from "react";
import {CheckboxInputLeft, CheckboxInputRight} from "./Input";


function Checkboxes(){
    return (
        <div>
            <p className="formHeader col-md-2">Checkboxes</p>
            <div className="row mx-auto">
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes</p>
            <CheckboxInputLeft name="FormCheckbox" id="FormCheckbox" l="Form Checkbox"/>
            <CheckboxInputLeft checked="checked" name="FormCheckboxChecked" id="FormCheckboxChecked" l="Form Checkbox Checked"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes Right</p>
            <CheckboxInputRight name="FormCheckboxRight" id="FormCheckboxRight" l="Form Checkbox Right"/>
            <CheckboxInputRight name="FormCheckboxRightChecked" id="FormCheckboxRightChecked" l="Form Checkbox Right Checked"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes Colors</p>
            <CheckboxInputLeft name="CheckboxPrimary" id="CheckboxPrimary" l="Checkbox Primary"/>
            <CheckboxInputLeft name="CheckboxSuccess" id="CheckboxSuccess" l="Checkbox Success"/>
            <CheckboxInputLeft name="CheckboxInfo" id="CheckboxInfo" l="Checkbox Info"/>
            <CheckboxInputLeft name="CheckboxWarning" id="CheckboxWarning" l="Checkbox Warning"/>
            <CheckboxInputLeft name="CheckboxDanger" id="CheckboxDanger" l="Checkbox Danger"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes Outline</p>
            <CheckboxInputLeft name="CheckboxOutlinePrimary" id="CheckboxOutlinePrimary" l="Checkbox Outline Primary"/>
            <CheckboxInputLeft name="CheckboxOutlineSuccess" id="CheckboxOutlineSuccess" l="Checkbox Outline Success"/>
            <CheckboxInputLeft name="CheckboxOutlineInfo" id="CheckboxOutlineInfo" l="Checkbox Outline Info"/>
            <CheckboxInputLeft name="CheckboxOutlineWarning" id="CheckboxOutlineWarning" l="Checkbox Outline Warning"/>
            <CheckboxInputLeft name="CheckboxOutlineDanger" id="CheckboxOutlineDanger" l="Checkbox Outline Danger"/>
            </span>
            </div>
        </div>
    );
}

export default Checkboxes;