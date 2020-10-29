import React from "react";

function ResultCard({ movie }) {
  return (
    <>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={` https://image.tmdb.org/t/p/w200${movie.poster_path} `} // take img with 200px
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filler-poster" /> // Not image Api is result
          )}
        </div>
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title ? movie.title.toUpperCase() : "My movie"}</h3>
            <h4 className="release-date"> 
                {movie.release_date ? movie.release_date.substring(0, 4) : "_"}                                                                                                                                                             
                {/* SubString javascript function for cut text */}
            </h4>
          </div>
          <div className="controls">
              <div className="btn">
              Add to WatchList
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultCard;
