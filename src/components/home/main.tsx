import React, {useEffect} from 'react';
import { Container, Row, Col} from 'reactstrap';
import MainPhoto from '../../img/mainphoto.png'

import './main.scss';

let Main = () => {
    useEffect(() => {

    }, []);

    return (
        <div className ="home-container">       
                <Container>
                <Row>
                    <Col sm="4" xs="12"> 
                    <div className ="home-header">
                    <h1>Connect eSport with money</h1>
                    <p className = "orange">Welcome to the game</p>
                    <p>Designed for streaming taking 
                    challenges & winning tournaments</p>
                    <button className = "primary-button">Start Play</button>
                    </div>  
                </Col>
                </Row>
                </Container>
                <img className = "home-main-photo" src = {MainPhoto}/>
        </div>
    );
  }

  export default Main;
