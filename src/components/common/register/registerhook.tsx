import React, {useState} from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import {userActions, alertActions, viewActions} from '../../../_actions'

import '../modal.scss';

interface ISignup {
    inputs?: any;
    username?: string;
    userMail?:string;
    password?: string;
  };
  
  
  const RegisterForm: React.FC<ISignup>  = (props:any) => {
  
    const inputsInitialState =  {username: '', userMail: '', password: ''}
    const [inputs, setInputs] = useState(inputsInitialState);
    const dispatch = useDispatch();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        if(inputs.userMail&& inputs.password){
         dispatch(userActions.register(inputs))
         }
         else{
           dispatch(alertActions.warn("Wystąpił Błąd"))
           dispatch(viewActions.hide())
        }
        }

        const handleInputChange = (event:any) => {
          event.persist();
          setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
          console.log(event)
        }

    return (
  <form onSubmit={handleSubmit}>

      <div>
      <label>Username</label>
      <input type="text" name="username" onChange={handleInputChange} value={inputs.username} required />
    </div>
    <div>
      <label>Email Address</label>
      <input type="email" name="userMail" onChange={handleInputChange} value={inputs.userMail} required />
    </div>
    <div>
      <label>Password</label>
      <input type="password" name="password" onChange={handleInputChange} value={inputs.password}/>
    </div>
    <button className  = "primary-button" type="submit">Sign Up</button>
  </form>
    )
  }
  
  const mapStateToProps = (state:any) => ({
  })
  
  const mapDispatchToProps = {
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
  