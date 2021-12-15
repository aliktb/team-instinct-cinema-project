import { useState } from "react";
import Search from "../Components/Search";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardGroup,
  Button,
} from "reactstrap";

const SearchPage = () => {
  const [results, setResults] = useState([]);

  if (results.length >= 1) {
    console.log(results);
    const card = results.map((movies) => {
      console.log(movies);

      let tagsAsString = movies.tags[0];

      for (let i = 1; i < movies.tags.length; i++) {
        tagsAsString = tagsAsString + ", " + movies.tags[i];
        console.log(tagsAsString);
      }

      const castList = movies.cast.map((castMember, index) => {
        return <li key={index}> {castMember}</li>;
      });

      // let castList;

      // for (let i = 0; i < movies.cast.length; i++) {
      //   castList += "<li>{movies.cast}</li>";
      // }

      const standardShowing = ((movie) => {
        if (movie.nextStandard) {
          return (
            <>
              <CardTitle tag="h5">
                <b>Standard Date: </b>
                {new Date(movie.nextStandard[0].date).toUTCString().slice(0, 16)}
              </CardTitle>
              {movie.nextStandard.map((showing) => { return <Button>{showing.time}</Button> })}

            </>
          )
        }
      })

      const deluxeShowing = ((movie) => {
        if (movie.nextDeluxe) {
          return (
            <>
              <CardTitle tag="h5">
                <b>Deluxe Date: </b>
                {movie.nextDeluxe[0].date}
              </CardTitle>
              {movie.nextDeluxe.map((showing) => { return <Button>{showing.time}</Button> })}
            </>
          )
        }
      })

      return (
        <span>
          <Card
            body
            colour="primary"
            outline
            style={{
              width: "20rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
            }}
            className="m-2"
          >
            {/* <CardImg alt={movies.title} top width="100%" /> */}
            <CardBody style={{ padding: "2px" }}>
              <CardImg
                alt={movies.title}
                src={movies.imageUrl}
                width="100%"
                style={{ marginBottom: "1rem", borderRadius: "0.5rem" }}
              />
              <CardTitle tag="h5">
                <b>Title:</b> {movies.title}
              </CardTitle>
              <CardTitle tag="h5">
                <b>Tags: </b>
                {tagsAsString}
                {/* {movies.tags[0]} */}
              </CardTitle>
              <CardTitle tag="h5">
                <b>Rating: </b>
                {movies.rating}
              </CardTitle>
              <CardTitle tag="h5">
                <b>Runtime: </b>
                {movies.runtime} minutes
              </CardTitle>
              <CardTitle tag="h5">
                <b>Release Date: </b>
                {new Date(movies.release).toUTCString().slice(0, 16)}
              </CardTitle>
              <CardTitle tag="h5">
                <b>Castlist: </b>
                <ul>{castList}</ul>
              </CardTitle>
              <CardTitle tag="h5">
                <b>Next Showings: </b>
                {standardShowing(movies)}
                {deluxeShowing(movies)}
              </CardTitle>
            </CardBody>
          </Card>
        </span>
      );
    });

    return (
      <div className="page-container">
        <Search setResults={setResults} />
        <div>
          <CardGroup>
            <>{card}</>
          </CardGroup>
        </div>
      </div>
    );
  } else {
    console.log(results);
    return (
      <div className="page-container">
        <Search setResults={setResults} />
      </div>
    );
  }
};

export default SearchPage;
