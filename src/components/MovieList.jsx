import React from 'react';
import '../style.css'
import MovieView from './MovieView';
const MovieList = (props) => {
    return(
        <div>
        {props.isLoaded ? 
            <div>
            { 
                props.movies.map((row,index)=>{
                    return <MovieView key={index} movie={row} setSelectedMovieIndex={props.setSelectedMovieIndex} index={index}/>
                })
            }
          </div>
          :
          <div>
            {   
                <h1>Loading...</h1>
            }
        </div>
        }
        </div>
      );
}

export default MovieList;
