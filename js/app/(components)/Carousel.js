'use client'

import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import CircularProgress from '@mui/material/CircularProgress'

function Item(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{props.item.description}</h3>
      <img
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'cover',
        }}
        src={props.item.src}
        alt="AI resume filter"
        loading="lazy"
      />
    </div>
  )
}

const CarouselComponent = () => {
  const [isLoading, setLoader] = useState(true)

  var items = [
    {
      src: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Easy to filter resumes',
    },
    {
      src: 'https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Upload custom job description',
    },
  ]

  return (
    <>
      <div className="carousel_container">
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              height: '600px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              zIndex: 2,
            }}
          >
            <CircularProgress />
          </div>
        )}
        <Carousel
          changeOnFirstRender
          onChange={() => {
            setLoader(false)
          }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  )
}

export { CarouselComponent }
