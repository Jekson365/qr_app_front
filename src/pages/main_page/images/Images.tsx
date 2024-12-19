import { useContext, useEffect, useState } from "react"
import IndexImage from "../../../hooks/images/IndexImage"
import { Box, Grid } from "@mui/material"
import ImageItem from "./ImageItem"
import '../../../styles/super/image.scss'
import { CurrentImageContext } from "../Super"
import AddMore from "../../../partials/AddMore"
import NewImagePopUp from "../../../partials/NewImagePopUp"


const Images = () => {
  const { result, getImages } = IndexImage()
  const [newImage, setNewImage] = useState(false)

  useEffect(() => {
    getImages()
  }, [])
  return (
    <>
      <NewImagePopUp open={newImage} setOpen={setNewImage} />
      <Grid container spacing={2}>

        {result && result.map((item, index: Number) => {
          return (
            <>
              <Grid item xs={4}>
                <ImageItem item={item} />
              </Grid>
            </>
          )
        })}
        <Grid item xs={4} onClick={() => setNewImage(true)}>
          <AddMore />
        </Grid>
      </Grid>
    </>
  )
}

export default Images