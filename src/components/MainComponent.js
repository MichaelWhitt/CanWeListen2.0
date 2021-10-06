import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './FooterComponent';
import Account from './AccountComponent';
import SearchPage from './SearchComponent'
import ClickDisplay from './ClickDisplayComponent';


function Main(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/home' />
          <Route exact path='/directory' render={() => <Directory />} />
          <Route path='/account' render={() => <Account/>}/>
          <Route exact path='/search' render={() => <SearchPage />} />
          <Route exact path='/searchItemDisplay' component={ClickDisplay} />
        </Switch>
      </BrowserRouter>
    </div>
  );

}
export default Main;