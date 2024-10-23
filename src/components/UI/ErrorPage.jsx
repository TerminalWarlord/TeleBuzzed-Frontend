import { faFaceFrown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBar from './NavBar';
import Footer from "./Footer";

const ErrorPage = () => {
    return (
        <>
            <NavBar />
            <div className="container mx-auto p-16 bg-base-200-lg rounded-lg my-8 border-2 border-base-300 shadow-sm">
                <header className="mb-4">
                    <div className={`w-full h-full flex flex-col items-center justify-center space-y-4 my-4`}>
                        <FontAwesomeIcon icon={faFaceFrown} className="text-5xl" />
                        <h3 className="text-6xl font-bold">404!!!</h3>
                        <h2 className="text-lg">Nothing found!</h2>
                    </div>
                </header>
            </div>
            <Footer />
        </>
    )
}

export default ErrorPage