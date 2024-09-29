

import About from "./About"
import AllReviews from "./AllReviews"
import Intro from "./Intro"
import InfoCard from "./LeftSidebar/InfoCard"
import NewReview from "./NewReview"


const MainDetailPage = () => {
    return (
        <section className="mx-3 md:mx-20 my-5">
            <Intro />
            <div className="flex flex-col items-center md:flex-row md:items-start w-full">
                <InfoCard />
                <div className="flex flex-col items-center w-11/12 mt-4 md:w-3/4 md:mt-0">
                    <About />
                    <NewReview />
                    <AllReviews />
                </div>
            </div>
        </section>
    )
}

export default MainDetailPage