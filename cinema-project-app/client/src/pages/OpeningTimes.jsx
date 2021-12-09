import GalleryFooter from "../Components/GalleryFooter";
import TableOpeningTimes from "../Components/TableOpeningTimes";

const OpeningTimes = () => {
  return (
    <div>
      <h3>Opening Times</h3>
      <div className="center mapouter">
        <img
          src="https://www.woodworkingnetwork.com/sites/default/files/usa_kebony_theatresquared_kristianalveo_hi_res-23.jpg"
          alt="cinematic theatre building"
          className="resposive-image"
          style={{ borderRadius: 50 }}
        />
        <br />
        <TableOpeningTimes />
        <br />
        <br />
        <br />
      </div>
      <GalleryFooter />
    </div>
  );
};

export default OpeningTimes;
