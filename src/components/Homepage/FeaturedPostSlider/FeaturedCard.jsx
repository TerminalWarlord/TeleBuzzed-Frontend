import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ title, longDescription, image, postSlug }) => {
    const [isHovering, setIsHovering] = useState(false);

    // Memoize the event handlers to prevent unnecessary re-renders
    const handleMouseEnter = useCallback(() => setIsHovering(true), []);
    const handleMouseLeave = useCallback(() => setIsHovering(false), []);

    // Strip HTML tags - moved outside component if possible
    const stripHtml = (html) => {
        if (!html) return '';
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };

    const description = stripHtml(longDescription);
    const truncatedDescription = description.length > 70
        ? `${description.slice(0, 70)}...`
        : description;

    return (
        <Link
            to={`/article/${postSlug}`}
            className="block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative my-5 sm:mx-2 overflow-hidden h-48">
                {/* Image container with explicit width/height for LCP optimization */}
                <div className="absolute inset-0">
                    <img
                        src={`${import.meta.env.VITE_API_URL}/image/${image}`}
                        alt={title}
                        className={`w-full h-full object-cover rounded-2xl transition-all duration-300 ${isHovering ? 'brightness-50' : 'brightness-100'
                            }`}
                        loading="eager"
                        decoding="async"
                    />
                </div>

                {/* Title overlay with better positioning */}
                <div
                    className={`absolute left-0 right-0 px-4 py-4 transition-transform duration-300 ${isHovering ? 'translate-y-[-28px]' : 'translate-y-0'
                        }`}
                    style={{ bottom: 0 }}
                >
                    <h1 className="text-xl font-bold text-white line-clamp-2 break-words">
                        {title}
                    </h1>
                </div>

                {/* Description overlay with improved transition */}
                <div
                    className={`absolute left-0 right-0 px-4 transition-all duration-300 ${isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    style={{ bottom: '12px' }}
                >
                    <p className="text-xs text-white line-clamp-2 break-words">
                        {truncatedDescription}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default React.memo(FeaturedCard);