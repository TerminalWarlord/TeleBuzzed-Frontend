import { Helmet } from 'react-helmet';

const defaultMetaTags = {
    title: 'Telebuzzed | Telegram Directory',
    description: "Discover and connect with the best Telegram bots, channels, and groups at Telebuzzed. Your one-stop directory for all Telegram resources, offering an intuitive interface and seamless navigation.",
    image: "https://telebuzzed.com/telebuzzed.png",
    keywords: "Telegram bots, Telegram channels, Telegram groups, Telegram directory, Telebuzzed, Telegram bot list",
};

const MetaTags = ({ title: propTitle, description: propDescription, image: propImage }) => {
    const title = propTitle || defaultMetaTags.title;
    const description = propDescription || defaultMetaTags.description;
    const image = propImage || defaultMetaTags.image;
    const url = window.location.href;

    return (
        <Helmet>
            {/* Charset */}
            <meta charSet="UTF-8" />

            {/* Title Tag */}
            <title>{title}</title>

            {/* Meta Description */}
            <meta name="description" content={description} />
            <meta name="keywords" content={defaultMetaTags.keywords} />

            {/* Meta Robots */}
            <meta name="robots" content="index, follow" />

            {/* Open Graph Meta Tags (for Social Media) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default MetaTags;
