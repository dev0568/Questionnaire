import React, { useState } from 'react';
import Select from 'react-select';
import {  Wrapper } from "./style";



const colourOptions = [
    { value: 'Veg', label: 'veg' },
    { value: 'non-veg', label: 'non-veg' }
]

const SelectInput = (props) => {

    const [FoodCatagory ,setFoodCatagory] = useState();
    console.log(FoodCatagory)


    const handleChange = (send) => {
        setFoodCatagory(send)
        props.inputvalue(send);
    }

    return (
        <Wrapper>
        <div className="w-75 m-auto pt-4">
            <Select
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => handleChange(e)}
            />
        </div>
        </Wrapper>
    );
}

export default SelectInput;
