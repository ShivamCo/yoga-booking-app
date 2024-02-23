import { useState, useEffect } from "react";
import YogaCard from "../components/YogaCard";
import axios from "axios";

const HomePage = () => {

    const [classData, setClassData] = useState()

    const getData = async () => {

        try {
            const classData = await axios.post("http://localhost:5000/api/get-classes", ({ 'Level': 'All', 'Price': 'All' }))
            setClassData(classData.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()


    }, [])


    return (
        <div className="mx-auto max-w-screen-2xl ">
            <div className="relative h-64 rounded-b-lg bg-cover overflow-hidden bg-center bg-no-repeat shadow-lg">

                <img src="https://wallpapercave.com/wp/wp3157183.jpg" className="object-cover sm:-mt-64 " />
            </div>



            <main className="grid grid-cols-2  p-4 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 lg:grid-cols-4 mt-2 sm:px-8 lg:mt-16 lg:gap-x-4 lg:px-2">

                {
                    classData ?



                        <>
                            {
                                classData?.map((i) => <YogaCard
                                    key={i._id}
                                    image={i.images[0].file}
                                    streamed_count={i.streamed_count}
                                    title={i.title}
                                    level={i.level}
                                    teacher={i.teacher.full_name}
                                    price={i.period_currency_fee.fee}
                                    classID={i.classID}

                                />)
                            }

                        </>





                        :

                        <div className=" w-full h-full" >
                            <div className=" flex  justify-center items-centercontent-center h-full w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-red-300 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>
                                <span className=" font-light text-2xl text-red-400" >No Result Found</span>
                            </div>
                        </div>
                }

            </main>

            <div className="m-2 " >

            </div>
        </div>
    )

}

export default HomePage;