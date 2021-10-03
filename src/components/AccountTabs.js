import React from 'react';
import {Card, Form, Button, CardTitle, CardText, Row, Col, Container, UncontrolledCollapse } from 'reactstrap';
import { Component } from 'react';
import AddContributionForm from './AddContributionForm';

class AccountTabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      location: "",
      phone: "",
      selected: false
    }
  }

  
  onEmailSubmit = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    event.preventDefault();
    // alert(`Updated Email: ${this.state.email}`)
  }

  onLocationSubmit = (event) => {
    event.preventDefault();
    alert(`Updated Location: ${this.state.location}`)
  }

  onPhoneSubmit = (event) => {
    event.preventDefault();
    alert(`Updated Phone: ${this.state.phone}`)
  }




  render(){
  return (
    <div> 
        <div>
          <Row>
            <Col sm="12">
                <Container className="mt-5">
                    <Row>
                        <hr/>
                        <Col sm="5" ><b >Email: </b></Col>
                        <Col sm="5"  id="emailText">{this.state.email === "" ? <input type='text' ></input> : this.state.email }</Col>
                        
                        <Col sm="2" className="pb-2" id="emailDiv" >
                          <Button className="btn btn-sm" color="primary" id='emailEdit' >Edit</Button>
                        </Col>
                    </Row>
                    {/* <UncontrolledCollapse className="text-right mt-3 mb-3" toggler="#emailEdit">
                    <Form onSubmit={(event) => this.setState(this.onEmailSubmit(event))}>
                      <input type="text" name="emailInputName" onChange={e => this.setState({email: e.target.value})}></input>
                      <button type="submit">Submit</button>
                    </Form>
                    </UncontrolledCollapse> */}
                    <Row>
                        <hr/>
                        <Col sm="5"><b>Location:</b></Col>
                        <Col sm="5"  id="locationText">{this.state.location}</Col>
                        <Col sm="2" className="pb-2" id="locationDiv"><Button className="btn btn-sm" color="primary" id="locationEdit" onclick="changeLocation()">Edit</Button></Col>
                    </Row>
                    <UncontrolledCollapse className="text-right mt-3 mb-3" toggler="#locationEdit">
                    <Form onSubmit={(event) => this.setState(this.onLocationSubmit(event))}>
                      <input type="text" name="locationInputName" onChange={e => this.setState({location: e.target.value})}></input>
                      <button type="submit">Submit</button>
                    </Form>
                    </UncontrolledCollapse>
                    <Row>
                        <hr/>
                        <Col sm="5"><b>Phone:</b></Col>
                        <Col sm="5"  id="phoneText">
                            {this.state.phone}
                        </Col>
                        <Col sm="2" className="pb-2" id="phoneText"><Button className="btn btn-sm" color="primary" id="phoneEdit" onclick="changePhone()">Edit</Button></Col>
                        <hr/>
                    </Row>
                    <UncontrolledCollapse className="text-right mt-3 mb-3" toggler="#phoneEdit">
                    <Form onSubmit={(event) => this.setState(this.onPhoneSubmit(event))}>
                      <input type="text" name="phoneInputName" onChange={e => this.setState({phone: e.target.value})}></input>
                      <button type="submit">Submit</button>
                    </Form>
                    </UncontrolledCollapse>
                </Container>
            </Col>
          </Row>
        </div>

        <div>
            <h1 className="mt-3 text-left">Contributions</h1>
          <Row className="mt-2">
            <Col sm="4" className="mt-2">
              <Card body className="text-center">
                <CardTitle>Venue Name</CardTitle>
                <CardText>Venue Rating: 4.5</CardText>
                <CardText>Venue Comment</CardText>
                <a href="#"><Button color="primary">View Venue</Button></a>
              </Card>
            </Col>
            <Col sm="4" className="mt-2">
              <Card body className="text-center">
                <CardTitle>Venue Name</CardTitle>
                <CardText>Venue Rating: 4.5</CardText>
                <CardText>Venue Comment</CardText>
                <a href="#"><Button color="primary">View Venue</Button></a>
              </Card>
            </Col>
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
        </div>

        <div tabId="3">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </div>
    </div>
    
  );
}
}

export default AccountTabs;