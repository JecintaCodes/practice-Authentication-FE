import axios from "axios"

const url: string = 'http://localhost:3344/api/v1/authorRouter'

export const beFriend = async(friendID: string, userID: string) =>{
    try {
        return await axios.post(`${url}/${friendID}/${userID}`).then((res: any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}