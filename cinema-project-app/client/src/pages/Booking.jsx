import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const Booking = () => {

    const { currentMovie, setCurrentMovie } = useState("");

    const [allMovies, setAllMovies] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:3001/movies/').then((data) => {
            console.log(data.data);
            let moviesList = data.data.map((movie) => {
                return (
                    <DropdownItem>
                        {movie.title}
                    </DropdownItem>
                )
            })
            setAllMovies(moviesList);
        })
    }, [])


    return (
        <div>
            <UncontrolledDropdown>
                <DropdownToggle caret>
                    Select a movie
                </DropdownToggle>
                <DropdownMenu>
                    {allMovies}
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
}

export default Booking;