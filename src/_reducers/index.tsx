
import { combineReducers } from 'redux';


import { users } from './user.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { streams } from './stream.reducer';
import { bets } from './bet.reducer';


const rootReducer = combineReducers({
  users,
  registration,
  alert,
  streams,
  bets
});

export default rootReducer;