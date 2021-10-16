import React, {useState, useEffect} from "react";
import { Col, Card, Row, CardHeader, CardBody, Jumbotron, Button } from "reactstrap";

export const HomeComponent = () => {

    return(
        <div id="homeSection">
            <div id="homeText">A Hearing Accessibility App for Hearing-Impaired Movie-Goers</div>
            <div id="homeText2">Find and rate local theater hearing accommodations</div>
            
                {/* <Button id="homeButton" className="btn-md btn-success" to={"/search"}>Get Started</Button> */}
                <a id="homeButton" className="btn-md btn-success" href="/search">Get Started</a>
            
        </div>
        
    )
}
