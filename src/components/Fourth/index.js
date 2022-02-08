import { Button } from 'react-bootstrap';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Wrapper } from './Style';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Fourth = () => {
    return (
        <div>
        <Wrapper>            
            <Container>
                <Row>
                    <Col lg={6} md={8} className="image-fluid">
                        <Image style={{width:"100%"}} src="https://images.prismic.io/this-is-cool/7f6195a9-d138-418d-9192-ff8b60c71c98_home-page-hero.png?auto=compress,format" />
                    </Col>
                    <Col lg={6} md={8} >
                        <p className="h6 text-sm text-uppercase mb-1 subheading">About the Daily Life section</p>
                        <h1 className="display-4 mb-3"> Daily Life </h1>
                       
                         <p className="para">This section asks questions about everyday life including education, work, travel, productivity and home life in your country. </p>
                        
                        <Button  className="viewbtn text-uppercase   text-darker ">View Questions<AiOutlineArrowRight className="arrow-right"  /></Button>  
                    </Col>
                </Row>
            </Container>
        </Wrapper>
        </div>
    );
}

export default Fourth;