import React, {useState} from "react";

function Input(props){
    const [inputValue, setInputValue] = useState("");
    const [ss, Setss] = useState("");
    
    function handleValue(e){
        setInputValue(e.target.value);
    }

    function setValue(e){
        e.preventDefault();
        let type = e.target[0].type;
        if(inputValue.length == 0){
            console.log("Field empty");
        }else{
        setInputValue(inputValue);
        type == "password" ? console.log("Password Entered Successfully") : console.log(inputValue);
    }
    }

    // function ValidateEmail(mail)
    //     {
    //     let msg; 
    //     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
    //     {
    //         msg = "You have entered an invalid email address!";
    //     }
    //     }
    function myF(e){
        console.log(e.target);
        Setss("m")
    }
    
    return (
    <div>
    <form onSubmit={setValue}>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <input onInvalidCapture={myF}
        onChange={handleValue} 
        value={inputValue} 
        className={"col-md-8 form-control input "  + (props.focusBorder) +" "}
        style={{
            backgroundColor:(props.bgColor ? props.bgColor : null),
            borderRadius:(props.borderRadius ? props.borderRadius : null),
            }} 
        autoComplete="off" 
        type={props.t} 
        placeholder={props.placeHolder ? props.placeHolder : null}
        required
        />
        <button type="submit" className="btn btn-md btn-dark ml-3 buttonStyle">Enter</button><br/>
        <div className="errrr">
            <span>
                {ss}
            </span>
        </div>
    </form>
    </div>
    );
}

function SmallerInput(props){

    const [colorState, setColorState] = useState("#8ab3f4");

    function setColor(e)
    {
        setColorState(e.target.value)
        console.log(e.target.value)
    }

    return (
    <div>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <input value={colorState} onChange={setColor} className="smallerWidth input" type={props.t}/>
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

    const [inputValue, setInputValue] = useState("");
    
    function handleValue(e){
        setInputValue(e.target.value);
    }

    function setValue(e){
        e.preventDefault();
        let type = e.target[0].type;
        if(inputValue.length == 0){
            console.log("Field empty");
        }else{
        setInputValue(inputValue);
        type == "password" ? console.log("Password Entered Successfully") : console.log(inputValue);
    }
    }

    return (
        <div>
        <form onSubmit={setValue}>
        <label className="capitalize col-md-2 label">{props.l}</label>
        <input 
        onChange={handleValue} 
        value={inputValue} 
        placeholder={props.placeHolder} 
        type="text" 
        className={props.size=="sm"?"form-control form-control-sm col-md-8 input":"form-control form-control-lg col-md-8 input"}
        style=  {{
            backgroundColor:(props.bgColor ? props.bgColor : null),
            borderRadius:(props.borderRadius ? props.borderRadius : null),
                }}     
        />
        <button type="submit" className={props.size=="sm" ? "btn btn-sm btn-dark ml-3 buttonStyle" : props.size=="lg" ? "btn btn-lg btn-dark ml-3 buttonStyle" : "btn btn-md btn-dark ml-3 buttonStyle"}>Enter</button><br/>
        </form>
        </div>
    );
}

function CheckboxInputLeft(props){
    let color = props.color ? props.color : " btn-primary";
    let classNames1 = "btn " + color;
    let classNames2 = "btn btn-outline-dark";
    const [isActive, setIsActive] = useState(false);

    function toggleClass(e){
        setIsActive(!isActive);
        console.log(e.target.attributes.name.value + " : " + !isActive );
    }

    return (
        <div>
        <table>
        <tr>
            <td name={props.l} type="button" id={isActive ? "activeBtn" : "inActiveBtn"} className={isActive ? classNames1 : classNames2} onClick={toggleClass}>✔</td>
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
        console.log(e.target.attributes.name.value + " : " + !isActive );
    }

    return (
        <div>
        <table className="a">
        <tr>
            <td><span className="label">{props.l}</span></td>
            <td><span name={props.l} type="button" id={isActive ? "activeBtn" : "inActiveBtn"} className={isActive ? "btn btn-dark" : "btn btn-outline-dark"} onClick={toggleClass}>✔</span></td>
        </tr>
        </table>
        </div>
    );
}

function Radio(props){
    const [isActive, setIsActive] = useState(false);
   
    function toggleClass(e){
        setIsActive(!isActive);
    }

    return (
        <div>
        <table>
        <tr>
            <td><span type="button" id={isActive ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleClass} state={props.state ? toggleClass : null}>⚪</span></td>
            <td><span className="label">hey</span></td>
        </tr>
        </table>
        </div>
    );
}

function Switch(props){
    let c = (props.switch == "on") ? false : true;
    const [switchState, setSwitchState] = useState(c);
    

    function setSwitchFunction(e){
        setSwitchState(!switchState);
        console.log(switchState);
        c = "";
    }

    return (
        <div>
        <table>
        <tr>
        <td>
        <div className="">
            <label className={props.size=="lg" ? "switchL mr-2" : props.size=="sm" ? "switchS mr-2" : props.size=="def" ? "switch mr-2" : "switch mr-2"}>
            <input type="checkbox" disabled={props.state ? true : false } value={switchState ? true  : false} onClick={setSwitchFunction}/>
            <span class="slider round" className={props.size=="lg" ? "sliderL round" : props.size=="sm" ? "sliderS round" : props.size=="def" ? "slider round" : "slider round"}></span>
            </label>
        </div>
        </td>
        <td><div className="mt-3"><p className="switchLabel">{props.l}</p></div></td>
        </tr>
        </table>
        </div>
    );
}

{/* <input onClick={fun} type="file" className="Actualinputfile"/>
        <span className="fakeInputSection">
        <p className="fakeFileLabel">Choose File</p><input disabled placeholder="File" className="fakeFileInput"/>
        </span> */}

function FileInput(props){

    function recFile(e){
        let files = e.target.files;
        console.log(files);
    }

    return (
        <div>
        <div className="form-group my-auto">
        <div className="custom-file">
        <input type="file" onChange={recFile} className={props.size=="sm" ? "custom-file-input form-control-sm" : props.size=="lg" ? "custom-file-input form-control-lg" : "custom-file-input form-control-md"} id="customFile"/>
        <label className={props.size=="sm" ? "custom-file-label col-form-label-sm" : props.size=="lg" ? "custom-file-label col-form-label-lg" : "custom-file-label col-form-label-md"} for="customFile">{props.l}</label>
        </div>
        </div>
        </div>
    );
}

function FileInputCustom(props){

    function recFile(e){
        let files = e.target.files;
        console.log(files);
    }

    return (
        <div>
        <table>
        <tr>
        <td>
        <div className="form-group my-auto">
        <div className="custom-file">
        <input type="file" onChange={recFile} className={props.size=="sm" ? "custom-file-input form-control-sm my-auto" : props.size=="lg" ? "custom-file-input form-control-lg my-auto" : "custom-file-input form-control-md my-auto"} id="customFile"/>
        <label className={props.size=="sm" ? "custom-file-label col-form-label-sm my-auto" : props.size=="lg" ? "custom-file-label col-form-label-lg my-auto" : "custom-file-label col-form-label-md my-auto"} for="customFile">{props.l}</label>
        </div>
        </div>
        </td>
        <td>
            <button className={props.size=="sm" ? "btn-sm btn-primary FileButtonS my-auto shadow-none" : props.size=="lg" ? "btn-lg btn-primary FileButtonL my-auto shadow-none" : "btn btn-primary FileButton my-auto shadow-none"}>Button</button>
        </td>
        </tr>
        </table>
        </div>
    );
}



export default Input;
export { SmallerInput, SelectInput, DataList, SmallerTextArea, CheckboxInputLeft, CheckboxInputRight, Radio, Switch, FileInput, FileInputCustom}