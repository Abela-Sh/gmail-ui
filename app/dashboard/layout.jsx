import React from 'react'
import TopHeader from '../components/organisms/TopHeader'
import Sidebar from '../components/organisms/Sidebar'

const layout = ({ children }) => {
    return (
        <>
            <div className='main_container'>
                <div className='grid grid-cols-12 h-screen'>
                    <div className='col-span-3 py-8 h-full sidebar_main'>
                        <Sidebar />
                    </div>
                    <div className='col-span-9 w-full h-full content_container'>
                        <TopHeader />
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default layout