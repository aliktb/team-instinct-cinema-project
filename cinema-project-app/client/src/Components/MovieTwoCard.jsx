import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  UncontrolledCarousel,
  List,
} from "reactstrap";

const MovieTwoCard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col"
            style={{ display: "flex", "flex-direction": "column" }}
          >
            <UncontrolledCarousel
              items={[
                {
                  altText: "",
                  caption: "",
                  key: 1,
                  src: "https://www.007.com/wp-content/uploads/2020/05/B25_11846_RC.jpg",
                },
                {
                  altText: "",
                  caption: "",
                  key: 2,
                  src: "https://www.007.com/wp-content/uploads/2020/05/B25_08653_RC2-640x427.jpg",
                },
                {
                  altText: "",
                  caption: "",
                  key: 3,
                  src: "https://www.007.com/wp-content/uploads/2020/05/B25_36645_RC2.jpg",
                },
                {
                  altText: "",
                  caption: "",
                  key: 4,
                  src: "https://www.007.com/wp-content/uploads/2020/05/B25_17531_RC2.jpg",
                },
              ]}
            />
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
                    <List>
                      <li>
                        James Bond is enjoying a tranquil life in Jamaica after
                        leaving active service. However, his peace is
                        short-lived as his old CIA friend, Felix Leiter, shows
                        up and asks for help. The mission to rescue a kidnapped
                        scientist turns out to be far more treacherous than
                        expected, leading Bond on the trail…
                      </li>
                      <li>Release date:30 September 2021 (United Kingdom)</li>
                      <li>Director:Cary Joji Fukunaga</li>
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

export default MovieTwoCard;
