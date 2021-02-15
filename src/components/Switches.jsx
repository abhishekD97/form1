import React from "react";
import { Switch } from "./Input";
function Switches(){
    return (
        <div>
        <p className="contentHeader col-md-2">Switches</p>
        <div className="row mx-auto">
        <span className="col-md-6 borderSmallScreen">
        <p className="checkboxHeader">Switch examples</p>
            <Switch l="Default switch"/>
            <Switch l="Checked switch"/>
            <Switch state="disabled" l="Disabled switch"/>
        </span>
        <span className="col-md-6 borderSmallScreen">
        <p className="checkboxHeader">Switch examples</p>
            <Switch l="Default switch" size="sm"/>
            <Switch l="Checked switch" size="def"/>
            <Switch l="Disabled switch" size="lg"/>
        </span>
        </div>
        </div>
    );
}

export default Switches;