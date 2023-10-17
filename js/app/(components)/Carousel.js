'use client'

import React from 'react'
import Carousel from 'react-material-ui-carousel'

function Item(props) {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Cabin Sketch, cursive' }}>
      <h3>{props.item.description}</h3>
      <img
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'cover',
        }}
        src={props.item.src}
        alt="AI resume filter"
      />
    </div>
  )
}

const CarouselComponent = () => {
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap"
        rel="stylesheet"
      />
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  )
}

export { CarouselComponent }
