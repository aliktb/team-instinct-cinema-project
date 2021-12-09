import axios from "axios";
import screenImage from '../resources/booking/screenCropped.png';
import seatTaken from '../resources/booking/chairTaken.png';
import seatEmpty from '../resources/booking/chair.png';
import seatClicked from '../resources/booking/chairHover.png';
import seatHover from '../resources/booking/chairSelected.png';
import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from "reactstrap";

let modifiedSeats;
let currentScreenT;

const Booking = () => {

    const bookingObject = {
        bookingRef: 0,
        showingDate: 0,
        showingTime: 0,
        name: "",
        seats: [],
        children: 0,
        adults: 0,
        movieTitle: "",
        screen: "",
        total: 0
    }

    const [bookingDetails, setBookingDetails] = useState(bookingObject);
    // const [currentScreen, setCurrentScreen] = useState();
    const [movieName, setMovieName] = useState("");
    const [movieTime, setMovieTime] = useState("");
    const [showingArray, setShowingArray] = useState([])
    const [currentMovie, setCurrentMovie] = useState({});
    const [times, setTimes] = useState([]);
    const [paymentButton, setPaymentButton] = useState(<></>);
    const [bookButton, setBookButton] = useState();
    const [confirmation, setConfirmation] = useState(false)
    const [children, setChildren] = useState(0);
    const [payments, setPayments] = useState(false);
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
                        time: `${String(showing.time).slice(0, -2)}:${String(showing.time).slice(-2, String(showing.time).length)}`, timeNumerical: showing.time, screen: data.data[i].name, title: showing.movie.title
                    })
                })
                setTimes(timesDropdown(timeList.sort((showing, showing2) => { return showing.timeNumerical - showing2.timeNumerical })));
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




    if (payments) {

        const clearSeats = () => {
            let seats = bookingDetails.seats;
            console.log(modifiedSeats);
            console.log(currentScreenT);
            modifiedSeats = seats;
            for (let a = 0; a < currentScreenT.showings.length; a++) {
                if (currentScreenT.showings[a].time == currentMovie.timeNumerical) {
                    if (currentScreenT.showings[a].movie.title == currentMovie.title) {
                        console.log(currentScreenT.showings[a].seats);
                        for (let b = 0; b < currentScreenT.showings[a].seats.length; b++) {
                            for (let newSeat of modifiedSeats) {
                                if (currentScreenT.showings[a].seats[b].seat == newSeat) {
                                    currentScreenT.showings[a].seats[b].taken = false;
                                }
                            }
                        }
                    }
                }
            }
            console.log(currentScreenT);
            axios.put(`http://localhost:3001/screens/update/${currentScreenT._id}`, currentScreenT);
        }

        return (
            <div style={{ display: "flex" }}>
                <div>
                    <p>Your Order: </p>
                    <p>Name: {bookingDetails.name}<br></br>
                        Movie: {bookingDetails.movieTitle}<br></br>
                        Showing: {bookingDetails.showingTime} {bookingDetails.showingDate}<br></br>
                        Screen: {bookingDetails.screen.slice(-1)}<br></br>
                        Tickets: {bookingDetails.adults + bookingDetails.children}<br></br>
                        Adults: {bookingDetails.adults}<br></br>
                        children : {bookingDetails.children} < br ></br>

                        Total: {bookingDetails.total}</p>



                    <Button type="button" onClick={() => { clearSeats(); setBookingDetails(bookingObject); setPayments(false) }}>Cancel</Button>
                    <Button type="button">confirm</Button>
                </div>
                <div>
                </div>
            </div >
        )

    } else if (confirmation) {




        const updateSeating = () => {
            let seats = bookingDetails.seats;
            console.log(seats);
            console.log(currentScreenT);
            modifiedSeats = seats;
            for (let a = 0; a < currentScreenT.showings.length; a++) {
                if (currentScreenT.showings[a].time == currentMovie.timeNumerical) {
                    if (currentScreenT.showings[a].movie.title == currentMovie.title) {
                        console.log(currentScreenT.showings[a].seats);
                        for (let b = 0; b < currentScreenT.showings[a].seats.length; b++) {
                            for (let newSeat of seats) {
                                if (currentScreenT.showings[a].seats[b].seat == newSeat) {
                                    currentScreenT.showings[a].seats[b].taken = true;
                                }
                            }
                        }
                    }
                }
            }
            console.log(currentScreenT);
            axios.put(`http://localhost:3001/screens/update/${currentScreenT._id}`, currentScreenT);
        }

        const updateBooking = (seat, operation) => {
            let tempObj = bookingDetails;
            tempObj.screen = currentMovie.screen;
            tempObj.movieTitle = currentMovie.title;
            tempObj.showingTime = currentMovie.time;
            let localSeating;
            console.log(operation);
            if (operation == "add") {
                localSeating = tempObj.seats;
                localSeating.push(seat)
                tempObj.adults = tempObj.adults + 1;
            } else {
                localSeating = tempObj.seats;
                let seatForDeletion = localSeating.indexOf(seat);
                localSeating.splice(seatForDeletion, 1);
                tempObj.adults = tempObj.adults - 1;
            }
            tempObj.seats = localSeating;
            console.log(tempObj.seats)
            while (bookingDetails.children > localSeating.length) {
                tempObj.adults = tempObj.adults + 1;
                tempObj.children = tempObj.children - 1;
            }
            setChildren(tempObj.children);
            console.log(tempObj);
            tempObj.total = ((bookingDetails.adults * 10.99) + (bookingDetails.children * 4.99)).toFixed(2);
            setBookingDetails(tempObj);
            if (localSeating.length > 0) {
                setPaymentButton(
                    <Button onClick={() => { updateSeating(); setPayments(true) }}>Pay now</Button>
                )
            } else {
                setPaymentButton(
                    <></>
                )
            }
        }


        console.log(currentMovie);
        console.log(showingArray);
        let filteredShowingArray = showingArray.filter((screen) => { return (screen.name == currentMovie.screen) })
        console.log(filteredShowingArray);
        currentScreenT = filteredShowingArray[0];
        let currentShowing = filteredShowingArray[0].showings.filter((showing) => { return (`${String(showing.time).slice(0, -2)}:${String(showing.time).slice(-2, String(showing.time).length)}` == currentMovie.time && showing.movie.title == currentMovie.title) })
        console.log(currentShowing);

        let seats = currentShowing[0].seats.map((seat) => {
            if (seat.taken) {
                return (
                    <img style={{ width: "80px", margin: "5px" }} src={seatTaken}></img >
                )
            } else {
                return (
                    <img style={{ width: "80px", margin: "5px" }} id={seat.seat} src={seatEmpty} data-clicked={0} alt={seat.seat} onMouseEnter={(e) => { if (e.target.dataset.clicked != true) { e.target.src = seatHover }; }} onMouseLeave={(e) => { if (e.target.dataset.clicked != true) { e.target.src = seatEmpty } }} onClick={(e) => {
                        e.target.src = seatClicked; e.target.dataset.clicked = e.target.dataset.clicked == 0 ? 1 : 0; e.target.src = seatHover; if (e.target.dataset.clicked == true) { updateBooking(e.target.id, "add") } else { updateBooking(e.target.id, "remove") };
                    }} />
                )
            }
        })

        const childrenUpdate = (e) => {

            let tempObj = bookingDetails;
            tempObj.adults = tempObj.seats.length;
            tempObj.children = 0;
            tempObj.adults = tempObj.adults - Number(e.target.value);
            tempObj.children = tempObj.children + Number(e.target.value);
            tempObj.total = ((bookingDetails.adults * 10.99) + (bookingDetails.children * 4.99)).toFixed(2);
            setBookingDetails(tempObj);
            console.log(tempObj);
            setChildren(e.target.value);
        }

        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "300px" }}>
                        {/* <BookingDetails seats={seatArray} booking={bookingDetails} setBooking={setBookingDetails} /> */}
                        <div>
                            {bookingDetails.screen}<br></br>
                            {bookingDetails.movieTitle}<br></br>
                            {bookingDetails.showingTime} {bookingDetails.showingDate}<br></br>
                            selected seats:<br></br>
                            {bookingDetails.seats.map((seat) => { return <>{seat}, </> })}<br></br>
                            Adults: {bookingDetails.adults}<br></br>
                            Children: {children}<br></br>
                            <input type="range" max={bookingDetails.seats.length} onChange={(e) => { childrenUpdate(e) }} /><br></br>
                            Total: £{bookingDetails.total}<br></br>
                            Name: <Input type="text" placeholder="Enter your name here..." onChange={(e) => { let tempObj = bookingDetails; tempObj.name = e.target.value; setBookingDetails(tempObj); console.log(bookingDetails.name) }}></Input>
                        </div>
                    </div>
                    <div style={{ position: "relative", width: "50%" }}>
                        <img style={{}} src={screenImage} alt={filteredShowingArray[0].name} />
                        <p style={{ position: "absolute", top: "40px", left: "45%" }}>{filteredShowingArray[0].name}</p>
                        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
                            {seats}
                        </div>
                    </div>
                </div>
                {paymentButton}
                <Button onClick={() => { setBookingDetails(bookingObject); setConfirmation(false); }}>Cancel</Button>
            </div >
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