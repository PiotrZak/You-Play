import { betConstants } from '../_constants';
import { AnyTypeAnnotation } from '@babel/types';

export function bets(state = {}, action:AnyTypeAnnotation) {

    switch (action.type) {
      case betConstants.BET_REQUEST:
        return {
          null:null
        };
      case betConstants.BET_SUCCESS:
        return {
          null:null
        };
      case betConstants.BET_FAILURE:
        return { 
          null:null
        };
      default:
        return state
    }
  }