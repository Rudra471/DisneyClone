import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const ImageBaseUrl = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = React.useState([]);
    const elementRef = React.useRef();
    const screenWidth = window.innerWidth;

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideos()
            .then(res => {
                
                setMovieList(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const scrollLeft = (element) => {
        element.scrollLeft += screenWidth-110;
    }
    const scrollRight = (element) => {
        element.scrollLeft -= screenWidth-110;
    }

    return (
        <>
        <div>
            <HiChevronLeft className=' hidden md:block text-white text-[50px] mx-2 mt-37.5 absolute cursor-pointer' onClick={() => scrollRight(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[50px] mx-2 mt-37.5 absolute right-0 cursor-pointer' onClick={() => scrollLeft(elementRef.current)}/>
        </div>
        <div className='flex overflow-x-auto w-full px-16 py-6 scrollbar-hide items-center gap-8 scroll-smooth' ref={elementRef}>
            {movieList.map((item, index) => (
    <img
      key={index}
      src={ImageBaseUrl + item.backdrop_path}
      alt=""
      className='min-w-full md:h-77.5  object-top-left rounded-lg mr-4 shadow-lg shadow-black/10  cursor-pointer hover:border-4 border-white transition-all duration-00'
    />
))}
        </div>
        </>
    );
};

export default Slider;