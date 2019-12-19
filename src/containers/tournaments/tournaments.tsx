import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';



import './tournaments.scss';
import ReactPlayer from 'react-player'

const API = 'http://localhost:5000'

interface ITournaments {
    user: object;

  };

let Tournaments: React.FC<ITournaments> = (props:any) => {

    
    useEffect(() => {

    }, []);

    return (
        <div>
            <h1>Welcome in Tournaments</h1>
        </div>
    );
  }

  export default Tournaments;

  