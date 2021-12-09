import { Table } from "reactstrap";
import DiscussionThreadCard from "../Components/DiscussionThreadCard";
import { useEffect, useState } from "react";
import axios from "axios";

const DiscussionBoard = () => {
  const [apiResponse1, setApiResponse1] = useState({});
  const [apiResponse2, setApiResponse2] = useState({});
  const [apiResponse3, setApiResponse3] = useState({});
  const [apiResponse4, setApiResponse4] = useState({});
  const [apiResponse5, setApiResponse5] = useState({});
  const [apiResponse6, setApiResponse6] = useState({});
  const [apiResponse7, setApiResponse7] = useState({});
  const [apiResponse8, setApiResponse8] = useState({});

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3001/movies/title/Lord")

        .then((response) => setApiResponse1(response.data[0]));
      axios
        .get("http://localhost:3001/movies/title/blade")

        .then((response) => setApiResponse2(response.data[0]));
      axios
        .get("http://localhost:3001/movies/title/2049")

        .then((response) => setApiResponse3(response.data[0]));
      axios
        .get("http://localhost:3001/movies/title/Lord")

        .then((response) => setApiResponse4(response.data[0]));
      axios
        .get("http://localhost:3001/movies/title/Lord")

        .then((response) => setApiResponse5(response.data[0]));
      axios
        .get("http://localhost:3001/movies/title/Lord")

        .then((response) => setApiResponse6(response.data[0]));
      axios
        .get("http://localhost:3001/movies/title/Lord")

        .then((response) => setApiResponse7(response.data[0]));
      axios
        .get("http://localhost:3001/movies/title/Lord")

        .then((response) => setApiResponse8(response.data[0]));
    }, 500);
  }, []);

  return (
    <div>
      <Table borderless className="center">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>
              <h2>Discussion Board</h2>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row"></th>
            <td></td>
            <td>
              <DiscussionThreadCard
                title="General"
                movieId="General12345678912345678"
                rating="All ages welcome"
                threadDescription="This a general thread where you can discuss any topics relating to our cinema, places to go nearby, and anything film related."
              />
            </td>
            <td></td>
          </tr> */}
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>
              <DiscussionThreadCard
                title={apiResponse1.title}
                rating={apiResponse1.rating}
                movieId={apiResponse1._id}
                threadDescription={`This is a dedicated thread for ${apiResponse1.title}. Anyone brave enough to walk through the gates of Mordor, step this way. Just remember not to stare into the eye of Sauron.`}
              />
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td></td>
            <DiscussionThreadCard
              title={apiResponse2.title}
              rating={apiResponse2.rating}
              movieId={apiResponse2._id}
              threadDescription={`Any fans of the Original ${apiResponse2.title} this thread is for you.`}
            />
            <td></td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td></td>
            <DiscussionThreadCard
              title={apiResponse3.title}
              rating={apiResponse3.rating}
              movieId={apiResponse3._id}
              threadDescription={`Let's face it. You loved the original Bladerunner. You don't have high hopes for this one but any excuse to see Ryan Gosling right? Share your thoughts here.`}
            />
            <td></td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td></td>
            <DiscussionThreadCard
              title={apiResponse4.title}
              rating={apiResponse4.rating}
              movieId={apiResponse4._id}
            />
            <td> </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <DiscussionThreadCard
              title={apiResponse5.title}
              rating={apiResponse5.rating}
              movieId={apiResponse5._id}
            />
            <td> </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <DiscussionThreadCard
              title={apiResponse6.title}
              rating={apiResponse6.rating}
              movieId={apiResponse6._id}
            />
            <td> </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <DiscussionThreadCard
              title={apiResponse7.title}
              rating={apiResponse7.rating}
              movieId={apiResponse7._id}
            />
            <td> </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <DiscussionThreadCard
              title={apiResponse8.title}
              rating={apiResponse8.rating}
              movieId={apiResponse8._id}
            />
            <td> </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DiscussionBoard;