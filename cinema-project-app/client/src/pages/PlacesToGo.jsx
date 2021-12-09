import '../css/center.css'
import BhamPalace from '../resources/PlacesToGo/BhamPalace.jpeg'
import Crown from '../resources/PlacesToGo/crown.jpeg'
import Guards from "../resources/PlacesToGo/guards.jpeg"
import Bus from "../resources/PlacesToGo/bus.jpeg"
const PlacesToGo = () => {
    return (
        <div>
            <img src={BhamPalace} alt="Buckingham Palace" width="100%" />
            <h2> welcome to the most prestigous cinema in the world. We strive for you to have a Royally good time when you arrive!<br />
                Visitors can visit many sites within the palace grounds, from the historically furnished rooms to spectacular and wonderful works of art. Watch as the royal standard soars above the palace
                and units from the guards division stand vigilantly. Maybe you will have a chance at spotting a royal figure or two! Anything can happen if you choose to experience the magic at QA Cinema. But its not only whats within
                the palace that counts. Here is our list of the best local things to do around the best Cinema in the world </h2>
            <br></br>
            <h2><strong>Witness the changing of the guards</strong></h2>
            <h3>The Changing of the Guard is a formal ceremony in which a group of soldiers is relieved of their duties by a new batch of soldiers. World renown for their iconinc dress sense and inability to laugh.
                it is a spectacle that anyone would feel special witnessing</h3>
            <img src={Guards} alt="guards" />
            <br></br>
            <h2 ><strong>Tower of London and the Crown Jewels</strong></h2>
            <h3>The Crown Jewels, part of the Royal Collection, are the most powerful symbols of the British Monarchy and hold deep religious and cultural significance in our nation’s history. The mystique and beauty of <br />
                the diamonds and precious jewels in the royal regalia have always held an unparalleled allure to visitors from across the globe. </h3>
            <img src={Crown} alt="Crown Jewels" />

            <h2><strong>Ride a bus</strong></h2>
            <h3>Catch a bus and take a tour through the streets of London and admire the beautiful architecture and nature the city has to offer </h3>
            <img src={Bus} alt="tour bus" />
            <br></br>

            <h2><strong>Harry Potter</strong></h2>

            <h3>Visit platform 9 3/4 ministry of magic or even Diagon alley, a wizarding world at your fingertips. And then come and watch a Harry Potter movie marathon with us. </h3>

            <br></br>
            <h2><strong>Take a food tour</strong></h2>
            <h3>London has some of the greatest food establishments, stalls and tours in the country. Let your toungue travel the world while your feet travel the city.</h3>

            <br></br>
            <h2><strong>Visit a musuem</strong></h2>
            <h3>There are many museums in London and many of them have free admissions. Just to name a few you have the choice of visiting The British Museum, Science Museum, Natural History Museum and the National Gallery.
                So why not make the most of your day!</h3>


        </div>

    );
}

export default PlacesToGo;