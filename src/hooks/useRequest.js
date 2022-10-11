import { useState } from "react";


export const useRequest = (callback) => {
    const [loading,setLoading] =useState (false)
    const [error,setError]= useState(false)

    const request= async () => {
        try{
            setLoading(true)
            await callback()
        }
        catch (e){
            setError(e.message)
            console.log(error)
        }
        finally {
            setLoading(false)
        }   
    }    

    return [request,loading,error,setError]
    
    
    
}