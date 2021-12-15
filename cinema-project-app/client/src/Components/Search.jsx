import { useState } from "react";
import axios from "axios";
import RadioButton from "./RadioButton";
import { Input, Button, Alert } from "reactstrap";

const Search = ({ setResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);

  const [curLength, setCurLength] = useState(0);

  const arrayCheck = (list) => {
    if (list.length === curLength) {
      console.log(list)
      setResults(list)
    }
  }

  const search = () => {
    if (searchTerm !== "") {
      setEmptySearch(false);
      if (searchType === "title") {
        axios
          .get(`http://localhost:3001/movies/title/${searchTerm}`)
          .then((response) => {
            let resultsArray = [];
            setCurLength(response.data.length);
            for (let result of response.data) {
              console.log(result);
              axios.get(`http://localhost:3001/showings/title/e/${result.title}`).then((data) => {
                console.log(data.data)
                if (data.data.length > 0) {
                  let futureShowings = data.data.filter((showing) => { return new Date(showing.date) < new Date() ? false : true })
                  let deluxeShowings = futureShowings.filter((showing) => { return showing.screen === "Deluxe" ? true : false })
                  let standardShowings = futureShowings.filter((showing) => { return showing.screen === "Standard" ? true : false })
                  console.log(deluxeShowings);
                  console.log(standardShowings);
                  console.log("postSort");
                  if (deluxeShowings[0]) {
                    result.nextDeluxe = deluxeShowings;
                  }
                  if (standardShowings[0]) {
                    result.nextStandard = standardShowings;
                  }
                  console.log(result)
                  resultsArray.push(result);
                } else {
                  resultsArray.push(result);
                }
                arrayCheck(resultsArray);
              })

            }
            // setResults(response.data);
          });
      } else if (searchType === "tags") {
        axios
          .get(`http://localhost:3001/movies/tag/${searchTerm}`)
          .then((response) => {
            // const movies = response.data;
            // console.log(response.data);
            // const filteredtags = movies.filter((movies) => { return movies.tags.includes(searchTerm) })
            // console.log(filteredtags);
            // setResults(filteredtags);
            setResults(response.data);
          });
      } else if (searchType === "cast") {
        axios
          .get(`http://localhost:3001/movies/cast/${searchTerm}`)
          .then((response) => {
            // const actors = response.data;
            // console.log(response.data);
            // const filteredactors = actors.filter((actors) => { return actors.title.includes(searchTerm) })
            // console.log(filteredactors);
            setResults(response.data);
          });
      }
    } else {
      console.log("empty search attempted");
      setEmptySearch(true);
    }
  };

  if (emptySearch) {
    return (
      <div>
        <div class="center">
          <h2 className="display-2" style={{ textAlign: "left" }}>
            Search
          </h2>
          <Input
            type="text"
            placeholder="Search by Movie, Actor or tags"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(e.target.value + "e target value ");
            }}
          ></Input>

          <RadioButton setSearch={setSearchType} />

          <Button type="button" onClick={search}>
            Search
          </Button>
          <Alert color="danger" style={{ marginTop: "3rem" }}>
            Please enter some text before searching
          </Alert>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="center">
          <h2 className="display-2" style={{ textAlign: "left" }}>
            Search
          </h2>
          <Input
            type="text"
            placeholder="Search by Movie, Actor or tags"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(e.target.value + "e target value ");
            }}
          ></Input>

          <RadioButton setSearch={setSearchType} />

          <Button type="button" onClick={search}>
            Search
          </Button>
        </div>
      </div>
    );
  }
};

export default Search;
