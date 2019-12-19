import React, {useEffect, useState} from 'react';
import {Collapse, Button, CardBody, Card, Container, Row, Col} from 'reactstrap';
import { connect, useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import {streamActions, alertActions, viewActions} from './../../_actions'
import './streams.scss';



const API = 'http://localhost:5000'



interface ICreateStream {
    id?: number;
    category?: string;
    title?: string;
    description?:string;
    authorUsername?:string;
    viewers?:number;
  };


  {/*
    "category": "string",
    "url": "string",
    "title": "string",
    "authorId": "string",
    "authorName": "string",
    "allowUserBets": true,
    "isFeaturedStream": true,
    "description": "string"
*/}

let CreateStream: React.FC<ICreateStream> = (props) => {

    const [collapse, setCollapse] = useState()
    const toggle =() => {{collapse ? setCollapse(false) : setCollapse(true)}}

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
    }, []);

    return (
        <div>
            {loading ?
                <Container>
                <Row>
                    <Col xs="12" sm="12">
                    <div>
                        <p>You can create your own stream and show to the world</p>
                        <Button className="primary-button" onClick={toggle} style={{ marginBottom: '1rem' }}>Create Stream</Button>
                        <Collapse isOpen={collapse}>
                        <Card>
                            <CardBody>
                               <CreateStreamForm/>
                            </CardBody>
                        </Card>
                        </Collapse>
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


interface ICreateStreamForm {
    url?: string;
    title?: string;
    description?: string;
    allowUserBets?: boolean
  };
  
  
  const CreateStreamForm: React.FC<ICreateStreamForm>  = (props:any) => {
  
    const streamInitialState =  {url: '', title: '', description: ''}
    const [inputs, setInputs] = useState(streamInitialState);

    const[allowBets, setallowBets] = useState(true)
    const dispatch = useDispatch();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        
        if(inputs.url && inputs.title && inputs.description){
         dispatch(streamActions.create(inputs.url, inputs.title, inputs.description,allowBets))
         }
         else{
           dispatch(alertActions.warn("Wystąpił Błąd"))
           dispatch(viewActions.hide())
        }
        }
        const handleInputChange = (event:any) => {
          event.persist();
          setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        }

        const handleChecked =() => {{allowBets ? setallowBets(false) : setallowBets(true)}}

 
    return (
  <form onSubmit={handleSubmit}>
        <div>
      <label>URL</label>
      <input type="text" name="url" onChange={handleInputChange} value={inputs.url} required />
    </div>
      <div>
      <label>Title</label>
      <input type="text" name="title" onChange={handleInputChange} value={inputs.title} required />
    </div>
    <div>
      <label>Description</label>
      <input type="password" name="description" onChange={handleInputChange} value={inputs.description}/>
    </div>
    <input type="checkbox" onChange={handleChecked }/>
          <p>Allows bets from another users (if unchecked only you can add live bets)</p>
    <button type="submit">Sign Up</button>
  </form>
    )
  }
  
  const mapStateToProps = (state:any) => ({
  })
  
  const mapDispatchToProps = {
  }
  


  export default CreateStream;
