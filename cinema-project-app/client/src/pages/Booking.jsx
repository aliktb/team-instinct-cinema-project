import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const Booking = () => {

    const [movieName, setMovieName] = useState("");
    const [movieTime, setMovieTime] = useState("");
    const [showingArray, setShowingArray] = useState([])
    const [seatArray, setSeatArray] = useState([])
    const [currentMovie, setCurrentMovie] = useState({});
    const [times, setTimes] = useState([]);
    const [bookButton, setBookButton] = useState();
    const [confirmation, setConfirmation] = useState(false)

    const [allMovies, setAllMovies] = useState([]);



    const createBookButton = () => {
        setBookButton(
            <Button color="secondary" onClick={() => { setConfirmation(true) }}>Book Now</Button>
        )
    }

    const timesDropdown = (timeList) => {
        let timeOptions = timeList.map((time) => {
            console.log(time);
            return (
                <DropdownItem onClick={() => { setCurrentMovie(time); setMovieTime(time.time); createBookButton(); }}>
                    {time.time}
                </DropdownItem>
            )
        })
        return (
            <UncontrolledDropdown style={{ display: "inline-block" }}>
                <DropdownToggle caret>
                    Select a time
                </DropdownToggle>
                <DropdownMenu>
                    {timeOptions}
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    const selectMovie = (title) => {
        setMovieName(title);
        axios.get(`http://localhost:3001/screens/title/e/${title}`).then((data) => {
            let timeList = [];
            setShowingArray(data.data)
            for (let i = 0; i < data.data.length; i++) {
                let filteredShowings = data.data[i].showings.filter((showing) => { return showing.movie.title == title ? true : false })
                console.log(filteredShowings);
                let obj = {}
                filteredShowings.map((showing) => {
                    timeList.push(obj = {
                        time: `${String(showing.time).slice(0, -2)}:${String(showing.time).slice(-2, String(showing.time).length)}`, screen: data.data[i].name, title: showing.movie.title
                    })
                })
                setTimes(timesDropdown(timeList));
            }
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/movies/').then((data) => {
            let moviesList = data.data.map((movie) => {
                return (
                    <DropdownItem onClick={() => { setTimes([]); selectMovie(movie.title) }}>
                        {movie.title}
                    </DropdownItem>
                )
            })
            setAllMovies(moviesList);
        })
    }, [])

    if (confirmation) {

        console.log(currentMovie);
        console.log(showingArray);
        let filteredShowingArray = showingArray.filter((screen) => { return screen.name == currentMovie.screen ? true : false })
        console.log(filteredShowingArray[0].showings.map((showing) => { return `${String(showing.time).slice(0, -2)}:${String(showing.time).slice(-2, String(showing.time).length)} ${showing.movie.title}` }))
        console.log(currentMovie.time + " " + currentMovie.title);
        filteredShowingArray = filteredShowingArray[0].showings.filter((showing) => { return (`${String(showing.time).slice(0, -2)}:${String(showing.time).slice(-2, String(showing.time).length)}` == currentMovie.time && showing.movie.title == currentMovie.title) ? true : false })
        console.log(filteredShowingArray);


        // showingArray.filter((showing) => { showing.screen == currentMovie.name && showing.time == currentMovie.time })


        return (
            <div></div>
        )

    } else {

        return (
            <div style={{ padding: "4em" }}>
                <p style={{ color: "white" }}>{movieName} {movieTime}</p>
                <UncontrolledDropdown style={{ display: "inline-block" }}>
                    <DropdownToggle caret>
                        Select a movie
                    </DropdownToggle>
                    <DropdownMenu>
                        {allMovies}
                    </DropdownMenu>
                </UncontrolledDropdown>
                {times}
                {bookButton}
            </div >
        );
    }
}

export default Booking;