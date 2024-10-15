import { useState } from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

// TODO: update host
const apiUrl = import.meta.env.VITE_API_URL;

const Card = ({
    username: id,
    type,
    name: title,
    description,
    averageRating,
    avatar: image,
    category,
    totalReviews,
    classes = "",
    isFetching = false,
    error = null
}) => {
    const [isHovering, setIsHovering] = useState(false);

    if (error) {
        return (
            <div className={`py-2 border-2 border-base-200 w-full rounded-lg relative my-4 ${classes}`}>
                <div className='flex flex-col items-center justify-center py-6'>
                    <h1 className='text-red-500 font-semibold'>Error</h1>
                    <p className='text-red-400'>{error.message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`py-2 border-2 border-base-300 w-full rounded-lg relative my-4 ${classes}`}>
            <div className='flex px-4 py-2'>
                <div className='flex-shrink-0 w-[60px]'>
                    <div className='w-full aspect-square overflow-hidden rounded-full mb-2'>
                        {isFetching ? (
                            <div className="skeleton h-full w-full"></div>
                        ) : (
                            <Link to={`/${type}/${id}`}>
                                <img src={`${apiUrl}/image/${image}`} alt="" className='w-full h-full object-cover' />
                            </Link>
                        )}
                    </div>
                    {isFetching ? (
                        <div className="skeleton h-4 w-full"></div>
                    ) : (
                        <Link to={`/${type}s/${category?.slug}`} className='text-xs block text-center truncate'>{category?.name}</Link>
                    )}
                </div>
                <div className='ml-4 flex-grow min-w-0'>
                    {isFetching ? (
                        <div className="skeleton h-4 w-3/4 mb-2"></div>
                    ) : (
                        <Link to={`/${type}/${id}`}>
                            <h1 className='font-semibold text-sm md:text-md truncate'>{title}</h1>
                        </Link>
                    )}
                    {isFetching ? (
                        <div className="skeleton h-16 w-full"></div>
                    ) : (
                        <h2 className='text-xs overflow-hidden text-ellipsis line-clamp-3'>{description}</h2>
                    )}
                </div>
            </div>
            <div className='mt-4 h-0.5 w-full bg-base-200'></div>
            <div className='flex justify-between items-center px-4 mt-2'>
                <div className='relative'>
                    {isFetching ? (
                        <div className="skeleton h-4 w-20"></div>
                    ) : (
                        <h3
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <Stars data={averageRating} classes='text-xs'></Stars>
                        </h3>
                    )}
                    {isHovering && (
                        <div className='absolute w-24 left-0 mt-1 bg-slate-700 px-2 py-1 text-white rounded-md text-xs'>
                            Total votes {totalReviews}
                        </div>
                    )}
                </div>
                {isFetching ? (
                    <div className="skeleton h-8 w-20"></div>
                ) : (
                    <div className="py-1.5 px-4 border-2 border-blue-500 dark:border-base-300 rounded-lg">
                        <Link to={`/${type}/${id}`}>
                            <img
                                src="https://www.svgrepo.com/show/343522/telegram-communication-chat-interaction-network-connection.svg"
                                alt=""
                                className="w-[18px]"
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;