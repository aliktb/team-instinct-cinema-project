import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";

const NewDiscussionPost = (props) => {
  let movieIdParam = props;

  let newPostObj = {
    name: "",
    text: "",
    movieId: { movieIdParam }.movieIdParam.movieIdParam,
    thread: "",
    rating: "",
  };

  return (
    <div style={{ maxWidth: "500px" }} className="center">
      <Form>
        <FormGroup>
          <Label for="authorName">Name</Label>
          <Input
            id="authorName"
            name="Name"
            placeholder="Enter name"
            type="text"
            onChange={(e) => (newPostObj.name = e.target.value)}
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
            onChange={(e) => (newPostObj.text = e.target.value)}
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
              value: 0,
              isHalf: true,
              onChange: (e) => {
                console.log(e);
                newPostObj.rating = e;
                console.log(newPostObj);
              },
            }}
          />
        </FormGroup>
        <Button
          color="primary"
          onClick={() => {
            console.log(newPostObj);
            axios
              .post("http://localhost:3000/posts/create", newPostObj)
              .then(function (response) {
                console.log(response);
                console.log(newPostObj);
              })
              .catch(function (error) {
                console.log(error);
              });
            props.onDelete();
          }}
        >
          Submit post
        </Button>
      </Form>
    </div>
  );
};

export default NewDiscussionPost;
