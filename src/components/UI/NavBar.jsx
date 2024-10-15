import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeController from './ThemeController'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/authStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faRobot, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { getMe } from '../../utils/http'
import { isLoggedIn } from '../../utils/auth'


const apiUrl = import.meta.env.VITE_API_URL;

const navigation = [
    { name: 'Home', to: '/', current: true },
    { name: 'Bots', to: '/bots', current: false },
    { name: 'Channels', to: '/channels', current: false },
    { name: 'Groups', to: '/groups', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const { pathname } = useLocation();
    const currentPath = pathname.split('/')[1]

    const dispatcher = useDispatch();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();
    let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    function handleLogout() {
        dispatcher(authActions.logout());
        localStorage.removeItem('token');
        setUser({});
    }


    useEffect(() => {
        const fetchUserDetails = async () => {
            if (isAuthenticated) {
                setLoading(true);
                try {
                    const userDetails = await getMe();
                    dispatcher(authActions.login(userDetails));
                    setUser(userDetails);
                } catch (error) {
                    console.error("Failed to fetch user details:", error);
                    // Fallback to default user object if API call fails
                    dispatcher(authActions.logout());
                }
                setLoading(false);
            }
            else {
                const isAuthed = await isLoggedIn();
                if (isAuthed) {
                    const userDetails = await getMe();
                    dispatcher(authActions.login(userDetails));
                    setUser(userDetails);
                }
            }
        };
        fetchUserDetails();
    }, [dispatcher, isAuthenticated]);



    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">

                                <Link to={'/'}>
                                    <img
                                        alt="TeleBuzzed Logo"
                                        src="/telebuzzed-logo.png"
                                        className="h-6 sm:h-8 lg:h-10 w-auto"
                                    />
                                </Link>

                            </div>
                            <div className="hidden sm:ml-1 md:ml-6  sm:block">
                                <div className="flex space-x-1 lg:space-x-4 items-center">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            aria-current={item.to.split('/')[1] == currentPath ? 'page' : undefined}
                                            className={classNames(
                                                item.to.split('/')[1] == currentPath ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </Link>

                                    ))}

                                    {/* <ul>
                                        <li><Link to="/add"><FontAwesomeIcon icon={faRobot} /> Add a bot</Link></li>
                                        <li><Link to="/add/channel"><FontAwesomeIcon icon={faBullhorn} /> Add a channel</Link></li>
                                        <li><Link to="/add/group"><FontAwesomeIcon icon={faUserGroup} /> Add a group</Link></li>
                                    </ul> */}
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className="px-1 py-1.5 md:px-2 lg:px-3 rounded-md bg-black text-white text-sm  min-w-12">+ Add</div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[2] w-52 p-2 shadow">
                                            <li><Link to="/add"><FontAwesomeIcon icon={faRobot} /> Add a bot</Link></li>
                                            <li><Link to="/add/channel"><FontAwesomeIcon icon={faBullhorn} /> Add a channel</Link></li>
                                            <li><Link to="/add/group"><FontAwesomeIcon icon={faUserGroup} /> Add a group</Link></li>
                                        </ul>
                                    </div>
                                    <div className='hidden md:block'>
                                        <ThemeController />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isAuthenticated ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="h-6 w-6" />
                            </button> */}


                            {/* Profile dropdown */}

                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        {loading ? ( // Show spinner while loading
                                            <div className="animate-spin h-8 w-8 rounded-full border-4 border-white border-t-transparent"></div>
                                        ) : (
                                            user?.result?.avatar ? ( // Only render image if avatar exists
                                                <img
                                                    alt="User Avatar"
                                                    src={`${apiUrl}/image/${user?.result?.avatar}`}
                                                    className="h-8 w-8 rounded-full"
                                                />
                                            ) : (
                                                <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center">
                                                    {/* You can add an icon or initials here for the user avatar */}
                                                    <span className="text-white">?</span>
                                                </div>
                                            )
                                        )}
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Your Profile
                                        </Link>
                                    </MenuItem>
                                    {user && user?.result?.role === 'admin' && <>
                                        <MenuItem>
                                            <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                Dashboard
                                            </Link>
                                        </MenuItem>
                                    </>}
                                    <MenuItem>
                                        <Link onClick={handleLogout} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Sign out
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div> : <Link to='/auth/login' className='font-bold text-base-content px-2.5 py-1.5 bg-base-300 rounded-lg ml-4'>Login</Link>}
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (

                            <DisclosureButton
                                key={item.name}
                                as={Link}   // Use Link instead of 'a'
                                to={item.to}   // 'to' instead of 'href' for Link
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}

                        {/* <Link
                            key={item.name}
                            to={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >

                        </Link> */}
                    </div>
                </DisclosurePanel>
            </Disclosure>
            <Outlet />
            <Footer />
        </>
    )
}