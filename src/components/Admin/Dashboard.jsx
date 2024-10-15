import { useCallback, useRef, useState } from 'react';
import { Form } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import { getCategories, getUserRequests } from "../../utils/http";
import { getToken } from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Modal from "../UI/Modal";


const apiUrl = import.meta.env.VITE_API_URL;

const Dashboard = () => {
    const modalRef = useRef();
    const [selectedItem, setSelectedItem] = useState(null);
    const [categoryId, setCategoryId] = useState('');
    const [action, setAction] = useState('approve');
    const [reason, setReason] = useState('');

    const { data, error, fetchData } = useFetch(getUserRequests, {
        result: []
    });
    const fetchFn = useCallback(async () => {
        return await getCategories();
    }, []);
    const { data: categories } = useFetch(fetchFn, {
        result: []
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('request_id', selectedItem?._id || '');
        formData.append('category_id', categoryId);
        formData.append('action', action);
        formData.append('reason', reason);

        const res = await fetch(`${apiUrl}/admin/requests`, {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": getToken(),
            }
        });
        if (res.ok) {
            await res.json();
        }
        fetchData();
        closeModal();
    }

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center my-8 space-y-4">
                <FontAwesomeIcon icon={faBug} className="text-5xl sm:text-8xl text-red-400" />
                <h2 className="text-center text-red-400 text-xl">Failed to fetch!</h2>
            </div>
        );
    }

    if (!error && data?.result.length === 0) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center my-8 space-y-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-4xl sm:text-6xl text-green-400" />
                <h2 className="text-center text-xl">No pending requests!</h2>
            </div>
        );
    }

    function handleModal(item) {
        setSelectedItem(item);
        setCategoryId(item.category_id || '');
        setAction('approve');
        setReason('');
        modalRef.current.showModal();
    }

    function closeModal() {
        setSelectedItem(null);
        setCategoryId('');
        setAction('approve');
        setReason('');
        modalRef.current.close();
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
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Avatar
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Content
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-base-100 divide-y divide-gray-200">
                        {data?.result?.map(request => (
                            <tr key={request._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-base-content">
                                                {`${request.added_by.first_name} ${request.added_by.last_name}`}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                @{request.added_by.username}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={`${apiUrl}/image/${request.avatar}`} alt="" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-base-content">
                                        <a href={`https://t.me/${request.username}`} className="font-medium">{request.name}</a>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        className="px-4 py-1.5 bg-black mt-2 rounded-lg text-white text-sm font-bold"
                                        onClick={() => handleModal(request)}
                                    >
                                        Action
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal ref={modalRef}>
                {selectedItem && (
                    <>
                        <div className="flex w-full items-center justify-center">
                            <div className="mask mask-squircle h-16 w-16">
                                <img
                                    src={`${apiUrl}/image/${selectedItem.avatar}`}
                                    alt="Avatar"
                                    className="rounded-full"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <a href={`https://t.me/${selectedItem.username}`} className="font-bold text-sm md:text-base">
                                {selectedItem.name}
                            </a>
                            <br />
                            <div className="text-xs md:text-sm">
                                <span>{selectedItem.description}</span>
                            </div>
                        </div>

                        <Form className="flex flex-col items-center justify-center space-y-2" onSubmit={handleSubmit}>
                            <select
                                name="category_id"
                                id="category"
                                className="my-2 select text-xs md:text-sm select-sm px-2 border border-gray-300 w-full rounded-md"
                                required
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                            >
                                <option value="">Select a category</option>
                                {categories?.result?.map(category => (
                                    <option key={category._id} value={category._id}>{category.name}</option>
                                ))}
                            </select>

                            <select
                                name="action"
                                id="action"
                                className="select text-xs md:text-sm select-sm px-2 border border-gray-300 w-full rounded-md"
                                value={action}
                                onChange={(e) => setAction(e.target.value)}
                            >
                                <option value="approve">Approve</option>
                                <option value="reject">Reject</option>
                            </select>

                            <textarea
                                className="textarea w-full mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base-content"
                                placeholder="Write a reason..."
                                name="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            ></textarea>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black mt-2 rounded-lg text-white text-sm font-bold transition duration-300"
                            >
                                Submit
                            </button>
                        </Form>
                    </>
                )}
                <form method="dialog">
                    <button className="px-4 py-2 bg-black mt-2 rounded-lg text-white text-sm font-bold transition duration-300" onClick={closeModal}>
                        Close
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default Dashboard;