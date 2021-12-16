import axios from "axios";
import { useState } from "react";
import { Link, Navigate, Route } from "react-router-dom";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Booking from "./Booking";



const ViewBooking = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [code, setCode] = useState("");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const toggleConfirmation = () => setConfirmationModal(!confirmationModal);


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

    const cancellation = () => {
        axios.delete(`http://localhost:3001/bookings/delete/${bookingDetails._id}`).then((response) => {
            if (response.status != 204) {
                window.alert("There has been an error, please try again")
            } else {
                axios.get(`http://localhost:3001/showings/${bookingDetails.showingId}`).then((response) => {
                    let newObj = response.data
                    newObj.seats.map((seat) => { for (let bookedSeat of bookingDetails.seats) { if (seat.seat === bookedSeat) { seat.taken = false } } })
                    axios.put(`http://localhost:3001/showings/update/${bookingDetails.showingId}`, newObj).then((response) => {
                        console.log(response)
                        if (response.status != 202) {
                            window.alert("There has been an error, please try again")
                        } else {
                            toggle();
                            toggleConfirmation();

                        }
                    })
                })

            }
        })
    }


    if (isLoaded) {

        if (bookingDetails._id) {

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
                    <Button color="danger" className="mx-5" onClick={toggle}>Cancel Booking</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            Are you sure?
                        </ModalHeader>
                        <ModalBody>
                            We do not offer refunds for cancellations.
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => { toggle(); console.log(modal) }}>Back</Button>
                            <Button color="danger" onClick={cancellation}>Cancel Booking</Button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={confirmationModal} toggle={toggleConfirmation}>
                        <ModalHeader toggle={toggleConfirmation}>
                            Confirmation
                        </ModalHeader>
                        <ModalBody>
                            Booking Cancelled
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => { toggleConfirmation(); setIsLoaded(false); }}>Back</Button>
                        </ModalFooter>
                    </Modal>
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
                <Input className="bookingRefInput" type="text" onChange={(e) => { setCode(e.target.value) }} />
                <Button onClick={() => { searchType(code) }}>Find My Booking</Button>
            </div>
        );
    }

}
export default ViewBooking;