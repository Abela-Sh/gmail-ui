import React from 'react'
import Images from '../atoms/Images'

const Compose = (props) => {
  return (
    <div className='py-6'>
      <button className='compose_button flex gap-4 text-black px-4 py-4'>
        <Images
          url='/icons/pencil.png'
          width={25}
          height={25}
          alt='logo'
        />
        <span> {props.buttonName} </span>
      </button>
    </div>
  )
}

export default Compose