import React from 'react'
import Icons from '../atoms/Icons'
import Images from '../atoms/Images'
import Labels from '../atoms/Labels'
import Image from 'next/image'

const Logo = () => {
    return (
        <>
            <div className='flex items-center logo justify-between'>
                {/* logo image */}
                <span className='hamburger_menu'>
                    <Icons
                        className='NavIcons'
                        url='/icons/hamburger_menu.png'
                        alt='hamburger_menu'
                        width={35}
                        height={35}
                    />
                </span>
                <div>
                    <Images
                        url='/icons/gmail.png'
                        width={50}
                        height={50}
                        alt='logo'
                    />
                </div>
                {/* logo text */}
                <div>
                    <Labels textData='Gmail' />
                </div>
            </div>
        </>
    )
}

export default Logo