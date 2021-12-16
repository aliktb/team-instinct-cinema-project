import "../css/generic.css";
import "../css/center.css"
import "../css/HomePage.css"
import "../Components/NewCarousel"
import { Badge } from "reactstrap";
import NewCarousel from "../Components/NewCarousel";

const Homepage = () => {
    return (
        <div>

            <header>

            </header>

            <h2><strong> QA Cinemas <br /> Here For All Your Entertainment Needs</strong> </h2>
            <h3> Come and catch up on the latest movies!</h3>





            <div class="TopFilms">
                <br>
                </br>
                <h3>Top Films</h3>
                <div class="carousel">
                    <NewCarousel />
                </div> 
            <div class="whatsOn">
                <br>
                </br>

                <h3> <Badge color="secondary" href="/Bookings">
                    Book Now
                </Badge>  </h3>

            </div>

            </div>

           

            <footer>



            </footer>

        </div>

    );
}

export default Homepage;