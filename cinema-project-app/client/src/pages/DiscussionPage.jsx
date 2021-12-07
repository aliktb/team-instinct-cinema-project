import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewDiscussionPost from "../Components/NewDisussionPost";

const DiscussionPage = () => {
  const params = useParams();
  const [posts, setPosts] = useState();

  console.log(params);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       axios
  //         .get("http://localhost:3001/movies/title/Lord")

  //         .then((response) => setPosts(response.data[0]));
  //     }, 500);
  //   }, []);

  return (
    <div>
      <p>{params.title}</p>
      <NewDiscussionPost />
    </div>
  );
};

export default DiscussionPage;
