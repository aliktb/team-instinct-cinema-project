import axios from "axios";
import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalInput,
  ModalFooter,
} from "reactstrap";

import { useState } from "react";

const DiscussionPostCard = (props) => {
  const { post } = props;
  const [deleteState, setDeleteState] = useState(0);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const handleUpdatePost = (e) => {
    e.preventDefault();
    console.log("test");

    axios
      .put(`http://localhost:3001/posts/update/${post._id}`, post)
      .then((response) => console.log(response));

    console.log(`post updated : ${post}`);
    toggle();
  };

  const handleDeletePost = (e) => {
    e.preventDefault();
    setDeleteState(1);

    axios
      .delete(`http://localhost:3001/posts/delete/${post._id}`)
      .then((response) => console.log(response));
    console.log("post deleted");
    console.log(deleteState);
  };

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

            <Button onClick={handleDeletePost}>Delete</Button>
            <Button>Update</Button>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{ maxWidth: "500px" }} className="center">
        <Card>
          <CardBody id="cardBodyId">
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

            <Button color="success" onClick={toggle}>
              Update
            </Button>

            <Button onClick={handleDeletePost}>Delete</Button>
            <div>
              <Button color="danger" onClick={function noRefCheck() {}}>
                Click Me
              </Button>
              <Modal toggle={function noRefCheck() {}}>
                <ModalHeader toggle={function noRefCheck() {}}>
                  Modal title
                </ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={function noRefCheck() {}}>
                    Do Something
                  </Button>{" "}
                  <Button onClick={function noRefCheck() {}}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </CardBody>
        </Card>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Post</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="authorName">Name</Label>
              <Input
                id="authorName"
                name="Name"
                placeholder="Enter name"
                type="text"
                defaultValue={post.name}
                onChange={(e) => (post.name = e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="commentBox">Comment</Label>
              <Input
                id="commentBox"
                name="text"
                type="textarea"
                rows="5"
                placeholder="Insert comment here"
                defaultValue={post.text}
                onChange={(e) => (post.text = e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ratingInput">Rating</Label>
              <ReactStars
                id="ratingInput"
                {...{
                  size: 50,
                  count: 5,
                  color: "grey",
                  activeColor: "gold",
                  value: post.rating,
                  isHalf: true,
                  onChange: (e) => {
                    console.log(e);
                    post.rating = e;
                    console.log(post);
                  },
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdatePost}>
              Do Something
            </Button>{" "}
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <div>
          <Modal toggle={function noRefCheck() {}}>
            <ModalHeader toggle={function noRefCheck() {}}>
              Modal title
            </ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={function noRefCheck() {}}>
                Do Something
              </Button>{" "}
              <Button onClick={function noRefCheck() {}}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
};

export default DiscussionPostCard;
