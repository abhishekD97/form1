import React, {useState} from "react";
import RangeSlider from 'react-bootstrap-range-slider';

function RangeInputs(){
    const [ sliderValue, setSliderValue ] = useState(0);

    function sliderFunction(e){
        setSliderValue(e.target.value);
    }
    function sliderFunctionSet(e){
        setSliderValue(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div className="col-md-4">
            <p className="formHeader col-md-2">Range Inputs</p>
            <RangeSlider value={sliderValue} onChange={sliderFunction} onAfterChange={sliderFunctionSet}/>
        </div>
    );
}

export default RangeInputs;