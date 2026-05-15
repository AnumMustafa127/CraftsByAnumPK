import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    const [isLoading, setisLoading] = useState(true)
   useEffect(() => {
     
        setisLoading(false)
    
   }, [])
   
    return (
        <>
        <nav className="flex justify-center mb-8">
            <ul className="flex gap-4 flex-wrap items-center bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 shadow-lg">
                <p className="text-gray-200 text-sm">Available categories:</p>

               <Link to={'/PaintingPg'}>
                <li className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition">
                    Paintings
                </li>
               </Link>
                <Link to={'/SketchPg'}>
                    <li className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition">
                        Sketches
                    </li>
                </Link>

                <Link to={'/PortraitPg'}>
                    <li className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition">
                        Portraits
                    </li>
                </Link>

                <Link to={'/CaligraphyPg'}>
                    <li className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition">
                        Caligraphy
                    </li>
                </Link>
            </ul>
        </nav>
        {isLoading && (
            <p className='text-white text-center font-bold text-xl'>Loading...</p>
        )}
        </>
    )
}

export default Category
