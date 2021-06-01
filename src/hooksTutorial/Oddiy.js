import React, {useState} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

export default function Oddiy() {

    let [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function reset(){
        setCount(count = 0);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md="4" lg="3" sm="12" className="mx-auto my-5">
                        <Card style={{width: '220px'}}>
                            <CardHeader className="text-center bg-danger text-white">
                                <span>{count}</span>
                            </CardHeader>
                            <CardBody className="bg-dark">
                                <Button color="danger" className="mx-2" onClick={decrement}>-</Button>
                                <Button color="info" className="mx-2" onClick={reset}>RESET</Button>
                                <Button color="success" className="mx-2" onClick={increment}>+</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}