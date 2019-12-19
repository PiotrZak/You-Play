import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import './navbar.scss';
import RegisterForm from './register/registerhook'

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
            <button className = "primary-button" onClick={this.toggle} >Register</button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>      <h1>Sign up!</h1>
    <p>Adding streams and earns money</p></ModalHeader>
            <ModalBody>
                <RegisterForm/>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }


  export default RegisterModal;