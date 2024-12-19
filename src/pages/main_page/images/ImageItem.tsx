import React, { useContext, useEffect } from 'react'
import { Instance } from '../../../axiosInstance'
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { Stack } from '@mui/material';
import { CurrentImageContext } from '../Super';

const ImageItem = ({ item }: any) => {
    const { currentImage, setCurrentImage } = useContext(CurrentImageContext)

    return (
        <div className='image-item'>
            <div className="image-cover" onClick={() => setCurrentImage({ ...currentImage, image: item })}>
                <img src={Instance.defaults.baseURL + `/${item.image_path}`} />
            </div>
            <div className="content">
                <p>{item.url}</p>
            </div>
            <div className='actions'>
                <Stack direction={'row'}>
                    <div className="delete">
                        <DeleteIcon className='icon' />
                    </div>
                    <div className="download-icon">
                        <DownloadIcon className='icon' />
                    </div>
                </Stack>
            </div>
        </div>
    )
}

export default ImageItem