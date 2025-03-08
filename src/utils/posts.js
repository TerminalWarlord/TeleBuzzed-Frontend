import { getToken } from "./auth";

const apiUrl = import.meta.env.VITE_API_URL;


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

