import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewDiscussionPost from "../Components/NewDisussionPost";
import DiscussionPostCard from "../Components/DiscussionPostCard";

const DiscussionPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  console.log(params.movieId);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:3001/posts/movie/${params.movieId}`)

        .then((response) => setData(response.data));
    }, 1000);
  }, []);

  return (
    <div>
      <p>{params.movieId}</p>
      <NewDiscussionPost movieIdParam={params.movieId} />
      <div>
        {data.map((postData) => (
          <DiscussionPostCard post={postData} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionPage;
