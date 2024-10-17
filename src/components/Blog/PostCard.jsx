import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const PostCard = ({ featured_image: image, isFetching = false, content, title, slug }) => {
    // Function to strip HTML tags from the longDescription
    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };

    const plainTextDescription = content ? stripHtml(content) : "";
    const description = plainTextDescription.length > 100 ? plainTextDescription.slice(0, 100) + '...' : plainTextDescription;

    return (
        <div className="w-full sm:w-56 md:w-52 lg:w-72 xl:w-80">
            {isFetching ? (
                <div className="skeleton h-48 w-full"></div>
            ) : (
                <Link to={'/article/' + slug}>
                    <img
                        src={`${apiUrl}/image/${image || 'default_thumb.png'}`}
                        alt={title}
                        className="rounded-lg h-48 w-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `${apiUrl}/image/default_thumb.png`;
                        }}
                    />
                </Link>
            )}
            <div className="px-1 my-2 pr-2">
                {isFetching ? (
                    <div className="skeleton w-full h-6 mb-1 mt-3"></div>
                ) : (
                    <Link to={'/article/' + slug} className="hover:text-blue-600">
                        <h1 className="font-bold text-xl md:text-2xl mb-1 mt-4">{title}</h1>
                    </Link>
                )}
                {isFetching ? (
                    <div className="skeleton w-full h-14 mt-3"></div>
                ) : (
                    <p className="text-base">{description}</p>
                )}
            </div>
        </div>
    )
}

export default PostCard