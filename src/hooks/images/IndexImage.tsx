import React, { useState } from 'react'
import { Instance } from '../../axiosInstance'


const IndexImage = () => {
    const [result,setResult] = useState([])
    const getImages = async() => {
        try {

            await Instance.get("/qrs/user_images")
                .then((res : any)=> {
                    setResult(res.data)
                })
        }
        catch(err) {
            throw err
        }
    }
    return {result,getImages}
}

export default IndexImage