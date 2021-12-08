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

const GalleryCardTwo = () => {
  return (
    <>
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://images.mymovies.net/images/film/cin/350x522/fid20689.jpg"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Baby Boss 2</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Description
            </CardSubtitle>
            <CardText>
              There’s only one way to stop an evil genius turning all toddlers
              into unbearable brats: drink a magic formula, turn back into a
              baby for 48 hours, and go undercover. Alec Baldwin’s Boss Baby is
              back.Release date 22nd Oct 2021 Running time 1hr 47mins Director
              Tom McGrath Cast Alec Baldwin, Jeff Goldblum, Amy Sedaris
            </CardText>
            <Button color="secondary" href="/Bookings">
              Book Now
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://images.mymovies.net/images/film/cin/350x522/fid21109.jpg?sc=.99"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Pirates</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Description
            </CardSubtitle>
            <CardText>
              New Year's Eve 1999. Determined to end the century on a bang,
              Cappo, Two Tonne and Kidda drive across London searching for
              tickets for the best millennium party EVER. Don't miss the
              outstanding debut feature from Reggie Yates Release date 26th Nov
              2021 Running time 1hr 20mins Director Reggie Yates Cast Jordan
              Peters,Reda Elazouar,Elliot Edusah
            </CardText>
            <Button color="secondary" href="/Bookings">
              Book Now
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://images.mymovies.net/images/film/cin/350x522/fid20291.jpg"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">West Side Story</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Description
            </CardSubtitle>
            <CardText>
              Rival gangs the Jets and the Sharks face a stalemate over New York
              City’s Upper West Side. But when the Sharks’ leader’s sister,
              Maria, falls for Jets member Tony, tensions really begin to hot up
              between the two sides. The classic Broadway musical inspired by
              William Shakespeare’s Romeo and Juliet gets a film remake, with
              Steven Spielberg directing and a cast that includes Rachel Zegler,
              Ansel Elgort and Rita Moreno. Starring Ansel Elgort,Rachel
              Zegler,Ariana DeBose Running time 2hrs 36mins Release date: 10 Dec
              2021
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

export default GalleryCardTwo;
