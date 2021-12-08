import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewDiscussionPost from "../Components/NewDisussionPost";
import DiscussionPostCard from "../Components/DiscussionPostCard";
import { Button } from "reactstrap";

const DiscussionPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [deleteState, setDeleteState] = useState(0);
  const [, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);

  console.log(params.movieId);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:3001/posts/movie/${params.movieId}`)

        .then((response) => setData(response.data));
    }, 1000);
  }, [forceUpdate]);

  const updateList = () => {
    console.log("updatelist running");
    axios
      .get(`http://localhost:3001/posts/movie/${params.movieId}`)

      .then((response) => setData(response.data));
  };

  const rerenderParentCallback = useCallback(() => {
    setDeleteState(() => !deleteState);
    console.log("callback clicked");
    forceUpdate();
  });

  return (
    <div>
      <div id="discussionPageDiv">
        <p>{params.movieId}</p>
        <NewDiscussionPost
          movieIdParam={params.movieId}
          onDelete={updateList}
        />
        <div className="mt-5">
          <Button
            onClick={updateList}
            className="center"
            style={{ maxWidth: "400px" }}
          >
            Refresh Posts
          </Button>
          <div id="listOfCards">
            {data.map((postData) => (
              <DiscussionPostCard post={postData} onDelete={updateList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;
