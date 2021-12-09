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

  console.log(props);

  const handleUpdatePost = (e) => {
    e.preventDefault();
    console.log("test");

    axios
      .put(`http://localhost:3001/posts/update/${post._id}`, post)
      .then((response) => console.log(response));

    console.log(`post updated : ${post}`);
    toggle();
    props.onDelete();
  };

  const handleDeletePost = (e) => {
    e.preventDefault();
    setDeleteState(1);

    axios
      .delete(`http://localhost:3001/posts/delete/${post._id}`)
      .then((response) => console.log(response));
    console.log("post deleted");
    console.log(deleteState);
    toggleDeleteModal();
    props.onDelete();
  };

  if (post.rating == null) {
    return (
      <div style={{ maxWidth: "500px" }} className="center">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{post.name}</CardTitle>

            <CardText>{post.text}</CardText>

            <Button color="success" outline onClick={toggle}>
              Update
            </Button>

            <Button
              color="danger"
              onClick={toggleDeleteModal}
              className="float-end"
            >
              Delete
            </Button>
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

        <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
          <ModalHeader toggle={toggleDeleteModal}>Delete Post</ModalHeader>
          <ModalBody>
            Are you sure you want to delete? This operation is irreversible!
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={handleDeletePost}>
              Delete
            </Button>{" "}
            <Button onClick={toggleDeleteModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  } else {
    return (
      <div style={{ maxWidth: "500px" }} className="center">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{post.name}</CardTitle>

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

            <Button color="success" outline onClick={toggle}>
              Update
            </Button>

            <Button
              color="danger"
              onClick={toggleDeleteModal}
              className="float-end"
            >
              Delete
            </Button>
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
              Update
            </Button>{" "}
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
          <ModalHeader toggle={toggleDeleteModal}>Delete Post</ModalHeader>
          <ModalBody>
            Are you sure you want to delete? This operation is irreversible!
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={handleDeletePost}>
              Delete
            </Button>{" "}
            <Button onClick={toggleDeleteModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

export default DiscussionPostCard;
