import React from 'react'
import Icons from '../atoms/Icons'
import Links from '../atoms/Links'

const NavigationLiks = () => {
  return (
    <div className='navigatingLinks'>
      <span className='hamburger_menu'>
        <Icons
          className='NavIcons'
          url='/icons/hamburger_menu.png'
          alt='hamburger_menu'
          width={20}
          height={20}
        />
      </span>
      {/* <div className='nav_links'>
        <span className='NavIcons'>
          <Links
            className='NavIcons'
            to='/'
            name='Mail'
            url='/icons/mail.png'
            alt='hamburger_menu'
            width={20}
            height={20}
          />
        </span>
        <span className='NavIcons'>
          <Links
            className='NavIcons'
            to='/'
            name='Mail'
            url='/icons/meet.png'
            alt='hamburger_menu'
            width={20}
            height={20}
          />
        </span>
      </div> */}
    </div>
  )
}

export default NavigationLiks