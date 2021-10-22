import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const HomeComponent = () => {

    return (
        <div id="homeSection">
            <div id="homeText">A Hearing Accessibility App for Hearing-Impaired Movie-Goers</div>
            <div id="homeText2">Find and rate local theater hearing accommodations</div>
            <Button id="homeButton" className="btn-md btn-success" >
                <Link to={'/search'}>Get Started</Link>
            </Button>
        </div>

    )
}
