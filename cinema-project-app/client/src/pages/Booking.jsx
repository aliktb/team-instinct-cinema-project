import '../css/booking.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import PaymentProvider from "../Components/PaymentProvider";
import { Link } from "react-router-dom";
import Concessions from "../Components/Concessions";
import MovieListBooking from "../Components/MovieListBooking";
import BookingConfirmation from "../Components/BookingConfirmation";



const Booking = ({ searchShowing, setSearchShowing }) => {

    const bookingObject = {
        showingId: "",
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

    const [payments, setPayments] = useState(false);


    const [selectedScreening, setSelectedScreening] = useState();
    const [movieDate, setMovieDate] = useState(new Date().toISOString().slice(0, 10));


    useEffect(() => {
        if (searchShowing) {
            setSelectedScreening(searchShowing);
            setSearchShowing(null)
            setConfirmation(true);
        }
    }, [])

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
            <div className="paymentPage">
                <div className='paymentDetails'>
                    <p>Your Order: </p>
                    <p> Booking Code: {bookingDetails.bookingRef}<br></br>
                        Name: {bookingDetails.name}<br></br>
                        Movie: {bookingDetails.movieTitle}<br></br>
                        Showing: {bookingDetails.showingTime} {bookingDetails.showingDate}<br></br>
                        Screen: {bookingDetails.screen}<br></br>
                        Tickets: {bookingDetails.adults + bookingDetails.children}<br></br>
                        Adults: {bookingDetails.adults}<br></br>
                        children : {bookingDetails.children} < br ></br>

                        Total: £{bookingDetails.total}</p>




                </div>
                <div className="paymentFrame">
                    <PaymentProvider booking={bookingDetails} setBooking={setBookingDetails} setPayments={setPayments} setConfirmation={setConfirmation} />
                    <Button type="button" onClick={() => { clearSeats(); setBookingDetails(bookingObject); setPayments(false); setPaymentButton(null) }}>Cancel</Button>
                </div>
            </div >
        )

    } else if (confirmation) {

        return (
            <div className="extender">
                <BookingConfirmation bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} selectedScreening={selectedScreening} setSelectedScreening={setSelectedScreening} paymentButton={paymentButton} setPaymentButton={setPaymentButton} bookingObject={bookingObject} setPayments={setPayments} setConfirmation={setConfirmation} />
            </div>
        )

    } else {


        return (
            <div className="page-container">
                <div className="bookingContainer">
                    <div>
                        <p>Select the date you would like to book for: </p>
                        <Input type="date" className="dateSelect" onChange={(e) => { console.log(e.target.value); if (e.target.value) { setMovieDate(e.target.value) } else { setMovieDate(new Date().toISOString().slice(0, 10)) } }} />
                        <Link to="/Bookings/View" ><Button className='viewExistingButton'>View existing booking</Button></Link>
                        <Concessions />
                    </div>
                    <div>
                        <MovieListBooking movieDate={movieDate} setSelectedScreening={setSelectedScreening} setConfirmation={setConfirmation} />
                    </div>
                </div >
            </div>
        );
    }
}

export default Booking;