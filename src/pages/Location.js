import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

import './Location.css';

export default function Location(){
    return(
    <div>
        <Helmet>
            <style>{'body { background-color: rgb(124, 124, 124); }'}</style>
        </Helmet>
        <Container>
            <Row>
                <Col sm={7}>
                    <Image className="locationPgImg" src={require('../images/googlemap.webp')} alt="Break dancer" rounded />
                </Col>
                <Col sm={5}>
                <Card className="locationCard">
                        <Card.Body>
                            <Card.Title className="locationTitle">Location</Card.Title>
                            <Card.Text>
                                <p className="locationDesc1">We are located at 123 University Private, in the heart of downtown Ottawa.</p>
                                <p className="locationDesc2">Parking is free and can be found around the back of the building.</p>
                                <p className="locationDesc2">Our facilities open 30 mins before the first class of the night to allow dancers to come in and warm up before class.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    );
}