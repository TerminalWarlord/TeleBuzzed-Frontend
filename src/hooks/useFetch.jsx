import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState();
    console.log(data);


    useEffect(() => {
        let isMounted = true; // Track component mount status
        async function fetchData() {
            setIsFetching(true);
            try {
                const res = await fetchFn();
                if (isMounted) {
                    setData(res);
                }
            } catch (err) {
                if (isMounted) {
                    setError({ message: err.message || 'Failed to fetch data!' });
                }
            }
            setIsFetching(false);
        }

        fetchData();

        return () => {
            isMounted = false; // Cleanup on unmount
        };
    }, [fetchFn]);

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
        handlePagination
    };
}
