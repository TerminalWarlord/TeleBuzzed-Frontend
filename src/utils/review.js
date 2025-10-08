import { getToken } from "./auth";

const apiUrl = import.meta.env.VITE_API_URL;




export async function getReviews(reviewer, username = null, offset = 1, limit = 10) {
    const url = new URL(`${apiUrl}/reviews`);
    // await sleep(1000)
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
