import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestAPIPage from "./pages/TestAPIPage";

import GettingHere from "./pages/GettingHere";

import Navigationbar from "./Components/Navigationbar";
import Homepage from "./pages/Homepage";
import NewListings from "./pages/NewListings";
import FilmClass from "./pages/FilmClass";

import Listingsgallery from "./pages/ListingsGallery";

import AboutUs from "./pages/AboutUs";
import MovieOne from "./pages/MovieOne";
import MovieTwo from "./pages/MovieTwo";
import MovieThree from "./pages/MovieThree";
import MovieFour from "./pages/MovieFour";



function App() {
  return (
    <div>
      <Navigationbar />
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
            <Route
              path="/Listings_Gallery"
              element={<Listingsgallery />}
            ></Route>
            <Route path="/New_Listings" element={<NewListings />}></Route>
            <Route path="/Movie_One" element={<MovieOne/>}></Route>
            <Route path="/Movie_Two" element={<MovieTwo/>}></Route>
            <Route path="/Movie_Three" element={<MovieThree/>}></Route>
            <Route path="/Movie_Four" element={<MovieFour/>}></Route>
            {/* <Route path="/Bookings" element={<Bookings />}></Route>
            <Route path="/DiscussionBoard" element={<DiscussionBoard />}></Route> */}
            <Route path="/Film_Classification" element={<FilmClass />}></Route>
            <Route path="/About" element={<AboutUs />}></Route>
            <Route path="/Getting_Here" element={<GettingHere />}></Route>
            {/* <Route path="/Places_to_go" element={<Places />}></Route> */}
            {/* <Route path="/Contact_us" element={<Contact />}></Route> */}

            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
