import React, { useState, setState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, Button, CardTitle, CardText, Row, Col, Container, UncontrolledCollapse } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartPie, faClipboard } from '@fortawesome/free-solid-svg-icons';
import ContributionForm from './ContributionForm';




const AddContributionForm = () => (


    <div>
      
      <Button color="success" id="toggler" className="mt-5">
        Show Formv
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <ContributionForm/>
      </UncontrolledCollapse>
    </div>
  );

const AccountTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const [email, setEmail] = useState("connect@michaeldwhitt.com")
  

  const newInput = () =>{
    setEmail(
      <>
        <input placeholder="email" onChange={handleChange} ></input><button>Submit</button>
      </>
    );
  }

  const handleChange = (e) => {
    setState({value: e.target.value});
  }

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  };


  return (
    <div>
        
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <FontAwesomeIcon icon={faUser}/> Account
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <FontAwesomeIcon icon={faChartPie}/> Contributions
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <FontAwesomeIcon icon={faClipboard}/> Other
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">

          <Row>
            <Col sm="12">
                <Container className="mt-5">
                    <Row>
                        <hr/>
                        <Col sm="2" ><b>Email:</b></Col>
                        <Col sm="8"  id="emailText">{email}</Col>
                        <Col className="pb-2" id="emailDiv"><Button className="btn btn-sm" color="primary" id='emailEdit' onClick={newInput}>Edit</Button></Col>
                    </Row>
                    <Row>
                        <hr/>
                        <Col sm="2"><b>Location:</b></Col>
                        <Col sm="8"  id="locationText">Dallas, TX</Col>
                        <Col sm="2" className="pb-2" id="locationDiv"><Button className="btn btn-sm" color="primary" id="locationEdit" onclick="changeLocation()">Edit</Button></Col>
                    </Row>
                    <Row>
                        <hr/>
                        <Col sm="2"><b>LinkedIn:</b></Col>
                        <Col sm="8"  id="linkedInTextDiv">
                            <a id="linkedInText" href="https://www.linkedin.com/in/michael-whitt-6514b475/">Michael Whitt</a>
                        </Col>
                        <Col sm="2" className="pb-2" id="linkedInDiv"><Button className="btn btn-sm" color="primary" id="linkedInEdit" onclick="changeLinkedIn()">Edit</Button></Col>
                        <hr/>
                    </Row>
                </Container>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
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
        </TabPane>

        <TabPane tabId="3">
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
        </TabPane>
        
      </TabContent>
      
    </div>
  );
}

export default AccountTabs;