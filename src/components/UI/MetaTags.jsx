import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const defaultMetaTags = {
    title: 'Telebuzzed | Telegram Directory',
    description: "Discover and connect with the best Telegram bots, channels, and groups at Telebuzzed. Your one-stop directory for all Telegram resources, offering an intuitive interface and seamless navigation.",
    image: "https://telebuzzed.com/telebuzzed.png",
    baseUrl: "https://telebuzzed.com"
};

const MetaTags = ({
    title: propTitle,
    description: propDescription,
    image: propImage,
    url: propUrl,
    noIndex = false
}) => {
    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState('');

    // Get the actual URL including query parameters
    useEffect(() => {
        const fullUrl = window.location.href;
        setCurrentUrl(fullUrl);
    }, [location]);

    const title = propTitle || defaultMetaTags.title;
    const description = propDescription || defaultMetaTags.description;
    const image = propImage || defaultMetaTags.image;

    // Determine canonical URL
    // Remove query parameters and hash from pathname
    const cleanPathname = location.pathname.split('?')[0].split('#')[0];
    const canonicalUrl = propUrl || `${defaultMetaTags.baseUrl}${cleanPathname}`;

    // Use current URL for social sharing if available, fallback to canonical
    const shareUrl = currentUrl || canonicalUrl;

    return (
        <Helmet prioritizeSeoTags>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Canonical URL - always use the clean version without query params */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={shareUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={shareUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Robots meta with dynamic noIndex support */}
            <meta
                name="robots"
                content={noIndex ? "noindex, nofollow" : "index, follow"}
            />

            {/* Additional SEO tags */}
            <meta name="keywords" content="Telegram bots, Telegram channels, Telegram groups, Telegram directory, Telebuzzed, Telegram bot list" />
            <meta charSet="UTF-8" />
        </Helmet>
    );
};

export default MetaTags;