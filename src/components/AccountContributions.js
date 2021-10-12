import React from "react";
import AddContributionForm from "./AddContributionForm";
import {Card,  Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { fakeComment } from "../shared/fakeComment";


const AccountContributions = () => {


    return(
        <>
          <hr/>
          
          <h2 className="mt-3 text-center">Recent Contributions</h2>
            <Row className="mt-2">
              <Col sm="4" className="mt-2">
                <Card body className="text-center">
                  <CardTitle>Venue Name</CardTitle>
                  <CardText>Venue Rating: 4.5</CardText>
                  <CardText>Venue Comment</CardText>
                  <a href="#"><Button color="primary">View Venue</Button></a>
                </Card>
              </Col>
            </Row>
          <AddContributionForm/>
        </>
    )
}

export default AccountContributions;