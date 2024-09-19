import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Links = (props) => {
    return (
        <div className={props.className}>
            <span>
                {/* <i className={props.iconName}></i> */}
                <Image
                    src={props.url}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                />
            </span>
            <span className='px-3'>
                <Link href={props.to}> {props.name} </Link>
            </span>
        </div>
    )
}

export default Links