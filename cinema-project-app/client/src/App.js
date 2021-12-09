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
import Booking from "./pages/Booking";

import DiscussionBoard from "./pages/DiscussionBoard";
import PlacesToGo from "./pages/PlacesToGo";
import OpeningTimes from "./pages/OpeningTimes";
import SearchPage from "./pages/SearchPage"


import DiscussionPage from "./pages/DiscussionPage";
import GalleryFooter from "./Components/GalleryFooter";


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
            <Route path="/Bookings" element={<Booking />}></Route>
            <Route path="/DiscussionBoard" element={<DiscussionBoard />}></Route>
            <Route
              path="/DiscussionBoard"
              element={<DiscussionBoard />}
            ></Route>

            <Route
              path="/DiscussionBoard/:movieId"
              element={<DiscussionPage />}
            ></Route>

            <Route path="/Film_Classification" element={<FilmClass />}></Route>
            <Route path="/About" element={<AboutUs />}></Route>
            <Route path="/Getting_Here" element={<GettingHere />}></Route>
            <Route path="/Search" element={<SearchPage />}></Route>
            <Route path="/Places_to_go" element={<PlacesToGo />}></Route>
            <Route path="/Opening_Times" element={<OpeningTimes />}></Route>
            {/* <Route path="/Contact_us" element={<Contact />}></Route> */}

            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
          <GalleryFooter/>
        </Router>
      </div>
    </div>
  );
}

export default App;
