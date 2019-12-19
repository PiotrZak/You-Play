import { userConstants } from '../_constants';
import { AnyTypeAnnotation } from '@babel/types';

export function users(state = {}, action:AnyTypeAnnotation) {

    switch (action.type) {
      case userConstants.REGISTER_REQUEST:
        return {
          null:null
        };
      case userConstants.REGISTER_SUCCESS:
        return {
          null:null
        };
      case userConstants.REGISTER_FAILURE:
        return { 
          null:null
        };
      default:
        return state
    }
  }