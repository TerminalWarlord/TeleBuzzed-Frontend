import { faArrowUpWideShort, faFilter } from '@fortawesome/free-solid-svg-icons';
import SearchBox from './SearchBox'
import SelectOptions from './SelectOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch';
import { useCallback } from 'react';
import { getCategories } from '../../utils/http';

const SORTFILTERS = [
    {
        _id: 'popular',
        name: 'Popular',
        slug: 'popular'
    },
    {
        _id: 'recent',
        name: 'Recent',
        slug: 'recent'
    },
    {
        _id: 'liked',
        name: 'Most Liked',
        slug: 'most-liked'
    },
]


const Header = ({ dirType, onSelectSort, onSelectCategory, onSearch, searchValue }) => {

    const directoryType = dirType === 'bot' ? 'Bots' : (dirType === 'channel' ? 'Channel' : 'Group');

    const fetchFn = useCallback(async () => {
        const cats = await getCategories();
        cats.result = [
            { _id: "1", name: 'All' },
            ...cats.result
        ]
        return cats;
    }, [])
    const { data } = useFetch(fetchFn, {
        result: []
    })

    return (
        <header className='mx-5 flex flex-col items-center'>
            <div className='text-center my-4'>
                <h1 className='text-3xl my-2 font-bold'>Telebuzzed</h1>
                <h2 className='text-lg font-semibold'>Telegram {directoryType} Directory</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between w-full py-2 px-4 border-2 border-base-200 rounded-md space-y-2 md:space-y-0'>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-normal w-full space-x-2 space-y-2 md:space-y-0 mr-2'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faArrowUpWideShort} className='text-md mx-1' />
                        <h2 className=' text-xs md:text-sm lg:text-base mr-2'>Sort</h2>
                        <SelectOptions name={'sort_by'} options={SORTFILTERS} onSelectOption={onSelectSort} />
                    </div>

                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faFilter} className='text-md mx-1' />
                        <h2 className=' text-xs md:text-sm lg:text-base mr-2'>Category</h2>
                        <SelectOptions name={'category_slug'} options={data?.result} onSelectOption={onSelectCategory} />
                    </div>

                </div>
                <SearchBox onSearch={onSearch} searchValue={searchValue} />

            </div>
        </header>
    )
}

export default Header