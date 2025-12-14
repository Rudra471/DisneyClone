import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const api_key = "1c088c0804a7f24c064ec231e4cb38e3";


const getTrendingVideos = () =>
  axios.get(
    `${movieBaseURL}/trending/all/day?api_key=${api_key}`
  );
  const getMoviesByGenreId = (id) =>
    axios.get(
      `${movieBaseURL}/discover/movie?api_key=${api_key}&with_genres=${id}`
    );

  export default {
    getTrendingVideos,
    getMoviesByGenreId
  };