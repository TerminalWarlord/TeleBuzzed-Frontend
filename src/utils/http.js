import { getToken } from "./auth";

const apiUrl = import.meta.env.VITE_API_URL;
// const apiUrl = import.meta.env.VITE_API_URL;


export async function getUserRequests() {
    // send token
    const res = await fetch(apiUrl + '/admin/requests/',
        {
            headers: {
                "Authorization": getToken(),

            }
        }
    );
    // throw new Error('Failed to fetch data!');
    if (!res.ok) {
        throw new Error('Failed to fetch data!');
    }
    try {
        const data = await res.json();
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to fetch data!');
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getPendingRequests(username) {
    // send token
    const res = await fetch(apiUrl + '/pending-requests/?username=' + username);
    // throw new Error('Failed to fetch data!');
    if (!res.ok) {
        throw new Error('Failed to fetch data!');
    }
    try {
        const data = await res.json();
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to fetch data!');
    }

}