import GalleryFooter from "../Components/GalleryFooter";
import GalleryCard from "../Components/GalleryCard";
import GalleryCardTwo from "../Components/GalleryCardTwo";
import GalleryCarousel from "../Components/GalleryCarousel";

const Listingsgallery = () => {
  return (
    <>
      <h2> Welcome to QA Cinema's Listings Gallery</h2>
      <br></br>
      <GalleryCarousel />
      <br></br>
      <GalleryCard />
      <br></br>
      <GalleryCardTwo />
      <br></br>
      <GalleryFooter />
    </>
  );
};

export default Listingsgallery;
