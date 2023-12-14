import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies, searchMovies } from './Redux/Action';

const Movie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  console.log(movies)

  // TO DISPATCH ALL THE MOVIES
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  // TO SEARCH IT FROM INPUT
  const handleSearch = (e) => {
    const query = e.target.value;
    dispatch(searchMovies(query));
  };

  return (
    <>
      {/* HEADER SECTION */}
      <header className='container position-relative'>
      <header className='container position-relative'>
        <div className="row align-items-center">
          <div className="logo col-6">
            <img src="/Images/9.png" alt="" className='img-fluid' />
          </div>
          <div className="search-box col">
            <form className="flex items-center" >
              <div className="searchbars position-relative">
                <input type="text" name="search" onChange={handleSearch} placeholder="Enter movie Name" id="" className="searchbar font-poppins" />
                <div className="icons">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </form>

          </div>
        </div>
      </header>
      </header>

      {/* BANNER SECTION */}
      <div className="banner container">
        <div className="d-flex flex-wrap justidfy-content-center">
          {movies && movies.map((movie, index) => (
            <div class="wrapper col-3 mb-3" key={index}>
              <div class="card">
                <div class="poster"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Location Unknown" /></div>
                <div class="details">
                  <h2 className='fs-3 font-poppins '>{movie.original_title}</h2>
                  <div className="year">
                      <p className='font-joseffin text-white'>Year : {movie.release_date}</p>
                    </div>
                  <div class="overview p-0">
                    <p className='font-joseffin text-white'>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie