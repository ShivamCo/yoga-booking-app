import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const RegisterPage = () => {

    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState();

    const onChangeHandler = (event) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
    }


    const submitHandler = async (event) => {
        event.preventDefault()

        try{
                   
            const userData = await axios.post('https://yoga-booking-app-p551.onrender.com/api/register', userDetails)
            localStorage.setItem('user', (userData.data.token))
            localStorage.setItem('userID', (userData.data.userID) )
            navigate(-1)
            
        } catch(error){
           alert(error.response.data.message)
        }



    }

    const [show, setShow] = useState(false)


    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">

            <div className="w-3/4 h-screen hidden  lg:block">
                <img src="https://th.bing.com/th/id/R.77d4671851c15624d20ee74c82df8cfb?rik=yokPNVeGrHeeLQ&riu=http%3a%2f%2fwww.wallpapersmania.com%2fad%2fsports%2fyoga%2f1440x900%2fyoga3_8ma5ra.jpg&ehk=bZp9H0dfCXtRy9ZGIqTpWaelXy0aAI3wyaozjezT8Uw%3d&risl=&pid=ImgRaw&r=0" alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>

            <div className="lg:p-36 md:p-52  sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={submitHandler} >

                    <div className="mb-4">
                        <label className="block text-gray-600">Name</label>
                        <input required onChange={onChangeHandler} type="text" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600">Email</label>
                        <input required onChange={onChangeHandler} type="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600">Password</label>
                        <div className="relative">
                            <input  onChange={onChangeHandler} type={show ? "text" : "password"} name="password" required autoComplete="current-password" className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]' />

                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <button onClick={() => setShow(!show)} type="button" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">

                                    {
                                        show ?

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>

                                            :

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                    }







                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path></svg>                         */}
                                </button>
                            </div>
                        </div>
                        {/* <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" /> */}
                    </div>




                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>

                <div className="mt-6 text-center">
                    <span className=" text-black " >Already have an account?  </span>
                    <a href="/login" className=" text-blue-600 hover:underline">Login</a>
                </div>
            </div>
        </div>
    )

}

export default RegisterPage