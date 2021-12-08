import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

const MovieOneCard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              src="https://cdn.flickeringmyth.com/wp-content/uploads/2021/11/SPider-Man-No-Way-Home-UK-posters-1.jpg"
              style={{ maxWidth: "100%" }}
              id="Spider-Man: No Way Home"
            ></img>
          </div>
          <div
            className="col"
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
                    With Spider-Man's identity now revealed, our friendly
                    neighborhood web-slinger is unmasked and no longer able to
                    separate his normal life as Peter Parker from the high
                    stakes of being a superhero. When Peter asks for help from
                    Doctor Strange, the stakes become even more dangerous,
                    forcing him to discover what it truly means to be
                    Spider-Man. Release date: 15 December 2021 (United Kingdom)
                    Director: Jon Watts.
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
