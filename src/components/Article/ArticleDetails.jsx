import { useCallback } from "react";
import { getPostDetails } from "../../utils/http";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/helper";
import Featured from "../Homepage/FeaturedPostSlider/Featured";
import ErrorPage from "../UI/ErrorPage";
import { ImageViewerWithCaption } from "../UI/Image";


function ArticleDetails() {
    const params = useParams();
    const fetchFn = useCallback(async () => {
        return await getPostDetails(params.postSlug);
    }, [params.postSlug]);
    const { data, isFetching, error } = useFetch(fetchFn, {});

    if (error?.message) {
        return <ErrorPage />

    }
    return (
        <div className="container mx-auto p-16 bg-base-200-lg rounded-lg my-8 border-2 border-base-300 shadow-sm">
            <header className="mb-4">
                {isFetching ? <div className="skeleton w-80 h-8"></div> : <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-base-content">{data?.result?.title}</h1>}
                <div className="flex space-x-2 items-center text-base-content text-opacity-80 my-4">
                    <div>
                        {isFetching ? <div className="skeleton w-[50px] aspect-square rounded-full"></div> :
                            <Link to={`/profile/${data?.result?.author_id.username}`}>
                                <img
                                    className="w-[50px] aspect-square rounded-full"
                                    src={`http://localhost:3000/image/${data?.result?.author_id.avatar}`}
                                    alt={`Profile picture of ${data?.result?.author_id.first_name} ${data?.result?.author_id.last_name}`}
                                />
                            </Link>}
                    </div>
                    <div className="w-full">
                        {isFetching
                            ?
                            <div className="skeleton w-32 h-3"></div>
                            :
                            <Link to={`/profile/${data?.result?.author_id.username}`}><p className="text-sm lg:text-md">by <strong>{`${data?.result?.author_id.first_name} ${data?.result?.author_id.last_name}`}</strong></p></Link>
                        }
                        {isFetching ? <div className="skeleton w-48 h-3 mt-2"></div> : <p className="text-sm lg:text-md">Published on <strong>{formatDate(data?.result?.posted_on)}</strong></p>}

                    </div>
                </div>
            </header >
            <div className="w-full flex items-center justify-center my-10">
                {isFetching ?
                    <div className="skeletonl w-[350px] md:w-[450px] lg:w-[550px] aspect-square"></div>
                    :
                    <ImageViewerWithCaption
                        classes="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-full rounded-md"
                        imageUrl={`http://localhost:3000/image/${data?.result?.featured_image}`}
                        caption={`${data?.result?.title}`}
                    />

                }
            </div>

            {isFetching ?
                <div className="mb-10 ">
                    <div className="skeleton w-full h-8 my-2"></div>
                    <div className="skeleton w-full h-8 my-2"></div>
                    <div className="skeleton w-full h-8 my-2"></div>
                </div>
                : <article
                    className="prose lg:prose-lg text-base-content bg-transparent my-4 rounded-lg w-full mb-10"
                    dangerouslySetInnerHTML={{ __html: data?.result?.content }}
                    style={{ maxWidth: '90%' }}
                ></article>}


            {data?.result?.is_post && <div className="w-full  bg-base-200 rounded-xl">
                <h5 className="text-center bg-base-300 rounded-xl py-4 text-xl font-bold">More Like This</h5>
                <Featured />
            </div>}
        </div >
    );
}

export default ArticleDetails;