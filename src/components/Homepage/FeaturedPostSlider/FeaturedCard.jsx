import { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ title, longDescription, image, postSlug }) => {
    const [isHovering, setIsHovering] = useState(false);

    // Function to strip HTML tags from the longDescription
    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };
    const plainTextDescription = stripHtml(longDescription);

    const description = plainTextDescription.length > 70 ? `${plainTextDescription.slice(0, 70)}...` : plainTextDescription;
    return (
        <Link
            to={'/article/' + postSlug}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative my-5 sm:mx-2">
                <div
                    className="rounded-2xl transition-all duration-300 hover:brightness-50 w-full h-[12rem] bg-cover bg-center"
                    style={{ backgroundImage: `url(http://localhost:3000/image/${image})` }}

                >
                </div>
                <h1 className={`transition-all duration-300 absolute bottom-0 left-0 text-xl font-bold px-4 py-4 text-base-100 w-full ${isHovering ? 'bottom-7' : 'bottom-0'}`}>
                    <span className="line-clamp-2 overflow-hidden">{title}</span>
                </h1>

                <h2 className={`transition-all duration-300 absolute left-0 w-[20rem] text-xs text-base-100 px-4 ${isHovering ? 'bottom-3' : '-bottom-10 opacity-0'}`}>
                    <span className="block truncate pr-4">{description}</span>
                </h2>
            </div>
        </Link>
    );
};

export default FeaturedCard;
