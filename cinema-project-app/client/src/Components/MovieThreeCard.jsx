import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  UncontrolledCarousel,
  List,
} from "reactstrap";

const MovieThreeCard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col container">
            <div style={{ maxWidth: "100% "}} className="vertical-center">
            <UncontrolledCarousel
              items={[
                {
                  altText: "",
                  caption: "",
                  key: 1,
                  src: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/cool-new-poster-for-the-matrix-resurrections.jpg",
                },
                {
                  altText: "",
                  caption: "",
                  key: 2,
                  src: "https://www.gameinformer.com/sites/default/files/2021/09/09/4ac40dce/the-matrix-resurrections-trailer-reaction-cinemacon.jpg",
                },
                {
                  altText: "",
                  caption: "",
                  key: 3,
                  src: "https://sportshub.cbsistatic.com/i/2021/11/18/9f2d676a-5b9f-4381-8f4f-25051184b722/the-matrix-resurrections-poster-neo-trinity-header.jpg",
                },
              ]}
            />
            </div>
          </div>
          <div
            className="col"
            style={{ display: "flex", "flex-direction": "column" }}
          >
            <div className="my-5">
              <Card
                style={{ maxWidth: "45rem", height: "12rem" }}
                className="m-2"
              >
                <CardBody>
                  <CardTitle tag="h5">The Matrix Resurrections</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Description
                  </CardSubtitle>
                  <CardText>
                    <List>
                      <li>
                        Plagued by strange memories, Neo's life takes an
                        unexpected turn when he finds himself back inside the
                        Matrix.
                      </li>
                      <li>Release date: 22 December 2021 (United Kingdom)</li>
                      <li>Director: Lana Wachowski</li>
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

export default MovieThreeCard;
