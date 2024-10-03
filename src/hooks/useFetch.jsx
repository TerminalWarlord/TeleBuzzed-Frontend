import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const res = await fetchFn(); // Await the fetch call
                setData(res);
            } catch (err) {
                setError({ message: err.message || 'Failed to fetch data!' });
            }
            setIsFetching(false);
        }
        fetchData();
    }, [fetchFn]);

    async function handlePagination(pageNo, paginationFn) {
        setIsFetching(true);
        try {
            const res = await paginationFn(); // Await the pagination function
            setData(res);
        } catch (err) {
            setError({ message: err.message || 'Failed to fetch data!' });
        }
        setIsFetching(false); // Reset isFetching
    }

    return {
        isFetching,
        error,
        data,
        setIsFetching,
        setError,
        setData,
        handlePagination
    };
}
