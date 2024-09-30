import { faHandshakeAngle, faUser } from "@fortawesome/free-solid-svg-icons";
import Intro from "../DetailPage/Intro";
import InfoCard from "../DetailPage/LeftSidebar/InfoCard";
import Tabs from "../UI/Tabs";
import { POPULARBOTS } from "../../data/dummyData";
import Card from "../UI/Card";
import AllReviews from "../DetailPage/AllReviews";
import LineBreak from "../UI/LineBreak";

const Profile = () => {
    const item = {
        isUser: true,
        username: 'jaybee',
        reviews: 10,
        bots_added: 5,
        channels_added: 1,
        groups_added: 1,
        gender: 'male',
        joined: '4 years 1 month ago'
    }
    const tabContent = [
        {
            tabName: 'Contributions',
            content: <div className="w-full flex items-center flex-col">
                <LineBreak icon={faHandshakeAngle} text={'All Contributions'} classes="mt-2 mb-4" />

                <div className='grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3  sm:gap-x-2 md:gap-x-5'>
                    {POPULARBOTS.map(bot => {
                        return <Card key={bot.id} {...bot} classes='max-h-60' />
                    })}
                </div>
            </div>,
            checked: true,
        },
        {
            tabName: 'Reviews',
            content: <div className="w-full flex flex-col justify-center items-center">
                <AllReviews />
            </div>,
            checked: false
        }
    ]
    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
            <Intro title="JayBee" type="Profile" icon={faUser} />
            <div className="flex flex-col items-center md:flex-row md:items-start w-full my-4">
                <InfoCard item={item} />
                <div className="flex flex-col items-center w-11/12 mt-4 md:w-3/4 md:mt-0">
                    <Tabs tabContent={tabContent} />
                </div>
            </div>
        </section>
    )
}

export default Profile