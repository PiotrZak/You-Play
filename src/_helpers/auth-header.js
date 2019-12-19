export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('user'));
    return { 'Authorization': 'Bearer ' + user.auth_token };
}