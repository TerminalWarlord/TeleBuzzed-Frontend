import { Link, useParams } from "react-router-dom"
import Dashboard from "./Dashboard"

const Menu = () => {
    const params = useParams();
    const menu = params.menu || 'posts';
    return (
        <div className="w-full px-10 pt-10 mb-10">
            <h1 className="text-3xl font-bold my-8">Dashboard</h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/4 space-y-2 mb-4 md:mb-0">
                    <Link className={`${menu === 'posts' && 'font-bold'}`} to={'/dashboard/posts'}>Posts</Link>
                    <Link className={`${menu === 'requests' && 'font-bold'}`} to={'/dashboard/requests'}>Pending Requests</Link>
                    <Link className={`${menu === 'reports' && 'font-bold'}`} to={'/dashboard/reports'}>Reports</Link>
                </div>
                <div className="bg-base-200 rounded-lg w-full pb-4 shadow-md border-2 border-base-300 min-h-96">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default Menu

//  className={`${params.menu===}`}