import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import TestAPIPage from "./pages/TestAPIPage";
import Background from "./Components/Background";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<p>change me from client/app.js</p>}
          ></Route>
          <Route path="test" element={<TestAPIPage />}></Route>
          <Route path="background" element={<Background />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
