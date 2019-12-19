import {betConstants} from '../_constants'
import {betServices} from '../_services'
import { alertActions } from './';
import { history } from '../_helpers/';
import {authHeader} from '../_helpers/auth-header';

const API = 'http://localhost:5000'

export const betActions = {
    create,
    playbet
}

    function create() {
        //@ts-ignore
        return dispatch => {
            /*
                {
                "id": "string",
                "streamId": 0,
                "betOptions": [
                    {
                    "id": "string",
                    "betOpenId": "string",
                    "optionText": "string",
                    "odd": 0,
                    "amount": 0,
                    "betsCount": 0
                    }
                ],
                }
            */
            const streamId = 1
            const title = "test"
            const authorId = "test"

            const id = "1"
            const betOpenId = "1"
            const optionText = "1"
            const odd = 5
            const amount = 1
            const bestCount = 1

            let betOptions = [{id, betOpenId, optionText, odd, amount, bestCount}]

            dispatch(request(streamId, title, authorId, betOptions));
            betServices.create(streamId, title, authorId, betOptions)
                .then(
                    (test:any) => { 
                        //@ts-ignore
                        dispatch(success());
                        dispatch(alertActions.success(test));
    
                    },
                    (error:any) => {
                         dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

    function request(streamId:number, title:string, authorId:string, betOptions:object) { return { type: betConstants.BET_REQUEST, title } }
    function success(user:any) { return { type: betConstants.BET_SUCCESS, user } }
    function failure(error:any) { return { type: betConstants.BET_FAILURE, error } }
}


function playbet() {
    //@ts-ignore
    return dispatch => {
        /*
            {
            "id": "string",
            "streamId": 0,
            "betOptions": [
                {
                "id": "string",
                "betOpenId": "string",
                "optionText": "string",
                "odd": 0,
                "amount": 0,
                "betsCount": 0
                }
            ],
            }
        */
        const streamId = 1
        const betOpenId = "test"
        const userId = "string"
        const betOptionId = "string"
        const amount = 0

        let betOptions = [{streamId, betOpenId, userId, betOptionId, amount}]

        dispatch(request(streamId, betOpenId, userId, betOptionId, amount));
        betServices.playbet(streamId, betOpenId, userId, betOptionId, amount)
            .then(
                (test:any) => { 
                    //@ts-ignore
                    dispatch(success());
                    dispatch(alertActions.success(test));

                },
                (error:any) => {
                     dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

function request(streamId:number, betOpenId:string, userId:string, betOptionId:string, amount:number) { return { type: betConstants.BET_REQUEST, streamId, betOpenId, userId, betOptionId, amount } }
function success(user:any) { return { type: betConstants.BET_SUCCESS, user } }
function failure(error:any) { return { type: betConstants.BET_FAILURE, error } }
}
