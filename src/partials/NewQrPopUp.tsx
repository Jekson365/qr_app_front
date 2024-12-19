import { Box, Dialog, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useCreateQr from '../hooks/integration/CreateQr'

type Props = {}

const NewQrPopUp = ({ open, setOpen }: any) => {
    const { createQr } = useCreateQr()
    const [newQrParams, setNewQrParams] = useState<any>({})
    const handleParams = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setNewQrParams({ ...newQrParams, [name]: value })
    }
    useEffect(() => {
        console.log(newQrParams)
    }, [newQrParams])
    const handleClose = () => {
        setOpen(false)
    }

    const handleQrCreate = () => {
        createQr(newQrParams)
    }
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <Box p={2}>
                    <Stack
                        direction={'column'}
                        alignItems={'flex-start'}
                        gap={'20px'}
                    >
                        <input type="text" onChange={(e) => handleParams(e)} name='url' placeholder='url' />
                        {/* <input type="number"
                            min={'1'}
                            max={'40'}
                            onChange={(e) => handleParams(e)} name='version' placeholder='version' />
                        <input 
                        min={4}
                        type="number" onChange={(e) => handleParams(e)} name='box_size' placeholder='box size' />
                        <input type="text" onChange={(e) => handleParams(e)} name='border' placeholder='border' /> */}
                        <Stack direction={'row'} gap={'10px'}>
                            <button className='qr-button' onClick={handleQrCreate}>შენახვა</button>
                            <button className='qr-button close'>დახურვა</button>
                        </Stack>
                    </Stack>
                </Box>
            </Dialog>
        </>
    )
}

export default NewQrPopUp