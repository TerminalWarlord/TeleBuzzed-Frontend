import { useCallback, useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState();
    console.log(data);


    const fetchData = useCallback(async () => {
        setIsFetching(true);
        try {
            const res = await fetchFn();
            setData(res);
        } catch (err) {
            setError({ message: err.message || 'Failed to fetch data!' });
        }
        setIsFetching(false);
    }, [fetchFn]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    async function handlePagination(paginationFn) {
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
        handlePagination,
        fetchData,
    };
}
