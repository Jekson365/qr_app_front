import { useEffect, useState } from "react"
import QrIndex from "../../../hooks/qr/QrIndex"
import QrItem from "./QrItem"
import { Grid } from "@mui/material"
import '../../../styles/super/qrs.scss'
import AddMore from "../../../partials/AddMore"
import NewQrPopUp from "../../../partials/NewQrPopUp"

const Qrs = () => {
    const [newQr, setNewQr] = useState(false)
    const { qrIndex, getQrIndex } = QrIndex()
    useEffect(() => {
        console.log(qrIndex.length)
    }, [])
    useEffect(() => {
        getQrIndex()
    }, [])
    return (
        <>
            <NewQrPopUp open={newQr} setOpen={setNewQr} />
            <Grid container spacing={1}>
                {qrIndex && qrIndex.map((item: any, index: Number) => {
                    return (
                        <>
                            <Grid item xs={4}>
                                <QrItem item={item} />
                            </Grid>
                        </>
                    )
                })}
                <Grid item xs={4} onClick={() => setNewQr(true)}>
                    <AddMore />
                </Grid>
            </Grid>
        </>
    )
}

export default Qrs  