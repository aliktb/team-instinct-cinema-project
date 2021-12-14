import { Button, Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

const MovieListBooking = ({ movieDate, setSelectedScreening, setConfirmation }) => {


    const [movieList, setMovieList] = useState(<></>);

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
                            <Card className="cardMain">
                                <div className="cardFlex">
                                    <div className="cardImageContainer">
                                        <CardImg src={showing.movie.imageUrl} className='cardImageClass'></CardImg>
                                    </div>
                                    <div>
                                        <CardTitle className="cardTitleClass">{showing.movie.title}</CardTitle>
                                        <CardBody>
                                            <CardText>{showing.movie.description}</CardText>
                                            <div className="timesFlex">
                                                <div>
                                                    <p className="standardLabel">Standard:</p>
                                                    <div className="timesContainer">
                                                        {timesFilteredStandard}
                                                    </div>
                                                    <p className="deluxeLabel">Deluxe:</p>
                                                    <div className="timesContainer">
                                                        {timesFilteredDeluxe}
                                                    </div>
                                                </div>
                                                {/* <div>
                                                    <div className="timesContainer">
                                                        {timesFilteredStandard}
                                                    </div>
                                                    <div className="timesContainer">
                                                        {timesFilteredDeluxe}
                                                    </div>
                                                </div> */}
                                            </div>
                                        </CardBody>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                })


                setMovieList(
                    <div>
                        <p className="movieList">Movies on {`${new Date(date).toUTCString().slice(0, 16)}`}: </p>
                        {todaysMovies}
                    </div>
                )

            } else {
                setMovieList(
                    <div>
                        <p className="movieList">Sorry, there are no movies on {`${new Date(date).toUTCString().slice(0, 16)}`}, try another date from the calender</p>
                    </div >
                )
            }
        })
    }

    useEffect(() => {
        console.log(movieDate)
        makeCards(movieDate);
    }, [movieDate, makeCards])

    return (
        <>
            {movieList}
        </>
    );

}

export default MovieListBooking;