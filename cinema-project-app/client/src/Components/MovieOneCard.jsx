import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  UncontrolledCarousel,
  List,
} from "reactstrap";
import React from 'react';
import "../css/moviecards.css";

const MovieOneCard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-lg container"
            style={{ display: "flex", "flex-direction": "column" }}
          >
            <div style={{ maxWidth: "100% "}} className="vertical-center">
            <UncontrolledCarousel
              items={[
                {
                  altText: "",
                  caption: "",
                  key: 1,
                  src: "https://media1.popsugar-assets.com/files/thumbor/-m0-1pXULQO3asqNegPNdIDTIbc/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/02/24/891/n/1922283/93a881e66036b5e31f4b72.14118522_/i/spider-man-3-movie-details.jpg",
                },
                {
                  altText: "",
                  caption: "",
                  key: 2,
                  src: "https://www.nme.com/wp-content/uploads/2021/08/spider-man-no-way-home-teaser-trailer-696x442.jpg",
                },
                {
                  altText: "",
                  caption: "",
                  key: 3,
                  src: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2Fimage-exchange%2F2021%2F08%2Fie_75213-850x560.jpeg",
                },
              ]}
            />
            </div>
          </div>
          <div
            className="col-sm"
            style={{ display: "flex", "flex-direction": "column" }}
          >
            <div className="my-5">
              <Card
                style={{ maxWidth: "45rem", height: "17rem" }}
                className="m-2"
              >
                <CardBody>
                  <CardTitle tag="h5">Spider-Man: No Way Home</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Description
                  </CardSubtitle>
                  <CardText>
                    <List>
                      <li>
                        With Spider-Man's identity now revealed, our friendly
                        neighborhood web-slinger is unmasked and no longer able
                        to separate his normal life as Peter Parker from the
                        high stakes of being a superhero. When Peter asks for
                        help from Doctor Strange, the stakes become even more
                        dangerous, forcing him to discover what it truly means
                        to be Spider-Man.
                      </li>
                      <li>Release date: 15 December 2021 (United Kingdom)</li>
                      <li>Director: Jon Watts</li>
                    </List>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieOneCard;