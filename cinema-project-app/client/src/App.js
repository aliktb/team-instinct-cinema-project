import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestAPIPage from "./pages/TestAPIPage";

import GettingThere from "./pages/GettingThere";

import Navigationbar from "./components/Navigationbar";
import Homepage from "./pages/Homepage";
<<<<<<< HEAD
import Background from "./components/Background";
import "./css/Background.css"
=======


>>>>>>> 7e3c4413bd3b663f87ce8584e945747c24116bb8
function App() {
  return (
    <div>

      <Navigationbar />
      {/* <Background /> */}
      <Homepage />
      {/* <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<p>change me from client/app.js</p>}
          ></Route>
          <Route path="getting_there" element={<GettingThere />}></Route>
          <Route path="test" element={<TestAPIPage />}></Route>
          <Route path="background" element={<Background />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
