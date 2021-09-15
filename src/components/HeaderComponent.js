import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
  NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input, Container, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    
  
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Nav>
            <NavItem>
              <NavLink to={"/home"}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/directory"}>Directory</NavLink>
            </NavItem>
          </Nav>
        </Jumbotron>
      </React.Fragment>
    );
}

export default Header;