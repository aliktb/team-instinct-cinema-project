import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const NewDiscussionPost = (movieIdParam) => {
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
        <ReactStars
          {...{
            size: 50,
            count: 5,
            color: "grey",
            activeColor: "yellow",
            value: 0,

            isHalf: true,

            onChange: (e) => {
              console.log(e);
              newPostObj.rating = e;
              console.log(newPostObj);
            },
          }}
        />
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
          }}
        >
          Submit post
        </Button>
      </Form>
    </div>
  );
};

export default NewDiscussionPost;
