import React from 'react'
import logo from '../../assets/LOGO.png'
const TopIcon = () => {
  return (
   <nav className='flex gap-2 justify-start items-center bg-[#D4DE95] border'>
        <img src={logo} className='h-15 w-auto object-cover' alt="" />
        <p className='font-bold text-xl font-serif font-stretch-50%'>CraftsByAnumPK</p>
      </nav>
  )
}

export default TopIcon
