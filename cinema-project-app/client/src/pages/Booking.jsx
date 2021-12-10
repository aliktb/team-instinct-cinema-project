import axios from "axios";
import screenImage from "../resources/booking/screenCropped.png";
import seatTaken from "../resources/booking/chairTaken.png";
import seatEmpty from "../resources/booking/chair.png";
import seatClicked from "../resources/booking/chairHover.png";
import seatHover from "../resources/booking/chairSelected.png";
import React, { useEffect, useState } from "react";

import { Button, Card, CardImg, CardBody, CardText, CardTitle, Input, Alert } from "reactstrap";




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
    const [paymentButton, setPaymentButton] = useState(<></>);
    const [confirmation, setConfirmation] = useState(false)
    const [children, setChildren] = useState(0);
    const [payments, setPayments] = useState(false);


    const [selectedScreening, setSelectedScreening] = useState();
    const [currentMovieList, setCurrentMovieList] = useState();


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


  useEffect(() => {
    axios.get("http://localhost:3001/movies/").then((data) => {
      let moviesList = data.data.map((movie) => {
        return (

            <div style={{ display: "flex" }}>
                <div>
                    <p>Your Order: </p>
                    <p>Name: {bookingDetails.name}<br></br>
                        Movie: {bookingDetails.movieTitle}<br></br>
                        Showing: {bookingDetails.showingTime} {bookingDetails.showingDate}<br></br>
                        Screen: {bookingDetails.screen}<br></br>
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
            let tempScreening = selectedScreening;
            for (let i = 0; i < tempScreening.seats.length; i++) {
                for (let newSeat of seats) {
                    if (tempScreening.seats[i].seat === newSeat) {
                        tempScreening.seats[i].taken = true;
                    }

                }
              }
            }


            console.log(tempScreening);
            axios.put(`http://localhost:3001/showings/update/${selectedScreening._id}`, tempScreening).then((data) => {
                console.log(data.data)
            })
        }

        const calculate = () => { return selectedScreening.screen === "Deluxe" ? ((bookingDetails.adults * 10.99) + (bookingDetails.children * 4.99)).toFixed(2) : ((bookingDetails.adults * 8.99) + (bookingDetails.children * 3.99)).toFixed(2) }

        const updateBooking = (seat, operation) => {
            let tempObj = bookingDetails;
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


        let seats = selectedScreening.seats.map((seat) => {
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
            tempObj.total = (calculate());
            setBookingDetails(tempObj);
            console.log(tempObj);
            setChildren(e.target.value);

        }
      }
      console.log(currentScreenT);
      axios.put(
        `http://localhost:3001/screens/update/${currentScreenT._id}`,
        currentScreenT
      );
    };

    const updateBooking = (seat, operation) => {
      let tempObj = bookingDetails;
      tempObj.screen = currentMovie.screen;
      tempObj.movieTitle = currentMovie.title;
      tempObj.showingTime = currentMovie.time;
      let localSeating;
      console.log(operation);
      if (operation == "add") {
        localSeating = tempObj.seats;
        localSeating.push(seat);
        tempObj.adults = tempObj.adults + 1;
      } else {
        localSeating = tempObj.seats;
        let seatForDeletion = localSeating.indexOf(seat);
        localSeating.splice(seatForDeletion, 1);
        tempObj.adults = tempObj.adults - 1;
      }
      tempObj.seats = localSeating;
      console.log(tempObj.seats);
      while (bookingDetails.children > localSeating.length) {
        tempObj.adults = tempObj.adults + 1;
        tempObj.children = tempObj.children - 1;
      }
      setChildren(tempObj.children);
      console.log(tempObj);
      tempObj.total = (
        bookingDetails.adults * 10.99 +
        bookingDetails.children * 4.99
      ).toFixed(2);
      setBookingDetails(tempObj);
      if (localSeating.length > 0) {
        setPaymentButton(
          <Button
            onClick={() => {
              updateSeating();
              setPayments(true);
            }}
          >
            Pay now
          </Button>
        );
      } else {
        setPaymentButton(<></>);
      }
    };

    console.log(currentMovie);
    console.log(showingArray);
    let filteredShowingArray = showingArray.filter((screen) => {
      return screen.name == currentMovie.screen;
    });
    console.log(filteredShowingArray);
    currentScreenT = filteredShowingArray[0];
    let currentShowing = filteredShowingArray[0].showings.filter((showing) => {
      return (
        `${String(showing.time).slice(0, -2)}:${String(showing.time).slice(
          -2,
          String(showing.time).length
        )}` == currentMovie.time && showing.movie.title == currentMovie.title
      );
    });
    console.log(currentShowing);

    let seats = currentShowing[0].seats.map((seat) => {
      if (seat.taken) {
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
                            Name: <Input type="text" placeholder="Enter your name here..." onChange={(e) => { let tempObj = bookingDetails; tempObj.name = e.target.value; setBookingDetails(tempObj); console.log(bookingDetails.name) }}></Input>
                        </div>
                    </div>
                    <div style={{ position: "relative", width: "50%" }}>
                        <img style={{}} src={screenImage} alt={selectedScreening.screen} />
                        <p style={{ position: "absolute", top: "40px", left: "45%" }}>{selectedScreening.screen}</p>
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
            <div style={{ display: "flex", padding: "4em" }}>
                <div>
                    <p>Select the date you would like to book for: </p><Input type="date" style={{ width: "270px", position: "inline-block" }} onChange={(e) => { console.log(e.target.value); moviesGet(e.target.value) }} />
                </div>
                <div>
                    {currentMovieList}
                </div>
            </div >

        );
      }
    });

    const childrenUpdate = (e) => {
      let tempObj = bookingDetails;
      tempObj.adults = tempObj.seats.length;
      tempObj.children = 0;
      tempObj.adults = tempObj.adults - Number(e.target.value);
      tempObj.children = tempObj.children + Number(e.target.value);
      tempObj.total = (
        bookingDetails.adults * 10.99 +
        bookingDetails.children * 4.99
      ).toFixed(2);
      setBookingDetails(tempObj);
      console.log(tempObj);
      setChildren(e.target.value);
    };

    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "300px" }}>
            {/* <BookingDetails seats={seatArray} booking={bookingDetails} setBooking={setBookingDetails} /> */}
            <div>
              {bookingDetails.screen}
              <br></br>
              {bookingDetails.movieTitle}
              <br></br>
              {bookingDetails.showingTime} {bookingDetails.showingDate}
              <br></br>
              selected seats:<br></br>
              {bookingDetails.seats.map((seat) => {
                return <>{seat}, </>;
              })}
              <br></br>
              Adults: {bookingDetails.adults}
              <br></br>
              Children: {children}
              <br></br>
              <input
                type="range"
                max={bookingDetails.seats.length}
                onChange={(e) => {
                  childrenUpdate(e);
                }}
              />
              <br></br>
              Total: £{bookingDetails.total}
              <br></br>
              Name:{" "}
              <Input
                type="text"
                placeholder="Enter your name here..."
                onChange={(e) => {
                  let tempObj = bookingDetails;
                  tempObj.name = e.target.value;
                  setBookingDetails(tempObj);
                  console.log(bookingDetails.name);
                }}
              ></Input>
            </div>
          </div>
          <div style={{ position: "relative", width: "50%" }}>
            <img
              style={{}}
              src={screenImage}
              alt={filteredShowingArray[0].name}
            />
            <p style={{ position: "absolute", top: "40px", left: "45%" }}>
              {filteredShowingArray[0].name}
            </p>
            <div style={{ display: "flex", "flex-wrap": "wrap" }}>{seats}</div>
          </div>
        </div>
        {paymentButton}
        <Button
          onClick={() => {
            setBookingDetails(bookingObject);
            setConfirmation(false);
          }}
        >
          Cancel
        </Button>
      </div>
    );
  } else {
    return (
      <div style={{ padding: "4em" }}>
        <p style={{ color: "white" }}>
          {movieName} {movieTime}
        </p>
        <UncontrolledDropdown style={{ display: "inline-block" }}>
          <DropdownToggle caret>Select a movie</DropdownToggle>
          <DropdownMenu>{allMovies}</DropdownMenu>
        </UncontrolledDropdown>
        {times}
        {bookButton}
      </div>
    );
  }
};

export default Booking;
