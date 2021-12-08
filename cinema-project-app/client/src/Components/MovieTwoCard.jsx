import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

const MovieTwoCard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg"
              style={{ maxWidth: "100%" }}
              id="No Time To Die"
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
                  <CardTitle tag="h5">No Time To Die</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Description
                  </CardSubtitle>
                  <CardText>
                    James Bond is enjoying a tranquil life in Jamaica after
                    leaving active service. However, his peace is short-lived as
                    his old CIA friend, Felix Leiter, shows up and asks for
                    help. The mission to rescue a kidnapped scientist turns out
                    to be far more treacherous than expected, leading Bond on
                    the trail… MORE Release date:30 September 2021 (United
                    Kingdom)Trending Director:Cary Joji Fukunaga
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

export default MovieTwoCard;
