import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Wrapper } from './style';


const FoodCatagory = (props) => {

    const [FoodItem ,setFoodItem] = useState();
    const handleChange = (senditem) => {
        setFoodItem(senditem)
        props.inputvalue(senditem);
    }

    return (
        <Wrapper>
            <div className="wrapping">
            <Button  onClick={() => handleChange('Chinesse')}  
                className={`btn foodbtn d-flex rounded-pill py-3 px-4 m-2 align-items-center 
                bg-lightest ${FoodItem === "Chinesse" ? "active" : ''}`}> Want to eat Chinesse 
            </Button>
            <Button  onClick={() => handleChange('Italian')}  
                className={`btn foodbtn d-flex rounded-pill py-3 px-4 m-2 align-items-center 
                bg-lightest ${FoodItem === "Italian" ? "active" : ''}`}> Want to eat Italian Food 
            </Button>
            <Button  onClick={() => handleChange('South Indian')}  
                className={`btn foodbtn d-flex rounded-pill py-3 px-4 m-2 align-items-center 
                bg-lightest ${FoodItem === "South Indian" ? "active" : ''}`}> Want to eat South Indian 
            </Button>
            <Button  onClick={() => handleChange('North Indian')}  
                className={`btn foodbtn d-flex rounded-pill py-3 px-4 m-2 align-items-center 
                bg-lightest ${FoodItem === "North Indian" ? "active" : ''}`}> Want to eat North Indian 
            </Button>
            </div>
        </Wrapper>

    );
}
export default FoodCatagory;