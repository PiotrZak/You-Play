import React, {useEffect, useState, Component} from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col} from 'reactstrap';
import ReactPlayer from 'react-player'
import Bets from '../../bets/bets'
import CreateBet from '../../../components/bets/create/createbet'


const API = 'http://localhost:5000'


interface IStream {
  id: number;
  category: string;
  title: string;
  description:string;
  authorUsername:string;
  viewers:number;
};



let Stream: React.FC<IStream> = (props:any) => {

    const { match } = props;
    let id = match.params;

    const InitialStreamState = {id: 0, title:'',description:'', category:'', authorUsername: '', viewers:0, hostSite:"", url:""}
    
    const [loading, setLoading] = useState(false)
    const [stream, setStream] = useState(InitialStreamState)


    useEffect(() => {
        fetch(API + `/stream/getstream?streamId=${id.id}`)
        .then(response => {
          return response.json();
        })
        .then(stream => {
            setLoading(true)
            setStream(stream)
        })
        .catch(err =>{
            console.log(err);
        });
    }, []);

    return (
      <div>
      {loading ?
          <Container>
          <Row>
              <Col xs="12" sm="12">
              <div className ="stream-container">
              <p>{stream.authorUsername}</p>
              <h1>{stream.title}</h1>
              <ReactPlayer width = "100%" height="600px" playing = {false} url={stream.url} />
              <div className = "stream-description">
                <p>{stream.description}</p>
                <CreateBet/>
              </div>
              
              <Bets id ={id.id}/>

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

  export default Stream;

  