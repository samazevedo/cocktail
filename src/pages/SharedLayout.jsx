import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'

const SharedLayout = () => {
    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    )
}

export default SharedLayout
