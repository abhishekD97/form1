import React from "react";
import {CheckboxInputLeft, CheckboxInputRight} from "./Input";


function Checkboxes(){
    return (
        <div>
            <p className="formHeader col-md-2">Checkboxes</p>
            <div className="row mx-auto">
            <span className="col-md-3 borderSmallScreen">
            <p><span style={{color:"blue"}}>➝</span> Form Checkboxes</p>
            <CheckboxInputLeft l="Form Checkbox"/>
            <CheckboxInputLeft l="Form Checkbox Checked" checked="yes"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p><span style={{color:"blue"}}>➝</span> Form Checkboxes Right</p>
            <CheckboxInputRight l="Form Checkbox Right"/>
            <CheckboxInputRight l="Form Checkbox Right Checked" checked="yes"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p><span style={{color:"blue"}}>➝</span> Form Checkboxes Colors</p>
            <CheckboxInputLeft l="Checkbox Primary"/>
            <CheckboxInputLeft l="Checkbox Success"/>
            <CheckboxInputLeft l="Checkbox Info"/>
            <CheckboxInputLeft l="Checkbox Warning"/>
            <CheckboxInputLeft l="Checkbox Danger"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p><span style={{color:"blue"}}>➝</span> Form Checkboxes Outline</p>
            <CheckboxInputLeft l="Checkbox Outline Primary"/>
            <CheckboxInputLeft l="Checkbox Outline Success"/>
            <CheckboxInputLeft l="Checkbox Outline Info"/>
            <CheckboxInputLeft l="Checkbox Outline Warning"/>
            <CheckboxInputLeft l="Checkbox Outline Danger"/>
            </span>
            </div>
        </div>
    );
}

export default Checkboxes;