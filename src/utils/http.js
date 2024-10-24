import { getToken } from "./auth";

const apiUrl = import.meta.env.VITE_API_URL;
// const apiUrl = import.meta.env.VITE_API_URL;


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



export async function fetchItems(offset = 1, limit = 20, filter = 'popular', itemType = 'all', searchTerm = null, category = null, username = null) {
    const url = new URL(`${apiUrl}/list`);

    // Append query parameters to the URL
    url.searchParams.append('offset', offset);
    url.searchParams.append('limit', limit);
    url.searchParams.append('filter', filter);
    url.searchParams.append('type', itemType);

    // Conditionally add searchTerm if provided
    if (searchTerm) {
        url.searchParams.append('searchTerm', searchTerm);
    }
    if (username) {
        url.searchParams.append('username', username);
    }
    if (category) {
        url.searchParams.append('category_slug', category);
    }


    const res = await fetch(url, {
        method: 'GET',  // Set the method to GET
    });

    if (!res.ok) {
        throw new Error('Failed to fetch items');
    }

    const data = await res.json();
    return data;
}



export async function getReviews(reviewer, username = null, offset = 1, limit = 10) {
    const url = new URL(`${apiUrl}/reviews`);
    await sleep(1000)
    // Append query parameters to the URL
    url.searchParams.append('offset', offset);
    url.searchParams.append('limit', limit);
    if (username) {
        url.searchParams.append('username', username);
    }
    if (reviewer) {
        url.searchParams.append('reviewer', reviewer);
    }


    const res = await fetch(url);

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




export async function getItemDetails(username) {
    const res = await fetch(apiUrl + '/details/' + username,);
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


export async function postSubmitContent(data) {
    const formData = new FormData(data);

    const res = await fetch(apiUrl + '/user/request/', {
        method: 'POST',
        body: formData,
        headers: {
            "Authorization": getToken(),

        }
    });
    if (!res.ok) {
        throw new Error('Failed to submit data!');
    }
    try {
        const data = await res.json();
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to submit data!');
    }
}



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

export async function postReview(data) {
    const formData = new FormData(data);
    const res = await fetch(`${apiUrl}/user/review`, {
        method: 'POST',
        headers: {
            'Authorization': getToken()
        },
        body: formData
    });
    if (!res.ok) {
        throw new Error('Failed to submit review!');
    }
    try {
        const data = await res.json();
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to submit review!');
    }
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




export async function getCategories() {
    const res = await fetch(apiUrl + '/categories', {
        headers: {
            'Authorization': getToken()
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



export async function getAllPosts(limit = 5, offset = 1, type = 'all') {
    const url = new URL(`${apiUrl}/all_posts`);
    // Append query parameters to the URL
    url.searchParams.append('offset', offset);
    url.searchParams.append('limit', limit);
    url.searchParams.append('type', type);
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': getToken()
            }
        });
        const resData = await res.json();
        return resData;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || 'Failed to fetch posts!');
    }
}


export async function getPostDetails(postSlug) {
    try {
        const res = await fetch(`${apiUrl}/post?postSlug=${postSlug}`);
        const resData = await res.json();
        return resData;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || 'Failed to fetch posts!');
    }
}


export async function deletePost(postSlug) {
    try {
        const res = await fetch(apiUrl + '/post/delete/' + postSlug, {
            method: 'DELETE',
            headers: {
                'Authorization': getToken()
            }
        });
        const resData = await res.json();
        return resData;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || 'Failed to delete post!');
    }
}





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



