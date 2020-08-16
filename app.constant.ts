import { environment } from './src/environments/environment';

const hostURL = (url) => {
    return `${environment.url}${url}`;
}
export const api_url = {
    users: hostURL('users')
}