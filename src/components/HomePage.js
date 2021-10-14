import React, {useState, useEffect} from "react";
import { Col, Card, Row, CardHeader, CardBody, Jumbotron, Button } from "reactstrap";

export const HomeComponent = () => {

    return(
        <div id="homeSection">
            <div id="homeText">A Hearing Accessibility App for Hearing-Impaired Movie-Goers</div>
            <div id="homeText2">Find and rate local theater hearing accommodations</div>
            <a id="homeLink" href="/search">
                <Button className="btn-md btn-success" to={"/home"}>Get Started</Button>
            </a>
        </div>
        
    )
}
