import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'


function App() {

  const { id } = useParams()
  const [imageData, setimageData] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {

    async function getData() {

      const data = await fetch("/data.json")
      const response = await data.json()
      const allitems = [
        ...response.Sketches,
        ...response.Paintings,
        ...response.Portraits,
        ...response.Caligraphy
      ]
      const item = allitems.find((e) => e.id == id)
      setimageData(item)
      
    }
    
    getData()
    
  }, [])
  console.log(imageData)

  function checkout(item) {

    navigate('/CheckoutPg', {state: imageData})
  }


  function cancel() {
    navigate(-1)
  }
  return (

    <main className="min-h-screen bg-gradient-to-br from-[#2d3416] via-[#4f5b2b] to-[#1d220f]">

      <Navbar />

      <section className="flex items-center justify-center px-6 py-12">

        {imageData && (

          <div className="max-w-6xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}
            <div className="bg-black/20 flex items-center justify-center p-6">
              <img
                src={imageData.url}
                alt={imageData.title}
                className="rounded-2xl w-full max-h-[550px] object-cover hover:scale-105 transition-transform duration-500 shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="p-8 gap-2 md:p-12 flex flex-col justify-center text-white">

              <p className="uppercase tracking-[4px] text-green-300 text-sm mb-3">
                Premium Artwork
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                {imageData.title}
              </h1>

              <p className="text-xl mb-2">{imageData.artist}</p>

              <p className="text-gray-400 line-through">
                Rs. {imageData.price.actual}
              </p>

              <p className="text-3xl font-bold text-green-300 mb-6">
                Rs. {imageData.price.new}
              </p>

              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                In architecto soluta ducimus quam voluptatem.
              </p>
              <button onClick={checkout} className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-green-300 hover:text-black transition">
                Buy Now
              </button>
              <button onClick={cancel} className="bg-white text-black border-red-500 border px-4 py-2 rounded-xl font-medium hover:bg-red-400 hover:text-black transition">
                Cancel
              </button>
            </div>

          </div>

        )}

      </section>

    </main>

  )
}

export default App