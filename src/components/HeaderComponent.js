import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
  NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input, Container, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    
  
    return (
      <React.Fragment>
        <Jumbotron fluid className="mb-0">
          <Nav  className="font-weight-bold py-4 px-2 mb-4">
            <NavItem>
              <NavLink to={"/home"}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/search"}>Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/account"}>Account</NavLink>
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