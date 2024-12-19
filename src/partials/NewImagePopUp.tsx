import { Box, Dialog, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import useCreateImage from '../hooks/images/CreateImage'

const NewImagePopUp = ({ open, setOpen }: any) => {
    const { createImage } = useCreateImage()
    const [newImageParams, setNewImageParams] = useState<any>({})
    const handleParams = (e: any) => {
        const name = e.target.name
        setNewImageParams({ ...newImageParams, [name]: e.target.files[0] })
    }
    useEffect(() => {
        console.log(newImageParams)
    }, [newImageParams])

    const handleClose = () => {
        setOpen(false)
    }

    const handleQrCreate = () => {
        createImage(newImageParams)
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
                        <input type="file" onChange={(e) => handleParams(e)} name='image' placeholder='border' />
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

export default NewImagePopUp