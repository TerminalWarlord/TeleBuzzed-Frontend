import { Helmet } from 'react-helmet'

const MetaTags = ({ title = 'Telebuzzed | Telegram Directory' }) => {
    return (
        <Helmet>
            {/* Charset */}
            <meta charSet="UTF-8" />

            {/* Title Tag */}
            <title>{title}</title>

            {/* Meta Description */}
            <meta
                name="description"
                content="Discover and connect with the best Telegram bots, channels, and groups at Telebuzzed. Your one-stop directory for all Telegram resources, offering an intuitive interface and seamless navigation."
            />

            {/* Canonical Tag */}
            <link rel="canonical" href="https://www.telebuzzed.com/" />

            {/* Meta Robots */}
            <meta name="robots" content="index, follow" />

        </Helmet>
    )
}

export default MetaTags