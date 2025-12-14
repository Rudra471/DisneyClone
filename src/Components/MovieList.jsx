import React from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import HrMovieCard from './HrMovieCard';

function MovieList({genereID}) {

    const [movieList, setMovieList] = React.useState([]);
    const elementRef = React.useRef();

    const getMovieByGenreId=() => {
        GlobalAPI.getMoviesByGenreId(genereID).then(res => {
            
            setMovieList(res.data.results);
        })
    }
    React.useEffect(() => {
        getMovieByGenreId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const scrollLeft = (element) => {
        element.scrollLeft += 550;
    }
    const scrollRight = (element) => {
        element.scrollLeft -= 550;
    }

  return (
    <div className="relative">

  <HiChevronLeft
    className="hidden md:block text-white text-[50px] absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    onClick={() => scrollRight(elementRef.current)}
  />

  <div
    className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth px-10 py-10"
    ref={elementRef}>
    {movieList.map((item, index) =>
    index % 3 === 0 ? (
      <HrMovieCard movie={item} key={index} />
    ) : (
      <MovieCard movie={item} key={index} />
    )
  )}
  </div>

  <HiChevronRight
    className="hidden md:block text-white text-[50px] absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    onClick={() => scrollLeft(elementRef.current)}
  />

</div>
  )
}

export default MovieList
