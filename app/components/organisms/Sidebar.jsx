import React from 'react'
import Logo from '../molecules/Logo'
import SidebarButtons from '../molecules/SidebarButtons'
import Compose from '../molecules/Compose'
import InputForm from '../molecules/InputForm'
import NavigationLiks from '../molecules/NavigationLiks'

const Sidebar = () => {
    return (
        <div className='sidebar_container grid grid-cols-12 px-6 py-0 text-center'>
            {/* <div className='col-span-3 text-lg'>
                <NavigationLiks />
            </div> */}
            {/* SideBar */}
            <div className='col-span-9 sidebarMenus'>
                <Logo />
                <Compose buttonName='Compose' buttonClass='' />
                <SidebarButtons />
            </div>
        </div>
    )
}

export default Sidebar