import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import {Helmet} from 'react-helmet';

import './Register.css'

export default function Register(){
    return(
        <div>
            <Helmet>
                <style>{'body { background-color: rgb(124, 124, 124); }'}</style>
            </Helmet>
            <Container className="regForm">
                <Form>
                    <Row>
                        <Col>
                            <h1 className="regFormTitle">Registration Form</h1>
                            <p className="regFormSubText"> *Please not that drop-in classes are not available for registration until a week in advance*</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormSubTitle">Registration Type</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div key={`inline-${'radio'}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Drop-in Classes"
                                    name="group1"
                                    type={'radio'}
                                    id={`inline-${'radio'}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Term Classes"
                                    name="group1"
                                    type={'radio'}
                                    id={`inline-${'radio'}-2`}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormSubTitle">Dancer Information</h1>
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
                            <h1 className="regFormSubTitle">Class Style</h1>
                            <p className="regFormSubText"> *Please select ALL classes that you would like to join*</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1> </h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Monday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Tuesday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Wednesday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Thursday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Friday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Saturday</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormDayTitle">6pm</h1>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner House"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner Breaking"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate House"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Breaking"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced Breaking"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Popping"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormDayTitle">7pm</h1>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner Popping"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner Shuffle"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Waacking"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Shuffle"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced House"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced Popping"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormDayTitle">8pm</h1>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner Open Choreo"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner Waacking"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Open Choreo"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced Shuffle"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced Open Choreo"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced Open Choreo"
                                />
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <Button variant="dark" className="confirmRegBtn"> Confirm Registration </Button>
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