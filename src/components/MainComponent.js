import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from "./HomeComponent";
import Footer from './FooterComponent';
import SearchPage from './SearchComponent'


function Main(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/home' render={() => <Home />} />
          <Route exact path='/directory' render={() => <Directory />} />
          <Route exact path='/search' render={() => <SearchPage />} />
        </Switch>
        <div className="container">
          <div className="row">
          <h1>Can We Listen?</h1>
          <h3>Have you ever wondered what resources are 
              out there for people with hearing loss?</h3>
          </div>
          <div className="row">
            <div className="col">
            <img src="/assets/images/TheatreSeating.png" height="240" width="360" alt="Theatre" />
              <h3>Who are we for?</h3>
              <p>Our goal is to provide a service to our friends with hearing loss, 
              their friends, or anyone who would like to contribute to our ratings,
              feedback forums, and help others to have a better entertainment experience.</p>
            </div>
            <div className="col">
            <img src="/assets/images/ListeningDeviceCalState.png" height="240" width="240" alt="Theatre" />
              <h3>What we do</h3>
              <p>We provide friends with hearing loss a resource to check out
              entertainment venues and their resources, before they go out.</p>
            </div>
            
            <div className="col">
            <img src="/assets/images/CaptiViewAMC.png" height="240" width="360" alt="CaptiView" />
              <h3>How it works</h3>
              <p>Before you go out, search the venue, and check out the rating, 
              check out the devices, the feedback of previous customers, etc.</p>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );

}
export default Main;