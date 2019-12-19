import React, {useState} from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import {userActions, alertActions, viewActions} from '../../../_actions'



interface IDepositForm {
    userId?: object;
    email?: number;
    amountUsd?: number;
    bonuscode?: number;
  };
  
  
  const DepositForm: React.FC<IDepositForm>  = (props:any) => {
  
    const inputsInitialState =  {amountUsd: 0, bonuscode: ''}
    const [inputs, setInputs] = useState(inputsInitialState);
    const dispatch = useDispatch();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        if(inputs.amountUsd){
         dispatch(userActions.deposit(inputs.amountUsd, inputs.bonuscode))
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
      <label>Amount USD</label>
      <input type="text" name="amountUsd" onChange={handleInputChange} value={inputs.amountUsd} required />
    </div>
    <button className  = "primary-button" type="submit">Deposit</button>
  </form>
    )
  }
  
  const mapStateToProps = (state:any) => ({
  })
  
  const mapDispatchToProps = {
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DepositForm)
  