import React from 'react'
import Labels from '../atoms/Labels'
import Images from '../atoms/Images'

const AccountInfo = () => {
    const accountInfo = {
        email: 'shegedesignlab@gmail.com',
        name: 'Abel',
        imageUrl: '',
        imageAlt: 'abel',
        width: '30',
        height: '30',
    }
  return (
    <>
        <Labels textData={accountInfo.email} />
        <Images
            src={accountInfo.imageUrl}
            width={accountInfo.width}
            height={accountInfo.height}
            alt={accountInfo.imageAlt}
        />
        <Labels textData={accountInfo.name} />
    </>
  )
}    

export default AccountInfo