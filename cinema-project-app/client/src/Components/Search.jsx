import { useState } from "react";
import axios from 'axios';
import RadioButton from "./RadioButton"

    const Search = ({ setResults }) => {
        const [searchTerm, setSearchTerm] = useState("");
        const [searchType, setSearchType] = useState("");
        const search = () => {
        
            if (searchType === "title") {
            
                axios.get(`http://localhost:3001/movies/title/${searchTerm}`).then((response) => {
                    const movies = response.data
                    console.log(response.data)
                    // const filteredmovies = movies.filter((movies) => { return movies.title.includes(searchTerm) })
                    // console.log(filteredmovies);
                    //  setResults(filteredmovies);
                    setResults(response.data)
                
                })
            }
            
            else if (searchType === "tags") {
            
                axios.get(`http://localhost:3001/movies/tag/${searchTerm}`).then((response) => {
                    const movies = response.data
                    console.log(response.data)
                    // const filteredtags = movies.filter((movies) => { return movies.tags.includes(searchTerm) })
                    // console.log(filteredtags);
                    // setResults(filteredtags);
                    setResults(response.data)
                })
            }
            else if (searchType === "cast") {
            
                axios.get(`http://localhost:3001/movies/cast/${searchTerm}`).then((response) => {
                    const actors = response.data
                    console.log(response.data)
                    // const filteredactors = actors.filter((actors) => { return actors.title.includes(searchTerm) })
                    // console.log(filteredactors);
                    setResults(response.data);
                })
            }
        }
        
        return (
            <div>
                <input type='text' onChange={(e) => { setSearchTerm(e.target.value) }}></input>
                <button type='button' onClick={search}>Search</button>

                <RadioButton setSearch={setSearchType} /> 
               
            </div >
        );
    }


export default Search;



