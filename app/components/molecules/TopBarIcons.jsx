import React from 'react'
import Icons from '../atoms/Icons'

const TopBarIcons = () => {
  return (
    <div className="flex">
      <span className="top_bar_icons">
        <Icons
          iconName=""
          url='/icons/select.png'
          alt=''
          width={18}
          height={18}
        />
      </span>
      <span className="top_bar_icons">
        <Icons
          iconName=""
          url='/icons/refresh.png'
          alt=''
          width={18}
          height={18}
        />
      </span>
      <span className="top_bar_icons">
        <Icons
          iconName=""
          url='/icons/more.png'
          alt=''
          width={18}
          height={18}
        />
      </span>

      <span className='flex justify-right right_flex items-center gap-4'>
        <p>1-50 of 800</p>
        <Icons
          iconName=""
          url='/icons/less.png'
          alt=''
          width={15}
          height={15}
        />
        <Icons
          iconName=""
          url='/icons/greater.png'
          alt=''
          width={15}
          height={15}
        />
      </span>
    </div>
  )
}

export default TopBarIcons