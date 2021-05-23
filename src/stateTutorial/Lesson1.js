import React, { Component } from 'react';
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';

export default class Lesson1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Musobek',
            age: 22,
            profession: 'Full-Stack Web Developer!',
            time: new Date(),
            result: 0
        };
    }

    increment(){
        this.setState({
            result: this.state.result + 1
        })
    }

    decrement(){
        this.setState({
            result: this.state.result - 1
        })
    }

    reset(){
        this.setState({
            result: 0
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div className="counter">
                <Container>
                    <Row>
                        <Col md="4" lg="3" sm="12">
                            <Card>
                                <CardHeader>
                                    {this.state.result}
                                </CardHeader> 
                                <CardBody>
                                    <Button color="danger" onClick={() => this.decrement()}>-</Button>
                                    <Button color="info" onClick={() => this.reset()}>RESET</Button>
                                    <Button color="success" onClick={() => this.increment()}>+</Button>    
                                </CardBody>   
                            </Card>                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
