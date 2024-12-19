import React, { createContext, useEffect, useState } from 'react'
import QrIndex from '../../hooks/qr/QrIndex'
import { Box, Grid } from '@mui/material'
import '../../styles/super/super.scss'
import Qrs from './qrs/Qrs'
import Final from './final/Final'
import Images from './images/Images'


export const CurrentImageContext = createContext({})
const Super = () => {
    const [currentImage, setCurrentImage] = useState({ qr: '', image: "" })

    return (
        <>
            <CurrentImageContext.Provider value={{ currentImage, setCurrentImage }}>
                <Box
                    style={{
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        border: "1px solid green",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Box className='main-cover'>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box p={3}>
                                    <Qrs />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box p={3}>
                                    <Final />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box p={3}>
                                    <Images />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </CurrentImageContext.Provider>
        </>
    )
}

export default Super