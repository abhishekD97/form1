import React, {useState} from "react";
import RangeSlider from 'react-bootstrap-range-slider';

function RangeInputs(){
    const [ sliderValueOne, setSliderValueOne ] = useState(0);
    const [ sliderValueTwo, setSliderValueTwo ] = useState(0);
    const [ sliderValueThree, setSliderValueThree ] = useState(0);
// Slider One
    function sliderFunctionOne(e){
        setSliderValueOne(e.target.value);
    }
    function sliderFunctionSetOne(e){
        setSliderValueOne(e.target.value);
        console.log(e.target.value)
    }
// Slider Two
    function sliderFunctionTwo(e){
        setSliderValueTwo(e.target.value);
    }
    function sliderFunctionSetTwo(e){
        setSliderValueTwo(e.target.value);
        console.log(e.target.value)
    }
// Slider Three
    function sliderFunctionThree(e){
        setSliderValueThree(e.target.value);
    }
    function sliderFunctionSetThree(e){
        setSliderValueThree(e.target.value);
        console.log(e.target.value)
    }



    return (
        <div>
            <p className="contentHeader col-md-2">Range Inputs</p>
            <br/>
            <div className="row centerJustify">
            <div className="col-md-5">
            <p className="contentHeader col-md-4">Min:0 Max:100</p>
            <RangeSlider value={sliderValueOne} onChange={sliderFunctionOne} onAfterChange={sliderFunctionSetOne}/>
            </div>
            <div className="col-md-1"></div><br/>
            <div className="col-md-5">
            <p className="contentHeader col-md-4">Min:0 Max:5</p>
            <RangeSlider variant="danger" min="0" max="5" step="1" value={sliderValueTwo} onChange={sliderFunctionTwo} onAfterChange={sliderFunctionSetTwo}/>
            </div>
            </div>
            <br/>
            <div className="row centerJustify">
            <div className="col-md-5">
            <p className="contentHeader col-md-4">Min:0 Max:5</p>
            <RangeSlider variant="dark" min="0" max="5" step="0.5" value={sliderValueThree} onChange={sliderFunctionThree} onAfterChange={sliderFunctionSetThree}/>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
            </div>
            </div><br/>
        </div>
    );
}

export default RangeInputs;