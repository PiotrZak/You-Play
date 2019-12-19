import {authHeader} from '../_helpers/auth-header';

export const userServices = {
    register,
    login,
    logout,
    deposit
}

const API = 'http://localhost:5000'


function register(user:any) {
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    };

    return fetch(API + `/account/registeruser`, requestOptions).then(handleResponse)
    {/*
    .then(response => {
        return response.json();
      })
      .then(test => {
          console.log(test)
      })
    */}
}

function login(userLogin:string, password:string) {
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userLogin, password})
    };

    return fetch(API + `/account/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
                console.log(user);
                        localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}
function logout() {
    localStorage.removeItem('user');
}

function deposit(userId:string, email:string, amountUsd:number, bonuscode:string) {
    
    
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),
            'Accept': 'application/json',
           'Content-Type': 'application/json' },
        body: JSON.stringify({userId, email, amountUsd, bonuscode})
    };

    return fetch(API + `/payment/createbtcdeposit`, requestOptions)
        .then(handleResponse)
        .then(data => {
            console.log(data);
            return data;
        });
}




    function handleResponse(response:any) {
        return response.text().then((text:any) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    //logout();
                    //eslint-disable-next-line
                      location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }