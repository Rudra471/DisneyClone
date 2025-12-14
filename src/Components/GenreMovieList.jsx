import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genere.map((item, index) =>(
        <div className='p-8 px-8 md:px-16' key={index}>
          <h2 className='text-white text-2xl font-semibold mb-4 mt-6 px-6'>{item.name} Movies</h2>
          <MovieList genereID = {item.id} index={index}/>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
