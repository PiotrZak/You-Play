import React, {useEffect, useState, Component} from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col} from 'reactstrap';
import ReactPlayer from 'react-player'


const API = 'http://localhost:5000'

interface IAllBets {
    id?: number;
    category?: string;
    title?: string;
    description?:string;
    authorUsername?:string;
    viewers?:number;
  };

let AllBets: React.FC<IAllBets> = (props:any) => {

    // const { match } = props;
    // let id = match.params;
 
     const InitialBetsState = {id: 0, title:'',description:'', category:'', authorUsername: '', viewers:0, hostSite:"", url:""}
     
     const [loading, setLoading] = useState(false)
     const [allBets, setallBets] = useState([InitialBetsState])
 
    const streamId = props.id;

     const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({streamId})
    };


     useEffect(() => {
         fetch(API + `/bet/getbetsopen`, requestOptions)
         .then(response => {
           return response.json();
         })
         .then(bets => {
             console.log(bets)
             setLoading(true)
             setallBets(bets)
             console.log(allBets)
             
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
                     <h1>{props.id}</h1>

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
 
   export default AllBets;
 
   