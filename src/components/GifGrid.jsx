import React, { useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useEffect } from 'react';
import { GridElement } from './GridElement';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs (category);

  return (
    <>
        <h3 > { category } </h3>
          {isLoading && <p>Loading...</p>}
           <div className='card-grid'>
           { images.map( image => 
              (<GridElement  image = { image } /> )
            ) }
          </div>
    </>
  )
}
