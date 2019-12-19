import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ScrollToTopRoute from './scrolltotop';

import './index.scss';

import Navbar from './components/common/navbar'
import AlertsComponent from './AlertsComponent'

import Home from './containers/home/index'
import Streams from './containers/streams/streams'
import Stream from './containers/streams/stream/stream'
import Profile from './containers/profile/profile'
import { PrivateRoute } from './PrivateRoute';

export class Routing extends Component {

      render() {        
        return (
            <Router>
                <Navbar/>
                <AlertsComponent/>
              <div className = "main-container">
                <ScrollToTopRoute exact path="/" component={Home} />
               <ScrollToTopRoute path="/streams" component={Streams} />
               <ScrollToTopRoute path ="/stream/:id" component ={Stream}/>
               <PrivateRoute path ="/profile/" component ={Profile}/>
              </div>
            </Router>
          );
        }
  }

  export default Routing;