import "../css/center.css";
import BhamPalace from "../resources/PlacesToGo/BhamPalace.jpeg";
import Crown from "../resources/PlacesToGo/crown.jpeg";
import Guards from "../resources/PlacesToGo/guards.jpeg";
import Bus from "../resources/PlacesToGo/bus.jpeg";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
const PlacesToGo = () => {
  return (
    <div>
      <img src={BhamPalace} alt="Buckingham Palace" width="100%" />
      <h3>
        Welcome to the most prestigous cinema in the world. We strive for you to
        have a Royally good time when you arrive! Visitors can visit many sites
        within the palace grounds, from the historically furnished rooms to
        spectacular and wonderful works of art. Watch as the royal standard
        soars above the palace and units from the guards division stand
        vigilantly.
        <br />
        <br />
        Maybe you will have a chance at spotting a royal figure or two! Anything
        can happen if you choose to experience the magic at QA Cinema. But its
        not only whats within the palace that counts. Here is our list of the
        best local things to do around the best Cinema in the world
      </h3>
      <br></br>
      <div
        className="center-map"
        style={{
          textAlign: "center",
          width: "50%",
          marginTop: "2rem",
        }}
      >
        <Card style={{ borderRadius: "1rem", backgroundColor: "#DCDCDC" }}>
          <CardBody>
            <CardTitle
              tag="h3"
              style={{ paddingBottom: "2rem", fontSize: "2.5rem" }}
            >
              Witness the changing of the guards
            </CardTitle>

            <img
              style={{ borderRadius: "1rem" }}
              src={Guards}
              width="100%"
              alt="guards"
            />
            <CardText
              tag="h4"
              style={{
                paddingTop: "2rem",
                fontSize: "1.8rem",
                fontStyle: "normal",
              }}
            >
              The Changing of the Guard is a formal ceremony in which a group of
              soldiers is relieved of their duties by a new batch of soldiers.
              World renown for their iconinc dress sense and inability to laugh.
              It is a spectacle that anyone would feel special witnessing.
            </CardText>
          </CardBody>
        </Card>
      </div>

      <div
        className="center-map"
        style={{ textAlign: "center", width: "50%", marginTop: "2rem" }}
      >
        <Card style={{ borderRadius: "1rem", backgroundColor: "#DCDCDC" }}>
          <CardBody>
            <CardTitle
              tag="h3"
              style={{ paddingBottom: "2rem", fontSize: "2.5rem" }}
            >
              Tower of London and the Crown Jewels
            </CardTitle>

            <img
              style={{ borderRadius: "1rem" }}
              src={Crown}
              width="100%"
              alt="Crown Jewels"
            />
            <CardText
              tags="h4"
              style={{
                paddingTop: "2rem",
                fontSize: "1.8rem",
                fontStyle: "normal",
              }}
            >
              The Crown Jewels, part of the Royal Collection, are the most
              powerful symbols of the British Monarchy and hold deep religious
              and cultural significance in our nation’s history. The mystique
              and beauty of the diamonds and precious jewels in the royal
              regalia have always held an unparalleled allure to visitors from
              across the globe.
            </CardText>
          </CardBody>
        </Card>
      </div>

      <div
        className="center-map"
        style={{ textAlign: "center", width: "50%", marginTop: "2rem" }}
      >
        <Card style={{ borderRadius: "1rem", backgroundColor: "#DCDCDC" }}>
          <CardBody>
            <CardTitle
              tag="h3"
              style={{ paddingBottom: "2rem", fontSize: "2.5rem" }}
            >
              Harry Potter
            </CardTitle>

            <img
              style={{ borderRadius: "1rem" }}
              src="https://www.findingtheuniverse.com/wp-content/uploads/2017/07/Harry-Potter-and-the-Cursed-Child-London_by_Laurence-Norah.jpg"
              width="100%"
              alt="Harry Potter World"
            />
            <CardText
              tags="h4"
              style={{
                paddingTop: "2rem",
                fontSize: "1.8rem",
                fontStyle: "normal",
              }}
            >
              Visit platform 9 3/4, ministry of magic or even Diagon alley, a
              wizarding world at your fingertips and then come and watch the
              Harry Potter movie marathon with us
            </CardText>
          </CardBody>
        </Card>
      </div>

      <div
        className="center-map"
        style={{ textAlign: "center", width: "50%", marginTop: "2rem" }}
      >
        <Card style={{ borderRadius: "1rem", backgroundColor: "#DCDCDC" }}>
          <CardBody>
            <CardTitle
              tag="h3"
              style={{ paddingBottom: "2rem", fontSize: "2.5rem" }}
            >
              Take a food tour
            </CardTitle>

            <img
              style={{ borderRadius: "1rem" }}
              src="https://www.visitbritain.org/sites/default/files/styles/corporate_key_facts/public/vb-corporate/Images/basic-page/china_town_vb34175150.jpg?itok=JrwzB30f"
              width="100%"
              alt="China Town"
            />
            <CardText
              tags="h4"
              style={{
                paddingTop: "2rem",
                fontSize: "1.8rem",
                fontStyle: "normal",
              }}
            >
              London has some of the greatest food establishments, stalls and
              tours in the country. Let your toungue travel the world while your
              feet travel the city.
            </CardText>
          </CardBody>
        </Card>
      </div>

      <div
        className="center-map"
        style={{ textAlign: "center", width: "50%", marginTop: "2rem" }}
      >
        <Card style={{ borderRadius: "1rem", backgroundColor: "#DCDCDC" }}>
          <CardBody>
            <CardTitle
              tag="h3"
              style={{ paddingBottom: "2rem", fontSize: "2.5rem" }}
            >
              Visit a musuem
            </CardTitle>

            <img
              style={{ borderRadius: "1rem" }}
              src="https://www.fodors.com/wp-content/uploads/2018/08/Londons-Best-Museums-Hero.jpg"
              width="100%"
              alt="British Museum"
            />
            <CardText
              tags="h4"
              style={{
                paddingTop: "2rem",
                fontSize: "1.8rem",
                fontStyle: "normal",
              }}
            >
              There are many museums in London and many of them have free
              admissions. Just to name a few you have the choice of visiting the
              British Museum, Science Museum, Natural History Museum and the
              National Gallery. So why not make the most of your day!
            </CardText>
          </CardBody>
        </Card>
      </div>

      {/* <Card>
        <CardBody>
          <CardTitle tag="h5">Visit a musuem</CardTitle>

          <CardText>
            There are many museums in London and many of them have free
            admissions. Just to name a few you have the choice of visiting the
            British Museum, Science Museum, Natural History Museum and the
            National Gallery. So why not make the most of your day!
          </CardText>
        </CardBody>
      </Card>
      <img
        src="https://www.fodors.com/wp-content/uploads/2018/08/Londons-Best-Museums-Hero.jpg"
        height="284px"
        width="474px"
      /> */}

      {/* <Card>
        <CardBody>
          <CardTitle tag="h5">Take a food tour</CardTitle>

          <CardText>
            London has some of the greatest food establishments, stalls and
            tours in the country. Let your toungue travel the world while your
            feet travel the city.
          </CardText>
        </CardBody>
      </Card>
      <img
        src="https://www.visitbritain.org/sites/default/files/styles/corporate_key_facts/public/vb-corporate/Images/basic-page/china_town_vb34175150.jpg?itok=JrwzB30f"
        height="284px"
        width="474px"
      />
      <br></br> */}

      {/* <Card>
        <CardBody>
          <CardTitle tag="h5">Harry Potter</CardTitle>

          <CardText>
            Visit platform 9 3/4, ministry of magic or even Diagon alley, a
            wizarding world at your fingertips and then come and watch the Harry
            Potter movie marathon with us
          </CardText>
        </CardBody>
      </Card>
      <img
        src="https://www.findingtheuniverse.com/wp-content/uploads/2017/07/Harry-Potter-and-the-Cursed-Child-London_by_Laurence-Norah.jpg"
        height="284px"
        width="474px"
      />
      <br></br> */}

      {/* <Card>
        <CardBody>
          <CardTitle tag="h5">Tower of London and the Crown Jewels</CardTitle>

          <CardText>
            The Crown Jewels, part of the Royal Collection, are the most
            powerful symbols of the British Monarchy and hold deep religious and
            cultural significance in our nation’s history. The mystique and
            beauty of the diamonds and precious jewels in the royal regalia have
            always held an unparalleled allure to visitors from across the
            globe.
          </CardText>
        </CardBody>
      </Card>
      <img src={Crown} height="284px" width="474px" alt="Crown Jewels" />
      <br />
      <Card>
        <CardBody>
          <CardTitle tag="h5">Ride a bus</CardTitle>

          <CardText>
            Catch a bus and take a tour through the streets of London and admire
            the beautiful architecture and nature the city has to offer.
          </CardText>
        </CardBody>
      </Card>
      <img src={Bus} height="284px" width="474px" alt="tour bus" />
      <br></br> */}
      <br />
      <br />
    </div>
  );
};

export default PlacesToGo;
