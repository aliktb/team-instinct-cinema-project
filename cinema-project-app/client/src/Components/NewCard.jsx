import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardColumns,
  CardSubtitle,
  Button
} from "reactstrap";

import "../css/center.css";

const Newcard = () => {
  return (
    <div class="center">
      <CardColumns>
        <Card style={{ maxWidth: "45rem" }} className="m-2">
          <CardImg
            alt="Spider-Man: No Way Home"
            src="https://cdn.flickeringmyth.com/wp-content/uploads/2021/11/SPider-Man-No-Way-Home-UK-posters-1.jpg"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Spider-Man: No Way Home</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            This is our first latest showing currently.
            </CardSubtitle>
            <Button href="/Movie_One">Show More</Button>
          </CardBody>
        </Card>
        <br></br>
        <Card style={{ maxWidth: "45rem" }} className="m-2">
          <CardImg
            alt="No Time To Die"
            src="https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">No Time To Die</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              This is our second latest showing currently.
            </CardSubtitle>
            <Button href="/Movie_Two">Show More</Button>
          </CardBody>
        </Card>
        <br></br>
        <Card style={{ maxWidth: "45rem" }} className="m-2">
          <CardImg
            alt="The Matrix Resurrections"
            src="https://s1.cdn.autoevolution.com/images/news/the-matrix-4-title-and-trailer-action-revealed-during-wbs-cinemacon-event-168197_1.jpg"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">The Matrix Resurrections</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            This is our third latest showing currently.
            </CardSubtitle>
            <Button href="/Movie_Three">Show More</Button>
          </CardBody>
        </Card>
        <br></br>
        <Card style={{ maxWidth: "45rem" }} className="m-2">
          <CardImg
            alt="Venom"
            src="https://images.thedirect.com/media/article_full/venom-release-date-poster.jpg"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Venom</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            This is our fourth latest showing currently.
            </CardSubtitle>
            <Button href="/Movie_Four">Show More</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};

export default Newcard;
