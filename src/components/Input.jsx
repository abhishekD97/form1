import React, {useState} from "react";


function Input(props){
    return (
    <div>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <input className="col-md-8 form-control input" type={props.t} placeholder={props.placeHolder ? props.placeHolder : null}/>
    </div>
    );
}

function SmallerInput(props){
    return (
    <div>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <input className="smallerWidth input" type={props.t}/>
    </div>
    );
}

function SelectInput(props){
    return (
        <div>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <select className="input" name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
        </div>
    );
}

function DataList(props){
    return (
        <div>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <input className="form-control form-control-sm col-md-8 input" list="browsers" name="browser" id="browser"></input>
        <datalist id="browsers">
            <option value={props.list1}/>
            <option value={props.list2}/>
            <option value={props.list3}/>
            <option value={props.list4}/>
            <option value={props.list5}/>
        </datalist>
        </div>
    );
}

function SmallerTextArea(props){
    return (
        <div>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <input placeholder={props.placeHolder} type="text" className={props.size=="sm"?"form-control form-control-sm col-md-8 input":"form-control form-control-lg col-md-8 input"}/>
        </div>
    );
}

function CheckboxInputLeft(props) {
    const [checkboxState, setCheckboxState] = useState(false);

    function setCheckboxFunction(e)
    {
        setCheckboxState(!checkboxState);
    }

    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" value={checkboxState ? "checked" : ""} onClick={setCheckboxFunction} id={props.id} name={props.name}/>
            <label className="custom-control-label" for={props.id}>{props.l}</label>
        </div>
    );
}

function CheckboxInputRight(props) {
    const [checkboxStateRight, setCheckboxStateRight] = useState(false);

    function setCheckboxRightFunction(e)
    {
        setCheckboxStateRight(!checkboxStateRight);
    }
    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" value={checkboxStateRight ? "checked" : ""} onClick={setCheckboxRightFunction} id={props.id} name={props.name}/>            
            <label className="custom-control-label" for={props.id}>{props.l}</label>
        </div>
    );
}

function Radio(props){
    return (
        <div>

        </div>
    );
}

export default Input;
export { SmallerInput, SelectInput, DataList, SmallerTextArea, CheckboxInputLeft, CheckboxInputRight }