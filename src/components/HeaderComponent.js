import React from 'react';
import { Nav, NavItem, Jumbotron, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';

function Header(props) {


  return (
    <React.Fragment>
        <Nav className="font-weight-bold headerNav sticky-top">
          <Col>
              <NavItem className="mr-3">
                <NavLink to={"/home"} style={{fontSize: "1.2rem"}}><FontAwesomeIcon size="lg" icon={faAssistiveListeningSystems}/> Can We Listen? </NavLink>
              </NavItem>
          </Col>
          <Col style={{width: "100%", display: "flex", justifyContent: "right"}}>
              <NavItem className="mr-3">
                <NavLink to={"/home"}>Home</NavLink>
              </NavItem>
              <NavItem className="mr-3 ">
                <NavLink to={"/search"}>Search</NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink to={"/account"}>Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/directory"}>Directory</NavLink>
              </NavItem>
            </Col>
        </Nav>
    </React.Fragment>
  );
}

export default Header;