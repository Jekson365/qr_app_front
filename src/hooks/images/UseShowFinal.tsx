import { useState } from "react"
import { Instance } from "../../axiosInstance"

export const UseShowFinal = () => {
    const [result, setResult] = useState<any>({})
    const showFinal = async () => {
        try {

            await Instance.get('/qrs/show_current_final_image')
                .then((res) => {
                    setResult(res.data)
                })
        }
        catch (err) {
            throw err
        }
    }
    return { showFinal, result }
}