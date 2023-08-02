import axios from "axios"

const url: string = 'http://localhost:3344/api/v1/authorRouter'

export const viewAuthors = async(data: any) =>{
    try {
       
        return await axios.get(`${url}/view-Authors`).then((res: any)=>{
            return res.data.data

        })

    } catch (error) {
        console.log(error)
    }
}

