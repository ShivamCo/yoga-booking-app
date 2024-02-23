import axios from "axios"


export const getData = async (filterData) =>{

    try{
        const classData = await axios.post("http://localhost:5000/api/get-classes", filterData)
        return(classData)
        // console.log(
        //     {
        //         "image": data.images[0].file,
        //         "streamed_count": data.streamed_count,
        //         "title": data.title,
        //         "level": data.level,
        //         "teacher": data.teacher.full_name,
        //         "price": data.period_currency_fee.fee,

        //     }
        // )
    } catch (error){
        console.log(error)
    }
    
        
        



}
