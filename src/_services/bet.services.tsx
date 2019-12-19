import {authHeader} from '../_helpers/auth-header';

export const betServices = {
    create,
    playbet
}

const API = 'http://localhost:5000'

function create(StreamId:number, Title:string, AuthorId:string, BetOptions:object) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),
            'Accept': 'application/json',
           'Content-Type': 'application/json' },
        body: JSON.stringify({StreamId, Title, AuthorId, BetOptions})
    };
    console.log(requestOptions);
    return fetch(API + `/bet/createbet`, requestOptions).then(handleResponse)
}

    function playbet(streamId:number, betOpenId:string, userId:string, betOptionId:string, amount:number) {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(),
                'Accept': 'application/json',
               'Content-Type': 'application/json' },
            body: JSON.stringify({streamId, betOpenId, userId, betOptionId, amount})
        };
        console.log(requestOptions);
        return fetch(API + `/bet/createbet`, requestOptions).then(handleResponse)
    }

    
    

    function handleResponse(response:any) {
        return response.text().then((text:any) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    //logout();
                    //eslint-disable-next-line
                    //  location.reload(true);
                }
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
    }
