import { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedCard = () => {
    const [isHovering, setIsHovering] = useState(false);
    const longDescription = "This is description iryger reiuyhfgre refuer freigjre freoivfre vreoijhgoire weyfew fweufhew we"
    const description = longDescription.length > 70 ? `${longDescription.slice(0, 70)}...` : longDescription;
    return (
        <Link
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative my-5 sm:mx-2">
                <div
                    className="rounded-2xl transition-all duration-300 hover:brightness-50 w-full h-[12rem] bg-cover bg-center"
                    style={{ backgroundImage: "url(https://www.gizchina.com/wp-content/uploads/images/2017/03/telegram.jpg)" }}

                >
                </div>
                <h1 className={`transition-all duration-300 absolute bottom-0 left-0 text-xl font-bold px-4 py-4 text-base-100 ${isHovering ? 'bottom-7' : 'bottom-0'}`}>
                    Hello World
                </h1>

                <h2 className={`transition-all duration-300 absolute left-0 w-[20rem] text-xs text-base-100 px-4 ${isHovering ? 'bottom-3' : '-bottom-10 opacity-0'}`}>
                    {description}
                </h2>
            </div>
        </Link>
    );
};

export default FeaturedCard;
