import React, {useState} from "react";
import {Radio} from "./Input";

function Radios(){
    // radio1 section 1 states
    const [radioSection1, setRadioSection1] = useState({
        radio1 : false,
        radio2 : true
    })

    function toggleRadio1(e){
        let c = e.target.attributes.name.value;
        
            setRadioSection1( () => {
                if(c=="1"){
                    return {
                        radio1 : true,
                        radio2 : false
                    }
                }else{
                    return {
                        radio1 : false,
                        radio2 : true
                    }
                }
            } )
    }
   // radio2 section 2 states
    const [radioSection2, setRadioSection2] = useState({
        radio1 : false,
        radio2 : true
    })

    function toggleRadio2(e){
        let c = e.target.attributes.name.value;
        
            setRadioSection2( () => {
                if(c=="1"){
                    return {
                        radio1 : true,
                        radio2 : false
                    }
                }else{
                    return {
                        radio1 : false,
                        radio2 : true
                    }
                }
            } )
    }
       // radio3 section 3 states
    const [radioSection3, setRadioSection3] = useState({
        radio1 : false,
        radio2 : false,
        radio3 : true,
        radio4 : false,
        radio5 : false

    })

    function toggleRadio3(e){
        let c = e.target.attributes.name.value;
        
            setRadioSection3( () => {
                if(c=="1"){
                    return {
                        radio1 : true,
                        radio2 : false,
                        radio3 : false,
                        radio4 : false,
                        radio5 : false
                    }
                }else if(c=="2"){
                    return {
                        radio1 : false,
                        radio2 : true,
                        radio3 : false,
                        radio4 : false,
                        radio5 : false
                    }
                }else if(c=="3"){
                    return {
                        radio1 : false,
                        radio2 : false,
                        radio3 : true,
                        radio4 : false,
                        radio5 : false
                    }
                }else if(c=="4"){
                    return {
                        radio1 : false,
                        radio2 : false,
                        radio3 : false,
                        radio4 : true,
                        radio5 : false
                    }
                }else{
                    return {
                        radio1 : false,
                        radio2 : false,
                        radio3 : false,
                        radio4 : false,
                        radio5 : true
                    }
                }
            } )
    }
// radio3 section 3 states
    const [radioSection4, setRadioSection4] = useState({
        radio1 : false,
        radio2 : false,
        radio3 : false,
        radio4 : true,
        radio5 : false
    })
    
    function toggleRadio4(e){
        let c = e.target.attributes.name.value;
            
        setRadioSection4( () => {
            if(c=="1"){
                return {
                        radio1 : true,
                        radio2 : false,
                        radio3 : false,
                        radio4 : false,
                        radio5 : false
                        }
                    }else if(c=="2"){
                return {
                        radio1 : false,
                        radio2 : true,
                        radio3 : false,
                        radio4 : false,
                        radio5 : false
                        }
                    }else if(c=="3"){
                        return {
                        radio1 : false,
                        radio2 : false,
                        radio3 : true,
                        radio4 : false,
                        radio5 : false
                        }
                    }else if(c=="4"){
                        return {
                        radio1 : false,
                        radio2 : false,
                        radio3 : false,
                        radio4 : true,
                        radio5 : false
                        }
                    }else{
                        return {
                        radio1 : false,
                        radio2 : false,
                        radio3 : false,
                        radio4 : false,
                        radio5 : true
                        }
                    }
                } )
        }


    return (
        <div>
            <p className="contentHeader col-md-2">Radios</p>
            <div className="row mx-auto">
            {/* Radio Section 1 */}
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader">Form Radios</p>
            <table>
            <tr>
            <td><span name="1" type="button" id={radioSection1.radio1 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio1}>⚪</span></td>
            <td><span className="label">Form Radio</span></td>
            </tr>
            <tr>
            <td><span name="2" type="button" id={radioSection1.radio2 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio1}>⚪</span></td>
            <td><span className="label">Form Radio Checked</span></td>
            </tr>
            </table>
            </span>
            {/* --------------------- */}
            {/* Radio Section 2 */}
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader">Form Radios Right</p>
            <table>
            <tr>
            <td><span className="label">Form Radio Right</span></td>
            <td><span name="1" type="button" id={radioSection2.radio1 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark ml-5" onClick={toggleRadio2}>⚪</span></td>
            </tr>
            <tr>
            <td><span className="label">Radio Right Checked</span></td>
            <td><span name="2" type="button" id={radioSection2.radio2 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark ml-5" onClick={toggleRadio2}>⚪</span></td>
            </tr>
            </table>
            </span>
            {/* ------------------------- */}
            {/* Radio Section 3 */}
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader">Form Radio colors</p>
            <table>
            <tr>
            <td><span name="1" type="button" id={radioSection3.radio1 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio3}>⚪</span></td>
            <td><span className="label">Radio Primary</span></td>
            </tr>
            <tr>
            <td><span name="2" type="button" id={radioSection3.radio2 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio3}>⚪</span></td>
            <td><span className="label">Radio Success</span></td>
            </tr>
            <tr>
            <td><span name="3" type="button" id={radioSection3.radio3 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio3}>⚪</span></td>
            <td><span className="label">Radio Info</span></td>
            </tr>
            <tr>
            <td><span name="4" type="button" id={radioSection3.radio4 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio3}>⚪</span></td>
            <td><span className="label">Radio warning</span></td>
            </tr>
            <tr>
            <td><span name="5" type="button" id={radioSection3.radio5 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio3}>⚪</span></td>
            <td><span className="label">Radio Danger</span></td>
            </tr>
            </table>
            </span>
            {/* ------------------------- */}
            {/* Radio Section 4 */}
            <span className="col-md-3 borderSmallScreen">
            <p className="checkboxHeader">Form Radio Outline</p>
            <table>
            <tr>
            <td><span name="1" type="button" id={radioSection4.radio1 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio4}>⚪</span></td>
            <td><span className="label">Radio Outline Primary</span></td>
            </tr>
            <tr>
            <td><span name="2" type="button" id={radioSection4.radio2 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio4}>⚪</span></td>
            <td><span className="label">Radio Outline Success</span></td>
            </tr>
            <tr>
            <td><span name="3" type="button" id={radioSection4.radio3 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio4}>⚪</span></td>
            <td><span className="label">Radio Outline Info</span></td>
            </tr>
            <tr>
            <td><span name="4" type="button" id={radioSection4.radio4 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio4}>⚪</span></td>
            <td><span className="label">Radio Outline Warning</span></td>
            </tr>
            <tr>
            <td><span name="5" type="button" id={radioSection4.radio5 ? "activeRadio" : "inActiveRadio"} className="btn btn-dark" onClick={toggleRadio4}>⚪</span></td>
            <td><span className="label">Radio Outline Danger</span></td>
            </tr>
            </table>
            </span>
            {/* ------------------------- */}
            </div>
        </div>
    );
}

export default Radios;