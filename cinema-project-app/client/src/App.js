import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestAPIPage from "./pages/TestAPIPage";
import Navigationbar from "./Components/Navigationbar";
import Homepage from "./pages/Homepage";
import Newlistings from "./pages/NewListings";
// import Background from "./Components/Background";

function App() {
  return (
    <div>
      <Navigationbar/>
      {/* <Homepage/> */}
      <Newlistings/>
      {/* <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<p>change me from client/app.js</p>}
          ></Route>
          <Route path="test" element={<TestAPIPage />}></Route>
          <Route path="background" element={<Background />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
