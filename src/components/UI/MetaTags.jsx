import { Helmet } from 'react-helmet-async';

const defaultMetaTags = {
    title: 'Telebuzzed | Telegram Directory',
    description: "Discover and connect with the best Telegram bots, channels, and groups at Telebuzzed. Your one-stop directory for all Telegram resources, offering an intuitive interface and seamless navigation.",
    image: "https://telebuzzed.com/telebuzzed.png",
    url: "https://telebuzzed.com"
};

const MetaTags = ({
    title: propTitle,
    description: propDescription,
    image: propImage,
    url: propUrl
}) => {
    const title = propTitle || defaultMetaTags.title;
    const description = propDescription || defaultMetaTags.description;
    const image = propImage || defaultMetaTags.image;
    const url = propUrl || defaultMetaTags.url;

    return (
        <Helmet prioritizeSeoTags>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="Telegram bots, Telegram channels, Telegram groups, Telegram directory, Telebuzzed, Telegram bot list" />
            <meta charSet="UTF-8" />
        </Helmet>
    );
};
export default MetaTags