import { setUser } from "../services/user.services.js"

export const postUser = async(req,res)=>{
    const postRes = await setUser()
    console.log(postRes)
    res.send(postRes)    
}