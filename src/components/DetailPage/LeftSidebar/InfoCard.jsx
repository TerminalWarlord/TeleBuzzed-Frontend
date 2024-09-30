import { faArrowTrendUp, faCalendar, faCircleInfo, faFlag, faLanguage, faList, faMars, faPaperPlane, faRobot, faStar, faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LineBreak from "../../UI/LineBreak"
import ProfilePicture from "./ProfilePicture"
import InfoItem from "./InfoItem"
import LikeState from "./LikeState"
import { useRef } from "react"
import Modal from "../../UI/Modal"

const InfoCard = ({ item }) => {
    const modal = useRef();
    let info;
    function openModal() {
        modal.current.showModal();
    }
    if (!item.isUser) {
        info = <><InfoItem icon={faLanguage} fieldName={'Language'} fieldValue={item.languages} />
            <InfoItem icon={faList} fieldName={'Category'} fieldValue={item.category} />
            <InfoItem icon={faCalendar} fieldName={'Added'} fieldValue={item.added} />
            <InfoItem icon={faArrowTrendUp} fieldName={'Popularity'} fieldValue={item.popularity} />
            <InfoItem icon={faStar} fieldName={'Reviews'} fieldValue={item.reviews} />
            <div className="text-center align-middle p-3 bg-base-200 leading-4 mt-4 cursor-pointer" onClick={openModal}>
                <span className="text-xs">
                    <FontAwesomeIcon icon={faFlag} /> Think twice before trusting or using a content. If it infringes your copyright or should be removed from our directory, please click here to report it.
                </span>
            </div>
            <Modal ref={modal} />
        </>
    }
    else {
        info = <>
            <InfoItem icon={faStar} fieldName={'Reviews'} fieldValue={item.reviews} />
            <InfoItem icon={faRobot} fieldName={'Bots Added'} fieldValue={item.bots_added} />
            <InfoItem icon={faCalendar} fieldName={'Channels Added'} fieldValue={item.channels_added} />
            <InfoItem icon={faUsersBetweenLines} fieldName={'Groups Added'} fieldValue={item.groups_added} />
            <InfoItem icon={faMars} fieldName={'Gender'} fieldValue={item.gender} />
            <InfoItem icon={faCalendar} fieldName={'Joined'} fieldValue={item.joined} />
            <div className="my-2"></div>
        </>
    }
    return (
        <div className="rounded-md mx-2 w-11/12 md:w-[300px] flex flex-col shadow-md" >
            <ProfilePicture />
            {!item.isUser && <LikeState />}
            <div className="my-3 flex justify-center">
                <a href="#" className="px-4 py-2 bg-[#2AABEE] text-base-200 rounded-md font-bold text-xs">Open <FontAwesomeIcon icon={faPaperPlane} color="white" className="ml-2 text-sm font-normal" /></a>
            </div>
            <div className="w-full flex justify-center my-3 item">
                <LineBreak icon={faCircleInfo} text={'Details'} />
            </div>
            <InfoItem icon={faPaperPlane} fieldName={'Username'} fieldValue={item.username} />
            {info}
        </div>
    )
}

export default InfoCard