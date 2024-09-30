import SearchBox from './SearchBox'
import SelectOptions from './SelectOptions';

const Header = ({ dirType }) => {
    const directoryType = dirType === 'bots' ? 'Bots' : (dirType === 'channels' ? 'Channel' : 'Group');
    return (
        <header className='mx-5 flex flex-col items-center'>
            <div className='text-center my-4'>
                <h1 className='text-3xl my-2 font-bold'>TeleIgnite</h1>
                <h2 className='text-lg font-semibold'>Telegram {directoryType} Directory</h2>
            </div>
            <div className='flex justify-between w-full py-2 px-4 border-2 border-base-200 rounded-md'>
                <div className='flex items-center w-full mr-2'>
                    <span className='mr-2 text-xs md:text-sm lg:text-base'>Sort by </span>
                    <SelectOptions options={['Popular', 'Recent']} />
                </div>
                <SearchBox />

            </div>
        </header>
    )
}

export default Header