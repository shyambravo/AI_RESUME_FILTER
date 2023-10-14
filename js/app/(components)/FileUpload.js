import React from 'react'
import FileUpload from 'react-mui-fileuploader'

export default function FileUploadComponent() {
  const handleFileUploadError = (error) => {
    // Do something...
  }

  const handleFilesChange = (files) => {
    // Do something...
    console.log(files)
  }

  return (
    <FileUpload
      getBase64={false}
      multiFile={true}
      disabled={false}
      title=""
      header="Drag and drop your files here"
      leftLabel="or"
      rightLabel="to select files"
      buttonLabel="click here"
      buttonRemoveLabel="Remove all"
      options={{
        multiFile: true,
        maxFileSize: 50,
        maxUploadFiles: 0,
        filesContainerHeight: 357,
        maxFilesContainerHeight: 357,
        allowedExtensions: ['jpg', 'jpeg'],
      }}
      errorSizeMessage={'fill it or remove it to use the default error message'}
      //allowedExtensions={["jpg", "jpeg"]}
      onFilesChange={handleFilesChange}
      onError={handleFileUploadError}
      //imageSrc={'path/to/custom/image'}
      onContextReady={(context) => {}}
      PlaceholderGridProps={{ md: 6 }}
      LabelsGridProps={{ md: 6 }}
      placeholderImageDimension={{
        xs: { width: 128, height: 128 },
        sm: { width: 128, height: 128 },
        md: { width: 164, height: 164 },
        lg: { width: 256, height: 256 },
      }}
    />
  )
}
