import logo from "../resources/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { UncontrolledPopover } from "reactstrap";
import { PopoverHeader } from "reactstrap";
import { PopoverBody } from "reactstrap";

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

        <div>
          <Button id="UncontrolledPopover" type="button">
            Launch Popover
          </Button>
          <UncontrolledPopover placement="right" target="UncontrolledPopover">
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              If you are reading this, then reactstrap is working.
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </header>
    </div>
  );
};

export default TestAPIPage;
