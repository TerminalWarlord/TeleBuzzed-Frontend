import { useCallback, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { getAllPosts, } from "../../utils/http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Pagination from '../UI/Pagination';
import PostEditor from './PostEditor';

const AllPost = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState();
    const fetchFn = useCallback(async () => {
        return await getAllPosts();
    }, [])
    const { data: allPosts, error, isFetching, fetchData } = useFetch(fetchFn, {
        result: []
    });

    console.log(allPosts?.result);

    function handleEdit(item) {
        console.log(item);
        setSelectedItem(item);
    }
    if (selectedItem?.title) {
        console.log(selectedItem.title)
        return <PostEditor
            postTitle={selectedItem.title}
            postType={selectedItem.isPost}
            postId={selectedItem._id}
            postContent={selectedItem.content}
        />
    }

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center my-8 space-y-4">
                <FontAwesomeIcon icon={faBug} className="text-5xl sm:text-8xl text-red-400" />
                <h2 className="text-center text-red-400 text-xl">Failed to fetch!</h2>
            </div>
        );
    }

    if (!error && allPosts?.result.length === 0) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center my-8 space-y-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-4xl sm:text-6xl text-green-400" />
                <h2 className="text-center text-xl">No pending requests!</h2>
            </div>
        );
    }



    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-base-100">
                    <thead className="bg-base-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                User
                            </th>
                            <th scope="col" className="pl-6 pr-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Thumbnail
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-base-100 divide-y divide-gray-200">
                        {allPosts?.result?.map(post => (

                            <tr key={post._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-base-content">
                                                {`${post.author_id.first_name} ${post.author_id.last_name}`}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                @{post.author_id.username}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-6 pr-2  py-4 whitespace-nowrap">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={`http://localhost:3000/image/${post.featured_image}`} alt="" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-base-content">
                                        <a href={`https://t.me/${post.slug}`} className="font-medium">{post.title}</a>
                                    </div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                    <button
                                        className="px-4 py-1.5 bg-black mt-2 rounded-lg text-white text-sm font-bold"
                                        onClick={() => handleEdit(post)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-4 py-1.5 bg-black mt-2 rounded-lg text-white text-sm font-bold"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex items-center justify-center'>
                <Pagination currentPage={currentPage} totalPages={allPosts?.hasNextPage ? currentPage + 1 : currentPage} onPageChange={() => { }} />

            </div>
        </div>
    );
}

export default AllPost;