import React, { useState }  from 'react';
import { Card, CardGroup, Col, Row,Button } from 'react-bootstrap';
import {  Wrapper } from "./style";
// import { BsCheckCircleFill } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";



const ThreeCards = (props) => {

    const [count, setCount] = useState();   
    // console.log(count)

    const handleChange = (sendcard) => {
        setCount(sendcard)
        props.inputvalue(sendcard);
    }

    return (
        <Wrapper>
            <CardGroup>
            <Row xs={1} md={3} className="g-4">
            <Col>
            <Card  onClick={() => handleChange('First Card')}>
                <Card.Img variant="top" className="p-4" src="https://images.prismic.io/this-is-cool/4afda98d-a51d-4a26-bab5-c78de12cbeb4_Cool+house%403x.png?auto=compress,format" />
                <Card.Body>
                <Card.Title className="subhead1">COMFORT AND SAFETY</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead.
                </Card.Text>
                {
                    count === 'First Card'? <Button variant="btn tick text-uppercase mx-auto mt-auto btn-lighter p-0"><BsCheckCircleFill  className="tick" /></Button>
                    : 
                
                <Button  variant="outline-info  SelectButton rounded-pill text-uppercase">select</Button>
                }
                </Card.Body>
                
            </Card>
            </Col>
            
            <Col>
            <Card onClick={() => handleChange('Second Card')}>
                <Card.Img variant="top" className="p-4" src="https://images.prismic.io/this-is-cool/4afda98d-a51d-4a26-bab5-c78de12cbeb4_Cool+house%403x.png?auto=compress,format" />
                <Card.Body>
                <Card.Title className="subhead1">FOOD AND NUTRITION</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead.
                </Card.Text>
                {
                    count === 'Second Card' ? <Button variant="btn tick  text-uppercase mx-auto mt-auto btn-lighter p-0"><BsCheckCircleFill  className="tick" /></Button>
                    : 
                
                <Button variant="outline-info SelectButton rounded-pill text-uppercase">select</Button>
                }
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card onClick={() => handleChange('Third Card')}>
                <Card.Img variant="top" className="p-4" src="https://images.prismic.io/this-is-cool/4afda98d-a51d-4a26-bab5-c78de12cbeb4_Cool+house%403x.png?auto=compress,format" />
                <Card.Body>
                <Card.Title className="subhead1">HEALTH AND CARE</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead.
                </Card.Text>

                    {
                        count ==='Third Card' ? <Button variant="btn tick text-uppercase mx-auto mt-auto btn-lighter p-0"><BsCheckCircleFill  className="tick" /></Button>
                        : 
                    
                    <Button variant="outline-info SelectButton rounded-pill text-uppercase">select</Button>
                    }
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </CardGroup>
        </Wrapper>
    );
}

export default ThreeCards;
