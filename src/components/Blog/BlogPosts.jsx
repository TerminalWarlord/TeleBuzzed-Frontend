import Pagination from "../UI/Pagination"
import PostCard from "./PostCard"
import useFetch from "../../hooks/useFetch";
import { useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllPosts } from "../../utils/posts";

const BlogPosts = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        if (params.pageNo) {
            setCurrentPage(Number(params.pageNo));
        }
    }, [params.pageNo]);

    const fetchFn = useCallback(() => getAllPosts(limit, currentPage, 'post'), [limit, currentPage]);

    const { data, isFetching, error } = useFetch(fetchFn);

    const postData = isFetching ? Array(limit).fill({}) : (data?.result || []);

    if (error || !postData.length) {
        return (
            <div className="w-full flex justify-center items-center px-5 md:px-10 xl:px-20 my-16">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error?.message || "An error occurred while fetching posts."}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col justify-center items-center px-5 md:px-10 xl:px-20 my-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 md:gap-x-6 gap-y-10 md:gap-y-6">
                {postData.map((post, index) => (
                    <PostCard key={post.id || index} {...post} isFetching={isFetching} />
                ))}
            </div>
            <div className="w-full flex items-center justify-center mt-8">
                <Pagination
                    currentPage={currentPage}
                    totalPages={data?.hasNextPage ? currentPage + 1 : currentPage}
                    onPageChange={(pageNo) => {
                        setCurrentPage(pageNo);
                        navigate(pageNo);
                    }}
                />
            </div>
        </div>
    )
}

export default BlogPosts