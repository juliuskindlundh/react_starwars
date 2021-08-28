import React, { useEffect, useState } from 'react';
import MovieList from './MovieList.jsx'
import MovieDetailsView from './MovieDetailsView'
import '../style.css'

const url = "https://swapi.dev/api/films/"
function App(props){

    const [movies,setMovies] = useState([]);
    const [isLoaded,setLoaded] = useState(false);
    const [selectedMovieIndex,setSelectedMovieIndex] = useState(-1);   

    useEffect(()=>{
        fetch(url).then(data=>data.json()).then(data => data.results).then(results =>{
            setMovies(results);
            setLoaded(true);
        })
    },[]);

    const isSelected = (index) => {
        if(index === -1){
            return false;
        }
        else{
            return true;
        }
    }


    return(
        <div className="container">
            <h1>STARWARS</h1>
            {
                isSelected(selectedMovieIndex) ? 
                <div>
                    <MovieDetailsView movie={movies[selectedMovieIndex]} setSelectedMovieIndex={setSelectedMovieIndex}/>
                </div>
                :
                <div>
                    <MovieList movies={movies} isLoaded={isLoaded} setSelectedMovieIndex={setSelectedMovieIndex}/>
                </div>               
            }
            
        </div>
    );
}

export default App;