import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const RootElement = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootElement