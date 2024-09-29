import { faThumbtack } from "@fortawesome/free-solid-svg-icons"
import LineBreak from "../UI/LineBreak"

const About = () => {
    return (
        <main className="w-full flex items-center flex-col min-h-[10rem]">
            <LineBreak icon={faThumbtack} text={'About'} classes="my-4 md:my-3" />
            <p className="text-left w-11/12">Skeddy is a simple yet powerful reminder tool that can help you create and manage your reminders.</p>
        </main>
    )
}

export default About