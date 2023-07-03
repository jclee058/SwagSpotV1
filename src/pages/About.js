import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';


import {Helmet} from 'react-helmet';

import './About.css';


export default function About(){
    return(
        <div>
        <Helmet>
            <style>{'body { background-color: rgb(124, 124, 124); }'}</style>
        </Helmet>
        
        <Container>
            <Row>
                <Col sm={5}>
                    <Card className="aboutCard">
                        <Card.Body>
                            <Card.Title className="aboutTitle">About Us</Card.Title>
                            <Card.Text className="aboutDesc">
                                Here at The Swag Spot, we focus on creating a welcoming environment for all dancers allowing 
                                them to learn and challenge themselves in different styles of Hip Hop. We offer style classes 
                                focused on Breaking, House, Popping, Shuffle, and Waacking to help dancers learn more about 
                                a specific style. Our dancers also love our Open Choreo classes which allow you to put your skills learned
                                in style focused classes to the test. You can learn more
                                about our instructors below, or visit the classes tab to learn more about our classes, schedule
                                and pricing. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={7} className="aboutCarousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id = "aboutImg1"
                            src={require('../images/aboutus1.jpeg')}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id = "aboutImg2"
                            src={require('../images/aboutus2.jpeg')}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id = "aboutImg3"
                            src={require('../images/aboutus3.jpeg')}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        <Container className="instContainer">
            <Row>
                <Col className="meetInstTitle">Meet Our Instructors</Col>
            </Row>
            <Row className="instRow">
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor1.jpeg')} className="instImg" />
                        <Card.Body>
                            <Card.Title className="instCardTitle">Jordan Smith</Card.Title>
                            <Card.Text>
                                <Accordion className="instAccordion" defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor2.jpeg')} className="instImg" />
                        <Card.Body>
                            <Card.Title className="instCardTitle">Jennifer Greene </Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor3.jpeg')} className="instImg"/>
                        <Card.Body>
                            <Card.Title className="instCardTitle">Stacey Torres</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="instRow">
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor4.jpeg')} className="instImg"/>
                        <Card.Body>
                            <Card.Title className="instCardTitle">Bethany Vega</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor5.jpeg')} className="instImg"/>
                        <Card.Body>
                            <Card.Title className="instCardTitle">Kenneth Gibbs</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor6.jpeg')} className="instImg" />
                        <Card.Body>
                            <Card.Title className="instCardTitle">Rebbeca Jones</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="meetInstTitle"> </Col>
            </Row>
        </Container>
    </div>
    );
}