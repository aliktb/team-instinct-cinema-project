import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import Explicit from "../resources/Explicit.json";

const NewDiscussionPost = (props) => {
  let movieIdParam = props;

  let newPostObj = {
    name: "",
    text: "",
    movieId: { movieIdParam }.movieIdParam.movieIdParam,
    thread: "",
    rating: "",
  };
  const testFunc = (e) => {
    let middleText = e.target.value;
    for (let word of Explicit.BadWord) { let re= new RegExp (`\\b${word}\\b`, "gi")
      middleText = middleText.replaceAll(re, "*$/#&@!")
    }
    newPostObj.text = middleText;
  }

  console.log(Explicit.BadWord[1])

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
            
            onChange={(e) => { testFunc(e) }}
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
