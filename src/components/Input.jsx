import React, {useState} from "react";
import { Row } from "react-bootstrap";


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

function CheckboxInputLeft(props){
    let color = props.color ? props.color : " btn-primary";
    let classNames1 = "btn activeBtn " + color;
    let classNames2 = "btn btn-outline-dark inActiveBtn";
    const [isActive, setIsActive] = useState(false);

    function toggleClass(e){
        setIsActive(!isActive);
    }

    return (
        <div>
        <table>
        <tr>
            <td type="button" className={isActive ? classNames1 : classNames2} onClick={toggleClass}>✔</td>
            <td className="label ml-1">{props.l}</td>
        </tr>
        </table>
        </div>
    );
}

function CheckboxInputRight(props){
    const [isActive, setIsActive] = useState(false);

    function toggleClass(e){
        setIsActive(!isActive);
    }

    return (
        <div>
        <table className="a">
        <tr>
            <td><span className="label">{props.l}</span></td>
            <td><span type="button" className={isActive ? "btn btn-dark activeBtn" : "btn btn-outline-dark inActiveBtn"} onClick={toggleClass}>✔</span></td>
        </tr>
        </table>
        </div>
    );
}

function Radio(){
    return (
        <div>

        </div>
    );
}


export default Input;
export { SmallerInput, SelectInput, DataList, SmallerTextArea, CheckboxInputLeft, CheckboxInputRight}