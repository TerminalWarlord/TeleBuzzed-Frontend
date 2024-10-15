import { Link, useParams } from "react-router-dom"
import Dashboard from "./Dashboard"
import PostEditor from "./PostEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faHourglassHalf, faNewspaper, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import AllPost from "./AllPosts";
import MetaTags from "../UI/MetaTags";

const Menu = () => {
    const params = useParams();
    const menu = params.menu || 'posts';
    return (
        <>
            <MetaTags title={`Dashboard | TeleBuzzed.Com`} />
            <div className="w-full px-10 pt-2 mb-10">
                <h1 className="text-3xl font-bold my-4">Dashboard</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-1/4  mb-4 md:mb-0 mr-3 border-2 border-base-300 rounded-lg max-h-96">
                        <Link className={`pl-4 py-2 ${menu === 'posts' && 'font-bold bg-base-200 rounded-lg'}`} to={'/dashboard/posts'}>
                            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                            All Posts
                        </Link>
                        <Link className={`pl-4 py-2 ${menu === 'new-post' && 'font-bold bg-base-200 rounded-lg'}`} to={'/dashboard/new-post'}>
                            <FontAwesomeIcon icon={faSquarePlus} className="mr-2" />
                            New Post
                        </Link>
                        <Link className={`pl-4 py-2 ${menu === 'pending-requests' && 'font-bold bg-base-200 rounded-lg'}`} to={'/dashboard/pending-requests'}>
                            <FontAwesomeIcon icon={faHourglassHalf} className="mr-2" />
                            Pending Requests
                        </Link>
                        <Link className={`pl-4 py-2 ${menu === 'reports' && 'font-bold bg-base-200 rounded-lg'}`} to={'/dashboard/reports'}>
                            <FontAwesomeIcon icon={faFlag} className="mr-2" />
                            Reports
                        </Link>

                    </div>
                    <div className="bg-base-200 rounded-lg w-full pb-4 shadow-md border-2 border-base-300 min-h-96">
                        {menu === 'posts' && <AllPost />}
                        {menu === 'pending-requests' && <Dashboard />}
                        {menu === 'new-post' && <PostEditor />}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu

//  className={`${params.menu===}`}