import {streamConstants} from '../_constants'
import {streamServices} from '../_services'
import { alertActions } from './';
import { history } from '../_helpers/';
import {authHeader} from '../_helpers/auth-header';

const API = 'http://localhost:5000'

export const streamActions = {
    create
}

    function create(url:string, title:string, description:string,allowUserbets:boolean) {
        //@ts-ignore
        return dispatch => {

            //@ts-ignore
            const user = JSON.parse(localStorage.getItem('user'));
            const requestOptions = {
                method: 'GET',
                headers: authHeader()
            };
            fetch(API + `/user/getuserdata?userEntityId=${user.id}`, requestOptions,)
            .then((response:any) => {
              return response.json();
            })
            .then((data:any) => {
                let streamdata = [data.id, data.username]
                //@ts-ignore
                localStorage.setItem('streamdata', JSON.stringify(streamdata));
            })
            //@ts-ignore
            const streamdata = JSON.parse(localStorage.getItem('streamdata'));
            const authorId = streamdata[0];
            const authorName = streamdata[1];    

            const isFeaturedStream = true;

            dispatch(request(url, title, authorId, authorName, allowUserbets, isFeaturedStream, description));
            streamServices.create(url, title, authorId, authorName, allowUserbets, isFeaturedStream, description)
                .then(
                    (response:any) => { 
                        //@ts-ignore
                        dispatch(success('Congratulation! Your stream is sucessfully added.'));
                        dispatch(alertActions.success('Congratulation! Your stream is sucessfully added.'));
    
                    },
                    (error:any) => {
                         dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

    function request(url:any, title:any, authorId:any, authorName:any, allowUserbets:any, isFeaturedStream:any, description:any) { return { type: streamConstants.STREAM_REQUEST, url, title, authorId, authorName, allowUserbets, isFeaturedStream, description } }
    function success(user:any) { return { type: streamConstants.STREAM_SUCCESS, user } }
    function failure(error:any) { return { type: streamConstants.STREAM_FAILURE, error } }
}
