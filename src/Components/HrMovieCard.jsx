import React from 'react'
const ImageBaseUrl = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <>
      <img className='w-27.5 md:w-50 rounded-lg hover:border-3 border-gray-400 hover:scale-120 transition-all duration-200 easy-in cursor-pointer' src={ImageBaseUrl+movie.poster_path}/>
    </>
  )
}

export default HrMovieCard
