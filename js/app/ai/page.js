'use client'

import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import './style.css'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ImageFileUpload from '../(components)/FileUpload'
import { ChatComponent } from './ChatComponent'

export default function AIContainer() {
  const [isInputModalOpen, toggleInputModal] = useState(false)
  const [selectedDataSource, setDataSource] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <Grid item xs={10}>
      <Modal
        open={isInputModalOpen}
        onClose={() => toggleInputModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div className="modal_header">
            <h3>Select Resume files</h3>
          </div>
          <div className="modal_content">
            <FormControl fullWidth>
              <Select
                value={selectedDataSource}
                onChange={(event) => setDataSource(event.target.value)}
                displayEmpty
              >
                <MenuItem value={null} disabled>
                  Choose a zip file
                </MenuItem>
                <MenuItem value={1}>Last uploaded file</MenuItem>
                <MenuItem value={2}>New</MenuItem>
              </Select>
            </FormControl>
            {selectedDataSource === 2 && (
              <ImageFileUpload
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
              />
            )}
          </div>
          <div className="modal_footer">
            <Button
              variant="contained"
              size="medium"
              onClick={() => toggleInputModal(false)}
            >
              Ok
            </Button>
          </div>
        </Box>
      </Modal>
      <section className="data_source">
        <Button
          variant="contained"
          size="medium"
          className="input_button"
          onClick={() => toggleInputModal(true)}
        >
          Choose Source
        </Button>
        {selectedFile && <Typography>{selectedFile.name}</Typography>}
      </section>
      {selectedFile && (
        <section className="chatbot_container">
          <ChatComponent />
        </section>
      )}
    </Grid>
  )
}
