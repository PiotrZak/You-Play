import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import Navbar from '../../components/common/navbar'
import Main from '../../components/home/main'

import CreateStream from './createstream';

import './streams.scss';
import ReactPlayer from 'react-player'

const API = 'http://localhost:5000'


interface IStreams {
    id: number;
    category: string;
    title: string;
    description:string;
    authorUsername:string;
    viewers:number;
  };

let Streams: React.FC<IStreams> = (props) => {

    const InitialStreamsState = {id: 0, title:'', description:'', category:'', authorUsername: '', viewers:0, hostSite:"", url:""}

    const [loading, setLoading] = useState(false)
    const [streams, setStreams] = useState([InitialStreamsState])
    const [logged, setLogged] = useState(false)

    useEffect(() => {

        if(localStorage.getItem('user') === null)  {setLogged(true);}

        fetch(API + '/stream/getstreams')
        .then(response => {
          return response.json();
        })
        .then(streams => {
            console.log(streams)
            const result = streams.map((obj:any) => ({id: obj.id, title: obj.title, description:obj.description, category:obj.category, authorUsername:obj.authorUsername,viewers:obj.viewers, hostSite: obj.hostSite, url: obj.url}));
            console.log(result)
            setLoading(true)
            setStreams(result)
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
                    <div className ="streams-container">

                    {logged 
                    ? <div> You also can create your own stream</div>
                    : <CreateStream/>}
                    

                    <h1>Top Streams</h1>
                            {streams.map((stream) => (
                                <div className = "stream" key = {stream.id}>
                                <div className = "stream-header">
                                        <p>{stream.category}</p>
                                        <p>{stream.viewers}</p>
                                        <p>{stream.authorUsername}</p>
                                        <p>{stream.hostSite}</p>
                                 </div>
                                 <div className ="stream-body">
                                    <div className ="stream-movie">
                                    <ReactPlayer playing = {false} url={stream.url} />
                                    </div>

                                    <div className ="stream-info">
                                <h1> {stream.title}</h1>
                                <p>{stream.description}</p>
                                <p>{stream.authorUsername}</p>

                                    <Link to={{ 
                                            pathname: `/stream/${stream.id}`,
                                            state: {id: stream.id}
                                        }}> 
                                        <button className ="secondary-button">Watch now</button></Link>
                                        </div>
                                </div>
                                </div>
                            ))}
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

  export default Streams;

  