import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestAPIPage from "./pages/TestAPIPage";

import GettingThere from "./pages/GettingThere";

import Navigationbar from "./components/Navigationbar";
import Homepage from "./pages/Homepage";

import Help from "./pages/Help";


function App() {
  return (
    <div>

      <Navigationbar />


      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
            {/* <Route path="/Listing_Gallery" element={<ListGallery />}></Route>
            <Route path="/New_Listings" element={<NewListings />}></Route>
            <Route path="/Bookings" element={<Bookings />}></Route>
            <Route path="/DiscussionBoard" element={<DiscussionBoard />}></Route>
            <Route path="/Film_Classification" element={<FilmClass />}></Route>
            <Route path="/About" element={<AboutUs />}></Route> */}
            <Route path="/Getting_Here" element={<GettingThere />}></Route>
            {/* <Route path="/Places_to_go" element={<Places />}></Route> */}
            {/* <Route path="/Contact_us" element={<Contact />}></Route> */}
            <Route path="/Help" element={<Help />}></Route>

            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </Router>
      </div>


    </div>
  );
}

export default App;
