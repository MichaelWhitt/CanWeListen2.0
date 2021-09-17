import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, List, ListGroupItemHeading } from 'reactstrap';
import Jumbotron from 'reactstrap/lib/Jumbotron';

function Footer(props) { 
  return (
    <React.Fragment>
      <Jumbotron className="siteFooter">
        <Row>
          <Col>
              <div>This is the footer</div>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/search'>Search</Link></li>
                <li><Link to='/account'>Account</Link></li>
                <li><Link to='/map'>Map</Link></li>
              
          </Col>
          <Col>
            <img src="/assets/images/CanWeListen.png" alt="cwl" width="90" height="90" />
          </Col>
        </Row>
      </Jumbotron>
    </React.Fragment>
  );
}
export default Footer;