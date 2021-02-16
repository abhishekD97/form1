import React from "react";
import { FileInput, FileInputCustom } from "./Input";

function FileBrowser(){
    return (
        <div>
        <p className="contentHeader col-md-2">File Browser</p>
        <div className="row mx-auto">
        <span className="col-md-5 borderSmallScreen">
        <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Default file input</p>
        <FileInput l="Default file input"/>
        <br/>
        <FileInput l="Small file input" size="sm"/>
        <br/>
        </span>
        <span className="col-md-5 borderSmallScreen">
        <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Default file input Large</p>
        <FileInput l="Large file input" size="lg"/>
        <br/>
        </span>
        </div>
        <div className="row mx-auto">
        <span className="col-md-5 borderSmallScreen">
        <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Custom file input</p>
        <br/>
        <FileInputCustom l="Default file input"/>
        <br/>
        <FileInputCustom l="Small file input" size="sm"/>
        </span>
        <span className="col-md-5 borderSmallScreen">
        <p className="checkboxHeader"><span style={{color:"blue"}}>➝</span> Custom file input</p>
        <br/>
        <FileInputCustom l="Large file input" size="lg"/>
        </span>
        </div>
        </div>
    );
}

export default FileBrowser;