const apiUrl = import.meta.env.VITE_API_URL;

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



export async function signup(body) {
    const res = await fetch(apiUrl + '/auth/signup', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData?.result?.message || 'Failed to register!');
    }
    const data = await res.json();
    return data;
}

export async function login(body) {
    const res = await fetch(apiUrl + '/auth/signin', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData?.result?.message || 'Failed to login!');
    }
    const data = await res.json();
    return data;
}


export async function getMe() {
    const userId = localStorage.getItem("token");
    const res = await fetch(apiUrl + '/auth/me', {
        headers: {
            'Authorization': userId
        }
    });
    if (!res.ok) {
        console.log("failed")
        throw new Error('Failed to fetch user data!');
    }
    try {
        const data = await res.json();
        return data;

    }
    catch (err) {
        throw new Error(err.message || 'Failed to fetch user data!');
    }
}
