import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  Button
} from "reactstrap";

const Newcard = () => {
  return (
    <div>
      <CardColumns>
        <Card style={{ maxWidth: "45rem", height: "46rem" }} className="m-2">
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
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Show More</Button>
          </CardBody>
        </Card>
        <br></br>
        <Card style={{ maxWidth: "45rem", height: "45rem" }} className="m-2">
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
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Show More</Button>
          </CardBody>
        </Card>
        <br></br>
        <Card style={{ maxWidth: "45rem", height: "36rem" }} className="m-2">
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
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Show More</Button>
          </CardBody>
        </Card>
        <br></br>
        <Card style={{ maxWidth: "45rem", height: "37rem" }} className="m-2">
          <CardImg
            alt="Venom"
            src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
            top
            width="100%"
            // height="80%"
          />
          <CardBody>
            <CardTitle tag="h5">Venom</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            This is our fourth latest showing currently.
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Show More</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};

export default Newcard;
