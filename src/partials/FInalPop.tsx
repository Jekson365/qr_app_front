import { Box, Dialog } from "@mui/material"
import { useEffect } from "react"
import { Instance } from "../axiosInstance"
import { Link } from "react-router-dom"
import FileDownloadIcon from '@mui/icons-material/FileDownload';


function FInalPop({ open, setOpen, result }: any) {
    const handleClose = () => {
        setOpen(false)
    }

    const handleDownload = async () => {
        try {
            // Construct the image URL
            const imageUrl = Instance.defaults.baseURL + result.path;

            // Fetch the image as a Blob
            const response = await Instance.get(imageUrl, {
                responseType: 'blob'
            });

            // Create a URL for the Blob
            const blobUrl = URL.createObjectURL(new Blob([response.data]));

            // Create a temporary anchor element for download
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "downloaded-image.jpg"; // Specify the filename
            document.body.appendChild(link);
            link.click();

            // Clean up by revoking the Blob URL and removing the anchor element
            URL.revokeObjectURL(blobUrl);
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading the image", error);
        }
    };


    useEffect(() => {
        console.log(result)
    }, [result])
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <Box p={2}>
                    <Box
                        style={{
                            width: "500px",
                            height: "500px",
                            overflow: "hidden"
                        }}
                    >
                        <img
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: "cover" }}
                            src={Instance.defaults.baseURL + result.path} />
                    </Box>
                    <button
                        onClick={handleDownload}
                        className='download-button'><p>გადმოწერა</p> <FileDownloadIcon /></button>
                </Box>
            </Dialog>
        </>
    )
}

export default FInalPop