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

const DiscussionThreadCard = ({
  title,
  rating,
  movieId,
  threadDescription,
}) => {
  //   const newTitle = filmA.rating;

  useEffect(() => {
    console.log(rating);
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>Rating: {rating}</CardText>
          <CardText>{threadDescription}</CardText>
          <Link to={`${movieId}`}>
            <Button color="primary">Go to thread</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default DiscussionThreadCard;
