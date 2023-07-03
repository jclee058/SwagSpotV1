import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

import './Home.css';

export default function Home(){
    return(
    <div>
        <Helmet>
            <style>{'body { background-color: rgb(124, 124, 124); }'}</style>
        </Helmet>
        <Container>
            <Row>
                <Col sm={7}>
                    <Image className="homePgImg" src={require('../images/homepage.jpeg')} alt="Break dancer" rounded />
                </Col>
                <Col sm={5}>
                    <Card className="homeCard">
                        <Card.Body>
                            <Card.Title className="homeTitle">The Swag Spot</Card.Title>
                            <Card.Text className="homeDesc">
                                Located in Downtown Ottawa
                            </Card.Text>
                            <Button variant="dark" className="learnBtn">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    );
}