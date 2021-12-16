import MapIFrame from "../Components/MapIFrame";

const GettingHere = () => {
  return (
    <div class="mx-2">
      <h3
        className="display-6"
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        Getting Here
      </h3>
      <div className="center-map">
        <img
          src="https://www.woodworkingnetwork.com/sites/default/files/usa_kebony_theatresquared_kristianalveo_hi_res-23.jpg"
          alt="cinematic theatre building"
          className="responsive-image"
          style={{ borderRadius: "1rem" }}
        />
        <p style={{ padding: "2rem" }}>
          We are based in a state of the art establishment in the heart of the
          capital. From our large screens and comfy seats, to our vending
          machines and in-house arcade, we've got something for everyone. And
          don't forget about the Pick 'n' mix.
        </p>
      </div>
      <MapIFrame />
      <div className="center-map" style={{ textAlign: "center" }}>
        <h4
          className="display-6"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          Where to find us
        </h4>
        <p>
          We are situated right in the heart of London. The nearest Bus stop is
          Hyde Park Corner. It is accessible from buses (2, 13, 16, 36, 38, 52,
          148, 390). Hyde Park Corner is also the closest Underground stop on
          the Picadilly line. Simply walk towards Wellington Arch and through
          the Buckingham Place Gardens via Constitution Hill for 0.4 miles and
          you'll find us. Alternativly, St. James's Park station is accessible
          to anyone travilling via the District or Circle lines. Head West via
          Petty France and turn right at Buckingham Gate. We should be a 9
          minute walk away. We have limited on-site parking so please use public
          transport where possible.
        </p>
        <p> Our address is:</p>
        <p className="address-text"> Cinematic Cinema,</p>
        <p className="address-text">Buckingham Palace</p>
        <p className="address-text">Westminister</p>
        <p className="address-text">London</p>
        <p className="address-text">SW1A 1AA</p>
      </div>
    </div>
  );
};

export default GettingHere;
