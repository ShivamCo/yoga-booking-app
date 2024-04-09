import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../features/authSlice.js';
import axios from 'axios';
import EnrolledCards from '../components/EnrolledCard.jsx';

const ProfilePage = () => {

    const [userData, setUsersData] = useState()
    const [yogaClassesData, setYogaClassesData] = useState([])
    const [effectCount, setEffectCount] = useState(0);
    const userID = localStorage.getItem('userID')


    
    useEffect(() => {



        axios.post("https://yoga-booking-app-p551.onrender.com/api/get-user", ({ 'userID': userID }))
            .then(response => {

                setUsersData(response.data);
                const necessaryData = response;
                

                axios.post("https://yoga-booking-app-p551.onrender.com/api/get-enrolled-classes", ({ 'classes': necessaryData.data.classes }))
                    .then(response => {

                        setYogaClassesData(response.data);
                        if (effectCount < 3) {
                            setEffectCount(count => count + 1);
                        }

                    })
                    .catch(error => console.error('Error fetching second API:', error));
            })
            .catch(error => console.error('Error fetching first API:', error));
        
    }, [effectCount])

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    return (<>
        {!isLoggedIn ?
            <div className='h-screen' >
                <div className='flex flex-col  text-center ' >
                    You are not Logged In Please Login First
                    <a href='/login' className=" border m-2 py-2 px-6 drop-shadow-md text-white font-semibold rounded-lg bg-gradient-to-r from-green-400 to-green-500 " >
                        Login
                    </a>
                </div>
            </div>
            : <div className="bg-gray-10 h-screen ">
                <div className="container h-full bg-  mx-auto py-8">
                    <div className=' border bg-themeBlack shadow-xl rounded-lg mt-4 flex justify-center ' >
                        <h2 className=' m-2 text-2xl font-medium text-themeGreen ' >
                            {userData?.name}
                        </h2>
                    </div>
                    <div className='  ' >
                        <h2 className=' m-2 text-2xl font-medium text-slate-500 ' >
                            Enrolled Classes
                        </h2>
                    </div>
                    {yogaClassesData ?
                        <main className="grid grid-cols-2  p-4 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 lg:grid-cols-4 mt-2 sm:px-8 lg:mt-16 lg:gap-x-4 lg:px-2">

                            {yogaClassesData?.map((i) =>
                                <EnrolledCards
                                key={i._id}
                                image={i.images[0].file}
                                streamed_count={i.streamed_count}
                                title={i.title}
                                level={i.level}
                                teacher={i.teacher.full_name}
                                price={i.period_currency_fee.fee}
                                classID={i.classID}
                                />
                            )}



                            {/* {
                            yogaClassesData?.map((i) =>
                                <EnrolledCards />
                            )
                        } */}

                        </main> :
                        <></>}

                </div>
            </div>

        }
    </>)

}

export default ProfilePage