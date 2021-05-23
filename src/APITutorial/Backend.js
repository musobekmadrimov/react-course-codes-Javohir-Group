import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';
import axios from 'axios';

export default class Backend extends Component {
    state = {
        user: [],
        posts: [],
        images: []
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({ user: data });
    //         })
    // }

    componentDidMount() {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    const post = res.data;
                    this.setState({ posts: post })
                }),

            axios.get('https://jsonplaceholder.typicode.com/photos')
                .then((response) => {
                    const images = response.data;
                    this.setState({ images: images })
                    console.log(images)
                })
        ])

    }



    render() {
        return (
            <div>
                {/* <Container>
                    <Row>
                        {this.state.user.map((users) => (
                            <Col lg="3" md="4" sm="12" key={users.id} className="mb-5">
                                <Card>
                                    <CardHeader>
                                        <h2>{users.name}</h2>
                                    </CardHeader>
                                    <CardBody>
                                        <p>{users.phone}</p>
                                        <strong>{users.username}</strong>
                                        
                                    </CardBody>
                                    <CardFooter>
                                    <Button color="danger">INFO</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container> */}

                <Container>
                    <Row>
                        {this.state.posts.map((post, i) => (
                                <Col lg="3" md="4" sm="12" key={post.id} className="mb-5">
                                    <Card>
                                        <CardHeader>
                                            <img src="" alt="" />
                                        </CardHeader>
                                        <CardBody className="text-justify">
                                            <h4>{post.title}</h4>
                                            <p>{post.body}</p>
                                        </CardBody>
                                        <CardFooter>
                                            <Button outline color="danger" block>INFO</Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}
