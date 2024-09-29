import { faArrowTrendUp, faCalendar, faCircleInfo, faFlag, faLanguage, faList, faPaperPlane, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LineBreak from "../../UI/LineBreak"
import ProfilePicture from "./ProfilePicture"
import InfoItem from "./InfoItem"

const InfoCard = () => {
    return (
        <div className="rounded-md mx-2 w-11/12 md:w-[300px] flex flex-col shadow-md" >
            <ProfilePicture />
            <div className="my-3 flex justify-center">
                <a href="#" className="px-4 py-2 bg-[#2AABEE] text-base-200 rounded-md font-bold text-xs">Open <FontAwesomeIcon icon={faPaperPlane} color="white" className="ml-2 text-sm font-normal" /></a>
            </div>

            <div className="w-full flex justify-center mt-6 mb-3 item">
                <LineBreak icon={faCircleInfo} text={'Details'} />
            </div>
            <InfoItem icon={faPaperPlane} fieldName={'Username'} fieldValue={'jaybee'} />
            <InfoItem icon={faLanguage} fieldName={'Language'} fieldValue={'English'} />
            <InfoItem icon={faList} fieldName={'Category'} fieldValue={'Utiities'} />
            <InfoItem icon={faCalendar} fieldName={'Added'} fieldValue={'4 years 5 months ago'} />
            <InfoItem icon={faArrowTrendUp} fieldName={'Popularity'} fieldValue={'80%'} />
            <InfoItem icon={faStar} fieldName={'Reviews'} fieldValue={'4.75'} />
            <div className="text-center align-middle p-3 bg-base-200 leading-4">
                <span className="text-xs">
                    <FontAwesomeIcon icon={faFlag} /> Think twice before trusting or using a content. If it infringes your copyright or should be removed from our directory, please click here to report it.
                </span>
            </div>
        </div>
    )
}

export default InfoCard