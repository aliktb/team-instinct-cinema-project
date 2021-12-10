import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  UncontrolledCarousel,
  List,
} from "reactstrap";

const MovieFourCard = () => {
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
                  src: "https://variety.com/wp-content/uploads/2020/04/Venom-Let-There-Be-Carnage-04.jpg?w=681&h=383&crop=1",
                },
                {
                  altText: "",
                  caption: "",
                  key: 2,
                  src: "https://www.out.com/sites/default/files/venommovie_750x422_.png",
                },
                {
                  altText: "",
                  caption: "",
                  key: 3,
                  src: "https://www.slashfilm.com/img/gallery/venom-let-there-be-carnage-is-a-love-story-between-man-and-alien-goo-monster-says-director-andy-serkis/intro-1631123258.jpg",
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
                style={{ maxWidth: "45rem" }}
                className="m-2"
              >
                <CardBody>
                  <CardTitle tag="h5">Venom</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Description
                  </CardSubtitle>
                  <CardText>
                    <List>
                      <li>
                        Eddie Brock is still struggling to coexist with the
                        shape-shifting extraterrestrial Venom. When deranged
                        serial killer Cletus Kasady also becomes host to an
                        alien symbiote, Brock and Venom must put aside their
                        differences to stop his reign of terror.
                      </li>
                      <li>Release date: 15 October 2021 (United Kingdom)</li>
                      <li>Director: Andy Serkis</li>
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

export default MovieFourCard;
