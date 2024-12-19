import { Instance, PyInstance } from '../../axiosInstance'


const useCreateImage = () => {
    const createImage = async (payload: any) => {
        await Instance.post("/qrs/upload_image", payload,
            { headers: { 'Content-Type': "multipart/form-data" } })
            .then((res) => {
                if (res.status == 200) {
                    window.location.reload()
                }
                console.log(res.data)
            })
    }
    return { createImage }
}

export default useCreateImage