import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Account from './AccountComponent';
import SearchPage from './SearchComponent'
import ClickDisplay from './ClickDisplayComponent';
import { HomeComponent } from './HomePage';
import UserAccount from './UserAccount';


function Main(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <HomeComponent/>} />
          <Route exact path='/directory' render={() => <Directory />} />
          <Route exact path='/account' render={() => <Account/>}/>
          <Route exact path='/userpage' component={UserAccount}/>
          <Route exact path='/search' render={() => <SearchPage />} />
          <Route exact path='/searchItemDisplay' component={ClickDisplay} />
        </Switch>
      </BrowserRouter>
    </div>
  );

}
export default Main;