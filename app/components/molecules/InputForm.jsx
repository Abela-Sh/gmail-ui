import React from 'react'
import Icons from '../atoms/Icons'
import TextFields from '../atoms/TextFields'
import Images from '../atoms/Images'

const InputForm = () => {
  return (
    <div className="flex items-center justify-left gap-4 rounded-lg formContainer">
      <Icons
        url='/icons/search.png'
        width={20}
        height={20}
        alt='logo'
        iconName=""
      />
      <TextFields
        placeholder='Search mail'
        className="inputForm"
      />
      <span className='justify-right'>
        <Icons
          url='/icons/tune.png'
          width={20}
          height={20}
          alt='logo'
          iconName=""
        />
      </span>
    </div>
  )
}

export default InputForm