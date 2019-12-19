import React, {useEffect, useState, Component} from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col} from 'reactstrap';
import ReactPlayer from 'react-player'


const API = 'http://localhost:5000'


interface IBets {
  id?: number;
  category?: string;
  title?: string;
  description?:string;
  authorUsername?:string;
  viewers?:number;
};



let FinishedUserBets: React.FC<IBets> = (props:any) => {

   // const { match } = props;
   // let id = match.params;

    const InitialBetsState = {id: 0, title:'',description:'', category:'', authorUsername: '', viewers:0, hostSite:"", url:""}
    
    const [loading, setLoading] = useState(false)
    const [finishedbets, setFinishedbets] = useState([InitialBetsState])


    useEffect(() => {
        console.log(props.id)
        fetch(API + `/bet/getbetshistory?userId=${props.id}`)
        .then(response => {
          return response.json();
        })
        .then(bets => {
            console.log(bets)
            setLoading(true)
            setFinishedbets(bets)
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
        <Col>
              <div className ="stream-container">
                    <h1> Bets</h1>
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

  export default FinishedUserBets;

  