import { useState } from "react"
import { Logo } from "../assets"

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../features/authSlice.js';


const NavigationBar = () => {

    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logoutUser());
    };

    return (
        <nav className="bg-white  z-40  drop-shadow-md border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex   items-center justify-between mx-auto p-4">
                <a href="/" className=" space-x-3 rtl:space-x-reverse">

                    <img src={Logo} className="h-12" alt="yoga" />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                </a>
                <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="navbar-default" type="button" className="inline-flex relative  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={` justify-center content-center  ${showMenu ? 'flex flex-col items-end ' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    
                    <a href="/explore" >
                        <button className=" border m-2 py-2 px-6  drop-shadow-md text-white font-semibold rounded-lg bg-gradient-to-r from-orange-300 to-orange-400 " >
                            Explore
                        </button>
                    </a>
                    <a href="/login" >

                        {isLoggedIn

                            ?
                            <>


                                <button onClick={handleLogout} className=" border m-2 py-2 px-6 drop-shadow-md text-white font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-red-600 " >
                                    Logout
                                </button>
                            </>
                            :
                            <button className=" border m-2 py-2 px-6 drop-shadow-md text-white font-semibold rounded-lg bg-gradient-to-r from-green-400 to-green-500 " >
                                Login
                            </button>
                        }


                    </a>
                    {isLoggedIn
                        ?
                        
                        <a className=" h-full relative " >
                            <button onClick={ ()=>{navigate("/user-profile")} } className=" items-center content-center " >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </a>
                        
                        :
                        <a></a>
                        
                    }

                </div>
            </div>
        </nav>
    )

}

export default NavigationBar