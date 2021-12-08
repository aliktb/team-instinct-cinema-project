import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

const MovieThreeCard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              src="https://s1.cdn.autoevolution.com/images/news/the-matrix-4-title-and-trailer-action-revealed-during-wbs-cinemacon-event-168197_1.jpg"
              style={{ maxWidth: "100%" }}
              id="The Matrix Resurrections"
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
                  <CardTitle tag="h5">The Matrix Resurrections</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Description
                  </CardSubtitle>
                  <CardText>
                    Plagued by strange memories, Neo's life takes an unexpected
                    turn when he finds himself back inside the Matrix. Release
                    date:22 December 2021 (United Kingdom). Director:Lana
                    Wachowski.
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

export default MovieThreeCard;
