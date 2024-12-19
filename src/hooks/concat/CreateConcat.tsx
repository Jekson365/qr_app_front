import React from 'react'
import { Instance } from '../../axiosInstance'


const CreateConcat = () => {
    const concatImages = async (payload: any) => {
        try {
            console.log(payload)
            await Instance.post("/qrs/concat_images", payload)
        }
        catch (err) {
            throw err
        }
    }
    return { concatImages }
}

export default CreateConcat