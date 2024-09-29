import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LineBreak = ({ icon, text, classes = "" }) => {
    return (
        <div className={`h-[1.7px] w-11/12 bg-base-200 relative my-2 ${classes}`}>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center px-3 py-2 bg-base-100 uppercase font-bold">
                <FontAwesomeIcon icon={icon} className="mr-2" />
                {text}
            </div>
        </div>
    )
}

export default LineBreak