import React from 'react'
import disney from '../assets/Images/disney.png'
import pixar from '../assets/Images/pixar.png'
import marvel from '../assets/Images/marvel.png'
import starwars from '../assets/Images/starwar.png'
import natgeo from '../assets/Images/nationalG.png'

import disneyV from '../assets/Videos/disney.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import starwarsV from '../assets/Videos/star-wars.mp4'
import natgeoV from '../assets/Videos/national-geographic.mp4'

const ProductionHouse = () => {
    const productionHouseList = [
        {
            id: 1,
            
            img: disney,
            video: disneyV
        },
        {
            id: 2,
            
            img: pixar,
            video: pixarV
        },
        {
            id: 3,
            
            img: marvel,
            video: marvelV
        },
        {
            id: 4,
            
            img: starwars,
            video: starwarsV
        },
        {
            id: 5,
            img: natgeo,
            video: natgeoV
        }
    ]
  return (
    <div className="flex flex-wrap m- p-2 px-5 md:px-16 gap-4 md:gap-6 lg:gap-10 justify-center items-center">
  {productionHouseList.map((item, index) => (
    <div
      key={index}
      className="group relative w-60 md:w-50 lg:w-55
      rounded-xl overflow-hidden cursor-pointer
      border border-gray-600 bg-gray-900
      shadow-lg shadow-black/60
      transition-all duration-300 ease-out
      hover:scale-110 hover:-translate-y-2
      hover:border-white"
    >
      {/* Video Background */}
      <video
        src={item.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover
        opacity-0 group-hover:opacity-60
        transition-opacity duration-300"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Logo / Image */}
      <img
        src={item.img}
        alt=""
        className="relative z-10 w-full p-6
        transition-transform duration-300
        group-hover:scale-105"
      />

      {/* Glass Shine Effect */}
      <div
        className="absolute inset-0 rounded-xl
        bg-white/5 backdrop-blur-sm
        opacity-0 group-hover:opacity-0
        transition-opacity duration-300"
      />
    </div>
  ))}
</div>
  )
}

export default ProductionHouse
