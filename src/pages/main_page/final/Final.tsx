import React, { useContext, useEffect, useState } from 'react'
import { CurrentImageContext } from '../Super'
import { Instance } from '../../../axiosInstance'
import '../../../styles/super/final.scss'
import { Icon, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CornerIcon from '../../../assets/corner-top-right-svgrepo-com.svg'
import CheckIcon from '@mui/icons-material/Check';
import CreateConcat from '../../../hooks/concat/CreateConcat'
import FInalPop from '../../../partials/FInalPop'
import { UseShowFinal } from '../../../hooks/images/UseShowFinal'

type Props = {}

const Final = (props: Props) => {
  const { currentImage, setCurrentImage } = useContext(CurrentImageContext)
  const [finalOpen, setFinalOpen] = useState<boolean>(false)
  const { showFinal, result } = UseShowFinal()
  const { concatImages } = CreateConcat()

  const positions = [
    { id: 1, name: "top-left", trans: "ზედა-მარცხენა" },
    { id: 2, name: "top-right", trans: "ზედა-მარჯვენა" },
    { id: 4, name: "bottom-left", trans: "ქვედა-მარცხენა" },
    { id: 3, name: "bottom-right", trans: "ქვედა-მარჯვენა" },
  ]
  const [currentPos, setCurrentPos] = useState(positions[0])

  const handlePosition = (e: any) => {
    setCurrentPos(e)
    setCurrentImage({ ...currentImage, position: e.name })
  }
  const handleSave = async () => {
    await concatImages(currentImage)
    await showFinal()
    setFinalOpen(true)
  }

  const imageUrl = currentImage?.image ? Instance.defaults.baseURL + currentImage.image.image_path : ''


  return (
    <>
      <FInalPop open={finalOpen} setOpen={setFinalOpen} result={result} />
      {currentImage.image ? (
        <>
          <div className="final-cover">
            <div className={`qr ${currentPos.name}`}>
              <img src={Instance.defaults.baseURL + currentImage.qr.path + '.png'} alt="QR code" />
            </div>
            <img src={imageUrl} alt="Selected" />
          </div>
                  </>


      ) : (
        <h3>აირჩიეთ ფოტო...</h3>
      )}

      <Stack direction={'row'} className='positions' gap={'10px'}>
        {positions.map((item) => (
          <button
            className={`${currentPos.id == item.id ? 'selected-button' : null}`}
            key={item.id} onClick={() => handlePosition(item)}>
            <img
              style={{
                transform: `rotateZ(${item.id == 1 ? '-90' : item.id == 2 ? '0' : item.id == 3 ? '90' : '180'}deg)`
              }}
              width={'30px'}
              src={CornerIcon} />
          </button>
        ))}
      </Stack>
      <Stack direction={'row'} gap={'10px'}>
        {/* <button className='download-button'><p>გადმოწერა</p> <FileDownloadIcon /></button> */}
        <button className='download-button' onClick={handleSave}><p>შენახვა</p> <CheckIcon /></button>
      </Stack>
    </>
  )
}

export default Final
