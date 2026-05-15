import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'
const Navbar = () => {
    return (
        <>
            <nav className='flex flex-col gap-2 sm:flex-row justify-between min-h-fit p-2 m-0 bg-[#D4DE95] border'>
                <Link to={'/HomePg'}>
                <div className='flex gap-2 items-center'>
                    <p>CraftsByAnumPK</p>
                    <img
                        className='max-h-10 w-auto object-cover'
                        src={logo} alt="" />
                </div>
                </Link>
                <ul className='flex gap-3 underline '>
                    <li>Sketches</li>
                    <li>Paintings</li>
                    <li>Portraits</li>
                    <li>Abstract</li>
                    <li>Landscape</li>
                </ul>
            </nav>

        </>

    )
}

export default Navbar
