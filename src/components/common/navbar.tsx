import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom'
import './navbar.scss';

import RegisterModal from './registermodal';
import LoginModal from './loginmodal';
import MobileMenu from './mobilemenu';


import {userActions, alertActions, viewActions} from './../../_actions'
import { connect, useSelector, useDispatch } from "react-redux";

import Logo from '../../img/logo.svg'

let Navbar = () => {

    const [logged, setLogged] = useState(false)
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(localStorage.getItem('user') === null)  {setLogged(true); }
    }, []);

    const logout = () => {dispatch(userActions.logout())}
  
    return (
        <div>
                <Row>
                    <Col>
                        <div className ="navbar">
                        <Container>
                            <Link to ="/"><img src = {Logo}/></Link>
                                <ul className ="navigation">
                                    <Col><li><a><Link to ="/streams">Streams</Link></a></li></Col>
                                        {logged 
                                         ?  <div className="navigation-group"><Col><li><a><RegisterModal/></a></li></Col><Col><li><a><LoginModal/></a></li></Col></div>
                                        : <div className="navigation-group"><Col><li><a><Link to ="/profile">Profile</Link></a></li></Col><Col><li><a onClick ={e => {logout()}}>Logout</a></li></Col></div>
                                        }        
                                 </ul>
                             //@ts-ignore
                            <MobileMenu logged = {logged}/>   
                            </Container>
                        </div>
                    </Col>
                </Row>

        </div>
    );
  }

  export default Navbar;