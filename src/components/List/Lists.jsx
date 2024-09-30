import Header from '../UI/Header';
import { POPULARBOTS } from '../../data/dummyData';
import Card from '../UI/Card';
import Pagination from '../UI/Pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Lists = ({ dirType }) => {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const navigate = useNavigate();
    console.log(page);

    function handlePageChange(pageNo) {
        navigate(`/${dirType}?page=${pageNo}`);
    }

    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
            <Header dirType={dirType} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 sm:gap-x-4 md:gap-x-5'>
                {POPULARBOTS.map(bot => {
                    return <Card key={bot.id} {...bot} classes='max-h-60' />
                })}
            </div>
            <div className='mx-5'>
                <Pagination currentPage={page} totalPages={2} onPageChange={handlePageChange} />
            </div>

        </section>
    )
}

export default Lists