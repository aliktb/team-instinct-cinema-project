import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from 'reactstrap'


const ViewBooking = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [code, setCode] = useState("");

    const searchType = (searchTerm) => {
        if (searchTerm.length === 8) {
            axios.get(`http://localhost:3001/bookings/ref/${searchTerm}`).then((data) => {
                setBookingDetails(data.data);
                setIsLoaded(true);
            })
        } else {
            axios.get(`http://localhost:3001/bookings/${searchTerm}`).then((data) => {
                setBookingDetails(data.data);
                setIsLoaded(true);
            })
        }
    }




    if (isLoaded) {

        if (bookingDetails.movieTitle) {

            return (
                <div className="bookingRefExtender">
                    <Link to="/Bookings"><Button>Back to bookings page</Button></Link>
                    <p>Booking Reference: {bookingDetails._id}</p>
                    <p>Booking code: {bookingDetails.bookingRef}</p>
                    <p>Booking Name: {bookingDetails.name}</p>
                    <p>Title: {bookingDetails.movieTitle}</p>
                    <p>Showing Details: Screen: {bookingDetails.screen} at {bookingDetails.showingTime} on {bookingDetails.showingDate}</p>
                    <p>Number of Tickets: {bookingDetails.seats.length}</p>
                    <p>Seats: {bookingDetails.seats.join(', ')}</p>
                    <p>Total: £{bookingDetails.total}</p>
                    <Button onClick={() => { setIsLoaded(false) }}>Back</Button>
                </div>
            );

        } else {
            return (
                <div className="bookingRefExtender">
                    <Link to="/Bookings"><Button>Back to bookings page</Button></Link>
                    <p>No booking found</p>
                    <Button onClick={() => { setIsLoaded(false) }}>Back</Button>
                </div>
            )
        }

    } else {
        return (
            <div className="bookingRefExtender">
                <Link to="/Bookings"><Button>Back to bookings page</Button></Link>
                <p>Please enter a booking code or reference:</p>
                <Input style={{ width: "300px" }} type="text" onChange={(e) => { setCode(e.target.value) }} />
                <Button onClick={() => { searchType(code) }}>Find My Booking</Button>
            </div>
        );
    }
}

export default ViewBooking;