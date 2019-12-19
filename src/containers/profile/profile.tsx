import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

import {authHeader} from '../../_helpers/auth-header';

import Deposit from './payment/btcdeposit';
import UserBets from '../../components/bets/userbets'


import './profile.scss';
import ReactPlayer from 'react-player'

const API = 'http://localhost:5000'

interface IProfile {
    user: object;
    balance: number;
    inPlay: number;
    karma: number;
    total: number;
    usermail: string;
    username: string;
  };

let Profile: React.FC<IProfile> = (props:any) => {

    const InitialStreamState = {balance: 0, inPlay: 0, karma: 0, total: 0, usermail: '', username:''}
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(InitialStreamState)
    
    useEffect(() => {
        
        //@ts-ignore
        const user = JSON.parse(localStorage.getItem('user'));
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        //@ts-ignore
        fetch(API + `/user/getuserdata?userEntityId=${user.id}`, requestOptions,)
        .then((response:any) => {
          return response.json();
        })
        .then((data:any) => {
            console.log(data)
            setLoading(true)
            setUser(data)
        })
        .catch((err:any) =>{
            console.log(err);
        });
    }, []);

    return (
        <div>
            {loading ?
                <Container>
                <Row>
                    <Col xs="12" sm="12">
                    <div className ="streams-container">

                        <h1> Welcome {user.username}</h1>
                        <p> Karma: {user.karma}</p>
                        <p> Balance: {user.balance}</p>
                        <p>Total: {user.total}</p>
                        <Deposit/>
                        <UserBets/>
                    </div>  
                </Col>
                </Row>
                </Container>
                     :
                     <Container>
                     <Row>
                         <Col xs="6" sm="4">
                         <div className ="home-header">
                         <h1>Loading</h1>
                         </div>  
                     </Col>
                     </Row>
                     </Container>
                     }
        </div>
    );
  }

  export default Profile;

  