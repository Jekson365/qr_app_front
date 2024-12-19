import axios from 'axios'
import React, { useState } from 'react'
import { Instance } from '../../axiosInstance'


function QrIndex() {
    const [qrIndex, setQrIndex] = useState([])
    const getQrIndex = async () => {
        await Instance.get("/qrs/qrcodes")
            .then((res: any) => {
                setQrIndex(res.data)
            })
    }
    return { qrIndex, getQrIndex }
}

export default QrIndex