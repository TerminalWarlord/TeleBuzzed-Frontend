import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const res = await fetchFn()
                setData(res);
            }
            catch (err) {
                setError({ message: err.message || 'Failed to fetch data!' });
            }
            setIsFetching(false);
        }
        fetchData();
    }, [fetchFn]);
    return {
        isFetching,
        error,
        data,
    }
}