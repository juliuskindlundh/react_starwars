import React, { useEffect, useState } from 'react';
import '../style.css'

const MovieView = (props) =>{

    return(
        <div className="container" onClick={()=>props.setSelectedMovieIndex(props.index)}>
            <h3>Title {props.movie.title}</h3><br/>
            <h3>Release date {props.movie.release_date}</h3>
        </div>
    );
}

export default MovieView