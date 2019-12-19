 import React, {useEffect, useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './bets.scss';

import AllBets from '../../components/bets/allbets';
import Bet from '../../components/bets/bet';
import FinishedUserBets from '../../components/bets/finishedbets';
import CreateBet from '../../components/bets/create/createbet';

let Bets = (props:any) => {

    const [activeTab, setActiveTab] = useState("1");

    useEffect(() => {
        console.log(props.id)
    }, []);

    return (
        <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() =>  setActiveTab("1")}
            >
              All Bets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() =>  setActiveTab("2")}
            >
              My Bets
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() =>  setActiveTab("3")}
            >
              Finished Bets
            </NavLink>
            </NavItem>
        </Nav>






        <TabContent activeTab={activeTab}>

          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                    <Bet/>
                    <Bet/>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
                    <Bet/>
                    <Bet/>
          </TabPane>

          <TabPane tabId="3">
                    <FinishedUserBets id ={props.id}/>
          </TabPane>

        </TabContent>
      </div>
    );
  }

  export default Bets;
