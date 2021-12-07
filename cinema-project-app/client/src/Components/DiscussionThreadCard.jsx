import DiscussionBoard from "../pages/DiscussionBoard";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { useEffect } from "react";

const DiscussionThreadCard = ({ title, rating, movieId }) => {
  //   const newTitle = filmA.rating;

  useEffect(() => {
    console.log(rating);
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{rating}</CardText>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Link to={`${movieId}`}>
            <Button>Go to thread</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default DiscussionThreadCard;
