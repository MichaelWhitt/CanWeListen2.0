import React from 'react';
import { Nav, Navbar, 
  NavItem, Jumbotron,  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
      <React.Fragment>
        <Jumbotron fluid className="mb-0">
          <div className="container">
            <div className="row">
              <div className="col col-9">
                <h1>Can We Listen</h1>
                <h2>An ally site for friends with hearing loss</h2>
              </div>
              <div className="col">
              <img src="/assets/images/CanWeListenLogo2.png" height="240" width="240" alt="Theatre" />
              </div>
            </div>
          </div>
        </Jumbotron>
          <Nav  className="font-weight-bold py-4 px-2 mb-4">
            <Navbar>
            <div className="container">
              <div className="row">
                <div className="col">
                  <NavItem>
                    <NavLink to={"/home"}>Home</NavLink>
                  </NavItem>
                </div>
                <div className="col">
                  <NavItem>
                    <NavLink to={"/search"}>Search</NavLink>
                  </NavItem>
                </div>
                <div className="col">
                  <NavItem>
                    <NavLink to={"/directory"}>Directory</NavLink>
                  </NavItem>
                </div>
              </div>
            </div>
            </Navbar> 
          </Nav>
         
      </React.Fragment>
    );
}

export default Header;