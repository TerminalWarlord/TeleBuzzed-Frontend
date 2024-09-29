import { faRobot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Intro = () => {
    return (
        <>
            <div className="flex items-center my-2 mx-2">
                <div>
                    <FontAwesomeIcon icon={faRobot} className="text-3xl border-2 rounded-full p-2 w-10 h-10 mr-2" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold">JayBee Spotify Bot</h1>
                    <h3 className="text-md font-medium">Bot</h3>
                </div>
            </div>
            <div className="h-[1.5px] w-full bg-base-200 my-4 mx-2"></div>
        </>
    )
}

export default Intro