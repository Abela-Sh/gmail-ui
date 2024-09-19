import React from 'react'
import Links from '../atoms/Links'
import Link from 'next/link'
import Image from 'next/image'
import Images from '../atoms/Images'

const SidebarButtons = () => {
    const sideBarMenu = [
        {
            name: 'Inbox',
            icon: '/icons/mail.png',
            to: '/inbox'
        },
        {
            name: 'Starred',
            icon: '/icons/starred.png',
            to: '/starred'
        },
        {
            name: 'Snoozed',
            icon: '/icons/snoozed.png',
            to: '/snoozed'
        },
        {
            name: 'Sent',
            icon: '/icons/sent.png',
            to: '/sent'
        },
        {
            name: 'Drafts',
            icon: '/icons/drafts.png',
            to: '/drafts'
        },
        {
            name: 'More',
            icon: '/icons/more.png',
            to: '/more'
        },
    ]
    return (
        <div className='mailLinks gap-6'>
            {sideBarMenu.map((item) => (
                <span className='mailLinks gap-4'>
                    <Links
                        url={item.icon}
                        width={20}
                        height={20}
                        key={item.name}
                        name={item.name}
                        iconName={item.icon}
                        to={item.to}
                        className='links'
                    />
                </span>
            ))}
            <span className='flex'>
                <Link className='lebels_links flex gap-16 items-center' href='/labels'>
                    <span>Labels</span>
                    <Images
                        url='/icons/plus.png'
                        alt='labels'
                        width={25}
                        height={25}
                    />
                </Link>
            </span>
        </div>
    )
}

export default SidebarButtons