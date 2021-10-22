import React, { useState } from "react";
import { Button, Row, Col, Container } from "reactstrap";

const AccountInfoTable = () => {
    const [email, setEmail] = useState("connect@michaeldwhitt.com")
    const [location, setLocation] = useState("Dallas, TX")
    const [phone, setPhone] = useState("530.551.2010")
    const [emailPlaceholder, setEmailPlaceholder] = useState(null)
    const [locationPlaceholder, setLocationPlaceholder] = useState(null)
    const [phonePlaceholder, setPhonePlaceholder] = useState(null)



    return (
        <Row>
            <Col sm="12">
                <Container className="mt-5">
                    <Row>
                        <hr />
                        <Col sm="3"><b >Email: </b></Col>
                        {email ? <Col sm="7">{email}</Col> : <Col sm="7"><input type="text" onChange={(e) => setEmailPlaceholder(e.target.value)} /></Col>}
                        <Col sm="2" className="pb-2">
                            {email ? <Button className="btn btn-sm" color="primary" onClick={() => setEmail(null)}>Edit</Button> :
                                <Button className="btn btn-sm" color="success" onClick={(e) => setEmail(emailPlaceholder)}>Submit</Button>}
                        </Col>
                    </Row>
                    <Row>
                        <hr />
                        <Col sm="3"><b >Location: </b></Col>
                        {location ? <Col sm="7">{location}</Col> : <Col sm="7"><input type="text" onChange={(e) => setLocationPlaceholder(e.target.value)} /></Col>}
                        <Col sm="2" className="pb-2">
                            {location ? <Button className="btn btn-sm" color="primary" onClick={() => setLocation(null)}>Edit</Button> :
                                <Button className="btn btn-sm" color="success" onClick={(e) => setLocation(locationPlaceholder)}>Submit</Button>}
                        </Col>
                    </Row>

                    <Row>
                        <hr />
                        <Col sm="3"><b >Phone: </b></Col>
                        {phone ? <Col sm="7">{phone}</Col> : <Col sm="7"><input type="text" onChange={(e) => setPhonePlaceholder(e.target.value)} /></Col>}
                        <Col sm="2" className="pb-2">
                            {phone ? <Button className="btn btn-sm" color="primary" onClick={() => setPhone(null)}>Edit</Button> :
                                <Button className="btn btn-sm" color="success" onClick={(e) => setPhone(phonePlaceholder)}>Submit</Button>}
                        </Col>
                        <hr />
                    </Row>
                </Container>
            </Col>
        </Row>

    )
}

export default AccountInfoTable;