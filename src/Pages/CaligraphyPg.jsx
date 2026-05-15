import { useState, useEffect } from "react";
import Contact from '../components/Contact'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import React from "react";
import { Link } from "react-router-dom";

function App() {

    const [caligraphy, setcaligraphy] = useState([])
    useEffect(() => {
        async function getData() {

            const data = await fetch('/data.json')
            const response = await data.json()
            const caliData = response.Caligraphy
            setcaligraphy([...caliData])
        }
        getData()
    }, [])

    return (
        <>
            <main className="min-h-screen bg-[#636B2F] ">
                <Navbar />

                {/* Hero Section */}
                <section className="text-center py-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        Art Gallery
                    </h1>

                    <p className="text-gray-300 mt-3 text-sm md:text-base max-w-2xl mx-auto">
                        Discover unique sketches and paintings crafted with creativity and
                        passion.
                    </p>
                </section>

                {/* Categories */}
                <Category />

                {/* Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pb-10">
                    {caligraphy.map((e) => (
                        <Link to={`/DetailPg/${e.id}`}>
                            <div
                                key={e.id}
                                className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="overflow-hidden cursor-pointer bg-black/20">
                                    <img
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        src={e.url}
                                        alt={e.title}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 text-white">
                                    <h2 className="text-lg font-semibold tracking-wide">
                                        {e.title}
                                    </h2>

                                    <div className="mt-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-300 text-md line-through">
                                                Rs. {e.price.actual}
                                            </p>

                                            <p className="text-2xl font-bold text-green-300">
                                                Rs. {e.price.new}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>

                <Contact />
            </main>
        </>
    );
}
export default App;