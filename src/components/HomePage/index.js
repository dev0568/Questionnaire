import { Col, Container, Image, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper } from "./style";
import SelectInput from '../SelectInput';
import ThreeCards from '../ThreeCards';
import FoodCatagory from '../FoodCatagory';
import Buttons from '../Buttons';
import Fourth from '../Fourth';

const HomePage = () => {

    const [Step, setStep] = useState(1);
    const [receivevalue, setreceivevalue] = useState('');
    const [itemreceive, setitemreceive] = useState('');
    const [receivecard, setreceivecard] = useState('');

    const onSubmit = () => {
        if (!receivevalue?.value?.length && Step === 1) {
            alert(" Please select one of them") 
        }
        else if (!itemreceive?.length && Step === 2) {
            alert(" Please select Food Catagory")
        }
        else if (!receivecard?.length && Step === 3) {
            alert(" Please select atleast one card")
        }
        else {
            if (Step !== 4) { setStep(Step + 1) } 
            console.log("your value is", receivevalue.value )
        }
    }

    const getvalue = (receive) => {
        if (Step === 1) { setreceivevalue(receive) }
        else if (Step ===2 ){ setitemreceive(receive) }
        else if (Step === 3) { setreceivecard (receive) }
    }

    return (
        <Wrapper>
            <Container>
                <div className="wrap">
                    <Row>
                        <Col lg={3} md={4}>
                            <Image style={{ width: "100px" }} src="https://images.prismic.io/this-is-cool/a1ef2ca6-3323-4a6e-8703-92b2e74f8c5b_Homepage-Hero-Test1.png?auto=compress,format" />
                        </Col>
                        <Col lg={9} md={8}>
                            <h1>Make bookings at restaurants </h1>
                            <div className="txtcss font-weight-light h5">
                                <p>Answer a set of detailed questions and find the best solutions for your country or community, the healthcare or farming sector.</p>
                                <p>Your report will provide you with a personalized package of affordable and sustainable solutions that will help deliver cooling for all.</p>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <Image style={{ width: "50px", margin: "20px" }} src="https://images.prismic.io/this-is-cool/266c1a42-926f-4ed0-90e3-ea5140b9b9a6_Cool+produce%403x.png?auto=compress,format&rect=0,0,311,263&w=605&h=512" />
                                <div className="txtcss font-weight-light rich-text-links">
                                    <p>Interested in an overview of cooling solutions? </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="styling">
                        <p className="font subhead">QUESTION {Step}/4</p>
                        <h4 className="h2">Pick the taste you want to explore</h4>
                        {Step === 1 ? <SelectInput inputvalue={ getvalue } /> : null}
                        {Step === 2 ? <FoodCatagory inputvalue={ getvalue  } /> : null}
                        {Step === 3 ? <ThreeCards inputvalue={ getvalue  } /> : null}
                    </div>
                    {Step === 4 ? <Fourth /> : null}
                    {FoodCatagory
                        ? <Buttons submit={Step === 4 ? "finish" : "submit"} previousClick={() => { if (Step !== 1) { setStep(Step - 1) } }} submitClick={() =>
                            onSubmit()
                        } />
                        : null
                    }
                </div>
            </Container>
        </Wrapper>
    );
}

export default HomePage;