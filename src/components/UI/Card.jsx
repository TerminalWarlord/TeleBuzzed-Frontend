import { useState } from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
            <div className="border-2 border-base-200 rounded-lg p-4 my-4 shadow-sm">
                <p className="text-red-500 font-semibold">Error: {error.message}</p>
            </div>
        );
    }

    const Skeleton = ({ className }) => (
        <div className={`skeleton animate-pulse bg-base-200 ${className}`} />
    );

    return (
        <article className={`
            border-2 
            border-base-300 
            rounded-lg 
            p-4 
            my-4
            hover:shadow-md 
            hover:border-base-400
            transition-all 
            duration-200 
            ${classes}
        `}>
            <div className="flex gap-4">
                {/* Avatar and Category Section */}
                <div className="w-[60px] flex-shrink-0">
                    {isFetching ? (
                        <Skeleton className="w-full aspect-square rounded-full" />
                    ) : (
                        <Link to={`/${type}/${id}`} className="block">
                            <img
                                src={`${apiUrl}/image/${image}`}
                                alt={title}
                                className="w-full aspect-square rounded-full object-cover hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                            />
                        </Link>
                    )}

                    {isFetching ? (
                        <Skeleton className="h-4 w-full mt-2" />
                    ) : (
                        <Link
                            to={`/${type}s/${category?.slug}`}
                            className="text-xs block text-center truncate hover:text-blue-500 transition-colors mt-2"
                        >
                            {category?.name}
                        </Link>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex-grow min-w-0">
                    {isFetching ? (
                        <Skeleton className="h-4 w-3/4 mb-2" />
                    ) : (
                        <Link
                            to={`/${type}/${id}`}
                            className="font-semibold text-sm md:text-md block truncate hover:text-blue-500 transition-colors"
                        >
                            <h2>{title}</h2>
                        </Link>
                    )}

                    {isFetching ? (
                        <Skeleton className="h-16 w-full mt-2" />
                    ) : (
                        <h4 className="text-xs line-clamp-3 text-gray-600 dark:text-gray-300 mt-2">
                            {description}
                        </h4>
                    )}
                </div>
            </div>

            <hr className="my-4 border-base-200" />

            {/* Footer Section */}
            <div className="flex justify-between items-center">
                <div className="relative w-full">
                    {isFetching ? (
                        <Skeleton className="h-4 w-20" />
                    ) : (
                        <>
                            <div
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                className="cursor-help"
                            >
                                <Stars data={averageRating} classes="text-xs" />
                            </div>
                            {isHovering && (
                                <p className="absolute left-0 mt-1 px-2 py-1 bg-slate-700 text-white rounded-md text-xs shadow-lg z-10">
                                    Total votes {totalReviews}
                                </p>
                            )}
                        </>
                    )}
                </div>

                {isFetching ? (
                    <Skeleton className="h-8 w-20" />
                ) : (
                    <Link
                        to={`/${type}/${id}`}
                        className="py-0.5 px-3 border-2 border-blue-500 dark:border-base-300 rounded-lg hover:bg-blue-50 dark:hover:bg-base-200 transition-colors"
                    >
                        <FontAwesomeIcon icon={faPaperPlane} className="w-[18px] text-blue-500 hover:scale-110 transition-transform" />
                    </Link>
                )}
            </div>
        </article>
    );
};

export default Card;