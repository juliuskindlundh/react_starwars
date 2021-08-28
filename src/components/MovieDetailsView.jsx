import React, { useEffect, useState } from 'react';
import '../style.css'
const MovieDetailsView = (props) =>{

    const [hasLoaded,setHasLoaded] = useState(false);
    const [names,setNames] = useState([]);

    useEffect(()=> {
        setNames([]);
        const responses = [];
        const tempArr = [];
        props.movie.characters.map((row,index)=>{
            responses.push(
                fetch(row).then(data=>data.json()).then(results =>{
                    tempArr.push(results.name)
                })
            );
        })

        Promise.all(responses).then(()=>{
            setHasLoaded(true)           
            tempArr.sort();          
            setNames(tempArr)
        });

    },[])

    const isLoaded = (hasLoaded) => {
        return !hasLoaded;
    }

    return(
        <div>
            <button onClick={()=>props.setSelectedMovieIndex(-1)}>Go Back</button><br/>
            <h1>{props.movie.title}</h1>
            <h2>Characters</h2>
            {
                isLoaded(hasLoaded) ? <h2>loading...</h2>
                :
                <div>
                {
                    names.map((row,index)=>{
                        return (<h3 key={index}>{row}</h3>)
                    })
                }
                </div>
            }
        </div>
    );
}

export default MovieDetailsView;