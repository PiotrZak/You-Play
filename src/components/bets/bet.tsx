import React, {useEffect, useState} from 'react';
import {Button, Collapse, CardBody, Card, Container, Row, Col} from 'reactstrap';
import {betActions, alertActions, viewActions} from './../../_actions'
import { connect, useSelector, useDispatch } from "react-redux";

import classnames from 'classnames';

import './bets.scss'
let Bet = (props:any) => {
  
  const [collapse, setCollapse] = useState()
  const toggle =() => {{collapse ? setCollapse(false) : setCollapse(true)}}
  const dispatch = useDispatch();

    useEffect(() => {
    }, []);

    const handleSubmit = (event:any) => {
        event.preventDefault();
         dispatch(betActions.playbet())
        }



    return (
        

        <Container>

        <div onClick={toggle} className ="bet">
        <Col xs="1" sm="1">
            <div className="option">
            A:
            </div>
        </Col>
        <Col xs="1" sm="1">
            <div className="option">
            B:
            </div>
        </Col>
        <Col xs="6" sm="6">
            <div className="description">
            I will lose 5 game in row
            </div>
        </Col>
        </div>

        <Row>
        <Col xs="6" sm="12">

                        <div className ="bet-open">
                        <Collapse isOpen={collapse}>
                        <Card>
                            <CardBody>
                                <Row>
                            <Col xs="8" sm="8">
                                <div className ="bet-open-left">
                                <Col xs="7" sm="6">
                                    <p>A: description of option A</p>
                                </Col>
                                    <Col xs="7" sm="6">
                                    <p>B: description of option B</p>
                                    </Col>
                                    <Col xs="7" sm="8">
                                    <p>How many tokens you stake for option B?</p>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs="6" sm="4">
                                <div className ="bet-open-right">
                                     <p>Stake: 2 tokens</p>
                                    <p>Possible Winnings: 6,24 tokens</p>
                                    <form onSubmit={handleSubmit}>
                                    <button className ="bet-button" type="submit"> Place Bet</button>
                                    </form>
                                    <p>By placing a bet, you automatially accept the most recent version of the Terms of conditions.</p>
                                </div>
                            </Col>
                            </Row>
                            </CardBody>
                        </Card>
            </Collapse>
            </div>
            </Col>
            </Row>
            </Container>
    );
  }

  export default Bet;