import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

const MovieFourCard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              src="https://images.thedirect.com/media/article_full/venom-release-date-poster.jpg"
              style={{ maxWidth: "100%" }}
              id="Venom"
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
                  <CardTitle tag="h5">Venom</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Description
                  </CardSubtitle>
                  <CardText>
                    Eddie Brock is still struggling to coexist with the
                    shape-shifting extraterrestrial Venom. When deranged serial
                    killer Cletus Kasady also becomes host to an alien symbiote,
                    Brock and Venom must put aside their differences to stop his
                    reign of terror. Release date: 15 October 2021 (United
                    Kingdom). Trending Director: Andy Serkis.
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

export default MovieFourCard;
