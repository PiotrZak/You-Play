import React, {useState, useEffect} from 'react';
import { Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect, useSelector, useDispatch } from "react-redux";
import {userActions, alertActions, viewActions} from './../../_actions'

import './navbar.scss';

{/*
import MobileIcon1 from '../../img/programmer/menu/programmermobilehome.svg'
import MobileIcon2 from '../../img/programmer/menu/programmermobileproject.svg'
import MobileIcon3 from '../../img/programmer/menu/programmermobileabout.svg'
import MobileIcon4  from '../../img/programmer/menu/programmermobileliterature.svg'

*/}

let MobileMenu = (props:any) => {

  const dispatch = useDispatch();
  const logout = () => {dispatch(userActions.logout())}

    return (
      <div className ="navigation-mobile animated fadeInUp">
        <NavLink exact activeClassName="activeRoute"  to="/" >{/*<img src ={MobileIcon1}/> */}<p>Main</p></NavLink>
        <NavLink activeClassName="activeRoute" to="/streams">{/*<img src ={MobileIcon2}/> */}<p>Streams</p></NavLink>
        {props.logged 
        ?  <div className="navigation-group"><NavLink activeClassName="activeRoute" to="/cabout" >{/*<img src ={MobileIcon3}/> */}<p>Register</p></NavLink> <NavLink activeClassName="activeRoute" to="/articles" >{/*<img src ={MobileIcon4}/> */}<p>Login</p></NavLink></div>
        : <div className="navigation-group"><NavLink activeClassName="activeRoute" to="/profile" >{/*<img src ={MobileIcon3}/> */}<p>Profile</p></NavLink><NavLink activeClassName="activeRoute" to="/profile" onClick ={e => {logout()}} >{/*<img src ={MobileIcon3}/> */}<p>Logout</p></NavLink></div>
        }    
                                        
  
      </div>
    );
  }

  export default withRouter(MobileMenu)