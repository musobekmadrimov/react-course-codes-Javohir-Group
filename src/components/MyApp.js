import React, { Component } from 'react';
import './style.css';
import { Alert, Button, Col, Container, Row } from 'reactstrap';

export default class MyApp extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="firstText">Hello, React!</h1>

                <Container>
                    <Row>
                        <Col md="4">
                            <Alert color="danger">
                                Bu danger alert!
                            </Alert>
                            <Button outline color="danger" block>AJOYIB!</Button>
                        </Col>
                        <Col md="4">
                            <Alert color="warning">
                                Bu danger alert!
                            </Alert>
                            <Button outline color="warning" block>AJOYIB!</Button>
                        </Col>
                        <Col md="4">
                            <Alert color="primary">
                                Bu danger alert!
                            </Alert>
                            <Button outline color="primary" block>AJOYIB!</Button>
                        </Col>
                        <Col md="4">
                            <Alert color="info">
                                Bu danger alert!
                            </Alert>
                            <Button outline color="info" block>AJOYIB!</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

        )
    }
}
