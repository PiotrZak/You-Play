import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import './navbar.scss';

import LoginForm from './login/loginhook'


class RegisterModal extends React.Component<any,any> {

    constructor(props: boolean) {
      super(props);
      this.state = {
        modal: false
      };
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState((prevState: any) => ({
        modal: !prevState.modal
      }));
    }
  
    render() {
      return (
        <div>
            <button className = "primary-button" onClick={this.toggle} >Login</button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>    <h1>Sign in!</h1>
        <p>Be part of our community</p></ModalHeader>
            <ModalBody>
                <LoginForm/>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }

  interface IRegisterUser {
    mail: string;
    password: string;
  };

  let LoginUser: React.FC<IRegisterUser> = (props) => {

    const InitialUserState = {mail: "", password: ""}
    const [user, setUser] = useState(InitialUserState)

    useEffect(() => {
  
    }, []);
    
    return (
        <div>
                <input type="text" className="text" name="username" value={user.mail}  placeholder="" required/>
                <input type="text" className="text" name="userpassword" value={user.password}  placeholder="" required/>
        </div>
    );
  }
  

  export default RegisterModal;