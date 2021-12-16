import screenImage from '../resources/booking/screenCropped.png';
import seatTaken from '../resources/booking/chairTaken.png';
import seatEmpty from '../resources/booking/chair.png';
import seatClicked from '../resources/booking/chairHover.png';
import seatHover from '../resources/booking/chairSelected.png';
import { useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'reactstrap'

const BookingConfirmation = ({ bookingDetails, setBookingDetails, selectedScreening, setSelectedScreening, paymentButton, setPaymentButton, bookingObject, setPayments, setConfirmation }) => {

    const [children, setChildren] = useState(0);
    const [enteredName, setEnteredName] = useState("");

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
        tempObj.showingId = selectedScreening._id;
        tempObj.screen = selectedScreening.screen;
        tempObj.movieTitle = selectedScreening.movie.title;
        tempObj.showingTime = selectedScreening.time;
        tempObj.showingDate = `${new Date(selectedScreening.date).toUTCString().slice(0, 16)}`;
        let localSeating;
        console.log(operation);
        if (operation === "add") {
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
                <img className='seat' alt={seat.seat} src={seatTaken}></img >
            )
        } else {
            return (
                <img className='seat' id={seat.seat} src={seatEmpty} data-clicked={0} alt={seat.seat} onMouseEnter={(e) => { if (e.target.dataset.clicked != true) { e.target.src = seatHover }; }} onMouseLeave={(e) => { if (e.target.dataset.clicked != true) { e.target.src = seatEmpty } }} onClick={(e) => {
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
            <div className='confirmationContainer'>
                <div className='confirmationDetails'>
                    <div>
                        Screen: {selectedScreening.screen}<br></br>
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
                        <br></br>
                        {paymentButton}
                        <Button onClick={() => { setBookingDetails(bookingObject); setPaymentButton(null); setConfirmation(false) }}>Cancel</Button>
                    </div>
                </div>
                <div className='selectionContainer'>
                    <p className='screenName'>{selectedScreening.screen}</p>
                    <img className='screenImage' src={screenImage} alt={selectedScreening.screen} />
                    <div className='seats'>
                        {seats}
                    </div>
                </div>
            </div>
        </div >
    )


}

export default BookingConfirmation;