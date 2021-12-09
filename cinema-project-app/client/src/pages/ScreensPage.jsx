import deluxe_layout from "../resources/seatingPlan/deluxe_layout.png";
import standard_layout from "../resources/seatingPlan/standard_layout.png";
import "../css/ScreensPage.css";

const ScreensPage = () => {
  return (
    <div>
      <div className="center-screen" style={{ textAlign: "center" }}>
        <h2 className="display-2">Screens</h2>
        <p>Here at QA Cinemas, we have 2 screens to choose from:</p>
        <h3 className="display-5">Standard screen</h3>
        The Standard Screen is the best value option. With 50 seats to pick
        from, it's perfect for families and larger parties.
        <div>
          <div>
            <img
              className="responsive-image rounded-image"
              src="https://www.odeon.co.uk/media/2dhfdsir/dolby-seating.jpg"
              alt="Standard Screen décor"
            />
          </div>
          <h4 className="display-6">Seating plan</h4>
          <div>
            <img
              className="responsive-image rounded-image"
              src={standard_layout}
              alt="Standard Screen décor"
            />
          </div>
        </div>
        <h3 className="display-5">Deluxe "Director's Box" Screen</h3>
        <p>
          Our Deluxe Screen is for those who are looking for a more premium
          experience. Dubbed the "Director's Box", this is a more immersive
          experience for the most hardcore movie buff. We only have 30 seats for
          this screen so book your seats now!
        </p>
        <img
          className="responsive-image rounded-image"
          src="https://www.fercoseating.com/assets/image-handler/content/600x400/8666?format=jpg&bg=F0EEEF"
          alt='Deluxe "Directors Box" Screen'
        />
        <h4 className="display-6">Seating plan</h4>
        <img
          className="responsive-image rounded-image"
          src={deluxe_layout}
          alt="Deluxe Seating Layout"
        />
      </div>
    </div>
  );
};

export default ScreensPage;
