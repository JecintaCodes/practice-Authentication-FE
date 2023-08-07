import axios from "axios"

const url: string = 'http://localhost:3400/api/v1/'

export const SignUpUser = async(data: any) =>{
    try {
 const config: {} = {
    "content-type": "multipart/form-data"
 } 
 return await axios.post(`${url}/create-user`, data, config).then((res: any)=>{

    return res.data.data
 }) 

    } catch (error) {
      console.log(error)  
    }
}

export const SignInUser = async(data: any) =>{
    try {

        return await axios.post(`${url}/sign-in`, data).then((res: any)=>{
            console.log(res)
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const getOneUser = async(userID: string)=>{
    try {
        return await axios.get(`${url}/${userID}/find-one`).then((res: any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)

    }
}

export const getAllUsers = async()=>{
    try {
        
        return await axios.get(`${url}/find`).then((res: any)=>{
    return res.data.data
        })

    } catch (error) {
      console.log(error)  
    }
}

