import axios from "axios"

const url: string = 'http://localhost:3344/api/v1/authorRouter'

export const createArticle = async(data:any,  userID: any)=>{
    try {
        const config: {} = {
            "content-type": "multipart/form-data"
                }
                
                return await axios.post(`${url}/${userID}/create-article`, data, config).then((res:any)=>{
                    return res.data.data
                })
    } catch (error) {
        console.log(error)
    }
}

