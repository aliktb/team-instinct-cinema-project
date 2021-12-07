import ReactStars from "react-rating-stars-component";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const DiscussionPostCard = (props) => {
  const { post } = props;
  if (post.rating == null) {
    return (
      <div style={{ maxWidth: "500px" }} className="center">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{post.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>{post.text}</CardText>

            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{ maxWidth: "500px" }} className="center">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{post.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>{post.text}</CardText>
            <ReactStars
              {...{
                size: 30,
                count: 5,
                value: post.rating,
                isHalf: true,
                edit: false,
              }}
            />
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
};

export default DiscussionPostCard;
