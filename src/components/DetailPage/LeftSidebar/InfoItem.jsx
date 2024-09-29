import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InfoItem = ({ icon, fieldName, fieldValue }) => {
    return (
        <div className="flex items-start px-5 my-1.5 justify-start">
            <div><FontAwesomeIcon icon={icon} className="mr-4 text-sm w-3.5 h-3.5" /></div>
            <div>
                <h1 className="text-sm font-bold">{fieldName}</h1>
                <h2 className="text-xs font-normal">{fieldValue}</h2>
            </div>
        </div>
    )
}

export default InfoItem