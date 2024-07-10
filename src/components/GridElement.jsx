import React from 'react'

export const GridElement = ({image}) => {
  return (
        <div className='card'>
            <img src = { image.url } alt=""  />
            <p>{image.title}</p>
        </div> 
  )
}
