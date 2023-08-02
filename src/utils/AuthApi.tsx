import axios from "axios"

const url: string = 'http://localhost:3344/api/v1/authorRouter'

export const SignUpAuthor = async(data: any) =>{
    try {
 const config: {} = {
    "content-type": "multipart/form-data"
 } 
 return await axios.post(`${url}/sign-up`, data, config).then((res: any)=>{

    return res.data.data
 }) 

    } catch (error) {
      console.log(error)  
    }
}

export const SignInAuthor = async(data: any) =>{
    try {

        return await axios.post(`${url}/sign-in`, data).then((res: any)=>{
            console.log(res)
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const getOneAuthor = async(userID: string)=>{
    try {
        return await axios.get(`${url}/${userID}/view-one`).then((res: any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)

    }
}

export const getAllAuthors = async()=>{
    try {
        
return await axios.get(`${url}/view-authors`).then((res: any)=>{
    return res.data.data
})

    } catch (error) {
      console.log(error)  
    }
}