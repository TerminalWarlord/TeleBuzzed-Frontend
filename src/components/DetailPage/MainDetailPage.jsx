

import Intro from "./Intro"
import InfoCard from "./LeftSidebar/InfoCard"
import SimilarItems from "./SimilarItems"
import MainContent from "./MainContent"
// import AllReviews from "./AllReviews"


const MainDetailPage = () => {
    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
            <Intro />
            <div className="flex flex-col items-center md:flex-row md:items-start w-full my-4">
                <InfoCard />
                <div className="flex flex-col items-center w-11/12 mt-4 md:w-3/4 md:mt-0">
                    <MainContent />
                    {/* <AllReviews /> */}
                </div>
            </div>
            <SimilarItems />
        </section>
    )
}

export default MainDetailPage