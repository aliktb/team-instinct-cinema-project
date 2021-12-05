import logo from "../resources/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const TestAPIPage = () => {
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/testAPI")

      .then((response) => setApiResponse(response.data));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is running from the TestAPIPage</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="App-intro">{apiResponse}</p>
      </header>
    </div>
  );
};

export default TestAPIPage;
