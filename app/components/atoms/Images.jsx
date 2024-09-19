import Image from 'next/image'
import React from 'react'

const Images = (props) => {
  return (
    <Image
        src={props.url}  
        width={props.width}
        height={props.height}
        alt={props.alt}       
    />
  )
}

export default Images