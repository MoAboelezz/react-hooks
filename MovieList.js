import React from "react";
import movies from "./MoviesData";

const MovieList = ({ M}) => {
    return (
<div className="movie-list">
        { movies.map((movie, index) => (
           <Moviecard
         key={index}
         title={movie.title}
         description={movie.description}
         posterURL={movie.posterURL}
         rating={movie.rating}
       />
     ))}
</div>
    )}
    
export default MovieList;