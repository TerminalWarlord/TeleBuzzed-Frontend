import Header from '../UI/Header';
import { v4 as uuidv4 } from 'uuid';
import Card from '../UI/Card';
import Pagination from '../UI/Pagination';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { fetchItems } from '../../utils/http';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MetaTags from '../UI/MetaTags';

const Lists = ({ dirType }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const [currentPage, setCurrentPage] = useState(page);
    const limit = 3;
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState(params.categorySlug || '');
    const [sortBy, setSortBy] = useState("popular");

    useEffect(() => {
        setCategory(params.categorySlug || '');
    }, [params.categorySlug]);

    const fetchFn = useCallback(() => {
        return fetchItems(currentPage, limit, sortBy, dirType, searchTerm, category);
    }, [currentPage, sortBy, searchTerm, dirType, category]);

    const { data, isFetching, error } = useFetch(fetchFn, {
        result: Array(5).fill(null).map(() => ({
            _id: uuidv4()
        }))
    });

    useEffect(() => {
        console.log('Category:', category);
        console.log('Params categorySlug:', params.categorySlug);
    }, [category, params.categorySlug]);

    function handlePageChange(pageNo) {
        setCurrentPage(pageNo);
        setSearchParams({ page: pageNo });
    }

    return (
        <>
            <MetaTags title={`Telegram ${dirType.slice(0, 1).toUpperCase() + dirType.slice(1)} Directory | TeleBuzzed.Com`} />
            <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
                <Header
                    dirType={dirType}
                    onSearch={setSearchTerm}
                    onSelectSort={setSortBy}
                    onSelectCategory={setCategory}
                />
                {data?.result.length < 1 && <div className={`w-full flex flex-col items-center justify-center space-y-4 my-6`}>
                    <FontAwesomeIcon icon={faFaceFrown} className="text-5xl" />
                    <h2 className="text-lg">Nothing to show!</h2>
                </div>}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 sm:gap-x-4 md:gap-x-5'>

                    {data?.result?.map(bot => (
                        <Card key={bot._id} {...bot} classes='max-h-60' isFetching={isFetching} error={error} />
                    ))}
                </div>
                <div className='mx-5'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={data?.hasNextPage ? currentPage + 1 : currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </section>
        </>
    );
};

export default Lists;