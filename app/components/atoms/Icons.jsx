import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Icons = (props) => {
  return (
    <span>
        {/* <i className='NavIcons' icon={props.iconName} /> */}
        <Image
          src={props.url} 
          alt={props.alt}
          width={props.width}
          height={props.height}
         />
        <span>
          {props.iconName}
        </span>
    </span>
  )
}

export default Icons