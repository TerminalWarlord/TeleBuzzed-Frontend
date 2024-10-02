const base = 'http://localhost:3000';

// popular, added

const paths = {
    bot: 'bots',
    channel: 'channels',
    group: 'groups'
};
// /bots?offset=1&limit=20&filter=popular
export async function fetchItems(offset = 1, limit = 20, filter = null, itemType = 'bot') {
    const path = paths[itemType] || 'bots';
    const url = new URL(`${base}/${path}`);
    url.searchParams.append('offset', offset);
    url.searchParams.append('limit', limit);
    if (filter) {
        url.searchParams.append('filter', filter);
    }

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch bots');
    }
    const data = await res.json();
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
        throw new Error('Failed to fetch user data!');
    }
    const data = await res.json();
    console.log(data)
    return data;
}