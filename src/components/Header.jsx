import SearchBox from './UI/SearchBox'
import SelectOptions from './UI/SelectOptions'

const Header = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='text-center'>
                <h1 className='text-3xl my-2 font-bold'>JayBee</h1>
                <h2 className='text-lg font-semibold'>Telegram Bot Directory</h2>
            </div>
            <div className='flex justify-between items-center w-[90vw] py-2 px-4 border-2 border-base-200 rounded-md'>
                <div className='flex items-center'>
                    <span className='mr-2'>Sort by </span>
                    <SelectOptions options={['Popular', 'Recent']} />
                </div>
                <SearchBox />

            </div>
        </div>
    )
}

export default Header