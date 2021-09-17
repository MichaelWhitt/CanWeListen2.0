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
        <Footer />
      </BrowserRouter>
    </div>
  );

}
export default Main;