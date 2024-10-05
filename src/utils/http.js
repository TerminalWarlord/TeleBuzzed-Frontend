const base = 'http://localhost:3000';

// popular, added

// const paths = {
//     bot: 'bots',
//     channel: 'channels',
//     group: 'groups'
// };
export async function fetchItems(offset = 1, limit = 20, filter = 'popular', itemType = 'bot', searchTerm = null) {
    // const path = paths[itemType] || 'bots';
    // const url = new URL(`${base}/lists`);
    // url.searchParams.append('offset', offset);
    // url.searchParams.append('limit', limit);
    // if (filter) {
    //     url.searchParams.append('filter', filter);
    // }
    // if (searhTerm) {
    //     url.searchParams.append('search', searhTerm);
    // }

    const res = await fetch(`${base}/lists`, {
        method: 'POST',
        body: JSON.stringify({
            offset,
            filter,
            type: itemType,
            limit,
            searchTerm,
        })
    });
    if (!res.ok) {
        throw new Error('Failed to fetch bots');
    }
    const data = await res.json();
    console.log(data)
    return data;
}


export async function login(body) {
    const res = await fetch(base + '/login', {
        method: 'POST',
        body: body,
    });
    if (!res.ok) {
        console.log(res.ok)
        throw new Error('Failed to login!');
    }
    const data = await res.json();
    return data;
}


export async function getMe() {
    const userId = localStorage.getItem("token");
    const res = await fetch(base + '/user/me', {
        method: 'POST',
        body: JSON.stringify({
            userId
        })
    });
    if (!res.ok) {
        console.log("failed")
        throw new Error('Failed to fetch user data!');
    }
    try {
        const data = await res.json();
        console.log(data);
        return data;

    }
    catch (err) {
        throw new Error(err.message || 'Failed to fetch user data!');
    }
}





export async function getReviews(reviewer, username, offset = 1) {
    const path = reviewer === null ? '/reviews/' : '/user-reviews/';
    console.log(path, reviewer, username)
    const res = await fetch(base + path, {
        method: 'POST',
        body: JSON.stringify({
            reviewer: reviewer,
            username: username,
            offset: offset
        })
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data!');
    }
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to fetch data!');
    }
}




export async function getItemDetails(username) {
    const res = await fetch(base + '/details/', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
        })
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data!');
    }
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to fetch data!');
    }
}


export async function postSubmitContent(data) {
    const formData = new FormData(data);

    const res = await fetch(base + '/request/', {
        method: 'POST',
        body: formData
    });
    if (!res.ok) {
        throw new Error('Failed to submit data!');
    }
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to submit data!');
    }
}



export async function getUserRequests() {
    // send token
    const res = await fetch(base + '/requests/');
    if (!res.ok) {
        throw new Error('Failed to fetch data!');
    }
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (err) {
        throw new Error(err.message || 'Failed to fetch data!');
    }
}