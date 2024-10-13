

import Intro from "./Intro"
import InfoCard from "./LeftSidebar/InfoCard"
import SimilarItems from "./SimilarItems"
import MainContent from "./MainContent"
import { faBullhorn, faRobot, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import AllReviews from "./AllReviews"
import Tabs from "../UI/Tabs"
import useFetch from "../../hooks/useFetch"
import { getItemDetails } from "../../utils/http"
import { useParams } from "react-router-dom"
import { useCallback } from "react"


const iconMap = {
    bot: faRobot,
    channel: faBullhorn,
    group: faUserGroup,
    user: faUser,
}


const MainDetailPage = () => {
    const params = useParams();
    const fetchFn = useCallback(async () => {
        return await getItemDetails(params.username);
    }, [params.username])
    const { data: botData, isFetching, error } = useFetch(fetchFn, {
        result: {
            isUser: true
        }
    })
    console.log(botData);
    const tabContent = [
        {
            tabName: 'About',
            content: <MainContent isFetching={isFetching} error={error} data={botData} />,
            checked: true,
        },
        {
            tabName: 'Reviews',
            content: <div className="w-full flex flex-col justify-center items-center">
                {!isFetching && !error && <AllReviews username={botData?.result?.username} reviewer={null} />}
            </div>,
            checked: false
        }
    ]
    let icon = iconMap[botData?.result?.type];
    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
            <Intro title={botData?.result?.name} type={botData?.result?.type} icon={icon} isFetching={isFetching} />
            <div className="flex flex-col items-center md:flex-row md:items-start w-full my-4">
                <InfoCard item={{ isUser: false, ...botData?.result }} isFetching={isFetching} error={error} />
                <div className="flex flex-col items-center w-11/12 mt-4 md:w-3/4 md:mt-0">
                    {/* <MainContent /> */}
                    {/* <AllReviews /> */}
                    <Tabs tabContent={tabContent} />
                </div>
            </div>
            <SimilarItems category={botData?.result?.category?.slug} itemType={botData?.result?.type} currentItemUsername={botData?.result?.username} />
        </section>
    )
}

export default MainDetailPage