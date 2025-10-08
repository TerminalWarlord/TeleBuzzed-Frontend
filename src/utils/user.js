const apiUrl = import.meta.env.VITE_API_URL;
import { getToken } from "./auth";



export async function getFullUserDetails(username) {
    const url = new URL(apiUrl + '/user/get-details');
    url.searchParams.append('username', username)
    const res = await fetch(url);
    if (!res.ok) {
        console.log("failed")
        throw new Error('Failed to fetch user data!');
    }
    try {
        const data = await res.json();
        return data;

    }
    catch (err) {
        console.log(err)
        throw new Error(err.message || 'Failed to fetch user data!');
    }
}







export async function putEditProfile(data) {
    const res = await fetch(apiUrl + '/user/update', {
        method: 'PUT',
        body: data,
        headers: {
            'Authorization': getToken()
        }
    });
    if (!res.ok) {
        console.log("failed")
        throw new Error('Failed to update user data!');
    }
    try {
        const data = await res.json();
        return data;

    }
    catch (err) {
        console.log(err)
        throw new Error(err.message || 'Failed to update user data!');
    }
}




export async function putChangePassword(data) {
    const res = await fetch(apiUrl + '/user/change-password', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json',
        }
    });
    if (!res.ok) {
        console.log("failed")
        const resData = await res.json();
        throw new Error(resData.result.message || 'Failed to change!');
    }
    try {
        const data = await res.json();
        return data;

    }
    catch (err) {
        console.log(err)
        throw new Error(err.message || 'Failed to fetch user data!');
    }
}

