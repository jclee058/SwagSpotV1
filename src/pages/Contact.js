import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';

import {Helmet} from 'react-helmet';

import './Contact.css'

export default function Contact(){
    return(
        <div>
            <Helmet>
                <style>{'body { background-color: rgb(124, 124, 124); }'}</style>
            </Helmet>
            <Container className="contactForm">
                <Form>
                    <Row>
                        <Col>
                            <h1 className="contactFormTitle">Contact Form</h1>
                            <p className="contactFormSubText"> If you have any inquiries please send us your questions through the form below. We will get back to you ASAP!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="contactFormSubTitle">Inquiry Type</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div key={`inline-${'radio'}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Classes"
                                    name="group1"
                                    type={'radio'}
                                    id={`inline-${'radio'}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Pricing"
                                    name="group1"
                                    type={'radio'}
                                    id={`inline-${'radio'}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Other"
                                    name="group1"
                                    type={'radio'}
                                    id={`inline-${'radio'}-2`}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="contactFormSubTitle">Your Information</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control  className="formInputBox" placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control className="formInputBox" placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control className="formInputBox" placeholder="Email Address" />
                        </Col>
                        <Col>
                        <Form.Control className="formInputBox" placeholder="Phone Number" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormSubTitle">Your Inquiry</h1>
                            <p className="regFormSubText"> Please enter your questions below and we will do our best to answer!</p>
                        </Col>
                    </Row>
                    <Row>
                        <InputGroup>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Row>
                    <div>
                        <Button variant="dark" className="confirmRegBtn"> Submit Form </Button>
                    </div>
                    <Row>
                        <Col>
                            <h1> </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1> </h1>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}