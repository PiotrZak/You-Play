import {authHeader} from '../_helpers/auth-header';

export const streamServices = {
    create
}

const API = 'http://localhost:5000'


function create(url:string, title:string, authorId:string, authorName:string, allowUserbets:boolean, isFeaturedStream:boolean, description:string) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),
         'Accept': 'application/json',
        'Content-Type': 'application/json' },

        body: JSON.stringify({url, title, authorId, authorName, allowUserbets, isFeaturedStream, description})
    };
    //@ts-ignore
    console.log(requestOptions);
    return fetch(API + `/stream/createstream`, requestOptions)
    .then(handleResponse)
    .then(data => {
            console.log(data);
        return data;
    })
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