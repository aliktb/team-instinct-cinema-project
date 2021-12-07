import "../css/generic.css";
//import "../css/Background.css"
import { Badge } from "reactstrap";
import cinemapic from "../resources/cinemaBg.jpeg";
const Homepage = () => {
    return (
        <div>

            <header>

            </header>
            <h2> Cinematic Cinemas, here for all your entertainment needs </h2>
            <h3> Come and catch up on the latest movies!</h3>




            <div class="whatsOn">
                <br>
                </br>

                <h3> Whats On<Badge color="secondary" href="/Bookings">
                    Book Now
                </Badge>  </h3>

            </div>


            <div class="TopFilms">
                <br>
                </br>
                <h3>Top Films</h3>

            </div>

            <div>

                <br>
                </br>
                <img src={cinemapic} width="700" height="400" alt="cinema"></img>
                <h4>vip seats</h4>
            </div>

            <footer>



            </footer>


        </div>

    );
}

export default Homepage;