import React from 'react'
import Links from '../atoms/Links'

const MainBar = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Primary',
            iconName: '/icons/inbox.png',
            to: '/primary'
        },
        {
            id: 2,
            name: 'Promotions',
            iconName: '/icons/tag.png',
            to: '/promotions'
        },
        {
            id: 3,
            name: 'Socials',
            iconName: '/icons/socials.png',
            to: '/socials'
        }
    ]
  return (
    <div className='mainBar'>
        <div className="flex gap-10 py-2 gap-36">
            {menuItems.map((item) => (
                <div key={item.id} className="flex-3">
                    <Links 
                        url={item.iconName}
                        alt={item.name}
                        width={20}
                        height={20}
                        name={item.name} 
                        to={item.to} 
                        className='flex items-center gap-2 main_links'
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default MainBar