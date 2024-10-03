import { faHandshakeAngle, faUser } from "@fortawesome/free-solid-svg-icons";
import Intro from "../DetailPage/Intro";
import InfoCard from "../DetailPage/LeftSidebar/InfoCard";
import Tabs from "../UI/Tabs";
import Card from "../UI/Card";
import AllReviews from "../DetailPage/AllReviews";
import LineBreak from "../UI/LineBreak";
import Logs from "./Logs";
import Pagination from "../UI/Pagination";
import { fetchItems, getMe } from "../../utils/http";
import useFetch from "../../hooks/useFetch";
import { dummyData } from "../../data/dummySkeletonCards";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Profile = () => {
    const { data, isFetching, error } = useFetch(getMe, {});
    const [currentPage, setCurrentPage] = useState(1);
    // const loadingData = Array(10).fill({
    //     id: undefined
    // });
    const {
        data: botsData,
        isFetching: isFetchingBots,
        error: botsError,
        setIsFetching: setIsFetchingBots,
        setError: setBotsError,
        setData: setBotsData,
    } = useFetch(fetchItems, {
        result: Array(5).fill(null).map(() => ({
            id: uuidv4()
        }))
    });

    async function handleNext(pageNo) {
        setCurrentPage(pageNo);
        setIsFetchingBots(true);
        try {
            const res = await fetchItems(pageNo, 20);
            setBotsData(res);
        }
        catch (err) {
            setBotsError({
                message: err.message || "Failed to fetch data!"
            });
        }
        setIsFetchingBots(false);
    }


    const tabContent = [
        {
            tabName: 'Contributions',
            content: <div className="w-full flex items-center flex-col">
                <LineBreak icon={faHandshakeAngle} text={'All Contributions'} classes="mt-2 mb-4" />

                <div className='grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-3  sm:gap-x-2 md:gap-x-5'>
                    {botsError?.message && <h4 className="text-center text-red-300 text-lg">Failed to load data!</h4>}
                    {!botsError && <>
                        {botsData?.result?.map((bot) => {
                            return <Card
                                key={bot.id}
                                {...bot}
                                isFetching={isFetchingBots}
                                classes='max-h-60'
                            />
                        }
                        )}

                    </>
                    }
                </div>
                <div className="w-full">
                    <Pagination currentPage={currentPage} totalPages={4} onPageChange={handleNext} />
                </div>
            </div>,
            checked: true,
        },
        {
            tabName: 'Reviews',
            content: <div className="w-full flex flex-col justify-center items-center">
                <AllReviews username={data?.username} reviewer={"jaybeedev"} />
            </div>,
            checked: false
        },
        {
            tabName: 'Logs',
            content: <div className="w-full flex flex-col justify-center items-center">
                <Logs />
            </div>,
            checked: false
        }
    ]
    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center overflow-hidden">
            <Intro title="JayBee" type="Profile" icon={faUser} />
            <div className="flex flex-col items-center md:flex-row md:items-start w-full my-4">
                <InfoCard item={{ isUser: true, ...data }} isFetching={isFetching} error={error} />
                <div className="flex flex-col items-center w-11/12 mt-4 md:w-3/4 md:mt-0">
                    <Tabs tabContent={tabContent} />
                </div>
            </div>
        </section>
    )
}

export default Profile