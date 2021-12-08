import { useEffect, useState } from "react";

const BookingDetails = ({ seats, booking, setBooking }) => {

    const [details, setDetails] = useState(<></>);

    const updateBooking = (value) => {
        let bookingObj = booking;
        console.log(bookingObj);
        if (value) {
            bookingObj.children = bookingObj.children + 1;
            bookingObj.adults = bookingObj.adults - 1;
        } else {
            bookingObj.children = bookingObj.children - 1;
            bookingObj.adults = bookingObj.adults + 1;
        }
        console.log(bookingObj);
        setBooking(bookingObj);
    }

    useEffect(() => {
        setDetails(seats.map((seat) => {
            return (
                <div>
                    {seat}
                    <br></br>
                    <label>child ticket?</label>
                    <input type="checkbox" id={seat} onChange={(e) => { updateBooking(e.target.checked) }}></input>
                    <br></br>
                </div>
            )
        })
        )
    })

    return (
        <div>
            Selected seats:
            {details}
        </div>
    );
}

export default BookingDetails;