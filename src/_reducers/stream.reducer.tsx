import { streamConstants } from '../_constants';
import { AnyTypeAnnotation } from '@babel/types';

export function streams(state = {}, action:AnyTypeAnnotation) {

    switch (action.type) {
      case streamConstants.STREAM_REQUEST:
        return {
          null:null
        };
      case streamConstants.STREAM_SUCCESS:
        return {
          null:null
        };
      case streamConstants.STREAM_FAILURE:
        return { 
          null:null
        };
      default:
        return state
    }
  }