import { useCallback, useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from '../UI/Modal';
import { getAllPosts, deletePost } from "../../utils/http";
import Pagination from '../UI/Pagination';
import PostEditor from './PostEditor';

const AllPost = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const modalRef = useRef();
    const [selectedItem, setSelectedItem] = useState();
    const [deletionError, setDeletionError] = useState(null);
    const [limit] = useState(5);
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const fetchFn = useCallback(async () => {
        return await getAllPosts(limit, currentPage);
    }, [limit, currentPage]);

    const { data: allPosts, error, isFetching, fetchData } = useFetch(fetchFn, {
        result: []
    });

    useEffect(() => {
        if (location.state && location.state.postUpdated) {
            setCurrentPage(parseInt(params.pageNo) || 1); // Reset to first page when a post is updated
            setDeletionError(null);
            setSelectedItem(null);
            fetchData();
            // Clear the state after fetching to prevent unnecessary re-fetches
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location.state, fetchData, navigate, location.pathname, params.pageNo]);

    useEffect(() => {
        fetchData();
    }, [currentPage, fetchData]);

    if (params.postSlug) {
        return <PostEditor />
    }

    if (error) {
        console.log(error)
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
    async function deletePostModal() {
        try {
            await deletePost(selectedItem);
            navigate('/dashboard/posts', { state: { postUpdated: true } });
            setDeletionError(null);
            setSelectedItem(null);
            modalRef.current.close();
        }
        catch (err) {
            console.log(err)
            setDeletionError({
                message: "Failed to delete!"
            });
        }
    }


    async function handlePageChange(pageNo) {
        setCurrentPage(pageNo);
        navigate('/dashboard/posts/' + pageNo);
    }

    function openModal(postSlug) {
        setSelectedItem(postSlug);
        modalRef.current.showModal();
    }
    function closeModal() {
        modalRef.current.close();
    }

    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                {isFetching && <div className='w-full flex flex-col items-center justify-center mt-24 mb-10'>
                    <progress className="progress w-56"></progress>
                    <p>Getting data...</p>
                </div>}
                {!isFetching && allPosts?.result && allPosts.result.length > 0 && (
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
                            {allPosts.result.map(post => (
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
                                            <img className="h-10 w-10 rounded-full" src={`${import.meta.env.VITE_API_URL}/image/${post.featured_image}`} alt="" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-base-content">
                                            <Link to={`https://t.me/${post.slug}`} className="font-medium">{post.title}</Link>
                                        </div>
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                        <Link
                                            to={'/dashboard/edit/' + post.slug}
                                            className="px-4 py-1.5 bg-black mt-2 rounded-lg text-white text-sm font-bold"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            className="px-4 py-1.5 bg-black mt-2 rounded-lg text-white text-sm font-bold"
                                            onClick={() => {
                                                openModal(post.slug);
                                            }}
                                        >
                                            Delete

                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <Modal ref={modalRef}>
                <h2 className='font-bold text-3xl'>Are you sure?</h2>
                <p className='text-sm mt-4'>Do you really want to delete this post?</p>
                <p className='text-sm mb-4'>This action can&apos;t be undone</p>
                {deletionError && <p className='text-sm my-4 text-red-500'>{deletionError?.message}</p>}
                <div className='my-6 flex space-x-2 items-center justify-center'>
                    <Link
                        className="px-4 py-1.5 bg-black mt-2 rounded-lg text-white text-sm font-bold"
                        onClick={closeModal}
                    >Cancel</Link>
                    <Link
                        className="px-4 py-1.5 bg-red-500 mt-2 rounded-lg text-white text-sm font-bold"
                        onClick={deletePostModal}
                    >Confirm</Link>
                </div>
            </Modal>
            <div className='w-full flex items-center justify-center'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={allPosts?.hasNextPage ? currentPage + 1 : currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default AllPost;