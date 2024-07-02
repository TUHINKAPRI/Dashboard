import { Container } from '@radix-ui/themes'
import React from 'react'

function MainLayout({children}) {
  return (
    <>
      <div className='p-[12px] w-full  bg-[#F0F1F2] h-screen  ' style={{fontFamily:"Inter"}} >
        {children}
      </div>
    </>
  )
}

export default MainLayout