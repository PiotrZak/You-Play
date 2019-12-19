import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'reactstrap';
import {authHeader} from '../../../_helpers/auth-header';

import DepositForm from './btcdepositform';

interface IProfile {
    userId?: object;
    email?: number;
    amountUsd?: number;
    bonuscode?: number;
  };

let Deposit: React.FC<IProfile> = (props:any) => {

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
    }, []);

    return (
        <div>
            {loading ?
                <Container>
                <Row>
                    <Col xs="12" sm="12">
                    <div className ="streams-container">
                        <DepositForm/>
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

  export default DepositForm;