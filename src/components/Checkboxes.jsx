import React from "react";
import {CheckboxInputLeft, CheckboxInputRight} from "./Input";


function Checkboxes(){
    return (
        <div>
            <p className="formHeader col-md-2">Checkboxes</p>
            <div className="row mx-auto">
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes</p>
            <CheckboxInputLeft l="Form Checkbox"/>
            <CheckboxInputLeft l="Form Checkbox Checked"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes Right</p>
            <CheckboxInputRight l="Form Checkbox Right"/>
            <CheckboxInputRight l="Form Checkbox Right Checked"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes Colors</p>
            <CheckboxInputLeft l="Checkbox Primary" color="btn-primary"/>
            <CheckboxInputLeft l="Checkbox Success" color="btn-success"/>
            <CheckboxInputLeft l="Checkbox Info" color="btn-info"/>
            <CheckboxInputLeft l="Checkbox Warning" color="btn-warning"/>
            <CheckboxInputLeft l="Checkbox Danger" color="btn-danger"/>
            </span>
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Form Checkboxes Outline</p>
            <CheckboxInputLeft l="Checkbox Outline Primary" color="btn-outline-primary"/>
            <CheckboxInputLeft l="Checkbox Outline Success" color="btn-outline-success"/>
            <CheckboxInputLeft l="Checkbox Outline Info" color="btn-outline-info"/>
            <CheckboxInputLeft l="Checkbox Outline Warning" color="btn-outline-warning"/>
            <CheckboxInputLeft l="Checkbox Outline Danger" color="btn-outline-danger"/>
            </span>
            </div>
        </div>
    );
}

export default Checkboxes;