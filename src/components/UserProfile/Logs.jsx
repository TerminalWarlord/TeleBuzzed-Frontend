import { faCircleCheck, faCircleInfo, faCircleXmark, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LineBreak from "../UI/LineBreak";
import useFetch from "../../hooks/useFetch";
import { useCallback } from "react";
import { getPendingRequests } from "../../utils/http";

const Logs = () => {
    // const data = [
    //     { status: "inprogress", name: "Twitter Downloader Bot", reason: "" },
    //     { status: "inprogress", name: "Facebook Downloader Bot", reason: "" },
    //     { status: "inprogress", name: "TeraBox Downloader Bot", reason: "" },
    //     { status: "unpublished", name: "Youtube Downloader Bot", reason: "no response from the bot" },
    //     { status: "published", name: "JayBee Ebook Downloader", reason: "" },
    //     { status: "published", name: "Instagram Download Bot", reason: "" },
    //     { status: "published", name: "TikTok Downloader", reason: "" },
    //     { status: "published", name: "CP Reminder Bot", reason: "" },
    //     { status: "published", name: "Anime Stash", reason: "" },
    //     { status: "published", name: "Anime Downloader Bot", reason: "" },
    // ];
    const fetchFn = useCallback(async () => {
        return getPendingRequests();
    }, [])
    const { data, isFetching, error } = useFetch(fetchFn, {
        result: []
    })

    const getStatusColor = (status) => {
        switch (status) {
            case "inprogress":
                return "text-yellow-500";
            case "unpublished":
                return " text-red-500";
            case "published":
                return "text-green-500";
            default:
                return "text-gray-500";
        }
    };

    return (
        <>
            <LineBreak icon={faClockRotateLeft} text={'All Activity'} classes="mt-2 mb-6" />
            <div className="container mx-auto p-4 rounded-lg">

                <table className="min-w-full table-auto bg-base-100 shadow-md rounded-lg text-center">
                    <thead className="rounded-lg">
                        <tr className="bg-base-200 text-base-content uppercase text-xs lg:text-sm leading-normal">
                            <th className="py-3 rounded-tl-lg">Status</th>
                            <th className="py-3">Name</th>
                            {/* <th className="py-3 rounded-tr-lg">Reason</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-base-content text-sm font-light">
                        {data?.result?.map((item, index) => (
                            <tr key={index} className={`border-b border-base-200 ${getStatusColor(item.status)}`}>
                                <td className="">
                                    <FontAwesomeIcon
                                        icon={
                                            item.status === "published"
                                                ? faCircleCheck
                                                : item.status === "unpublished"
                                                    ? faCircleXmark
                                                    : faCircleInfo
                                        }
                                    />
                                </td>
                                <td className="py-3 ">
                                    <Link to="#" className="text-base-content hover:underline font-semibold">
                                        {item.name}
                                    </Link>
                                </td>
                                {/* <td className="py-3 text-base-content">{item.reason || "-"}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Logs;
