import axios from "axios"

const url: string = 'http://localhost:3344/api/v1'


export const SignUpAuthors = async(data:any)=>{
    try {
        return await axios.post(`${url}/make`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const SignInAuthors = async(data:any)=>{
    try {
        return await axios.post(`${url}/sign`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
       console.log(error)
    }
}

export const viewAuthors = async(data: any) =>{
    try {
       
        return await axios.get(`${url}/get`).then((res: any)=>{
            return res.data.data

        })

    } catch (error) {
        console.log(error)
    }
}
export const viewOneAuthors = async(data: any, authorID: any) =>{
    try {
       
        return await axios.get(`${url}/${authorID}/get-one`).then((res: any)=>{
            return res.data.data

        })

    } catch (error) {
        console.log(error)
    }
}
