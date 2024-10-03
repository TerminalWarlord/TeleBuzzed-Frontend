import Header from '../UI/Header';
import { v4 as uuidv4 } from 'uuid';

import Card from '../UI/Card';
import Pagination from '../UI/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { fetchItems } from '../../utils/http';

const Lists = ({ dirType }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const [currentPage, setCurrentPage] = useState(page);

    // searchTerm and Select value
    const [searchTerm, setSearchTerm] = useState();
    const [sortBy, setSortBy] = useState("popular");

    // fetch data
    const fetchFn = useCallback(async () => {
        const result = await fetchItems(page, 20, sortBy, dirType, searchTerm);
        return result;
    }, [page, sortBy, searchTerm, dirType])

    const { data, isFetching, error } = useFetch(fetchFn, {
        result: Array(5).fill(null).map(() => ({
            id: uuidv4()
        }))
    });

    // console.log(data)

    async function handlePageChange(pageNo) {
        setCurrentPage(pageNo);
        setSearchParams({ page: pageNo });
    }
    function selectSorting(value) {
        setSortBy(value)
    }
    function handleSearch(value) {
        setSearchTerm(value);
    }

    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
            <Header
                dirType={dirType}
                onSearch={handleSearch}
                onSelectOption={selectSorting}
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 sm:gap-x-4 md:gap-x-5'>
                {data?.result?.map(bot => {
                    return <Card key={bot.id} {...bot} classes='max-h-60' isFetching={isFetching} error={error} />
                })}
            </div>
            <div className='mx-5'>
                <Pagination currentPage={currentPage} totalPages={data?.result?.length > 2 ? currentPage + 1 : currentPage} onPageChange={handlePageChange} />
            </div>

        </section>
    )
}

export default Lists