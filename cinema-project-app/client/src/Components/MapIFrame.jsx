import "../css/map.css";

const MapIFrame = () => {
  return (
    <div class="mapouter center">
      <div class="gmap_canvas " id="map-container">
        <iframe
          title="map"
          className="responsive-iframe"
          style={{
            borderRadius: "1rem",
          }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=buckingham%20palace&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <div>
          <a
            href="https://www.embedgooglemap.net"
            style={{ fontSize: "0.2rem" }}
          >
            google embed
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapIFrame;
