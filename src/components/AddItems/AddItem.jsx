import Guidelines from "./Guidelines"
import AddItemForm from "./AddItemForm"
import Tabs from "../UI/Tabs"
import Intro from "../DetailPage/Intro"
import { faBullhorn, faRobot, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import MetaTags from "../UI/MetaTags"

const tabContent = [
    {
        tabName: 'Add',
        content: <AddItemForm />,
        checked: true,
    },
    {
        tabName: 'Guidelines',
        content: <Guidelines />,
        checked: false,
    },
]

const ICONS = {
    bot: faRobot,
    channel: faBullhorn,
    group: faUserGroup,
}

const AddItem = () => {
    const params = useParams();
    console.log(params.type)
    const type = params.type || 'bot';
    return (
        <>
            <MetaTags title={`Add a New ${type.slice(0, 1).toUpperCase() + type.slice(1)} | TeleBuzzed.Com`} />
            <div className="w-full px-5">
                <Intro icon={ICONS[type]} title={`Add a ${type}`} />
                <div className="flex w-full justify-center my-5 ">
                    <Tabs tabContent={tabContent} />
                </div>
            </div>
        </>
    )
}

export default AddItem