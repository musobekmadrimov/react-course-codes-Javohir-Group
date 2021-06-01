import React from 'react';
import SimpleChart from './SimpleChart';
import { Col, Container, Row } from 'reactstrap';
import './master.css';


export default function chartsComp() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="12" className="my-3">
                        <h1 className="display-4 text-center">Recharts Line CHart</h1>
                    </Col>
                    <Col sm="12">
                        <SimpleChart />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
