
const apiUrl = import.meta.env.VITE_API_URL;



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
