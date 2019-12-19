import React, {useEffect, useState, Component} from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col} from 'reactstrap';
import ReactPlayer from 'react-player'
import {authHeader} from '../../_helpers/auth-header';


const API = 'http://localhost:5000'

interface IUserBets {
    id?: number;
    category?: string;
    title?: string;
    description?:string;
    authorUsername?:string;
    viewers?:number;
  };

let UserBets: React.FC<IUserBets> = (props:any) => {

    // const { match } = props;
    // let id = match.params;
 
     const InitialBetsState = {id: 0, title:'',description:'', category:'', authorUsername: '', viewers:0, hostSite:"", url:""}
     
     const [loading, setLoading] = useState(false)
     const [userBets, setuserBets] = useState([InitialBetsState])
 

    useEffect(() => {
        
        //@ts-ignore
        const user = JSON.parse(localStorage.getItem('user'));
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        //@ts-ignore
        fetch(API + `/bet/getbetshistory?userId=${user.id}`, requestOptions,)
        .then((response:any) => {
          return response.json();
        })
        .then((data:any) => {
            console.log(data)
            setLoading(true)
            setuserBets(data)
        })
        .catch((err:any) =>{
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
 
   export default UserBets;
 
   