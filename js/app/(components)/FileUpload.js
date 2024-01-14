import { useState } from 'react'
import { Button, Typography, Box } from '@mui/material'

const MAX_FILE_SIZE_MB = 100
const ALLOWED_FILE_TYPES = [
  'application/zip',
  'application/x-zip',
  'application/x-zip-compressed',
  'application/octet-stream',
  'application/x-compress',
  'application/x-compressed',
]

const ImageFileUpload = (props) => {
  const { selectedFile, setSelectedFile } = props

  const [error, setError] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    // File type validation
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setError('Invalid file type. Please upload a zip file.')
      return
    }

    // File size validation
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(
        `File size exceeds ${MAX_FILE_SIZE_MB} MB. Please choose a smaller file.`
      )
      return
    }

    setSelectedFile(file)
    setError(null)
  }

  return (
    <Box p={3} border="1px dashed #ccc" borderRadius={8} textAlign="center">
      <input
        type="file"
        accept=".zip"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="image-file-input"
      />
      <label htmlFor="image-file-input">
        <Button variant="outlined" component="span">
          Select File
        </Button>
      </label>
      {selectedFile && (
        <div>
          <Typography variant="subtitle1" mt={2}>
            Selected Image: {selectedFile.name}
          </Typography>
        </div>
      )}
      {error && (
        <Typography variant="body2" color="error" mt={2}>
          {error}
        </Typography>
      )}
    </Box>
  )
}

export default ImageFileUpload
