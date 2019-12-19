import {userConstants} from '../_constants'
import {userServices} from '../_services'
import { alertActions } from './';
import { history } from '../_helpers/';
import {authHeader} from '../_helpers/auth-header';

const API = 'http://localhost:5000'

export const userActions = {
    register,
    login,
    logout,
    deposit
}

    function register(user:any) {
        //@ts-ignore
        return dispatch => {
            dispatch(request(user));
            userServices.register(user)
                .then(
                    (test:any) => { 
                        //@ts-ignore
                        dispatch(success());
                        dispatch(alertActions.success(test));
    
                    },
                    error => {
                         dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

    function request(user:any) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user:any) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error:any) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function login(userLogin:string, password:string) {
    //@ts-ignore
    return dispatch => {
        dispatch(request(userLogin))
        userServices.login(userLogin, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push("/profile");
                    window.location.reload()
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(user:any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user:any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error:any) { return { type: userConstants.LOGIN_FAILURE, error } }
    };


    function logout() {
        userServices.logout();
        history.push("/");
        window.location.reload()
        return { type: userConstants.LOGOUT };
    }

    function deposit(amountUsd:number, bonuscode:string) {

        return (dispatch:any) => {
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
                console.log(data)
                let userdata = [data.id, data.usermail]
                localStorage.setItem('userdata', JSON.stringify(userdata));
            })
            //@ts-ignore
            const userdata = JSON.parse(localStorage.getItem('userdata'));
            const userId = userdata[0];
            const email = userdata[1];    
            const bonuscode = "test";


            dispatch(request(userId, email, amountUsd, bonuscode));
            userServices.deposit(userId, email, amountUsd, bonuscode)
                .then(
                    (test:any) => { 
                        //@ts-ignore
                        dispatch(success());
                        dispatch(alertActions.success(test));
    
                    },
                    error => {
                         dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

    function request(userId:string, email:string, amountUsd:number, bonuscode:string) { return { type: userConstants.REGISTER_REQUEST,userId, email, amountUsd, bonuscode } }
    function success(user:any) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error:any) { return { type: userConstants.REGISTER_FAILURE, error } }
}