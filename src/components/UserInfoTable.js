import React from "react";
import { Row, Col, Container } from "reactstrap";

function UserInfoTable(props) {
    const data = props.data
    return (
        <Row>
            <Col sm="12">
                <Container className="mt-5">
                    <Row>
                        <hr />
                        <Col sm="3"><b >Email: </b></Col>
                        <Col sm="7">{data.email}</Col>
                        <Col sm="2" className="pb-2"></Col>
                    </Row>
                    <Row>
                        <hr />
                        <Col sm="3"><b >Location: </b></Col>
                        <Col sm="7">{data.location}</Col>
                        <Col sm="2" className="pb-2"></Col>
                    </Row>

                    <Row>
                        <hr />
                        <Col sm="3"><b >Phone: </b></Col>
                        <Col sm="7">{data.phone}</Col>
                        <Col sm="2" className="pb-2"></Col>
                        <hr />
                    </Row>
                </Container>
            </Col>
        </Row>

    )
}

export default UserInfoTable;