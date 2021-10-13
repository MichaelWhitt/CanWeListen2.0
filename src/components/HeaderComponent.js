import React from 'react';
import { Nav, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {


  return (
    <React.Fragment>
      
     
        <Nav className="font-weight-bold headerNav sticky-top">
          <NavItem className="mr-3">
            <NavLink to={"/home"}>Home</NavLink>
          </NavItem>
          <NavItem className="mr-3">
            <NavLink to={"/search"}>Search</NavLink>
          </NavItem>
          <NavItem className="mr-3">
            <NavLink to={"/account"}>Account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/directory"}>Directory</NavLink>
          </NavItem>
        </Nav>
      
      
    </React.Fragment>
  );
}

export default Header;