import React from 'react'
import Image from 'next/image'

import Register from '../../components/Register'

const register = () => {
    return <>
    <div className='overflow-hidden'>
        <div className='flex justify-center'>
            <Image src={'/logo.png'} width={500} height={100}/>
        </div>
        <div className=''><Register/></div>
        </div>
    </>
}

export default register