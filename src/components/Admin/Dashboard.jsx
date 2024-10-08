import { Form } from "react-router-dom"
import useFetch from '../../hooks/useFetch';
import { getUserRequests } from "../../utils/http";
import { getToken } from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Modal from "../UI/Modal";
import { useRef } from "react";

// TODO : Add skeleton
// TODO : handle case where there's no pending requests 
// TODO : handle case after approving or rejecting



const Dashboard = () => {
    const modalRef = useRef();
    const { data, error, isFetching, fetchData } = useFetch(getUserRequests, {
        result: []
    })
    console.log(isFetching)

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const res = await fetch('http://localhost:3000/admin/requests', {
            method: 'POST',
            body: data,
            headers: {
                "Authorization": getToken(),

            }
        });
        if (res.ok) {
            const resData = await res.json();
            console.log(resData)
        }
        fetchData();
    }
    if (error) {
        return <div className="w-full flex flex-col items-center justify-center my-8 space-y-4">
            <FontAwesomeIcon icon={faBug} className="text-5xl sm:text-8xl text-red-400" />
            <h2 className="text-center text-red-400 text-xl">Failed to fetch!</h2>
        </div>
    }
    if (!error && data?.result.length == 0) {
        return <div className="w-full flex flex-col items-center justify-center my-8 space-y-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-5xl sm:text-8xl text-green-400" />
            <h2 className="text-center text-xl">No pending requests!</h2>
        </div>
    }

    function handleModal() {
        modalRef.current.showModal();
    }

    return (
        <div className="flex justify-center w-full">

            <div className="overflow-x-auto my-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="p-1 text-center">User</th>
                            <th className="p-1 text-center">Content Added</th>
                            <th className="p-1 w-[8rem] md:w-[10rem] text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.result?.map(request => {
                            return <tr key={request._id}>
                                <td className="p-1">
                                    <div className="flex items-center">

                                        <div>
                                            <div className="font-bold text-xs md:text-sm">{`${request.added_by.first_name} ${request.added_by.last_name}`}</div>
                                            <div className=" text-xs  opacity-50">@{request.added_by.username}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-1 w-6 sm:w-[30rem] xl:w-[65rem] 2xl:w-[75rem]">
                                    <div className="flex">
                                        <div className="hidden  md:flex avatar">
                                            <div className="mask mask-squircle h-12 w-12 mr-4">
                                                <img
                                                    src={request.avatar}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <a href={`https://t.me/${request.username}`} className="font-bold text-sm md:text-base">{request.username}</a>
                                            <br />
                                            <div className=" text-xs md:text-xs"><span>{request.description}</span></div>
                                        </div>
                                    </div>
                                </td>
                                <th className="p-1">
                                    <button className="w-full px-2 py-1.5 bg-green-200 rounded-md" onClick={() => {
                                        handleModal(request._id)
                                    }}>Action</button>
                                    <Modal ref={modalRef}>
                                        <Form className="flex flex-col items-center justify-center space-y-2" onSubmit={handleSubmit}>
                                            <input type="hidden" name="request_id" value={request._id} />
                                            <select name="category" id="category" className="select text-xs md:text-sm select-sm  px-2 border-1 border-base-200 w-full" required defaultValue={request.category}>
                                                <option value="entertainment">Entertainment</option>
                                                <option value="utilities">Utilities</option>
                                                <option value="media">Media</option>
                                                <option value="news">News</option>
                                                <option value="programming">Programming</option>
                                            </select>
                                            <select name="action" id="action" className="select text-xs md:text-sm select-sm  px-2 border-1 border-base-200 w-full" defaultValue="approve">
                                                <option value="approve">Approve</option>
                                                <option value="reject">Reject</option>
                                            </select>
                                            <button type="submit" className="w-full px-2 py-1.5 bg-green-200 rounded-md">Submit</button>
                                        </Form>
                                        <form method="dialog">
                                            <button>close</button>
                                        </form>
                                    </Modal>
                                    {/* <Form className="flex flex-col items-center justify-center space-y-2" onSubmit={handleSubmit}>
                                        <input type="hidden" name="request_id" value={request._id} />
                                        <select name="category" id="category" className="select text-xs md:text-sm select-sm  px-2 border-1 border-base-200 w-full" required defaultValue={request.category}>
                                            <option value="entertainment">Entertainment</option>
                                            <option value="utilities">Utilities</option>
                                            <option value="media">Media</option>
                                            <option value="news">News</option>
                                            <option value="programming">Programming</option>
                                        </select>
                                        <select name="action" id="action" className="select text-xs md:text-sm select-sm  px-2 border-1 border-base-200 w-full" defaultValue="approve">
                                            <option value="approve">Approve</option>
                                            <option value="reject">Reject</option>
                                        </select>
                                        <button type="submit" className="w-full px-2 py-1.5 bg-green-200 rounded-md">Submit</button>
                                    </Form> */}
                                </th>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard