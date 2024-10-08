
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Intro = ({ title, type, icon, isFetching = false }) => {
    return (
        <>
            <div className="flex items-center my-2 mx-2">
                <div>
                    {isFetching ? <div className="skeleton w-[3rem] aspect-square mr-3"></div> : <FontAwesomeIcon icon={icon} className="text-3xl border-2 rounded-full p-2 w-10 h-10 mr-2" />}
                </div>
                <div>
                    {isFetching ? <div className="skeleton w-[6rem] md:w-[10rem] h-5 mb-2"></div> : <h1 className="text-xl font-semibold">{title}</h1>}
                    {isFetching ? <div className="skeleton w-[3rem] h-3"></div> : <h3 className="text-md font-medium">{type}</h3>}

                </div>
            </div>
            <div className="h-[1.5px] w-full bg-base-200 my-4 md:mx-2"></div>
        </>
    )
}

export default Intro