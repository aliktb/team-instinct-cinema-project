import axios from "axios";
import screenImage from '../resources/booking/screenCropped.png';
import seatTaken from '../resources/booking/chairTaken.png';
import seatEmpty from '../resources/booking/chair.png';
import seatClicked from '../resources/booking/chairHover.png';
import seatHover from '../resources/booking/chairSelected.png';
import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, CardBody, CardText, CardTitle, Input, Alert, Table } from "reactstrap";
import PaymentProvider from "../Components/PaymentProvider";
import { Link } from "react-router-dom";
import Concessions from "../Components/Concessions";



const Booking = () => {

    const bookingObject = {
        bookingRef: 0,
        bookingDate: "",
        showingDate: "",
        showingTime: "",
        name: "",
        seats: [],
        children: 0,
        adults: 0,
        movieTitle: "",
        screen: "",
        total: 0
    }

    const [bookingDetails, setBookingDetails] = useState(bookingObject);
    const [paymentButton, setPaymentButton] = useState(<></>);
    const [confirmation, setConfirmation] = useState(false)
    const [children, setChildren] = useState(0);
    const [payments, setPayments] = useState(false);


    const [selectedScreening, setSelectedScreening] = useState();
    const [currentMovieList, setCurrentMovieList] = useState();
    const [nameError, setNameError] = useState("");
    const [enteredName, setEnteredName] = useState("");


    const makeCards = (date) => {
        axios.get(`http://localhost:3001/showings/date/${date}`).then((data) => {
            console.log(data.data);
            if (data.data.length > 0) {
                let processedMovies = []
                let todaysMovies = data.data.map((showing) => {
                    if (!processedMovies.includes(showing.movie.title)) {
                        let timesStandard = data.data.filter((screening) => { return screening.movie.title === showing.movie.title && screening.screen === "Standard" })
                        timesStandard.sort((time1, time2) => { return time1.timeRaw - time2.timeRaw })
                        let timesFilteredStandard = timesStandard.map((time) => { return <Button onClick={() => { setSelectedScreening(time); setConfirmation(true) }}> {time.time}</Button > })
                        let timesDeluxe = data.data.filter((screening) => { return screening.movie.title === showing.movie.title && screening.screen === "Deluxe" })
                        timesDeluxe.sort((time1, time2) => { return time1.timeRaw - time2.timeRaw })
                        let timesFilteredDeluxe = timesDeluxe.map((time) => { return <Button onClick={() => { setSelectedScreening(time); setConfirmation(true) }}>{time.time}</Button> })

                        processedMovies.push(showing.movie.title)
                        return (
                            <Card style={{ margin: "0px 0px 20px 200px" }}>
                                <div style={{ display: "flex" }}>
                                    <div style={{ height: "200px" }}>
                                        <CardImg src={showing.movie.imageUrl} style={{ height: "100%", width: "100%", marginRight: "20px" }}></CardImg>
                                    </div>
                                    <div>
                                        <CardTitle>{showing.movie.title}</CardTitle>
                                        <CardBody>
                                            <CardText>{showing.movie.description}</CardText>
                                            <div style={{ display: "flex" }}>
                                                <div>
                                                    <p style={{ margin: "10px 8px 6px 8px" }}>Standard:</p>
                                                    <p style={{ margin: "16px 8px 0px 8px" }}>Deluxe:</p>
                                                </div>
                                                <div>
                                                    <div style={{ display: "flex", margin: "5px" }}>
                                                        {timesFilteredStandard}
                                                    </div>
                                                    <div style={{ display: "flex", margin: "5px" }}>
                                                        {timesFilteredDeluxe}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                })


                setCurrentMovieList(
                    <div>
                        {/* <p>Movies on {`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`}: </p> */}
                        <p style={{ marginLeft: "200px" }}>Movies on {`${new Date(date).toUTCString().slice(0, 16)}`}: </p>

                        {todaysMovies}
                    </div>
                )

            } else {
                setCurrentMovieList(
                    <div>
                        <p style={{ marginLeft: "200px" }}>Sorry, there are no movies on {`${new Date(date).toUTCString().slice(0, 16)}`}, try another date from the calender</p>
                    </div >
                )
            }
        })
    }

    useEffect(() => {
        makeCards(new Date().toISOString().slice(0, 10));
    }, [])



    const moviesGet = (selectedDate) => {
        makeCards(selectedDate);
    }


    if (payments) {

        const clearSeats = () => {
            let seats = bookingDetails.seats;
            console.log(seats);
            let tempScreening = selectedScreening;
            for (let i = 0; i < tempScreening.seats.length; i++) {
                for (let newSeat of seats) {
                    if (tempScreening.seats[i].seat === newSeat) {
                        tempScreening.seats[i].taken = false;
                    }
                }
            }

            console.log(tempScreening);
            axios.put(`http://localhost:3001/showings/update/${selectedScreening._id}`, tempScreening).then((data) => {
                console.log(data.data)
            })
        }

        return (
            <div style={{ display: "flex" }}>
                <div>
                    <p>Your Order: </p>
                    <p> Booking Code: {bookingDetails.bookingRef}<br></br>
                        Name: {bookingDetails.name}<br></br>
                        Movie: {bookingDetails.movieTitle}<br></br>
                        Showing: {bookingDetails.showingTime} {bookingDetails.showingDate}<br></br>
                        Screen: {bookingDetails.screen}<br></br>
                        Tickets: {bookingDetails.adults + bookingDetails.children}<br></br>
                        Adults: {bookingDetails.adults}<br></br>
                        children : {bookingDetails.children} < br ></br>

                        Total: {bookingDetails.total}</p>



                    <Button type="button" onClick={() => { clearSeats(); setBookingDetails(bookingObject); setPayments(false); setPaymentButton(null) }}>Cancel</Button>
                    {/* <Button type="button">confirm</Button> */}
                </div>
                <div>
                    <PaymentProvider booking={bookingDetails} />
                </div>
            </div >
        )

    } else if (confirmation) {

        let userName = "";

        const confirmExit = () => {
            console.log("exiting")
            window.confirm("are you sure")
        }

        window.onbeforeunload = confirmExit;

        const updateSeating = () => {
            let seats = bookingDetails.seats;
            console.log(seats);
            let tempScreening = selectedScreening;
            for (let i = 0; i < tempScreening.seats.length; i++) {
                for (let newSeat of seats) {
                    if (tempScreening.seats[i].seat === newSeat) {
                        tempScreening.seats[i].taken = true;
                    }
                }
            }

            console.log(tempScreening);
            axios.put(`http://localhost:3001/showings/update/${selectedScreening._id}`, tempScreening).then((data) => {
                console.log(data.data)
            })
        }

        const calculate = () => { return selectedScreening.screen === "Deluxe" ? ((bookingDetails.adults * 10.99) + (bookingDetails.children * 4.99)).toFixed(2) : ((bookingDetails.adults * 8.99) + (bookingDetails.children * 3.99)).toFixed(2) }

        let testVar = false;

        const paymentButtonUpdate = () => {
            if (bookingDetails.seats.length > 0 && testVar) {
                setPaymentButton(
                    <Button onClick={() => { updateSeating(); setPayments(true) }}>Pay now</Button>
                )
            } else {
                setPaymentButton(
                    <></>
                )
            }
        }

        const updateBooking = (seat, operation) => {
            let tempObj = bookingDetails;
            tempObj.bookingRef = String(new Date().getTime()).slice(-8);
            tempObj.screen = selectedScreening.screen;
            tempObj.movieTitle = selectedScreening.movie.title;
            tempObj.showingTime = selectedScreening.time;
            tempObj.showingDate = `${new Date(selectedScreening.date).toUTCString().slice(0, 16)}`;
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
            tempObj.total = (calculate());
            setBookingDetails(tempObj);
            if (enteredName.length > 0) {
                testVar = true
            }
            paymentButtonUpdate();
        }


        let seats = selectedScreening.seats.map((seat) => {
            if (seat.taken) {
                return (
                    <img style={{ width: "8%", margin: "1%" }} src={seatTaken}></img >
                )
            } else {
                return (
                    <img style={{ width: "8%", margin: "1%" }} id={seat.seat} src={seatEmpty} data-clicked={0} alt={seat.seat} onMouseEnter={(e) => { if (e.target.dataset.clicked != true) { e.target.src = seatHover }; }} onMouseLeave={(e) => { if (e.target.dataset.clicked != true) { e.target.src = seatEmpty } }} onClick={(e) => {
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
            tempObj.total = (calculate());
            setBookingDetails(tempObj);
            console.log(tempObj);
            setChildren(e.target.value);
        }

        const nameUpdate = (e) => {
            testVar = false
            let tempObj = bookingDetails;
            tempObj.name = e.target.value;
            setBookingDetails(tempObj);
            setEnteredName(e.target.value)
            if (e.target.value.length > 0) {
                testVar = true
            }
            console.log(bookingDetails.name);
            paymentButtonUpdate();
        }

        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "300px" }}>
                        <div>
                            {selectedScreening.screen}<br></br>
                            {selectedScreening.movie.title}<br></br>
                            {selectedScreening.time} {new Date(selectedScreening.date).toUTCString().slice(0, 16)}<br></br>
                            selected seats:<br></br>
                            {bookingDetails.seats.map((seat) => { return <>{seat}, </> })}<br></br>
                            Adults: {bookingDetails.adults}<br></br>
                            Children: {children}<br></br>
                            <input type="range" max={bookingDetails.seats.length} onChange={(e) => { childrenUpdate(e) }} /><br></br>
                            Total: £{bookingDetails.total}<br></br>
                            Name: {enteredName}<br></br>
                            <Input type="text" placeholder="Enter your name here..." onChange={(e) => { nameUpdate(e) }}></Input>
                            <p>{nameError}</p>
                        </div>
                    </div>
                    <div style={{ position: "relative", width: "50%", textAlign: "center", margin: "0px auto 0px auto" }}>
                        <p style={{ marginBottom: "0px", }}>{selectedScreening.screen}</p>
                        <img style={{ width: "100%" }} src={screenImage} alt={selectedScreening.screen} />
                        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
                            {seats}
                        </div>
                    </div>
                </div>
                {paymentButton}
                <Button onClick={() => { setBookingDetails(bookingObject); setPaymentButton(null); setConfirmation(false) }}>Cancel</Button>
            </div >
        )

    } else {


        return (
            <div className="page-container">
                <Link to="/Bookings/View"><Button>View existing booking</Button></Link>
                <div style={{ display: "flex", padding: "4em" }}>
                    <div>
                        <p>Select the date you would like to book for: </p>
                        <Input type="date" style={{ width: "270px", position: "inline-block" }} onChange={(e) => { console.log(e.target.value); moviesGet(e.target.value) }} />
                        <Concessions />
                    </div>
                    <div>
                        {currentMovieList}
                    </div>
                </div >
            </div>
        );
    }
}

export default Booking;