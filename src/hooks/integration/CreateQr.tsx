import React from 'react'
import { Instance, PyInstance } from '../../axiosInstance'

function useCreateQr() {
    const createQr = async (payload : any) => {
        try {   
            await Instance.post("/qrs/qrcodes",payload)
                .then((res)=> {
                    if (res.status == 200) {
                        window.location.reload()
                    } 
                })
        }
        catch(err) {
            throw err
        }
    } 
    return { createQr }
}

export default useCreateQr