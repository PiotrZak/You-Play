import React, {useState} from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import {betActions, alertActions, viewActions} from '../../../_actions'



interface ICreateBetForm {
    inputs?: any;
    username?: string;
    userMail?:string;
    password?: string;
  };
  
  
  const CreateBetForm: React.FC<ICreateBetForm>  = (props:any) => {
  
    const inputsInitialState =  {title: '', optionText: '', odd: 0, amount:0}
    const [inputs, setInputs] = useState(inputsInitialState);
    const dispatch = useDispatch();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        if(1 === 1){
         dispatch(betActions.create())
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
        <div>                        
                <form onSubmit={handleSubmit}>
              <div>
              <label>Title</label>
              <input type="text" name="url" onChange={handleInputChange} value={inputs.title} required />
            </div>
              <div>
              <label>Option Text</label>
              <input type="text" name="title" onChange={handleInputChange} value={inputs.optionText} required />
            </div>
            <div>
              <label>Odd</label>
              <input type="number" name="odd" onChange={handleInputChange} value={inputs.odd}/>
            </div>
            <div>
            <label>Amount</label>
              <input type="number" name="amount" onChange={handleInputChange} value={inputs.amount}/>
            </div>
            <button type="submit">Sign Up</button>
          </form>
    </div>
    )
  }
  
  const mapStateToProps = (state:any) => ({
  })
  
  const mapDispatchToProps = {
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateBetForm)
  