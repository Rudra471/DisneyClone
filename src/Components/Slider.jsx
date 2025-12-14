import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const ImageBaseUrl = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = React.useState([]);
    const elementRef = React.useRef();
    const getImageWidth = () => {
        return elementRef.current.children[0].clientWidth
      }

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isHovered, setIsHovered] = React.useState(false)

  const scrollToIndex = (index) => {
    const imageWidth = getImageWidth()
elementRef.current.scrollTo({
  left: imageWidth,
  behavior: "smooth",
})
    
    setCurrentIndex(index)
  }

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

    const scrollRight = () => {
        setCurrentIndex(prev =>
          prev === movieList.length - 1 ? 0 : prev + 1
        )
      }
      
      const scrollLeft = () => {
        setCurrentIndex(prev =>
          prev === 0 ? movieList.length - 1 : prev - 1
        )
      }

      useEffect(() => {
        if (!elementRef.current) return
      
        const width = elementRef.current.clientWidth
      
        elementRef.current.scrollTo({
          left: width * currentIndex,
          behavior: "smooth",
        })
      }, [currentIndex])

      useEffect(() => {
        if (isHovered) return
      
        const interval = setInterval(() => {
          setCurrentIndex(prev =>
            prev === movieList.length - 1 ? 0 : prev + 1
          )
        }, 3000)
      
        return () => clearInterval(interval)
      }, [isHovered, movieList.length])
    return (
        <>
        <div
        className='relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <HiChevronLeft className=' hidden md:block text-white text-[50px] mx-2 mt-37.5 absolute cursor-pointer' onClick={() => scrollRight(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[50px] mx-2 mt-37.5 absolute right-0 cursor-pointer' onClick={() => scrollLeft(elementRef.current)}/>
        </div>
        <div className='flex overflow-x-auto w-full px-16 py-6 scrollbar-hide items-center gap-8 scroll-smooth' 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={elementRef}>    
            {movieList.map((item, index) => (
    <img
      key={index}
      src={ImageBaseUrl + item.backdrop_path}
      alt=""
      className='min-w-full md:h-77.5  object-top-left rounded-lg  shadow-lg shadow-black/10  cursor-pointer hover:border-4 border-white transition-all duration-00'
    />
))}
        </div>
        </>
    );
};

export default Slider;