import axios from "axios";
import NavigationBar from "../components/Navigation";
import { useEffect, useState } from "react";
import { getData } from "../components/getData.jsx";

import YogaCard from "../components/YogaCard";

const ExplorePage = () => {

    const [filterData, setFilterData] = useState({
        "Level": "All",
        "Price": "All"
    });

    
    const [classData, setClassData] = useState()

    const getData = async () => {

        try {
            const classData = await axios.post("http://localhost:5000/api/get-classes", filterData)
            setClassData(classData.data)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChanges = (event) => {
        setFilterData({ ...filterData, [event.target.name]: event.target.value })
    }




    const [showFilter, SetShowFilter] = useState(false)

    useEffect(() => {
        getData()
        

    }, [filterData])


    return (

        <div className="mx-auto   max-w-screen-2xl ">
            <main className="grid w-full h-screen z-10 gap-y-10 px-2 pb-20 mt-2 ">
                {/* <button onClick={() => SetShowFilter(!showFilter)} type="button" className=" flex shadow-md w-fit h-fit p-2 px-4 rounded-xl bg-green-500 justify-center content-center mb-2 font-medium text-white " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                    <span className="  " >
                        &nbsp;Filter
                    </span>

                </button> */}

                <div className={`fixed shadow-lg rounded-lg border flex over  left-0 sm:h-2/6 mt-2 h-2/6  transition-transform  ${showFilter ? 'translate-x-0' : '-translate-x-full'}`} >

                    <div className="flex content-center w-fit px-3 items-start py-4 overflow-y-auto bg-gradient-to-r from-amber-100 to-orange-200 dark:bg-gray-800">

                        <div className=" " >
                            {showFilter ? <button onClick={() => SetShowFilter(!showFilter)} type="button" className=" flex absolute -right-16 shadow-md p-2 px-2 rounded-r-lg rounded-l-sm bg-gradient-to-r from-orange-400 to-red-500 justify-center content-center mb-2 font-medium text-white " >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                                <span className="  " >
                                    &nbsp;Close
                                </span>

                            </button>
                                :
                                <button onClick={() => SetShowFilter(!showFilter)} type="button" className=" flex absolute -right-20 shadow-md p-2 px-4 rounded-lg bg-gradient-to-r from-lime-400 to-emerald-500 justify-center content-center mb-2 font-medium text-white " >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                    <span className="  " >
                                        &nbsp;Filter
                                    </span>

                                </button>}
                            <h2 className=" text-3xl font-semibold underline underline-offset-4 mb-4 text-teal-900 text-center " >Filters</h2>
                            {/* Level */}

                            <form className=" w-48 mx-auto pr-4 ">

                                <label className="block mt-2 mb-2 text-xl pl-2 font-medium text-slate-700 dark:text-white">Level</label>
                                <select name="Level" onChange={handleChanges} className="block w-full mx-2 p-2  text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="All">Select</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>

                                </select>

                                <label className="block mt-2 mb-2 text-xl pl-2 font-medium text-slate-700 dark:text-white">Price</label>
                                <select name="Price" onChange={handleChanges} className="block w-full my-2 mx-2 p-2  text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="All">Select</option>
                                    <option value="1000 to 2000">1000 to 2000</option>
                                    <option value="2000 to 3000">2000 to 3000</option>
                                    <option value="0 to 1000">&lt;1000</option>
                                    <option value="3000 to 10000">&gt;3000</option>
                                </select>
                            </form>




                        </div>

                    </div>
                </div>

                {
                    classData ?
                        <div className="grid ml-auto grid-cols-2 gap-x-4 gap-y-10 px-2 pb-20 sm:grid-cols-3 mt-2 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">


                            <>
                                {
                                    classData?.map((i) => <YogaCard
                                        key={i.id}
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




                        </div>
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


        </div>
    )

}

export default ExplorePage