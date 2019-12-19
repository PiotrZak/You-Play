import React, {useState} from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import {userActions, alertActions, viewActions} from '../../../_actions'

import '../modal.scss';

interface ISignup {
    userLogin?: string;
    passsword?:string;
  };
  
  
  const LoginForm: React.FC<ISignup>  = (props:any) => {
  
    const inputsInitialState =  {userLogin: '', password: ''}
    const [inputs, setInputs] = useState(inputsInitialState);
    const dispatch = useDispatch();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        if(inputs.userLogin&& inputs.password){
         dispatch(userActions.login(inputs.userLogin, inputs.password))
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
      <input type="text" name="userLogin" onChange={handleInputChange} value={inputs.userLogin} required />
    </div>
    <div>
      <label>Password</label>
      <input type="password" name="password" onChange={handleInputChange} value={inputs.password}/>
    </div>
    <button className  = "primary-button" type="submit">Sign In</button>
  </form>
    )
  }
  
  const mapStateToProps = (state:any) => ({
  })
  
  const mapDispatchToProps = {
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)