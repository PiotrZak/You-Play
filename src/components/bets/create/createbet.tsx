import React, {useEffect, useState} from 'react';
import {Button, Collapse, CardBody, Card, Container, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import CreateBetForm from './createbetform'

let CreateBet = (props:any) => {
  
  const [collapse, setCollapse] = useState()
  const toggle =() => {{collapse ? setCollapse(false) : setCollapse(true)}}


    useEffect(() => {
    }, []);

    return (
        <div className = "stream-description-addbet">
          <Button className="primary-button" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Bet</Button>
                        <Collapse isOpen={collapse}>
                        <Card>
                            <CardBody>
                               <CreateBetForm/>
                            </CardBody>
                        </Card>
            </Collapse>
      </div>
    );
  }

  export default CreateBet;
