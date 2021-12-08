import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const GalleryCard = () => {
  return (
    <>
      <CardGroup>
        <Card style={{ Maxwidth: "18rem" }} className="m-2">
          <CardImg
            alt="Card image cap"
            src="https://images.mymovies.net/images/film/cin/350x522/fid19715.jpg?sc=.99"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">The King's Man</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Description
            </CardSubtitle>
            <CardText>
              When a group of villains devises a plot to kill millions around
              the world, a nobleman and his protégée must step up to stop them.
              Gemma Arterton, Ralph Fiennes and Harris Dickinson star in this
              action-packed prequel to the acclaimed Kingsman film series.
              Starring Ralph Fiennes, Gemma Arterton, Rhys Ifans, Matthew Goode,
              Tom Hollander, Daniel Bruhl, Djimon Hounsou, Charles Dance, Harris
              Dickinson Running time 2hrs 11mins Release date: 26 Dec 2021
            </CardText>
            <Button color="secondary" href="/Bookings">
              Book Now
            </Button>
          </CardBody>
        </Card>
        <Card style={{ Maxwidth: "18rem" }} className="m-2">
          <CardImg
            alt="Card image cap"
            src="https://images.mymovies.net/images/film/cin/350x522/fid21222.jpg?sc=.99"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Resident Evil</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Description
            </CardSubtitle>
            <CardText>
              In 'Resident Evil: Welcome To Raccoon City', once the booming home
              of pharmaceutical giant Umbrella Corporation, Raccoon City is now
              a dying Midwestern town. The company's exodus left the city a
              wasteland... with great evil brewing below the surface. Starring
              Hannah John-Kamen,Robbie Amell,Kaya Scoldelario Running time 1hr
              47mins
            </CardText>
            <Button color="secondary" href="/Bookings">
              Book Now
            </Button>
          </CardBody>
        </Card>
        <Card style={{ Maxwidth: "18rem" }} className="m-2">
          <CardImg
            alt="Card image cap"
            src="https://images.mymovies.net/images/film/cin/350x522/fid20970.jpg?sc=.99"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Ron's Gone Wrong</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Description
            </CardSubtitle>
            <CardText>
              20th Century Studios and Locksmith Animation's "Ron's Gone Wrong"
              is the story of Barney, a socially awkward middle-schooler and
              Ron, his new walking, talking, digitally-connected device, which
              is supposed to be his "Best Friend out of the Box." Release date
              15th Oct 2021 Running time 1hr 47mins Director Alessandro Carloni
              Cast Zach Galifianakis; Jack Dylan Grazer; Olivia Colman
            </CardText>
            <Button color="secondary" href="/Bookings">
              Book Now
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default GalleryCard;
