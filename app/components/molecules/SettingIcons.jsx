import React from 'react'
import Icons from '../atoms/Icons'

const SettingIcons = () => {
  return (
    <div className='settingIcons flex justify-right items-center'>
      <span className='setting_icon'>
        <Icons
          iconName=""
          url='/icons/suppport.png'
          alt=''
          width={25}
          height={25}
        />
      </span>

      <span className='setting_icon'>
        <Icons
          iconName=""
          url='/icons/setting.png'
          alt=''
          width={25}
          height={25}
        />
      </span>

      <span className='setting_icon'>
        <Icons
          iconName=""
          url='/icons/google_apps.png'
          alt=''
          width={25}
          height={25}
        />
      </span>

      <span className='setting_icon'>
        <Icons
          iconName=""
          url='/icons/socials.png'
          alt=''
          width={25}
          height={25}
        />
      </span>
    </div>
  )
}

export default SettingIcons