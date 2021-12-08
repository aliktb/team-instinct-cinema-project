import NewCarousel from "../Components/NewCarousel";
import Newcard from "../Components/NewCard";
import GalleryFooter from "../Components/GalleryCard";

const Newlistings = () => {
  return (
    <>
      <br></br>
      <h2> Welcome to QA Cinema's latest releases!</h2>
      <br></br>
      <NewCarousel />
      <br></br>
      <br></br>
      <Newcard />
      <br></br>
      <br></br>
      <GalleryFooter/>
    </>
  );
};

export default Newlistings;
