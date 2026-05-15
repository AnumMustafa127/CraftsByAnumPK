
import React from 'react'
import { useState, useEffect } from 'react'
import art from '../assets/art.png'
import mobile from '../assets/mobile.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'


const App = () => {

  const [show, setshow] = useState(false)
  const [blur, setblur] = useState(false)
  const [showSecond, setshowSecond] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setshow(true)
    }, 500);

    setTimeout(() => {
      setblur(true)
    }, 2000);

    const handleScroll = () => {

      if (window.scrollY > 500) {
        setshowSecond(true)
      }

    }

    window.addEventListener("scroll", handleScroll)

  }, [])

  return (

    <>

      <main className='min-h-screen w-full bg-[#3D4127] overflow-hidden'>

        <section className='relative min-h-screen w-full flex items-center justify-center'>

          {/* Background Image */}
          <img
            className={`
              h-screen w-full object-cover
              transition-all duration-1000
              ${show
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-20 opacity-0 scale-110"}
              ${blur ? "blur-sm brightness-50" : "blur-none"}
            `}
            src={art}
            alt=""
          />

          {/* Text Content */}
          {blur && (

            <div
              className='
                absolute inset-0
                flex flex-col items-center justify-center
                text-center px-6
                text-white
                transition-all duration-1000
                animate-fadeIn
              '
            >

              <h1 className='text-5xl md:text-7xl font-bold tracking-wide mb-6'>
                What We Do?
              </h1>

              <p className='max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed'>
                We are a creative art platform dedicated to showcasing and selling original paintings and sketches from talented artists. Each piece is carefully selected to ensure quality, originality, and emotional depth. Our goal is to connect art lovers with meaningful artwork that adds beauty and personality to their spaces. We provide a simple and secure way for customers to explore, discover, and purchase unique art online. Every artwork tells a story, and we help those stories reach the right audience. Whether you’re looking for modern designs or classic styles, our collection offers something for every taste. We also support emerging artists by giving them a platform to grow and share their creativity with the world.
              </p>
              \
            </div>

          )}

        </section>

        <section className={`transition-all duration-1000 relative min-h-screen w-full flex
          ${showSecond ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
          <div className='min-w-1/2 flex justify-center items-center'>
            <img
              className='min-h-2/3 w-auto' src={mobile} alt="" />
          </div>
          <div className='text-white flex flex-col justify-center gap-7 max-w-2/3'>
            <div>
              <h2 className='text-lg md:text-xl underline'>Powered by</h2>
            <ol className='text-white list-disc'>
              <li>the Art Marketplace</li>
              <li>Value Proportion</li>
              <li>Customer value proposition</li>
            </ol>
            <hr className='text-gray-400'/>
            </div>
            <div className=''>
              At the heart of our platform is a space dedicated to original paintings and sketches, where artists can showcase their creativity and reach art lovers online. It is powered by a smooth digital experience that makes browsing and buying artwork simple and accessible. We aim to connect talented artists with customers who value unique and meaningful art pieces. Every artwork is carefully selected to maintain quality and originality. Our platform helps emerging artists grow while giving buyers a trusted place to discover creative work.
            </div>
          </div>

        </section>

        <div className=' bg-gradient-to-b from-[#474e1f] to-[#6c7147] brightness-90 backdrop-blur-md text-gray-200 grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 p-20'>
          <ul>
            <li className='font-bold text-xl'>Shop</li>
            <li>All Products</li>
            <li>New</li>
            <li>Best Seller</li>
            <li>Lips</li>
            <li>Eyes</li>
            <li>Face</li>
          </ul>

          <ul>
            <li className='font-bold text-xl'>Our Store</li>
            <li>Green Town, Faisalabad, Punjab, <br />Pakistan</li>
            <br />
            <li>Monday-Friday: 11am-10pm</li>
            <li>Saturday-Sunday: 11am-12pm</li>
            <br />
            <li>Tel: 123-456-7890</li>
            <li>Email: anummustafa9924@gmail.com</li>
          </ul>

          <ul>
            <li className='font-bold text-xl'>Policy</li>
            <li>Shipping & Returns</li>
            <li>Store Policy</li>
            <li>Payment Method</li>
            <li>FAQ</li>
          </ul>

          <ul className='flex flex-col gap-4' id='contact'>
            <li className='font-bold text-xl'>Customer Service</li>
            <li>Tel: 123-456-7890</li>
            <li>Email: anummustafa9924@gmail.com</li>
            <div className='flex gap-3'>
              <FaInstagram className='text-2xl' />
              <FaFacebook className='text-2xl' />
              <FaYoutube className='text-2xl' />
              <FaTwitter className='text-2xl' />
            </div>
            <p>&copy; 2026 CraftsByAnumPK. All rights reserved. Powered and secured by <u>Wix</u></p>
          </ul>

        </div>
      </main>

    </>

  )
}

export default App