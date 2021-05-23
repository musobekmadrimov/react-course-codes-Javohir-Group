import React from 'react';
import Users from './users.json';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';

export default function jsonApp() {
    let key = 0;
    return (
        <Container>
            <Row className="my-5">
                {Users.map((post) => {
                    return (
                        <Col lg="4" md="4" sm="12" key={++key}>
                            <Card>
                                <CardHeader>
                                    <img src={post.photo} alt={post.name} />
                                </CardHeader>
                                <CardBody>
                                    <h1>Ism: {post.name}</h1>
                                    <h2>Yoshi: {post.age}</h2>
                                    <p>Mamlakat: {post.country}</p>
                                </CardBody>
                                <CardFooter>
                                    <h3>{post.phone}</h3>
                                </CardFooter>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
