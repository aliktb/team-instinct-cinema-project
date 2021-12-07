import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import StarRating from "../Components/StarRating";

const NewDiscussionPost = () => {
  const [newPost, setNewPost] = useState({});

  let newPostObj = { name: "", text: "", movieId: "", thread: "", rating: "" };

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
            onChange={newPostObj.name}
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
          />
        </FormGroup>
        <ReactStars {...StarRating} />
        <Button
          color="primary"
          onClick={() => {
            setNewPost(newPostObj);

            axios
              .post("http://localhost:3000/posts/create", newPost)
              .then(function (response) {
                console.log(response);
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
