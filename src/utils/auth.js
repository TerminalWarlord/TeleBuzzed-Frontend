import { getMe } from "./http";


export async function isLoggedIn() {
    try {
        const res = await getMe();
        if (res) return true;
    } catch (err) {
        console.log(err);
    }
    return false;
}


export function getToken() {
    return localStorage.getItem('token');
}