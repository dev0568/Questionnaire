import { Button } from 'react-bootstrap';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Wrapper } from './style';

const Buttons = ({submitClick , previousClick, submit}) => {
    return (
        <Wrapper>
            <div className="container btn-sec">
                <Button onClick={previousClick} className="prevbtn text-uppercase  text-darker"><AiOutlineArrowLeft  className="arrow-left" />previous</Button> 
                <Button onClick={submitClick} className="submitbtn text-uppercase  text-darker">{submit}<AiOutlineArrowRight className="arrow-right"  /></Button> 
            </div>
        </Wrapper>
    );
}


export default Buttons;