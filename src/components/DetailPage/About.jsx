import { faThumbtack } from "@fortawesome/free-solid-svg-icons"
import LineBreak from "../UI/LineBreak"

const About = ({ description, isFetching = false, error = null }) => {
    return (
        <main className="w-full flex items-center flex-col min-h-[10rem]">
            <LineBreak icon={faThumbtack} text={'About'} classes="my-4 md:mt-3 mb-5" />
            {error && <h4 className="text-center text-red-400 my-4">Failed to fetch!</h4>}
            {!error && <>
                {isFetching
                    ?
                    <div className="skeleton w-11/12 h-20 my-4"></div>
                    :
                    <p className="text-left w-11/12 text-sm md:text-base">{description}</p>}
            </>}
        </main>
    )
}

export default About