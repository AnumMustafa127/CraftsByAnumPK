import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import pakistan from '../assets/pak (2).png'
import { Link } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const [comment, setcomment] = useState([])
  const [join, setjoin] = useState({ email: '' })

  function handleChange(e) {

    setjoin(e.target.value)
  }

  function joinUser() {
    if (join.email === '') {
      alert("Please enter your email")
      return
    }
    const storeData = JSON.parse(localStorage.getItem('email')) || []
    storeData.push({ email: join })
    localStorage.setItem('email', JSON.stringify(storeData))

    const confirmUser = confirm("click ok to continue")
    if (confirmUser) {
      navigate('/SubscriptionPg')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/comments")
        const response = await data.json()
        setcomment(response.comments)
      } catch (error) {
        console.log("Fetch error:", error)
      }
    }
    fetchData()
  }, [])

  const [timer, settimer] = useState(false)
  useEffect(() => {
    const show = setTimeout(() => settimer(true), 700)
    return () => clearTimeout(show)
  }, [])

  const [smallTimer, setsmallTimer] = useState(false)
  useEffect(() => {
    const newshow = setTimeout(() => setsmallTimer(true), 2000)
    return () => clearTimeout(newshow)
  }, [])

  return (
    <div className='bg-[#636B2F]  m-0'>
      <Navbar/>

      {/* HERO */}
      <div className='min-h-screen text-white w-full flex flex-col'>
        <nav className='w-full'>
          <ul className='flex flex-wrap gap-3 underline justify-center md:justify-end text-sm md:text-lg font-serif'>
            <li>About Us</li>
            <Link to='/WhatWeDo'>
              <li>What we do</li>
            </Link>
            <a href="#reviews"><li>Customers Reviews</li></a>
            <a href="#contact"><li>Contact Us</li></a>
          </ul>
        </nav>

        <div className='flex-1 flex flex-col justify-center gap-4 px-4  md:px-10'>

          <p className={`font-serif transition-all duration-1000
            text-3xl md:text-6xl min-w-full md:min-w-1/2 lg:text-8xl
            ${timer ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            Welcome to CraftsByAnumPK
          </p>

          <p className={`font-serif transition-all duration-1000
            text-lg md:text-2xl
            ${smallTimer ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            Offering you the precious Hand made Arts preciously adorning your interior
          </p>

          <Link to='/SketchPg'>
            <button className='bg-white text-black p-2 w-full sm:w-[200px] hover:bg-white/20 hover:scale-110 transition-all duration-500'>
              Visit Store
            </button>
          </Link>

        </div>
      </div>

      {/* SECOND */}
      <div className='min-h-screen text-white flex flex-col items-center'>
        <p className='text-2xl md:text-3xl text-center'>
          Welcome to the store of Art World
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4'>
          <img src={pakistan} className="w-full h-64 md:h-[450px] object-cover" />

          <p className="text-base md:text-xl leading-relaxed">
            Imagine a place that has everything you want and in every shape, size you have never seen before...
          </p>
        </div>
      </div>

      {/* REVIEWS */}
      <div className='min-h-screen flex text-white flex-col items-center px-4 py-10' id='reviews'>
        <p className="text-2xl md:text-3xl mb-8">Customer Reviews</p>

        <div className="flex flex-col text-white gap-4 w-full max-w-4xl ">
          {comment.slice(0, 8).map((e) => (
            <div key={e.id} className="bg-white/10 hover:scale-105 transition-all duration-300 p-4 rounded-xl">
              <p className="font-bold">{e.user.fullName}</p>
              <p className="text-sm">{e.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SIGNUP */}
      <div className='bg-black text-white min-h-2/3 flex flex-col items-center justify-center p-6'>
        <p className='text-2xl md:text-4xl font-bold text-center'>
          Are you on the List?
        </p>

        <p className="text-center mb-6">
          Join us to enjoy exclusive offers and deals
        </p>

        <div className='flex flex-col sm:flex-row gap-3 w-full max-w-md'>
          <input
            className='w-full p-2 border border-white'
            type="text"
            placeholder='Enter your Email'
            onChange={handleChange}
          />

          <button
            className='bg-white text-black p-2 w-full sm:w-[120px]'
            onClick={joinUser}
          >
            Join
          </button>
        </div>
      </div>


      {/* footer */}
      <div className='grid bg-black text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-8 sm:p-12 lg:p-20 max-w-full'>

        <ul className='flex flex-col gap-2'>
          <li className='font-bold text-xl mb-2'>Shop</li>
          <li>All Products</li>
          <li>New</li>
          <li>Best Seller</li>
          <li>Lips</li>
          <li>Eyes</li>
          <li>Face</li>
        </ul>

        <ul className='flex flex-col gap-2'>
          <li className='font-bold text-xl mb-2'>Our Store</li>

          <li>
            Green Town, Faisalabad, Punjab,
            <br />
            Pakistan
          </li>

          <li className='mt-3'>Monday-Friday: 11am-10pm</li>
          <li>Saturday-Sunday: 11am-12pm</li>

          <li className='mt-3'>Tel: 123-456-7890</li>
          <li className='break-all'>
            Email: anummustafa9924@gmail.com
          </li>
        </ul>

        <ul className='flex flex-col gap-2'>
          <li className='font-bold text-xl mb-2'>Policy</li>
          <li>Shipping & Returns</li>
          <li>Store Policy</li>
          <li>Payment Method</li>
          <li>FAQ</li>
        </ul>

        <ul className='flex flex-col gap-4' id='contact'>
          <li className='font-bold text-xl'>Customer Service</li>

          <li>Tel: 123-456-7890</li>

          <li className='break-all'>
            Email: anummustafa9924@gmail.com
          </li>

          <div className='flex gap-4 text-2xl flex-wrap'>
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
          </div>

          <p className='text-sm leading-6'>
            &copy; 2026 CraftsByAnumPK. All rights reserved.
            Powered and secured by <u>Wix</u>
          </p>
        </ul>

      </div>
    </div>
  )
}


export default App




















